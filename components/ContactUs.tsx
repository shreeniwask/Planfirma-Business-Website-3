import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { toast } from '../utils/toast';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import type { Page } from '../App';

interface ContactUsProps {
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
  onBack: () => void;
}

export default function ContactUs({ onNavigate, onNavigateToService, onBack }: ContactUsProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    country: 'United States'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Sweden', flag: '🇸🇪' },
    { name: 'Switzerland', flag: '🇨🇭' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f5601df1/contact-submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit contact form');
      }

      console.log('Contact form submitted successfully:', result);

      // Show success message
      toast.success('Message sent successfully! Your inquiry has been received and stored securely.');
      
      // Show confirmation email notification
      toast.info('A confirmation email has been sent to your inbox.');
      
      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        country: 'United States'
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact us directly at sales@planfirma.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={onNavigate} currentPage="contact" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        onBack={onBack}
        currentPage="contact" 
      />
      
      {/* Main Content - Single screen without scroll */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-16 py-2 sm:py-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="bg-green-100 px-3 py-1.5 rounded-full text-[#2D993D] text-xs sm:text-sm font-semibold inline-block mb-3">
                  Contact Us
                </div>
                <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#1c1c1c] leading-tight mb-3">
                  Let's start building something great together
                </h1>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[rgba(0,0,0,0.8)] leading-relaxed">
                  Ready to transform your business? Get in touch with our experts and discover how we can help you achieve your technology goals.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2D993D] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1c1c1c] text-sm sm:text-base">Email here for any queries:</p>
                    <p className="text-[rgba(0,0,0,0.7)] text-sm sm:text-base">sales@planfirma.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2D993D] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1c1c1c] text-sm sm:text-base">Call us at:</p>
                    <p className="text-[rgba(0,0,0,0.7)] text-sm sm:text-base">+91 84510 53268</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2D993D] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1c1c1c] text-sm sm:text-base">Global Presence</p>
                    <p className="text-[rgba(0,0,0,0.7)] text-sm sm:text-base">🇺🇸 🇨🇦 🇬🇧 🇦🇺 🇩🇪 🇫🇷 🇮🇳 🇯🇵 🇸🇬 🇳🇱 🇸🇪 🇨🇭</p>
                  </div>
                </div>
              </div>
            </div>
            
                          {/* Right Column - Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-3 sm:p-4 md:p-6">
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1c1c1c] mb-3 sm:mb-4">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                      placeholder="+91 84510 53268"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors bg-white cursor-pointer text-sm sm:text-base"
                    >
                      {countries.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                    Message*
                  </label>
                                      <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={2}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors resize-none text-sm sm:text-base"
                      placeholder="Tell us about your project and how we can help..."
                    />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2D993D] text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#247e31] transition-colors transform hover:scale-[1.02] duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                >
                  {isSubmitting ? 'Preparing Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="light" />
    </div>
  );
}