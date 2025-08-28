import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import Flag from 'react-flagkit';

// Props interface for ContactUs component
interface ContactUsProps {
  onNavigate: (page: string) => void;
  onNavigateToService: (service: string) => void;
  onBack: () => void;
}

// Interface for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  message: string;
}

// List of countries for the dropdown menu
const countries = [
  'India','Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina',
  'Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados',
  'Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana',
  'Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada',
  'Cape Verde','Central African Republic','Chad','Chile','China','Colombia','Comoros',
  'Congo (Congo-Brazzaville)','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic',
  'Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador',
  'Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji',
  'Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece',
  'Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary',
  'Iceland','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica',
  'Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos',
  'Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
  'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania',
  'Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco',
  'Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua',
  'Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau',
  'Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal',
  'Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa',
  'San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore',
  'Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain',
  'Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan',
  'Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey',
  'Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay',
  'Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'
];


export default function ContactUs({ onNavigate, onNavigateToService, onBack }: ContactUsProps) {

  
  // State to store the form data
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
  });


  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to hold the submission status message
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  // State to control the visibility of the status message with animation
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  // State to store validation errors for each field
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});


  // useEffect to auto-hide the status message after a timeout
  useEffect(() => {
    // Check if there is a submission status to show
    if (submissionStatus) {
      // Set the message to be shown
      setShowStatusMessage(true);
      // Set a timer to hide the message after 5 seconds
      const timer = setTimeout(() => {
        setShowStatusMessage(false);
        setSubmissionStatus(null);
      }, 5000); // Hide after 5 seconds
      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);



  // This function handles changes in input fields and updates the form data state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    // Destructure name and value from the event target
    const { name, value } = e.target;

    let newValue = value;

    // Phone: allow only numbers and optional leading +
    if (name === "phone") {
      newValue = value.replace(/[^0-9+]/g, "");
    }
    
    // Update the form data state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
    
    // Clear the corresponding validation error when the input changes
    if (validationErrors[name]) {
      setValidationErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };


  // This function handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset submission status and hide the message before a new submission
    setSubmissionStatus(null);
    setShowStatusMessage(false);

    // Client-side validation to check for required fields
    const errors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName.trim())) {
      errors.firstName = 'First name should contain only letters.';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastName.trim())) {
      errors.lastName = 'Last name should contain only letters.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone || !/^\+?\d{7,15}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.company.trim()) {
      errors.company = 'Company name is required.';
    }

    if (!formData.country.trim()) {
      errors.country = 'Country name is required.';
    }

    if (!formData.message.trim()) {
      errors.message = 'A message is required.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long.';
    }

    // If there are any validation errors, update the state and stop submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Set submitting state to true to show a loading indicator
    setIsSubmitting(true);

    try {
      // Simulate an API call with a delay of 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate a success or error response (90% chance of success)
      const success = Math.random() > 0.1;
      if (success) {
        // Set success message
        setSubmissionStatus('Your message has been sent successfully! We will get back to you soon.');
        // Reset the form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          message: '',
        });
        // Clear validation errors on success
        setValidationErrors({});
      } else {
        // Throw an error for the catch block to handle
        throw new Error('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      // Log and set an error message in case of failure
      console.error('Error sending message:', error);
      setSubmissionStatus(`Error: ${(error as Error).message}`);
    } finally {
      // Set submitting state to false regardless of success or failure
      setIsSubmitting(false);
    }
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
      <div className="flex-1 flex items-center justify-center px-4 md:px-6 lg:px-8 py-2 sm:py-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
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
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
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
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IN', 'JP', 'SG', 'NL', 'SE', 'CH'].map((countryCode, index) => (
                        <div key={index} className="w-4 h-3 sm:w-5 sm:h-4">
                          <Flag country={countryCode} size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1c1c1c] mb-2 sm:mb-3 md:mb-4">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-2 md:space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base`}
                      placeholder="Enter your first name"
                    />
                    {/* Display validation error for first name */}
                    {validationErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                        {validationErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base`}
                      placeholder="Enter your last name"
                    />
                    {/* Display validation error for last name */}
                    {validationErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                        {validationErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base`}
                      placeholder="example@company.com"
                    />
                    {/* Display validation error for email */}
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base`}
                      placeholder="+1 123 456 7890"
                    />
                    {validationErrors.phone && (
                      <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.company ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors text-sm sm:text-base`}
                      placeholder="Enter your company name"
                    />
                    {/* Display validation error for company */}
                    {validationErrors.company && (
                      <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                        {validationErrors.company}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors bg-white cursor-pointer text-sm sm:text-base`}
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {/* Display validation error for country */}
                    {validationErrors.country && (
                      <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                        {validationErrors.country}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-medium text-[#1c1c1c] mb-1 sm:mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border ${validationErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2D993D] focus:border-transparent outline-none transition-colors resize-none text-sm sm:text-base`}
                    placeholder="Tell us about your project and how we can help..."
                  />
                  {/* Display validation error for message */}
                  {validationErrors.message && (
                    <p className="text-red-500 text-xs mt-1 transition-all duration-300 opacity-100 transform translate-y-0">
                      {validationErrors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2D993D] text-white py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg font-semibold hover:bg-[#247e31] transition-colors transform hover:scale-[1.02] duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  {isSubmitting ? 'Preparing Message...' : 'Send Message'}
                </button>

                {/* Show status message with fade and scale animation */}
                
                  {submissionStatus && (
                    <div
                      className={`mt-4 text-center transition-all duration-500 ease-in-out ${
                        showStatusMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <p className={`${submissionStatus.startsWith('Error:') ? 'text-red-500' : 'text-green-600'} text-sm font-semibold`}>
                        {submissionStatus}
                      </p>
                    </div>
                  )}
                
              </form>
            </div>
            </div>
          </div>
        </div>
      
      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="light" />
    </div>
  );
}
