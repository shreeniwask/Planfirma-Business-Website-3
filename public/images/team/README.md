# Team Member Images & LinkedIn Profiles

This directory contains professional headshots of Planfirma team members displayed on the About Us page, with clickable links to their LinkedIn profiles.

## 📋 **Current Team Members & LinkedIn URLs**

### 1. Arun Srivastav - CEO
- **Filename**: `arun-srivastav.webp`
- **Position**: Chief Executive Officer
- **LinkedIn URL**: `https://www.linkedin.com/in/arun-srivastav`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

### 2. Anuradha Srivastava - CTO  
- **Filename**: `anuradha-srivastava.webp`
- **Position**: Chief Technology Officer
- **LinkedIn URL**: `https://www.linkedin.com/in/anuradha-srivastava`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

### 3. Swati Rao - Finance Manager
- **Filename**: `swati-rao.webp`
- **Position**: Finance Manager
- **LinkedIn URL**: `https://www.linkedin.com/in/swati-rao`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

### 4. Kinjal Gandhi - Product Manager
- **Filename**: `kinjal-gandhi.webp`
- **Position**: Product Manager
- **LinkedIn URL**: `https://www.linkedin.com/in/kinjal-gandhi`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

### 5. Ravinder Singh - Delivery Manager
- **Filename**: `ravinder-singh.webp`
- **Position**: Delivery Manager
- **LinkedIn URL**: `https://www.linkedin.com/in/ravinder-singh`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

### 6. Vinod Shirke - Delivery Manager
- **Filename**: `vinod-shirke.webp`
- **Position**: Delivery Manager
- **LinkedIn URL**: `https://www.linkedin.com/in/vinod-shirke`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

### 7. Joji Varghese - Project Manager
- **Filename**: `joji-varghese.webp`
- **Position**: Project Manager
- **LinkedIn URL**: `https://www.linkedin.com/in/joji-varghese`
- **Recommended size**: 500x500px minimum
- **Format**: WebP (recommended) or JPG/PNG

## 🔗 **LinkedIn Profile Management**

### **How to Update LinkedIn URLs:**

1. **Locate the file**: `components/AboutUs.tsx`
2. **Find the teamMembers array** (around line 22-40)
3. **Update the linkedin property** for each team member:

```typescript
const teamMembers = [
  { 
    name: "Arun Srivastav", 
    position: "CEO", 
    avatar: "/images/team/arun-srivastav.webp",
    linkedin: "https://www.linkedin.com/in/arun-srivastav" // ← Update this URL
  },
  // ... other team members
];
```

### **LinkedIn URL Format:**
- **Standard format**: `https://www.linkedin.com/in/[username]`
- **Custom URLs**: `https://www.linkedin.com/in/[custom-name]`
- **Company pages**: `https://www.linkedin.com/company/[company-name]`

### **Adding New Team Members:**

1. **Add the image** to this directory with the format: `[firstname-lastname].webp`
2. **Update the teamMembers array** in `components/AboutUs.tsx`:

```typescript
{ 
  name: "New Team Member", 
  position: "New Position", 
  avatar: "/images/team/new-team-member.webp",
  linkedin: "https://www.linkedin.com/in/new-team-member"
}
```

### **Removing Team Members:**

1. **Delete the image** from this directory
2. **Remove the object** from the `teamMembers` array in `components/AboutUs.tsx`

## 🎨 **Image Guidelines**

- **Format**: **WebP recommended** for best performance (smaller file sizes, excellent quality)
- **Aspect Ratio**: Square (1:1) required for circular display
- **Resolution**: Minimum 500x500px for crisp display across all devices
- **File Size**: WebP typically 25-50% smaller than JPEG while maintaining quality
- **Quality**: Professional headshots with good lighting
- **Background**: Clean, professional backgrounds work best
- **Composition**: Face should be centered and clearly visible

## ✨ **Interactive Features**

### **Hover Effects:**
- **Image scaling**: Photos scale up slightly on hover
- **Border color change**: Border changes to brand green on hover
- **LinkedIn icon**: Blue LinkedIn icon appears in top-right corner on hover
- **Shadow enhancement**: Shadow becomes more prominent on hover

### **Accessibility:**
- **Screen reader support**: Proper aria-labels for LinkedIn links
- **Keyboard navigation**: Links are keyboard accessible
- **Focus indicators**: Clear focus states for accessibility

## 🚀 **Deployment Handover Guide**

### **For New Team Members:**
1. **Get professional headshot** (500x500px minimum, WebP format)
2. **Save as**: `[firstname-lastname].webp` in this directory
3. **Get LinkedIn profile URL** from the team member
4. **Update** `components/AboutUs.tsx` with new member data

### **For LinkedIn URL Updates:**
1. **Get new LinkedIn URL** from team member
2. **Update** the `linkedin` property in `components/AboutUs.tsx`
3. **Test** the link opens correctly in new tab

### **For Image Updates:**
1. **Replace the image file** with the same filename
2. **Clear browser cache** to see the new image
3. **Test** the image displays correctly

### **File Structure:**
```
public/images/team/
├── README.md                    # This file
├── arun-srivastav.webp         # CEO
├── anuradha-srivastava.webp    # CTO
├── swati-rao.webp              # Finance Manager
├── kinjal-gandhi.webp          # Product Manager
├── ravinder-singh.webp         # Delivery Manager
├── vinod-shirke.webp           # Delivery Manager
└── joji-varghese.webp          # Project Manager
```

## 🔧 **Technical Notes**

- **Component**: `components/AboutUs.tsx`
- **Image component**: `ImageWithFallback` with category="team"
- **Fallback**: Uses placeholder if image not found
- **Performance**: WebP images optimized for fast loading
- **SEO**: Proper alt text and semantic markup
- **Security**: `rel="noopener noreferrer"` for external links

## 📞 **Support**

For technical issues or questions about team member management:
- **Check this README** first for common tasks
- **Review the code** in `components/AboutUs.tsx`
- **Test changes** in development environment before deployment 