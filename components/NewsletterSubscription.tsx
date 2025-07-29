import React, { useState } from 'react';
import { toast } from '../utils/toast';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface NewsletterSubscriptionProps {
  className?: string;
}

export default function NewsletterSubscription({ className = '' }: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f5601df1/newsletter-subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe to newsletter');
      }

      console.log('Newsletter subscription successful:', result);

      // Check if already subscribed
      if (result.alreadySubscribed) {
        toast.info('You are already subscribed to our newsletter! 📧');
        setEmail('');
        return;
      }

      // Show success message
      toast.success('Thank you for subscribing! 🎉');
      
      // Show welcome email notification
      toast.info('A welcome email has been sent to your inbox.');
      
      // Clear form
      setEmail('');

    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      if (error instanceof Error) {
        toast.error(`Failed to subscribe: ${error.message}. Please try again or contact us at info@planfirma.com`);
      } else {
        toast.error('Failed to subscribe. Please try again or contact us at info@planfirma.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-2xl p-8 md:p-10 lg:p-12 text-center ${className}`}>
      <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white mb-4 md:mb-6">
        Stay Updated with Our Latest Insights
      </h3>
      <p className="text-[16px] md:text-[18px] text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
        Join our newsletter to receive expert insights on AI, cybersecurity, cloud computing, and digital transformation trends.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-[#2D993D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3fab4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      
      <p className="text-white/70 text-sm mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}