#!/usr/bin/env node

/**
 * Image Management Script for Planfirma Website
 * 
 * This script helps manage images in the project by:
 * 1. Scanning for Figma asset imports
 * 2. Checking which images are missing local mappings
 * 3. Generating placeholder directories
 * 4. Helping with image organization
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}\n`),
};

/**
 * Scan files for Figma asset imports
 */
async function scanFigmaAssets() {
  const figmaAssets = new Set();
  const figmaAssetRegex = /figma:asset\/([a-f0-9]+\.(?:png|jpg|jpeg|svg|webp))/gi;
  
  async function scanDirectory(dir) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
          await scanDirectory(fullPath);
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
          try {
            const content = await fs.readFile(fullPath, 'utf-8');
            const matches = content.matchAll(figmaAssetRegex);
            
            for (const match of matches) {
              figmaAssets.add(match[1]);
            }
          } catch (err) {
            log.warning(`Could not read file: ${fullPath}`);
          }
        }
      }
    } catch (err) {
      log.warning(`Could not scan directory: ${dir}`);
    }
  }
  
  await scanDirectory(path.join(projectRoot, 'components'));
  await scanDirectory(path.join(projectRoot, 'imports'));
  
  return Array.from(figmaAssets);
}

/**
 * Read current image mappings from imageUtils.ts
 */
async function getCurrentMappings() {
  try {
    const imageUtilsPath = path.join(projectRoot, 'utils', 'imageUtils.ts');
    const content = await fs.readFile(imageUtilsPath, 'utf-8');
    
    // Extract the figmaToLocalImageMap object
    const mapMatch = content.match(/figmaToLocalImageMap:\s*Record<string,\s*string>\s*=\s*{([^}]+)}/s);
    if (!mapMatch) return {};
    
    const mappings = {};
    const mapContent = mapMatch[1];
    const entryRegex = /['"]([^'"]+)['"]:\s*['"]([^'"]+)['"]/g;
    
    let match;
    while ((match = entryRegex.exec(mapContent)) !== null) {
      mappings[match[1]] = match[2];
    }
    
    return mappings;
  } catch (err) {
    log.warning('Could not read current mappings from imageUtils.ts');
    return {};
  }
}

/**
 * Check if local image files exist
 */
async function checkLocalImages(mappings) {
  const results = {};
  
  for (const [hash, localPath] of Object.entries(mappings)) {
    const fullPath = path.join(projectRoot, 'public', localPath.replace(/^\//, ''));
    try {
      await fs.access(fullPath);
      results[hash] = { path: localPath, exists: true };
    } catch {
      results[hash] = { path: localPath, exists: false };
    }
  }
  
  return results;
}

/**
 * Create missing directories
 */
async function createImageDirectories() {
  const directories = [
    'public/images/partners',
    'public/images/team',
    'public/images/services',
    'public/images/consulting',
    'public/images/office',
    'public/images/placeholders',
    'public/images/backgrounds',
  ];
  
  for (const dir of directories) {
    const fullPath = path.join(projectRoot, dir);
    try {
      await fs.mkdir(fullPath, { recursive: true });
      log.success(`Created directory: ${dir}`);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        log.error(`Failed to create directory ${dir}: ${err.message}`);
      }
    }
  }
}

/**
 * Generate a sample image mapping update
 */
function generateMappingUpdate(unmappedAssets) {
  if (unmappedAssets.length === 0) return '';
  
  let update = '\n// Add these mappings to figmaToLocalImageMap in utils/imageUtils.ts:\n';
  update += '// Copy and paste the entries below into the object\n\n';
  
  for (const asset of unmappedAssets) {
    const category = asset.includes('logo') ? 'partners' : 
                    asset.includes('team') ? 'team' : 
                    asset.includes('office') ? 'office' : 'services';
    const filename = `${asset.split('.')[0]}.${asset.split('.')[1]}`;
    update += `  '${asset}': '/images/${category}/${filename}',\n`;
  }
  
  return update;
}

/**
 * Create placeholder images for missing assets
 */
async function createPlaceholderImages(missingAssets) {
  const placeholderSVG = (text, width = 400, height = 300) => `
<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
  <rect width='${width}' height='${height}' fill='#f1f1f1'/>
  <rect x='20' y='20' width='${width-40}' height='${height-40}' rx='8' fill='none' stroke='#cbd5e1' stroke-width='2' stroke-dasharray='8,8'/>
  <text x='${width/2}' y='${height/2}' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='${Math.min(width, height) * 0.04}' fill='#64748b'>
    ${text}
  </text>
</svg>`;

  for (const asset of missingAssets) {
    const category = asset.includes('logo') ? 'partners' : 
                    asset.includes('team') ? 'team' : 
                    asset.includes('office') ? 'office' : 'services';
    
    const filename = `placeholder-${asset.split('.')[0]}.svg`;
    const dir = path.join(projectRoot, 'public', 'images', category);
    const filePath = path.join(dir, filename);
    
    try {
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, placeholderSVG(`Placeholder for ${asset}`, 400, 300));
      log.success(`Created placeholder: /images/${category}/${filename}`);
    } catch (err) {
      log.error(`Failed to create placeholder for ${asset}: ${err.message}`);
    }
  }
}

/**
 * Main function
 */
async function main() {
  const command = process.argv[2];
  
  log.title('🖼️  Planfirma Image Manager');
  
  switch (command) {
    case 'scan':
      log.info('Scanning for Figma assets...');
      const assets = await scanFigmaAssets();
      const mappings = await getCurrentMappings();
      const localImageStatus = await checkLocalImages(mappings);
      
      log.title('📊 Scan Results');
      
      console.log(`${colors.bright}Found ${assets.length} Figma assets:${colors.reset}`);
      assets.forEach(asset => console.log(`  - ${asset}`));
      
      const mappedAssets = assets.filter(asset => mappings[asset]);
      const unmappedAssets = assets.filter(asset => !mappings[asset]);
      
      console.log(`\n${colors.bright}Mapping Status:${colors.reset}`);
      console.log(`  ${colors.green}Mapped: ${mappedAssets.length}${colors.reset}`);
      console.log(`  ${colors.red}Unmapped: ${unmappedAssets.length}${colors.reset}`);
      
      if (unmappedAssets.length > 0) {
        console.log(`\n${colors.bright}Unmapped assets:${colors.reset}`);
        unmappedAssets.forEach(asset => console.log(`  ${colors.red}- ${asset}${colors.reset}`));
        console.log(generateMappingUpdate(unmappedAssets));
      }
      
      const missingFiles = Object.entries(localImageStatus)
        .filter(([_, info]) => !info.exists)
        .map(([hash, info]) => ({ hash, ...info }));
      
      if (missingFiles.length > 0) {
        console.log(`\n${colors.bright}Missing local files:${colors.reset}`);
        missingFiles.forEach(({ hash, path }) => 
          console.log(`  ${colors.red}- ${hash} → ${path}${colors.reset}`)
        );
      }
      
      break;
      
    case 'setup':
      log.info('Setting up image directories...');
      await createImageDirectories();
      log.success('Image directories created!');
      break;
      
    case 'placeholders':
      log.info('Creating placeholder images for unmapped assets...');
      const allAssets = await scanFigmaAssets();
      const allMappings = await getCurrentMappings();
      const unmapped = allAssets.filter(asset => !allMappings[asset]);
      
      if (unmapped.length === 0) {
        log.success('All assets are mapped! No placeholders needed.');
      } else {
        await createPlaceholderImages(unmapped);
        log.success(`Created ${unmapped.length} placeholder images`);
      }
      break;
      
    case 'help':
    default:
      console.log(`
${colors.bright}Planfirma Image Manager${colors.reset}

${colors.bright}Usage:${colors.reset}
  npm run image-manager <command>

${colors.bright}Commands:${colors.reset}
  ${colors.cyan}scan${colors.reset}         - Scan project for Figma assets and show mapping status
  ${colors.cyan}setup${colors.reset}        - Create image directory structure
  ${colors.cyan}placeholders${colors.reset} - Generate placeholder images for unmapped assets
  ${colors.cyan}help${colors.reset}         - Show this help message

${colors.bright}Examples:${colors.reset}
  npm run image-manager scan
  npm run image-manager setup
  npm run image-manager placeholders

${colors.bright}Directory Structure:${colors.reset}
  public/images/
  ├── partners/     # Partner and brand logos
  ├── team/         # Team member photos  
  ├── services/     # Service-related imagery
  ├── consulting/   # IT consulting images
  ├── office/       # Office and workspace photos
  ├── placeholders/ # Placeholder images
  └── backgrounds/  # Background images
`);
      break;
  }
}

// Run the script
main().catch(err => {
  log.error(`Script failed: ${err.message}`);
  process.exit(1);
});