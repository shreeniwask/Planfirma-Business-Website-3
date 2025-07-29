# Image Management Guide

This guide explains how to handle images in the Planfirma website, especially when working with Figma imports in local development.

## Problem

When developing locally, Figma asset imports like `figma:asset/hash.png` cause errors because they only work in the Figma Make environment. This guide provides solutions for seamless local development.

## Solution Overview

We've implemented a comprehensive image management system that:

1. **Automatically handles Figma assets** - Detects the environment and uses appropriate image sources
2. **Provides smart fallbacks** - Uses local images when available, placeholders when not
3. **Offers debugging tools** - Helps identify missing images and create mappings
4. **Simplifies image organization** - Structured directory system for easy management

## Directory Structure

```
public/images/
├── partners/          # Partner and brand logos (AWS, Azure, etc.)
├── team/             # Team member photos
├── services/         # Service-related imagery
├── consulting/       # IT consulting images
├── office/           # Office and workspace photos
├── placeholders/     # Placeholder images for fallbacks
└── backgrounds/      # Background images
```

## Using Images in Components

### For New Images (Recommended)

Use the enhanced `ImageWithFallback` component:

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Basic usage
<ImageWithFallback 
  src="/images/office/team-meeting.jpg" 
  alt="Team meeting" 
  className="w-full h-auto"
/>

// With category-specific placeholder
<ImageWithFallback 
  src="figma:asset/some-hash.png"
  alt="Office workspace"
  category="office"
  className="rounded-lg"
/>

// With custom fallback
<ImageWithFallback 
  src="figma:asset/partner-logo.png"
  alt="Partner logo"
  fallback="/images/partners/default-partner.png"
  category="partner"
/>

// Debug mode (shows original Figma asset info)
<ImageWithFallback 
  src="figma:asset/some-hash.png"
  alt="Debug image"
  debug={true}
/>
```

### For Existing Figma Imports

The system automatically maps Figma assets to local images. Add your mappings in `utils/imageUtils.ts`:

```typescript
export const figmaToLocalImageMap: Record<string, string> = {
  'hash123.png': '/images/office/professional-workspace.jpg',
  'hash456.png': '/images/partners/aws-logo.png',
  // Add more mappings...
};
```

## Image Management Commands

We've included helpful NPM scripts to manage images:

### Scan for Figma Assets

```bash
npm run images:scan
```

This command:
- Scans your project for Figma asset imports
- Shows which assets are mapped/unmapped
- Lists missing local image files
- Provides suggested mappings

### Setup Image Directories

```bash
npm run images:setup
```

Creates the recommended directory structure in `public/images/`.

### Generate Placeholders

```bash
npm run images:placeholders
```

Creates placeholder images for unmapped Figma assets.

## Adding New Images

### Method 1: Direct Addition

1. Add your image to the appropriate directory:
   ```
   public/images/office/new-workspace.jpg
   ```

2. Use in components:
   ```tsx
   <ImageWithFallback 
     src="/images/office/new-workspace.jpg"
     alt="Modern workspace"
   />
   ```

### Method 2: Mapping Figma Assets

1. Run the scan command to find unmapped assets:
   ```bash
   npm run images:scan
   ```

2. Add the mapping in `utils/imageUtils.ts`:
   ```typescript
   'figma-hash.png': '/images/office/new-workspace.jpg',
   ```

3. Add the actual image file to the specified path.

## Best Practices

### File Naming

Use descriptive, lowercase names with hyphens:
- ✅ `office-modern-workspace.jpg`
- ✅ `partner-aws-logo.png`
- ✅ `team-sarah-johnson.jpg`
- ❌ `IMG_001.jpg`
- ❌ `Screenshot 2024.png`

### Image Optimization

- Use appropriate formats: JPG for photos, PNG for logos/graphics, SVG for icons
- Optimize file sizes before adding to the project
- Consider WebP format for better compression

### Fallback Strategy

The system uses this fallback hierarchy:
1. Original image (Figma asset in production, mapped local image in development)
2. Custom fallback (if specified)
3. Category-specific placeholder
4. Default placeholder
5. Error image

## Troubleshooting

### "Cannot resolve import" errors

If you see import errors for Figma assets:

1. Run `npm run images:scan` to identify the problematic assets
2. Add mappings in `utils/imageUtils.ts`
3. Add the actual image files or use placeholders

### Images not loading in development

1. Check if the image file exists in `public/images/`
2. Verify the path is correct (starts with `/images/`)
3. Ensure file permissions allow reading
4. Check browser console for specific error messages

### Missing placeholders

Run `npm run images:placeholders` to generate placeholder images for unmapped assets.

## Environment Detection

The system automatically detects whether you're in:
- **Figma Make environment**: Uses original Figma assets
- **Local development**: Uses mapped local images or placeholders

No manual environment switching required!

## Debug Mode

Enable debug mode on images to see:
- Original Figma asset URLs
- Resolved local image paths
- Mapping information

```tsx
<ImageWithFallback 
  src="figma:asset/some-hash.png"
  debug={true}
  alt="Debug image"
/>
```

## Migration from Old System

If you have existing components using direct `img` tags or old imports:

1. Replace with `ImageWithFallback`
2. Add category props for better placeholders
3. Run image scan to identify missing mappings
4. Add necessary image files or mappings

## Support

For questions or issues with the image management system:

1. Run `npm run images:scan` to diagnose problems
2. Check this guide for common solutions
3. Review the `utils/imageUtils.ts` file for current mappings
4. Use debug mode to troubleshoot specific images