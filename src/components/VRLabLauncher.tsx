import React from 'react';
import { 
  Box, 
  Palette, 
  Camera, 
  Gamepad2, 
  Building, 
  Music,
  Code,
  Headphones,
  Brain,
  Sparkles,
  Eye,
  ExternalLink,
  User,
  Settings
} from "lucide-react";

interface VRApp {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  bgColor: string;
}

const vrApps: VRApp[] = [
  {
    title: "3D Modeling",
    description: "Create 3D models with hand gestures",
    icon: Box,
    iconColor: "text-white",
    bgColor: "bg-blue-500"
  },
  {
    title: "Art Studio", 
    description: "Paint in virtual 3D space",
    icon: Palette,
    iconColor: "text-white",
    bgColor: "bg-pink-500"
  },
  {
    title: "VR Camera",
    description: "Capture 360° photos and videos", 
    icon: Camera,
    iconColor: "text-white",
    bgColor: "bg-indigo-500"
  },
  {
    title: "Game Studio",
    description: "Build VR games visually",
    icon: Gamepad2,
    iconColor: "text-white", 
    bgColor: "bg-green-500"
  },
  {
    title: "Architecture",
    description: "Design buildings in VR",
    icon: Building,
    iconColor: "text-white",
    bgColor: "bg-orange-500"
  },
  {
    title: "Music Studio",
    description: "Compose with spatial audio",
    icon: Music,
    iconColor: "text-white",
    bgColor: "bg-purple-500"
  },
  {
    title: "Neural Lab",
    description: "Brain training exercises", 
    icon: Brain,
    iconColor: "text-white",
    bgColor: "bg-rose-500"
  },
  {
    title: "Code Space",
    description: "Program in 3D environments",
    icon: Code,
    iconColor: "text-white",
    bgColor: "bg-slate-500"
  },
  {
    title: "Audio Lab", 
    description: "3D sound design studio",
    icon: Headphones,
    iconColor: "text-white",
    bgColor: "bg-amber-500"
  },
  {
    title: "Magic Lab",
    description: "Physics through magic",
    icon: Sparkles,
    iconColor: "text-white", 
    bgColor: "bg-violet-500"
  }
];

interface RetroAppCardProps {
  app: VRApp;
  theme: 'xp' | 'vista';
}

const RetroAppCard: React.FC<RetroAppCardProps> = ({ app, theme }) => {
  const IconComponent = app.icon;
  
  return (
    <div className={`retro-app-card ${theme === 'xp' ? 'xp-card' : 'vista-card'} cursor-pointer`}>
      <div className={`app-icon-container ${app.bgColor} rounded-lg`}>
        <IconComponent className={`w-8 h-8 ${app.iconColor}`} />
      </div>
      <div className="app-info">
        <h3 className={`app-title ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
          {app.title}
        </h3>
        <p className={`app-description ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
          {app.description}
        </p>
      </div>
    </div>
  );
};

export const VRLabLauncher: React.FC = () => {
  // Detect theme from parent context or default to vista
  const theme = document.querySelector('.xp-window') ? 'xp' : 'vista';
  
  return (
    <div className={`retro-launcher ${theme}`}>
      {/* Header */}
      <div className={`launcher-header ${theme === 'xp' ? 'xp-header' : 'vista-header'}`}>
        <div className="header-content">
          <div className="header-left">
            <div className={`app-logo ${theme === 'xp' ? 'xp-logo' : 'vista-logo'}`}>
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="header-text">
              <h1 className={`header-title ${theme === 'xp' ? 'xp-title' : 'vista-title'}`}>
                VR Lab
              </h1>
              <p className={`header-subtitle ${theme === 'xp' ? 'xp-subtitle' : 'vista-subtitle'}`}>
                Virtual Reality Learning Center
              </p>
            </div>
          </div>
          
          <div className="header-actions">
            <a 
              href="https://clever.com/in/yccc" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`portal-button ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}
            >
              <ExternalLink className="w-4 h-4" />
              VR Lab Portal
            </a>
            <button className={`icon-button ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}>
              <User className="w-4 h-4" />
            </button>
            <button className={`icon-button ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}>
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="launcher-content">
        {/* Apps Grid */}
        <div className="apps-grid">
          {vrApps.map((app, index) => (
            <RetroAppCard 
              key={app.title} 
              app={app} 
              theme={theme}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`launcher-footer ${theme === 'xp' ? 'xp-footer' : 'vista-footer'}`}>
          <div className={`cta-card ${theme === 'xp' ? 'xp-card' : 'vista-card'}`}>
            <h3 className={`cta-title ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
              Ready for Full VR?
            </h3>
            <p className={`cta-description ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
              Experience these tools with our VR headsets
            </p>
            <div className="cta-buttons">
              <button className={`primary-button ${theme === 'xp' ? 'xp-button-primary' : 'vista-button-primary'}`}>
                Book Session
              </button>
              <button className={`secondary-button ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}>
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};