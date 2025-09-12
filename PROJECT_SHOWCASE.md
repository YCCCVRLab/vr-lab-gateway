# VR Lab Project Showcase

The VR Lab Gateway now includes a comprehensive Project Showcase feature that displays all your VR/AR/XR projects with QR codes for easy access.

## Features

### 🚀 Project Gallery
- **Categorized Projects**: Filter by VR, AR, XR, or Web projects
- **QR Code Integration**: Each project has a scannable QR code for instant access
- **Project Details**: View descriptions, stats, tags, and platform information
- **Direct Links**: Launch projects directly from the gallery

### 📱 QR Code Support
- **Instant Access**: Scan QR codes with any device camera
- **Mobile Friendly**: Optimized for phone and tablet viewing
- **VR Headset Compatible**: Works with VR headset browsers

### 🎨 Modern Design
- **Glass Morphism**: Beautiful frosted glass effects
- **Responsive Layout**: Works on all screen sizes
- **Smooth Animations**: Engaging hover effects and transitions
- **Category Colors**: Visual distinction between project types

## Current Projects

### Spatial.io Environments
1. **YCCC VR Lab Hanger Bay**
   - Immersive hangar space for collaborative learning
   - URL: https://www.spatial.io/s/YCCC_VR_Labs-Hanger-Bay-68c2cba7d1b5b2775bb949b0?share=885825081300888228
   - Category: VR
   - Platform: Spatial.io

2. **YCCC VR Lab Home**
   - Main hub for VR Lab experience
   - URL: https://www.spatial.io/s/YCCC_VR_Labs-Home
   - Category: VR
   - Platform: Spatial.io

3. **YCCC VR Lab Next Place**
   - Experimental space for testing new concepts
   - URL: https://www.spatial.io/s/YCCC_VR_Labs-Next-Place
   - Category: XR
   - Platform: Spatial.io

### Web Applications
4. **VR Training Course Website**
   - Interactive course with videos and quizzes
   - URL: https://ycccvrlab.github.io/vr-training-course
   - Category: Web
   - Platform: GitHub Pages

## How to Access

### From Desktop Interface
1. Click the 🚀 "VR Projects" icon on the desktop
2. Or click the rocket icon in the taskbar quick launch

### From Mobile/Tablet
1. Navigate to: https://ycccvrlab.github.io/vr-lab-gateway/projects
2. Browse projects and scan QR codes as needed

### QR Code Usage
1. Click the QR code icon on any project card
2. Scan with your device camera or VR headset
3. The link will open directly in your browser

## Adding New Projects

To add new projects to the showcase, edit the `vrProjects` array in `/src/components/ProjectShowcase.tsx`:

```typescript
const vrProjects: Project[] = [
  {
    id: 'unique-project-id',
    title: 'Project Name',
    description: 'Detailed description of the project',
    url: 'https://project-url.com',
    type: 'spatial' | 'web' | 'app' | 'game',
    platform: 'Platform Name',
    category: 'VR' | 'AR' | 'XR' | 'Web',
    tags: ['tag1', 'tag2', 'tag3'],
    stats: {
      views: 100,
      users: 25,
      lastUpdated: '2024-12-12'
    }
  }
];
```

## Technical Features

### Components
- **ProjectShowcase**: Main gallery component
- **ProjectCard**: Individual project display
- **QRModal**: QR code display modal
- **Projects Page**: Full-page modern layout

### Styling
- **Glass Morphism**: Frosted glass effects with backdrop blur
- **Category Gradients**: Color-coded project types
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Transitions**: CSS animations and hover effects

### Navigation
- **Retro Desktop**: Traditional desktop interface with project launcher
- **Modern Layout**: Clean, professional project gallery
- **Seamless Integration**: Easy switching between interfaces

## Future Enhancements

- [ ] Project search functionality
- [ ] Favorite projects system
- [ ] Project analytics dashboard
- [ ] Bulk QR code generation
- [ ] Project submission form
- [ ] Integration with LMS systems
- [ ] VR headset optimization
- [ ] Offline QR code support

## Support

For questions or issues with the Project Showcase:
- Visit the VR Lab (Room 112, Wells Campus)
- Hours: Monday-Friday 8:00 AM - 4:30 PM
- Contact: VR Lab Staff

---

*Last updated: December 12, 2024*