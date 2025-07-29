/**
 * Utility functions for handling images in both Figma Make and local development environments
 */

// Check if we're in a Figma Make environment
export const isFigmaEnvironment = (): boolean => {
  try {
    // In Figma Make, figma:asset imports are supported
    // In local development, they will throw errors
    return typeof window !== 'undefined' && 
           window.location.hostname.includes('supabase.co') ||
           window.location.hostname.includes('figma.com');
  } catch {
    return false;
  }
};

// Map of Figma asset hashes to local image paths
export const figmaToLocalImageMap: Record<string, string> = {
  // Professional office images
  '35e0d21e5a798991d822c7d4f6381120fa7cbbab.png': '/images/office/professional-woman-laptop.jpg',
  '4d4dd65efff360322011f5020c218670b85603d6.png': '/images/office/diverse-team-discussion.jpg',
  '9a841fc18610bd5bb142b7f46bc8c767cd6315f9.png': '/images/office/team-meeting-bright.jpg',
  '88a042744782b4034ef734d5011b72cd40761d9a.png': '/images/office/professionals-collaboration.jpg',
  '8a65ac768409968b9f33886031d97ddb2146ee24.png': '/images/office/person-smart-outfit-desk.jpg',
  '627615ef66d49cb3d1f88f001aa371b1f904ec13.png': '/images/office/professional-woman-suit.jpg',
  '8f9dc9e22f967360364649fd9e044523ab5a1049.png': '/images/office/designer-sketching-workspace.jpg',
  
  // Partner logos
  '842f305051c82d7ab507109953a37071407a4919.png': '/images/partners/aws-logo.png',
  '45c8e40eebc58101b7ca0c17a8d08e8289dbf6b9.png': '/images/partners/azure-logo.png',
  '69decf13cc47349731d5f42f48976c9bff4527e7.png': '/images/partners/gcp-logo.png',
  'a30d5faaabfe639cec1e0fdaf8aa20a112f7ab84.png': '/images/partners/partner-logo.png',
  '729f6a1cac9cf516522e54b0a218b074a30437c3.png': '/images/partners/partner-logo-1.png',
  '08e01a868599dc0cd4edace1d865163d83192606.png': '/images/partners/acronis-logo.png',
  
  // Brand logos
  '48106512de34b9a8a5d51dd2f6f2b83dac9f4a2a.png': '/images/Header logo/planfirma-logo.svg',
  
  // Service images - mapped to placeholder service images
  '717b9edd51feb353dc1181c107cfe4e83599422b.png': '/images/placeholders/placeholder-service.jpg',
  'ef61c3e964fccf13b4beac249abdcd131186b256.png': '/images/placeholders/placeholder-service.jpg',
  '4f5f4fc24d4fb323844cbdd0f8c3864a98b89c8b.png': '/images/placeholders/placeholder-service.jpg',
  '92c63555da3d5a51725a4714124480deba13c922.png': '/images/placeholders/placeholder-service.jpg',
  'b68a143e0db68c23a8b308a5c0706f4e32d195b4.png': '/images/placeholders/placeholder-service.jpg',
  '935263785d2ce46ec0e8791c5dbc7d8321d0657f.png': '/images/placeholders/placeholder-service.jpg',
  '62f433e11d6103cb0660e405329f3f010c983dfc.png': '/images/placeholders/placeholder-service.jpg',
  '38f6c3472cc00ebfba53447668a3c9e5604b2231.png': '/images/placeholders/placeholder-service.jpg',
  '804035de5a9a1b26773f55533f953833bbdbf982.png': '/images/placeholders/placeholder-service.jpg',
  'a7b132a5724f4768cf66a4dac5120b018584cf16.png': '/images/placeholders/placeholder-service.jpg',
  '97af82e1542d56c3e308ca25c533bbac927d1af0.png': '/images/placeholders/placeholder-service.jpg',
  'b1cdce3504553d3fb71520aee8a018f40ee61cc2.png': '/images/placeholders/placeholder-service.jpg',
  'acaf0ca442b45fd1e63d1434159bcf3947681c7f.png': '/images/placeholders/placeholder-service.jpg',
  '2d0893de21f609735baa768a6f680afa5c0b1a15.png': '/images/placeholders/placeholder-service.jpg',
  '1f38fbad714bddc21c42cb4673650b2c00485fb8.png': '/images/placeholders/placeholder-service.jpg',
  'f2d490d79a72bd944297d4dde2b2c4d888edc6dc.png': '/images/placeholders/placeholder-service.jpg',
};

// Default placeholder images by category
export const placeholderImages = {
  office: '/images/placeholders/placeholder-office.jpg',
  team: '/images/placeholders/placeholder-team.jpg',
  service: '/images/placeholders/placeholder-service.jpg',
  partner: '/images/placeholders/placeholder-partner.jpg',
  default: '/images/placeholders/placeholder-office.jpg',
};

/**
 * Resolve a Figma asset URL to a local image path
 */
export const resolveFigmaAsset = (figmaAssetUrl: string): string => {
  // Extract hash from figma:asset/hash.extension format
  const match = figmaAssetUrl.match(/figma:asset\/([^.]+\.[^.]+)$/);
  if (!match) return placeholderImages.default;
  
  const hash = match[1];
  return figmaToLocalImageMap[hash] || placeholderImages.default;
};

/**
 * Get image source with fallback handling
 */
export const getImageSrc = (
  figmaAssetUrl: string, 
  fallback?: string,
  category: keyof typeof placeholderImages = 'default'
): string => {
  if (isFigmaEnvironment()) {
    return figmaAssetUrl;
  }
  
  // For local development, use mapped local images or fallbacks
  const localPath = resolveFigmaAsset(figmaAssetUrl);
  
  // If we have a custom fallback, use it
  if (fallback) return fallback;
  
  // If mapped path exists, use it, otherwise use category placeholder
  return localPath !== placeholderImages.default ? localPath : placeholderImages[category];
};

/**
 * Create an image mapping entry for easier management
 */
export const createImageMapping = (figmaHash: string, localPath: string) => {
  figmaToLocalImageMap[figmaHash] = localPath;
};

/**
 * Bulk update image mappings
 */
export const updateImageMappings = (mappings: Record<string, string>) => {
  Object.assign(figmaToLocalImageMap, mappings);
};

/**
 * Get all unmapped Figma assets (for debugging)
 */
export const getUnmappedAssets = (usedAssets: string[]): string[] => {
  return usedAssets.filter(asset => {
    const hash = asset.match(/figma:asset\/([^.]+\.[^.]+)$/)?.[1];
    return hash && !figmaToLocalImageMap[hash];
  });
};

/**
 * Helper to generate placeholder SVG data URL
 */
export const generatePlaceholder = (
  width: number = 400, 
  height: number = 300, 
  text: string = 'Image Placeholder',
  bgColor: string = '#f1f1f1',
  textColor: string = '#666'
): string => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
      <rect width='${width}' height='${height}' fill='${bgColor}'/>
      <text x='${width/2}' y='${height/2}' text-anchor='middle' dy='.3em' 
            font-family='Arial, sans-serif' font-size='${Math.min(width, height) * 0.04}' fill='${textColor}'>
        ${text}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};