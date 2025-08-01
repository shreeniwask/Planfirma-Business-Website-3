# Technical Partner Logos Directory

This directory contains logos for technology partners and platforms that Planfirma works with.

## Current Images:
- `aws-logo.png` - Amazon Web Services logo
- `azure-logo.png` - Microsoft Azure logo
- `gcp-logo.png` - Google Cloud Platform logo
- `bitrix24-logo.png` - Bitrix24 logo
- `monday-logo.png` - Monday.com logo
- `Acronis-logo.png` - Acronis logo

## Adding New Partner Logos:

1. **File Format**: Supported formats include PNG, JPG, JPEG, SVG, and WebP
   - **PNG**: Best for logos with transparency
   - **SVG**: Best for scalable vector logos
   - **JPG/JPEG**: Good for photographic logos
   - **WebP**: Modern format with good compression
2. **File Naming**: Use lowercase with hyphens (e.g., `partner-name-logo.png`)
3. **Image Size**: Recommended size is 200x100px or similar aspect ratio
4. **Background**: Use transparent background when possible (PNG/SVG)
5. **File Size**: Keep under 100KB for optimal loading

## Examples of good filenames:
- `salesforce-logo.svg`
- `hubspot-logo.png`
- `slack-logo.jpg`
- `zoom-logo.webp`
- `stripe-logo.svg`
- `twilio-logo.png`

## After adding images:
1. Update the `technicalPartners` array in `components/landing/constants.ts`
2. Use the path format: `/images/partners/your-image-name.png`

## Current partners in constants.ts:
All current partners already have local images configured.

## Additional partners you might want to add:
- Salesforce
- HubSpot
- Slack
- Zoom
- Stripe
- Twilio
- GitHub
- Docker
- Kubernetes
- React
- Angular
- Vue.js 