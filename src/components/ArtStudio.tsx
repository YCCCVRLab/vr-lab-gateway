import React, { useState } from 'react';
import { 
  Palette, 
  ExternalLink, 
  Star, 
  Download, 
  Play, 
  Brush, 
  Layers, 
  Sparkles,
  ArrowLeft,
  Info,
  Globe,
  Zap,
  Shapes,
  PaintBucket,
  Wand2
} from "lucide-react";

interface VRTool {
  name: string;
  description: string;
  url: string;
  category: 'Professional' | 'Beginner' | 'Experimental' | 'Free';
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  rating?: number;
  price?: string;
}

const vrArtTools: VRTool[] = [
  {
    name: "Quill",
    description: "Professional VR illustration and animation tool by Meta",
    url: "https://quill.art/",
    category: "Professional",
    features: ["3D Painting", "Animation Timeline", "Volumetric Brushes", "Export to Film"],
    icon: Brush,
    color: "bg-blue-600",
    rating: 4.8,
    price: "Free"
  },
  {
    name: "Gravity Sketch",
    description: "3D design and ideation platform for creative workflows",
    url: "https://landingpad.me/user/files",
    category: "Professional", 
    features: ["3D Sketching", "CAD Integration", "Collaboration", "Surface Modeling"],
    icon: Shapes,
    color: "bg-purple-600",
    rating: 4.7,
    price: "Free/Pro"
  },
  {
    name: "OpenBrush",
    description: "Open-source VR painting application, successor to Tilt Brush",
    url: "https://openbrush.app/",
    category: "Free",
    features: ["3D Painting", "Animated Brushes", "Community Brushes", "Open Source"],
    icon: PaintBucket,
    color: "bg-green-600",
    rating: 4.5,
    price: "Free"
  },
  {
    name: "Tvori",
    description: "VR storytelling and animation platform",
    url: "https://tvori.co/",
    category: "Professional",
    features: ["Character Animation", "Storytelling Tools", "Scene Composition", "Voice Recording"],
    icon: Play,
    color: "bg-red-600",
    rating: 4.4,
    price: "Subscription"
  },
  {
    name: "Unfold VR",
    description: "Immersive 3D design and prototyping tool",
    url: "https://www.unfoldvr.com/",
    category: "Professional",
    features: ["UI/UX Design", "3D Prototyping", "Spatial Design", "Export Options"],
    icon: Layers,
    color: "bg-indigo-600",
    rating: 4.3,
    price: "Pro"
  },
  {
    name: "Poly Studio",
    description: "VR sculpting and modeling application",
    url: "https://polystudioapp.com/",
    category: "Beginner",
    features: ["Digital Sculpting", "Intuitive Controls", "Model Export", "Beginner Friendly"],
    icon: Wand2,
    color: "bg-orange-600",
    rating: 4.2,
    price: "Paid"
  },
  {
    name: "Ollie VR",
    description: "Virtual reality content creation platform",
    url: "https://ollievr.com/",
    category: "Experimental",
    features: ["Content Creation", "Interactive Experiences", "Multi-platform", "Experimental Features"],
    icon: Sparkles,
    color: "bg-cyan-600",
    rating: 4.0,
    price: "Beta"
  },
  {
    name: "Overlay MR",
    description: "Mixed reality design and visualization tool",
    url: "https://overlaymr.com/",
    category: "Professional",
    features: ["Mixed Reality", "Real-world Integration", "Design Visualization", "AR/VR Hybrid"],
    icon: Zap,
    color: "bg-yellow-600",
    rating: 4.1,
    price: "Pro"
  }
];

const tutorials = [
  {
    title: "Getting Started with VR Art",
    description: "Learn the basics of creating art in virtual reality",
    duration: "15 min",
    level: "Beginner"
  },
  {
    title: "Advanced Quill Techniques", 
    description: "Master professional illustration workflows in Quill",
    duration: "30 min",
    level: "Advanced"
  },
  {
    title: "3D Sculpting Fundamentals",
    description: "Core principles of digital sculpting in VR",
    duration: "25 min", 
    level: "Intermediate"
  },
  {
    title: "Animation in VR Space",
    description: "Create compelling animations using VR tools",
    duration: "40 min",
    level: "Advanced"
  }
];

interface ArtStudioProps {
  theme?: 'xp' | 'vista';
  onBack?: () => void;
}

export const ArtStudio: React.FC<ArtStudioProps> = ({ theme = 'vista', onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTool, setSelectedTool] = useState<VRTool | null>(null);

  const categories = ['All', 'Professional', 'Beginner', 'Experimental', 'Free'];
  
  const filteredTools = selectedCategory === 'All' 
    ? vrArtTools 
    : vrArtTools.filter(tool => tool.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Professional': return 'bg-blue-100 text-blue-800';
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Experimental': return 'bg-purple-100 text-purple-800';
      case 'Free': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  if (selectedTool) {
    return (
      <div className={`art-studio-detail ${theme}`}>
        <div className={`detail-header ${theme === 'xp' ? 'xp-header' : 'vista-header'}`}>
          <button 
            onClick={() => setSelectedTool(null)}
            className={`back-button ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className={`detail-title ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
            {selectedTool.name}
          </h1>
        </div>

        <div className="detail-content p-6">
          <div className="tool-overview mb-8">
            <div className="flex items-start gap-6">
              <div className={`tool-icon-large ${selectedTool.color} p-6 rounded-2xl`}>
                <selectedTool.icon className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`category-badge ${getCategoryColor(selectedTool.category)} px-3 py-1 rounded-full text-sm font-medium`}>
                    {selectedTool.category}
                  </span>
                  {selectedTool.price && (
                    <span className="price-badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedTool.price}
                    </span>
                  )}
                </div>
                <p className={`tool-description text-lg mb-4 ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                  {selectedTool.description}
                </p>
                {selectedTool.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {renderStars(selectedTool.rating)}
                    </div>
                    <span className={`rating-text ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                      {selectedTool.rating}/5.0
                    </span>
                  </div>
                )}
                <div className="action-buttons flex gap-3">
                  <a
                    href={selectedTool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`visit-button ${theme === 'xp' ? 'xp-button-primary' : 'vista-button-primary'} flex items-center gap-2`}
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </a>
                  <button className={`demo-button ${theme === 'xp' ? 'xp-button' : 'vista-button'} flex items-center gap-2`}>
                    <Play className="w-4 h-4" />
                    Try Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="features-section mb-8">
            <h3 className={`section-title text-xl font-bold mb-4 ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
              Key Features
            </h3>
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedTool.features.map((feature, index) => (
                <div key={index} className={`feature-item ${theme === 'xp' ? 'xp-card' : 'vista-card'} p-4 flex items-center gap-3`}>
                  <div className="feature-icon bg-blue-100 p-2 rounded-lg">
                    <Info className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className={`feature-text ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`art-studio ${theme}`}>
      {/* Header */}
      <div className={`studio-header ${theme === 'xp' ? 'xp-header' : 'vista-header'} p-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <button 
                onClick={onBack}
                className={`back-button ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div className="header-content">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-pink-500 p-3 rounded-xl">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
                    Art Studio
                  </h1>
                  <p className={`${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                    Professional VR Art & Design Tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter flex gap-2 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? theme === 'xp' ? 'xp-button-active' : 'vista-button-active'
                  : theme === 'xp' ? 'xp-button' : 'vista-button'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="studio-content p-6">
        {/* Tools Grid */}
        <div className="tools-section mb-8">
          <h2 className={`section-title text-xl font-bold mb-4 ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
            Recommended VR Art Tools
          </h2>
          <div className="tools-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedTool(tool)}
                  className={`tool-card ${theme === 'xp' ? 'xp-card' : 'vista-card'} p-6 cursor-pointer hover:shadow-lg transition-all`}
                >
                  <div className="card-header flex items-start justify-between mb-4">
                    <div className={`tool-icon ${tool.color} p-3 rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`category-badge ${getCategoryColor(tool.category)} px-2 py-1 rounded-full text-xs font-medium`}>
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className={`tool-name text-lg font-bold mb-2 ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
                    {tool.name}
                  </h3>
                  
                  <p className={`tool-description text-sm mb-4 ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                    {tool.description}
                  </p>
                  
                  {tool.rating && (
                    <div className="rating flex items-center gap-2 mb-4">
                      <div className="flex">
                        {renderStars(tool.rating)}
                      </div>
                      <span className={`rating-text text-sm ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                        {tool.rating}
                      </span>
                    </div>
                  )}
                  
                  <div className="card-footer flex items-center justify-between">
                    <span className={`price text-sm font-medium ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
                      {tool.price || 'Contact'}
                    </span>
                    <ExternalLink className={`w-4 h-4 ${theme === 'xp' ? 'text-blue-600' : 'text-indigo-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tutorials Section */}
        <div className="tutorials-section">
          <h2 className={`section-title text-xl font-bold mb-4 ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
            Learning Resources
          </h2>
          <div className="tutorials-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            {tutorials.map((tutorial, index) => (
              <div key={index} className={`tutorial-card ${theme === 'xp' ? 'xp-card' : 'vista-card'} p-4 cursor-pointer hover:shadow-md transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="tutorial-icon bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-lg">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`tutorial-title font-semibold mb-1 ${theme === 'xp' ? 'xp-text' : 'vista-text'}`}>
                      {tutorial.title}
                    </h4>
                    <p className={`tutorial-description text-sm mb-2 ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                      {tutorial.description}
                    </p>
                    <div className="tutorial-meta flex items-center gap-4 text-xs">
                      <span className={`duration ${theme === 'xp' ? 'xp-text-muted' : 'vista-text-muted'}`}>
                        ⏱️ {tutorial.duration}
                      </span>
                      <span className={`level ${getCategoryColor(tutorial.level)} px-2 py-1 rounded-full`}>
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};