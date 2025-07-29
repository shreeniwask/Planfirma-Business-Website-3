// Email template generation functions for the backend

export function generateContactConfirmationHTML(contactData: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Planfirma</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f7a8c; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .button { background: #1f7a8c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Reaching Out!</h1>
                <p>We've received your message and will respond soon</p>
            </div>
            <div class="content">
                <p>Dear ${contactData.firstName},</p>
                <p>Thank you so much for taking the time to reach out to us at Planfirma! We're truly grateful for your interest in our services.</p>
                
                <h3>Your Message Details:</h3>
                <ul>
                    <li><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</li>
                    <li><strong>Email:</strong> ${contactData.email}</li>
                    <li><strong>Company:</strong> ${contactData.company}</li>
                    <li><strong>Country:</strong> ${contactData.country}</li>
                </ul>
                
                <p><strong>Your Message:</strong><br>"${contactData.message}"</p>
                
                <p>Our team will review your message and get back to you within 24 hours during business days.</p>
                
                <p style="text-align: center;">
                    <a href="https://planfirma.com" class="button">Visit Our Website</a>
                </p>
            </div>
            <div class="footer">
                <p>© 2025 Planfirma - Building Business Solutions</p>
                <p>This is an automated confirmation email.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

export function generateContactConfirmationText(contactData: any): string {
  return `
Dear ${contactData.firstName},

Thank you for reaching out to Planfirma! We've received your message:

Name: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Company: ${contactData.company}
Country: ${contactData.country}

Your Message: "${contactData.message}"

We'll respond within 24 hours during business days.

Best regards,
The Planfirma Team
Building Business Solutions
  `.trim();
}

export function generateNewsletterWelcomeHTML(subscriptionData: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Planfirma Newsletter</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1f7a8c, #30b6d0); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #f9f9f9; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .button { background: #1f7a8c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; }
            .unsubscribe { font-size: 11px; color: #999; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Welcome to Planfirma!</h1>
                <p>Thank you for joining our technology insights community</p>
            </div>
            <div class="content">
                <p>Dear Valued Subscriber,</p>
                <p>Welcome to the Planfirma family! We're absolutely thrilled to have you as part of our growing community.</p>
                
                <h3>What You Can Expect:</h3>
                <ul>
                    <li>🚀 <strong>Industry Insights:</strong> Latest trends in AI, cybersecurity, and cloud computing</li>
                    <li>📊 <strong>Expert Analysis:</strong> Deep-dive articles from our experienced team</li>
                    <li>💡 <strong>Success Stories:</strong> Real-world case studies and client wins</li>
                    <li>🛠️ <strong>Practical Tips:</strong> Actionable advice for business growth</li>
                    <li>🎯 <strong>Exclusive Content:</strong> Early access to whitepapers and webinars</li>
                </ul>
                
                <p>We respect your time and promise to deliver only valuable, relevant content.</p>
                
                <p style="text-align: center;">
                    <a href="https://planfirma.com/services" class="button">Explore Our Services</a>
                </p>
            </div>
            <div class="footer">
                <p>© 2025 Planfirma - Building Business Solutions</p>
                <p class="unsubscribe">
                    You can <a href="mailto:info@planfirma.com?subject=Unsubscribe">unsubscribe</a> at any time.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}

export function generateNewsletterWelcomeText(subscriptionData: any): string {
  return `
Welcome to Planfirma Newsletter!

Dear Valued Subscriber,

Thank you for subscribing to our newsletter. You'll receive:
- Industry insights on AI, cybersecurity, and cloud computing
- Expert analysis and practical tips
- Success stories and case studies
- Exclusive content and early access to resources

We respect your privacy and you can unsubscribe anytime.

Best regards,
The Planfirma Team
Building Business Solutions
  `.trim();
}

export function generateNewsletterHTML(content: string, email: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Planfirma Newsletter</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f7a8c; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px; background: white; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; background: #f9f9f9; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Planfirma Newsletter</h1>
                <p>Building Business Solutions</p>
            </div>
            <div class="content">
                ${content}
            </div>
            <div class="footer">
                <p>© 2025 Planfirma - Building Business Solutions</p>
                <p>You can <a href="mailto:info@planfirma.com?subject=Unsubscribe%20${encodeURIComponent(email)}">unsubscribe</a> at any time.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}