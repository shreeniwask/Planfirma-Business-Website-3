# Client Testimonial Images

This directory contains the profile photos of clients who provided testimonials for the website.

## Required Images

Please add the following client images to this directory:

### 1. Laazarus Dias (LDEA - Technology Director)
- **Filename**: `laazarus-dias.webp`
- **Recommended size**: 400x400px minimum
- **Format**: WebP (recommended) or JPG/PNG
- **Quote**: "Planfirma's tablet-based platform streamlined training for thousands of agents, enhancing efficiency."

### 2. Jaya Nagarmat (Investor Shoppe - Operations Manager)
- **Filename**: `jaya-nagarmat.webp`
- **Recommended size**: 400x400px minimum
- **Format**: WebP (recommended) or JPG/PNG
- **Quote**: "Planfirma efficiently solves business challenges, delivering exceptional results with a tailored approach."

### 3. Prasad Hariharan (Carnival - HR Director)
- **Filename**: `prasad-hariharan.webp`
- **Recommended size**: 400x400px minimum
- **Format**: WebP (recommended) or JPG/PNG
- **Quote**: "For almost a decade, Planfirma's agile team and portal have been key to our hiring success."

## Image Guidelines

- **Format**: **WebP recommended** for best performance (smaller file sizes, excellent quality)
- **Aspect Ratio**: Square (1:1) preferred for consistent circular display
- **Resolution**: Minimum 400x400px for crisp display on all devices
- **File Size**: WebP typically 25-50% smaller than JPEG while maintaining quality
- **Quality**: Professional headshots work best
- **Background**: Clean, professional backgrounds recommended

## Why WebP?

✅ **Better compression**: 25-50% smaller file sizes than JPEG/PNG  
✅ **Faster loading**: Improved page load performance  
✅ **Modern standard**: Supported by all modern browsers  
✅ **Excellent quality**: Maintains visual fidelity at smaller sizes  

## Format Alternatives

If WebP is not available, these formats work too:
- **JPEG**: For photographic content (use 85-90% quality)
- **PNG**: If transparency is needed

## Implementation Notes

- Images are displayed as 48x48px circular avatars (w-12 h-12 in Tailwind)
- The `ImageWithFallback` component handles loading states and errors
- Images will gracefully fallback if not found
- All images should represent the actual clients who provided the testimonials

## Converting to WebP

You can convert existing images to WebP using:
- **Online tools**: [Squoosh.app](https://squoosh.app/) (Google's image optimization tool)
- **Command line**: `cwebp input.jpg -o output.webp -q 85`
- **Photoshop**: Export As → WebP 