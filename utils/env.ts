// Environment variable utilities
export const getEnvVar = (key: string, fallback: string = ''): string => {
  // Check if we're in a browser environment with Vite
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || fallback;
  }
  
  // Check if we're in a Node.js environment
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || fallback;
  }
  
  // Return fallback if neither environment is available
  return fallback;
};

// Validate that required environment variables are set
export const validateEnvVars = () => {
  const requiredVars = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
    'VITE_PROJECT_ID'
  ];
  
  const missing = requiredVars.filter(varName => {
    const value = getEnvVar(varName);
    return !value || value === '';
  });
  
  if (missing.length > 0) {
    console.info('🔧 Using default Supabase configuration for development');
    console.info('💡 To use your own backend, create a .env.local file with your Supabase keys');
    console.info('📚 See README.md for setup instructions');
  } else {
    console.info('✅ Using custom environment configuration');
  }
  
  return missing.length === 0;
};

// Export environment variables with proper fallbacks
export const ENV = {
  SUPABASE_URL: getEnvVar('VITE_SUPABASE_URL', 'https://izwsvvhcvgzigriknfmf.supabase.co'),
  SUPABASE_ANON_KEY: getEnvVar('VITE_SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6d3N2dmhjdmd6aWdyaWtuZm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MzYwODMsImV4cCI6MjA2OTIxMjA4M30.6DCKn1foNvtEtD4SHq6WziUN_8qERMcRagP4oJol6ZI'),
  PROJECT_ID: getEnvVar('VITE_PROJECT_ID', 'izwsvvhcvgzigriknfmf'),
  RESEND_API_KEY: getEnvVar('VITE_RESEND_API_KEY', ''),
  IS_DEVELOPMENT: getEnvVar('VITE_APP_ENV', 'development') === 'development'
};