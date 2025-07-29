// Use standard imports for Node.js, fallback to Deno-style for Edge
import { Context } from 'hono';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import * as kv from './kv_store.tsx';
import { 
  generateContactConfirmationHTML, 
  generateContactConfirmationText 
} from './emailTemplates.tsx';

// Helper to get env vars in both Deno and Node
function getEnv(key: string): string | undefined {
  // Works in both Deno and Node
  if (typeof globalThis.Deno !== 'undefined' && globalThis.Deno.env && globalThis.Deno.env.get) {
    try { return globalThis.Deno.env.get(key); } catch { /* ignore */ }
  }
  return process.env[key];
}

// Initialize Supabase client
const supabase = createClient(
  getEnv('SUPABASE_URL')!,
  getEnv('SUPABASE_SERVICE_ROLE_KEY')!
);

// Initialize Resend client
const resendApiKey = getEnv('RESEND_API_KEY');
if (!resendApiKey) {
  console.error('❌ RESEND_API_KEY environment variable is not set');
}
const resend = new Resend(resendApiKey!);

// Email sending function
async function sendContactConfirmationEmail(contactData: any) {
  try {
    if (!resendApiKey) {
      console.log('⚠️ Skipping email send - RESEND_API_KEY not configured');
      return { success: false, messageId: null };
    }

    const emailResult = await resend.emails.send({
      from: 'Planfirma <info@planfirma.com>',
      to: [contactData.email],
      subject: `Thank you for reaching out to Planfirma - We've received your message!`,
      html: generateContactConfirmationHTML(contactData),
      text: generateContactConfirmationText(contactData)
    });

    console.log('✅ Contact confirmation email sent successfully:', emailResult.data?.id);
    return { success: true, messageId: emailResult.data?.id };
  } catch (error) {
    console.error('❌ Failed to send contact confirmation email:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
}

// Contact form submission handler
export async function handleContactSubmit(c: Context) {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, phone, company, message, country } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Create contact record
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const contactData = {
      id: contactId,
      firstName,
      lastName,
      email,
      phone: phone || '',
      company: company || '',
      message,
      country: country || '',
      submittedAt: new Date().toISOString(),
      status: 'new',
      source: 'website_contact_form',
      type: 'contact_inquiry'
    };

    // Store in KV store
    await kv.set(`contact:${contactId}`, contactData);
    
    // Also store in a leads collection for easy retrieval
    const existingLeads = await kv.get('leads:all') || [];
    existingLeads.push(contactData);
    await kv.set('leads:all', existingLeads);

    // Update lead count
    const leadCount = await kv.get('stats:lead_count') || 0;
    await kv.set('stats:lead_count', leadCount + 1);

    console.log(`New contact submission: ${contactId} from ${email}`);

    // Send confirmation email
    try {
      await sendContactConfirmationEmail(contactData);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    return c.json({ 
      success: true, 
      contactId,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return c.json({ error: 'Failed to submit contact form' }, 500);
  }
}

// Get leads handler
export async function handleGetLeads(c: Context) {
  try {
    const leads = await kv.get('leads:all') || [];
    const stats = {
      totalLeads: await kv.get('stats:lead_count') || 0,
      totalSubscribers: await kv.get('stats:subscriber_count') || 0
    };

    return c.json({ 
      leads: leads.slice(-50), // Return latest 50 leads
      stats
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return c.json({ error: 'Failed to fetch leads' }, 500);
  }
}