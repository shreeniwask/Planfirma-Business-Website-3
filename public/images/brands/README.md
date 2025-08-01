# Brand Logos Directory

This directory contains logos for brands that Planfirma has helped.

## Current Images:
- `ahli-united-bank.png` - Ahli United Bank logo
- `cruise-careers.png` - Cruise Careers logo  
- `investor-shoppe.png` - Investor Shoppe logo

## Adding New Brand Logos:

1. **File Format**: Supported formats include PNG, JPG, JPEG, SVG, and WebP
   - **PNG**: Best for logos with transparency
   - **SVG**: Best for scalable vector logos
   - **JPG/JPEG**: Good for photographic logos
   - **WebP**: Modern format with good compression
2. **File Naming**: Use lowercase with hyphens (e.g., `company-name-logo.png`)
3. **Image Size**: Recommended size is 200x100px or similar aspect ratio
4. **Background**: Use transparent background when possible (PNG/SVG)
5. **File Size**: Keep under 100KB for optimal loading

## Examples of good filenames:
- `willis-tower-watson-logo.png`
- `korn-ferry-logo.svg`
- `spykar-logo.jpg`
- `ubqool-logo.webp`
- `astaguru-logo.png`
- `continental-belting-logo.svg`

## After adding images:
1. Update the `brandsWeHelped` array in `components/landing/constants.ts`
2. Use the path format: `/images/brands/your-image-name.png`

## Current brands in constants.ts that need local images:
- Willis Tower Watson
- Korn Ferry  
- Spykar
- Ubqool
- Astaguru
- Ilantus
- Continental Belting 