/**
 * Examples of how to use the new image management system
 * These examples show different scenarios for using ImageWithFallback
 */

import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Example 1: Basic usage with local image
export function BasicImageExample() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Basic Local Image</h3>
      <ImageWithFallback 
        src="/images/office/modern-workspace.jpg" 
        alt="Modern office workspace" 
        className="w-full max-w-md rounded-lg shadow-md"
      />
    </div>
  );
}

// Example 2: Figma asset with category fallback
export function FigmaAssetExample() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Figma Asset with Fallback</h3>
      <ImageWithFallback 
        src="figma:asset/35e0d21e5a798991d822c7d4f6381120fa7cbbab.png"
        alt="Professional working on laptop"
        category="office"
        className="w-64 h-48 object-cover rounded-lg"
      />
    </div>
  );
}

// Example 3: Partner logo with custom fallback
export function PartnerLogoExample() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Partner Logo</h3>
      <ImageWithFallback 
        src="figma:asset/842f305051c82d7ab507109953a37071407a4919.png"
        alt="AWS Logo"
        category="partner"
        fallback="/images/partners/aws-logo-fallback.png"
        className="h-16 w-auto"
      />
    </div>
  );
}

// Example 4: Team member photo with debug mode
export function TeamMemberExample() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Team Member (Debug Mode)</h3>
      <ImageWithFallback 
        src="figma:asset/some-team-member-hash.png"
        alt="Team member photo"
        category="team"
        debug={true}
        className="w-32 h-32 rounded-full object-cover"
      />
    </div>
  );
}

// Example 5: Service card with multiple fallback levels
export function ServiceCardExample() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-sm">
      <h3 className="text-lg font-semibold mb-4">Service Card</h3>
      <ImageWithFallback 
        src="figma:asset/service-cybersecurity-hash.png"
        alt="Cybersecurity services"
        category="service"
        fallback="/images/services/cybersecurity-custom.jpg"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h4 className="text-xl font-bold text-gray-900">Cybersecurity</h4>
      <p className="text-gray-600">Protect your business with our advanced security solutions.</p>
    </div>
  );
}

// Example 6: Hero section background
export function HeroSectionExample() {
  return (
    <div className="relative h-96 overflow-hidden rounded-lg">
      <h3 className="absolute top-4 left-4 text-lg font-semibold text-white z-10">Hero Background</h3>
      <ImageWithFallback 
        src="/images/backgrounds/hero-office.jpg"
        alt="Modern office background"
        category="office"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Your Business Solutions</h1>
          <p className="text-xl">Professional IT consulting services</p>
        </div>
      </div>
    </div>
  );
}

// Example 7: Grid of partner logos
export function PartnerGridExample() {
  const partners = [
    { src: "figma:asset/aws-logo-hash.png", alt: "AWS" },
    { src: "figma:asset/azure-logo-hash.png", alt: "Microsoft Azure" },
    { src: "figma:asset/gcp-logo-hash.png", alt: "Google Cloud" },
    { src: "figma:asset/acronis-logo-hash.png", alt: "Acronis" },
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Partner Logos Grid</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <ImageWithFallback 
              src={partner.src}
              alt={partner.alt}
              category="partner"
              className="h-12 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Example 8: Responsive image with different sizes
export function ResponsiveImageExample() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Responsive Image</h3>
      <ImageWithFallback 
        src="/images/office/team-collaboration.jpg"
        alt="Team collaboration"
        category="office"
        className="w-full h-auto 
                   sm:max-w-sm sm:h-64 sm:object-cover 
                   md:max-w-md md:h-80 
                   lg:max-w-lg lg:h-96 
                   rounded-lg shadow-lg"
      />
    </div>
  );
}

// Complete example component showing all patterns
export function ImageExamplesShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Image Management Examples</h1>
        
        <div className="grid gap-8">
          <BasicImageExample />
          <FigmaAssetExample />
          <PartnerLogoExample />
          <TeamMemberExample />
          <ServiceCardExample />
          <HeroSectionExample />
          <PartnerGridExample />
          <ResponsiveImageExample />
        </div>
      </div>
    </div>
  );
}

export default ImageExamplesShowcase;