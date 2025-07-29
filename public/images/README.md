# Local Images Directory

This directory contains local images for development when Figma assets are not available.

## Directory Structure

```
public/images/
├── partners/          # Partner and brand logos
├── team/             # Team member photos
├── services/         # Service-related imagery
├── consulting/       # IT consulting images
├── office/           # Office and workspace photos
├── placeholders/     # Placeholder images
└── backgrounds/      # Background images
```

## Usage

Images in this directory can be accessed in components using:
- Direct path: `/images/category/filename.png`
- Through ImageWithFallback component for automatic fallbacks

## Naming Convention

Use descriptive names with lowercase and hyphens:
- `partner-aws-logo.png`
- `office-modern-workspace.jpg`
- `team-professional-woman.jpg`
- `service-cybersecurity.png`