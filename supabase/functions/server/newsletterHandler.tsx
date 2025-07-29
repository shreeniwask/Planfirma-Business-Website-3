import { Context } from 'npm:hono';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { Resend } from 'npm:resend';
import * as kv from './kv_store.tsx';
import { 
  generateNewsletterWelcomeHTML, 
  generateNewsletterWelcomeText,
  generateNewsletterHTML 
} from './emailTemplates.tsx';

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Initialize Resend client
const resendApiKey = Deno.env.get('RESEND_API_KEY');
if (!resendApiKey) {
  console.error('❌ RESEND_API_KEY environment variable is not set');
}
const resend = new Resend(resendApiKey!);

// Email sending functions
async function sendNewsletterWelcomeEmail(subscriptionData: any) {
  try {
    if (!resendApiKey) {
      console.log('⚠️ Skipping email send - RESEND_API_KEY not configured');
      return { success: false, messageId: null };
    }

    const emailResult = await resend.emails.send({
      from: 'Planfirma <info@planfirma.com>',
      to: [subscriptionData.email],
      subject: 'Welcome to the Planfirma Newsletter - Thank you for joining our community!',
      html: generateNewsletterWelcomeHTML(subscriptionData),
      text: generateNewsletterWelcomeText(subscriptionData)
    });

    console.log('✅ Newsletter welcome email sent successfully:', emailResult.data?.id);
    return { success: true, messageId: emailResult.data?.id };
  } catch (error) {
    console.error('❌ Failed to send newsletter welcome email:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
}

async function sendNewsletterEmail(email: string, subject: string, content: string, senderName: string) {
  try {
    if (!resendApiKey) {
      console.log('⚠️ Skipping email send - RESEND_API_KEY not configured');
      return { success: false, messageId: null };
    }

    const emailResult = await resend.emails.send({
      from: 'Planfirma <info@planfirma.com>',
      to: [email],
      subject: subject,
      html: generateNewsletterHTML(content, email),
      text: content
    });

    console.log(`✅ Newsletter email sent successfully to ${email}:`, emailResult.data?.id);
    return { success: true, messageId: emailResult.data?.id };
  } catch (error) {
    console.error(`❌ Failed to send newsletter email to ${email}:`, error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
}

// Newsletter subscription handler
export async function handleNewsletterSubscribe(c: Context) {
  try {
    const body = await c.req.json();
    const { email } = body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return c.json({ error: 'Invalid email address' }, 400);
    }

    // Check if already subscribed
    const existingSubscription = await kv.get(`newsletter:${email}`);
    if (existingSubscription) {
      return c.json({ 
        success: true,
        message: 'Email already subscribed',
        alreadySubscribed: true
      });
    }

    // Create subscription record
    const subscriptionId = `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const subscriptionData = {
      id: subscriptionId,
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      source: 'website_newsletter',
      preferences: {
        frequency: 'weekly',
        topics: ['technology', 'business', 'insights']
      }
    };

    // Store subscription
    await kv.set(`newsletter:${email}`, subscriptionData);
    await kv.set(`subscription:${subscriptionId}`, subscriptionData);

    // Update subscriber list
    const allSubscribers = await kv.get('newsletter:subscribers') || [];
    allSubscribers.push(subscriptionData);
    await kv.set('newsletter:subscribers', allSubscribers);

    // Update subscriber count
    const subscriberCount = await kv.get('stats:subscriber_count') || 0;
    await kv.set('stats:subscriber_count', subscriberCount + 1);

    console.log(`New newsletter subscription: ${email}`);

    // Send welcome email
    try {
      await sendNewsletterWelcomeEmail(subscriptionData);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the request if email fails
    }

    return c.json({ 
      success: true, 
      subscriptionId,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return c.json({ error: 'Failed to subscribe to newsletter' }, 500);
  }
}

// Get newsletter subscribers handler
export async function handleGetNewsletterSubscribers(c: Context) {
  try {
    const subscribers = await kv.get('newsletter:subscribers') || [];
    const activeSubscribers = subscribers.filter((sub: any) => sub.status === 'active');

    return c.json({ 
      subscribers: activeSubscribers,
      count: activeSubscribers.length
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return c.json({ error: 'Failed to fetch subscribers' }, 500);
  }
}

// Send newsletter handler
export async function handleSendNewsletter(c: Context) {
  try {
    const body = await c.req.json();
    const { subject, content, senderName = 'Planfirma Team' } = body;

    if (!subject || !content) {
      return c.json({ error: 'Subject and content are required' }, 400);
    }

    const subscribers = await kv.get('newsletter:subscribers') || [];
    const activeSubscribers = subscribers.filter((sub: any) => sub.status === 'active');

    console.log(`Sending newsletter to ${activeSubscribers.length} subscribers`);

    const results = [];
    for (const subscriber of activeSubscribers) {
      try {
        await sendNewsletterEmail(subscriber.email, subject, content, senderName);
        results.push({ email: subscriber.email, status: 'sent' });
      } catch (error) {
        console.error(`Failed to send newsletter to ${subscriber.email}:`, error);
        results.push({ email: subscriber.email, status: 'failed', error: error.message });
      }
    }

    // Log newsletter send
    const newsletterId = `newsletter_${Date.now()}`;
    await kv.set(`newsletter_log:${newsletterId}`, {
      id: newsletterId,
      subject,
      content,
      sentAt: new Date().toISOString(),
      recipientCount: activeSubscribers.length,
      results
    });

    return c.json({ 
      success: true,
      sentCount: results.filter(r => r.status === 'sent').length,
      failedCount: results.filter(r => r.status === 'failed').length,
      results
    });

  } catch (error) {
    console.error('Error sending newsletter:', error);
    return c.json({ error: 'Failed to send newsletter' }, 500);
  }
}

// Unsubscribe from newsletter handler
export async function handleNewsletterUnsubscribe(c: Context) {
  try {
    const body = await c.req.json();
    const { email } = body;

    const subscription = await kv.get(`newsletter:${email}`);
    if (!subscription) {
      return c.json({ error: 'Email not found in subscribers list' }, 404);
    }

    // Update subscription status
    subscription.status = 'unsubscribed';
    subscription.unsubscribedAt = new Date().toISOString();
    await kv.set(`newsletter:${email}`, subscription);

    // Update subscriber list
    const allSubscribers = await kv.get('newsletter:subscribers') || [];
    const updatedSubscribers = allSubscribers.map((sub: any) => 
      sub.email === email ? { ...sub, status: 'unsubscribed', unsubscribedAt: new Date().toISOString() } : sub
    );
    await kv.set('newsletter:subscribers', updatedSubscribers);

    console.log(`Newsletter unsubscribe: ${email}`);

    return c.json({ 
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error);
    return c.json({ error: 'Failed to unsubscribe from newsletter' }, 500);
  }
}