# Quick Installation Guide

## 1. Install Dependencies
```bash
npm install
```
*This automatically sets up everything including environment configuration!*

## 2. Start Development
```bash
npm run dev
```
The app will open at `http://localhost:3000`

## 3. Optional: Use Your Own Backend
Edit `.env.local` with your Supabase project details (created automatically during install)

## Troubleshooting

### If you get environment variable errors:
1. Make sure you've run `npm install`
2. The project should work with default values
3. If using your own Supabase project, check your .env.local file

### If port 3000 is busy:
```bash
npm run dev -- --port 3001
```

### If you need to reset:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Features That Work Out of the Box:
- ✅ Full website navigation
- ✅ Responsive design
- ✅ All UI components
- ✅ Contact form (frontend)
- ✅ Newsletter signup (frontend)
- ✅ Admin dashboard access (click logo 5 times)

## Features That Need Your Supabase/Resend Setup:
- ⚠️ Email sending
- ⚠️ Data persistence
- ⚠️ Admin dashboard data

## Need Help?
Check the full README.md for detailed setup instructions.