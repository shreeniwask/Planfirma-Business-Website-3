import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { 
  handleContactSubmit, 
  handleGetLeads 
} from './contactHandler.tsx';
import { 
  handleNewsletterSubscribe,
  handleGetNewsletterSubscribers, 
  handleSendNewsletter,
  handleNewsletterUnsubscribe 
} from './newsletterHandler.tsx';

const app = new Hono();

// Enable CORS and logging
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use('*', logger(console.log));

// Health check endpoint
app.get('/make-server-f5601df1/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Contact endpoints
app.post('/make-server-f5601df1/contact-submit', handleContactSubmit);
app.get('/make-server-f5601df1/leads', handleGetLeads);

// Newsletter endpoints
app.post('/make-server-f5601df1/newsletter-subscribe', handleNewsletterSubscribe);
app.get('/make-server-f5601df1/newsletter-subscribers', handleGetNewsletterSubscribers);
app.post('/make-server-f5601df1/send-newsletter', handleSendNewsletter);
app.post('/make-server-f5601df1/newsletter-unsubscribe', handleNewsletterUnsubscribe);

// Start the server
Deno.serve(app.fetch);