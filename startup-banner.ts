// Development startup banner
export const showStartupBanner = () => {
  if (typeof window !== 'undefined') {
    console.log(`
🚀 Planfirma Website - Development Mode

✅ Project loaded successfully
🔧 Using default backend configuration
💡 To use your own Supabase project, edit .env.local

📚 Need help? Check README.md
🌐 App running at: ${window.location.origin}
    `);
  }
};

// Only show in development
if (import.meta.env.DEV) {
  showStartupBanner();
}