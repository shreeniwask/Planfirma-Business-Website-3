# Planfirma Business Website

A modern business website built with React, Vite, TypeScript, Tailwind CSS, and Supabase.

## Features
- Responsive landing page
- Service detail pages
- Blog and newsletter
- Contact form (Supabase backend)
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
npm install
```

### Development
```sh
npm run dev
```

### Build
```sh
npm run build
```

### Environment Variables
Create a `.env` file in the root with your Supabase and Resend credentials:
```
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=your-resend-api-key
```

## Deployment
You can deploy to Vercel, Netlify, or any static hosting provider. For Supabase Edge Functions, see the `supabase/functions/server` directory.

## License
MIT