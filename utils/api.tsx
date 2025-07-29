import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-f5601df1`;

// API utility functions
class ApiClient {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor() {
    this.baseUrl = API_BASE_URL;
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
    };
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  // Contact form submission
  async submitContactForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    country: string;
  }) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string, source: string = 'website') {
    return this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, source }),
    });
  }

  // Newsletter unsubscribe
  async unsubscribeNewsletter(email: string) {
    return this.request('/newsletter/unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Get leads (admin function)
  async getLeads() {
    return this.request('/leads');
  }

  // Get analytics (admin function)
  async getAnalytics() {
    return this.request('/leads/analytics');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

// Convenience functions
export const submitContactForm = (formData: any) => apiClient.submitContactForm(formData);
export const subscribeNewsletter = (email: string, source?: string) => apiClient.subscribeNewsletter(email, source);
export const unsubscribeNewsletter = (email: string) => apiClient.unsubscribeNewsletter(email);
export const getLeads = () => apiClient.getLeads();
export const getAnalytics = () => apiClient.getAnalytics();
export const healthCheck = () => apiClient.healthCheck();

// Error handling helper
export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  
  if (error.message.includes('Network error') || error.message.includes('Failed to fetch')) {
    return 'Network connection error. Please check your internet connection and try again.';
  }
  
  if (error.message.includes('Invalid email')) {
    return 'Please enter a valid email address.';
  }
  
  if (error.message.includes('Missing required fields')) {
    return 'Please fill in all required fields.';
  }
  
  return error.message || 'An unexpected error occurred. Please try again.';
};