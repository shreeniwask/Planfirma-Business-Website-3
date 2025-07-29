#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupEnvironment = () => {
  const projectRoot = path.join(__dirname, '..');
  const envExamplePath = path.join(projectRoot, '.env.local.example');
  const envPath = path.join(projectRoot, '.env.local');
  const publicEnvPath = path.join(projectRoot, 'public', '.env.local');
  
  // Check if .env.local already exists
  if (fs.existsSync(envPath)) {
    console.log('✅ .env.local already exists');
    return;
  }
  
  try {
    // Try to copy from public directory first
    if (fs.existsSync(publicEnvPath)) {
      fs.copyFileSync(publicEnvPath, envPath);
      console.log('✅ Environment file created from default configuration');
      console.log('📝 Edit .env.local to customize your settings');
      return;
    }
    
    // Fall back to example file
    if (fs.existsSync(envExamplePath)) {
      fs.copyFileSync(envExamplePath, envPath);
      console.log('✅ Environment file created from example');
      console.log('📝 Edit .env.local with your actual values');
      return;
    }
    
    // Create a basic .env.local if nothing exists
    const defaultEnv = `# Planfirma Website - Environment Configuration
VITE_SUPABASE_URL=https://izwsvvhcvgzigriknfmf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6d3N2dmhjdmd6aWdyaWtuZm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MzYwODMsImV4cCI6MjA2OTIxMjA4M30.6DCKn1foNvtEtD4SHq6WziUN_8qERMcRagP4oJol6ZI
VITE_PROJECT_ID=izwsvvhcvgzigriknfmf
VITE_APP_ENV=development
`;
    
    fs.writeFileSync(envPath, defaultEnv);
    console.log('✅ Default environment file created');
    
  } catch (error) {
    console.warn('⚠️  Could not create .env.local file:', error.message);
    console.log('🔧 The app will use built-in defaults');
  }
};

setupEnvironment();