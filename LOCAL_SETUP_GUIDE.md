# Local Development Setup Guide

## Current Status ✅

Your TypeScript errors have been resolved! Here's what was fixed:

### Fixed Issues:

1. **Logo Import Errors** - Updated to use the ImageWithFallback component with proper fallback paths
2. **Type Mismatches** - Fixed Page type definitions across components  
3. **Unused Variables** - Removed or prefixed unused parameters with underscore

### Image Management System:

- **Logo Path**: Uses `/images/Header logo/planfirma-logo.svg` (your original location)
- **Fallback System**: Automatically handles Figma vs local environment
- **Placeholder Images**: Created for all mapped assets

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Check for image mapping issues
npm run images:scan

# Setup image directories (if needed)
npm run images:setup
```

## Image Management Commands

### Scan for Issues
```bash
npm run images:scan
```
This will show you:
- Which Figma assets are found in your code
- Which ones are properly mapped to local images
- Any missing local image files

### Generate Placeholders
```bash
npm run images:placeholders
```
Creates placeholder images for any unmapped Figma assets.

## File Structure

Your images are organized as:
```
public/images/
├── Header logo/           # Main logo location (your preference)
├── logos/                # Alternative logo location
├── partners/             # Partner logos (AWS, Azure, GCP, etc.)
├── office/               # Office/workspace photos
├── placeholders/         # Fallback images
└── ...
```

## TypeScript Configuration

The project is configured to handle:
- ✅ Figma asset imports in production
- ✅ Local image fallbacks in development  
- ✅ Automatic environment detection
- ✅ Type-safe image components

## Current Logo Setup

**Original Figma Asset**: `figma:asset/48106512de34b9a8a5d51dd2f6f2b83dac9f4a2a.png`  
**Local Fallback**: `/images/Header logo/planfirma-logo.svg`  
**Component**: Uses `ImageWithFallback` for automatic switching

## Adding New Images

1. **For new images**: Add directly to `/public/images/` in appropriate category
2. **For Figma imports**: Add mapping in `/utils/imageUtils.ts`
3. **For missing assets**: Run `npm run images:scan` to identify and `npm run images:placeholders` to create

## Environment Detection

The system automatically detects:
- **Figma Make Environment**: Uses original Figma assets
- **Local Development**: Uses mapped local images or placeholders

No manual configuration needed!

## Troubleshooting

### Still seeing TypeScript errors?
```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
npm run dev
```

### Images not loading?
1. Check if file exists in `public/images/`
2. Verify path starts with `/images/` (not `./images/`)
3. Run `npm run images:scan` to check mappings

### Want to use different logo location?
Update the fallback path in `/components/Header.tsx` and the mapping in `/utils/imageUtils.ts`

## All Set! 🚀

Your development environment is now properly configured with:
- ✅ No TypeScript errors
- ✅ Working image fallback system
- ✅ Proper logo handling
- ✅ Organized image structure

You can now run `npm run dev` and start developing without any import issues!