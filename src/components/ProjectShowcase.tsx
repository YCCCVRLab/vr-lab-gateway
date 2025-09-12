import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  ExternalLink, 
  QrCode, 
  Globe, 
  Eye, 
  Users, 
  Calendar,
  MapPin,
  Headphones,
  Gamepad2,
  Camera,
  Zap,
  ChevronRight,
  Star,
  Award,
  Rocket,
  BookOpen
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'spatial' | 'web' | 'app' | 'game';
  thumbnail?: string;
  tags: string[];
  qrCode?: string;
  stats?: {
    views?: number;
    users?: number;
    lastUpdated?: string;
  };
  platform: string;
  category: 'VR' | 'AR' | 'XR' | 'Web';
  featured?: boolean;
  status: 'active' | 'beta' | 'coming-soon';
}

const vrProjects: Project[] = [
  {
    id: 'spatial-hanger-bay',
    title: 'YCCC VR Lab Hanger Bay',
    description: 'An immersive virtual hangar space designed for collaborative learning and exploration. Features interactive elements, spatial audio, and realistic aviation environments perfect for aerospace education.',
    url: 'https://www.spatial.io/s/YCCC_VR_Labs-Hanger-Bay-68c2cba7d1b5b2775bb949b0?share=885825081300888228',
    type: 'spatial',
    platform: 'Spatial.io',
    category: 'VR',
    tags: ['Collaboration', 'Learning', 'Virtual Space', 'Aviation', 'Interactive'],
    featured: true,
    status: 'active',
    stats: {
      views: 11,
      users: 25,
      lastUpdated: '2024-12-10'
    }
  },
  {
    id: 'vr-training-course',
    title: 'The Hawk - VR Training Course',
    description: 'Interactive course website featuring comprehensive VR training modules, video tutorials, quizzes, and hands-on learning experiences. Your gateway to mastering virtual reality technology.',
    url: 'https://ycccvrlab.github.io/vr-training-course',
    type: 'web',
    platform: 'GitHub Pages',
    category: 'Web',
    tags: ['Education', 'Training', 'Interactive', 'Quizzes', 'Certification'],
    featured: true,
    status: 'active',
    stats: {
      views: 150,
      users: 45,
      lastUpdated: '2024-12-11'
    }
  },
  {
    id: 'spatial-home',
    title: 'YCCC VR Lab Home',
    description: 'The main hub for the VR Lab experience, featuring information displays and navigation to other virtual spaces.',
    url: 'https://www.spatial.io/s/YCCC_VR_Labs-Home',
    type: 'spatial',
    platform: 'Spatial.io',
    category: 'VR',
    tags: ['Hub', 'Navigation', 'Information', 'Welcome'],
    status: 'active',
    stats: {
      views: 3,
      users: 15,
      lastUpdated: '2024-12-09'
    }
  },
  {
    id: 'spatial-next-place',
    title: 'YCCC VR Lab Next Place XR',
    description: 'An experimental space for testing new VR concepts and future learning environments.',
    url: 'https://www.spatial.io/s/YCCC_VR_Labs-Next-Place',
    type: 'spatial',
    platform: 'Spatial.io',
    category: 'XR',
    tags: ['Experimental', 'Future', 'Testing', 'Innovation'],
    status: 'beta',
    stats: {
      views: 7,
      users: 12,
      lastUpdated: '2024-12-08'
    }
  }
];

const FeaturedProjectCard: React.FC<{ 
  project: Project; 
  onShowQR: (project: Project) => void;
  delay: number;
}> = ({ project, onShowQR, delay }) => {
  const getIcon = () => {
    switch (project.type) {
      case 'spatial': return Globe;
      case 'web': return BookOpen;
      case 'app': return Headphones;
      case 'game': return Gamepad2;
      default: return Eye;
    }
  };

  const Icon = getIcon();

  return (
    <div 
      className="relative glass-card rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 group animate-fade-in border border-white/20 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Featured Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-xs font-medium text-yellow-400">Featured</span>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex items-start gap-4 mb-6 relative z-10">
        <div className={`w-16 h-16 rounded-2xl gradient-${project.category.toLowerCase()} flex items-center justify-center shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-sm">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${project.category.toLowerCase()}-500/20 text-${project.category.toLowerCase()}-300 border border-${project.category.toLowerCase()}-500/30`}>
              {project.category}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{project.platform}</span>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'active' ? 'bg-green-500/20 text-green-400' :
              project.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-blue-500/20 text-blue-400'
            }`}>
              {project.status === 'active' ? 'Live' : 
               project.status === 'beta' ? 'Beta' : 'Coming Soon'}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed relative z-10">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-muted-foreground hover:bg-white/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      {project.stats && (
        <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground relative z-10">
          {project.stats.views && (
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span className="font-medium">{project.stats.views} views</span>
            </div>
          )}
          {project.stats.users && (
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{project.stats.users} users</span>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4 relative z-10">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 gradient-primary px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg"
        >
          <Rocket className="w-5 h-5" />
          <span>Launch</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        
        <button
          onClick={() => onShowQR(project)}
          className="w-12 h-12 rounded-xl glass-card hover:bg-white/20 transition-colors flex items-center justify-center group/qr"
          title="Show QR Code"
        >
          <QrCode className="w-6 h-6 text-muted-foreground group-hover/qr:text-primary transition-colors" />
        </button>

        <button
          onClick={() => navigator.share?.({ 
            title: project.title, 
            text: project.description, 
            url: project.url 
          }) || navigator.clipboard.writeText(project.url)}
          className="glass-card px-4 py-3 rounded-xl font-semibold text-foreground hover:bg-white/20 transition-colors"
        >
          Share
        </button>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ 
  project: Project; 
  onShowQR: (project: Project) => void;
  delay: number;
}> = ({ project, onShowQR, delay }) => {
  const getIcon = () => {
    switch (project.type) {
      case 'spatial': return Globe;
      case 'web': return ExternalLink;
      case 'app': return Headphones;
      case 'game': return Gamepad2;
      default: return Eye;
    }
  };

  const Icon = getIcon();

  return (
    <div 
      className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group animate-fade-in border border-white/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl gradient-${project.category.toLowerCase()} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${project.category.toLowerCase()}-500/20 text-${project.category.toLowerCase()}-300`}>
                {project.category}
              </span>
              <span>•</span>
              <span>{project.platform}</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onShowQR(project)}
          className="w-10 h-10 rounded-lg glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
          title="Show QR Code"
        >
          <QrCode className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Stats */}
      {project.stats && (
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          {project.stats.views && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{project.stats.views} views</span>
            </div>
          )}
          {project.stats.users && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{project.stats.users} users</span>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 gradient-primary px-4 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <span>Launch</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        
        <button
          onClick={() => navigator.share?.({ 
            title: project.title, 
            text: project.description, 
            url: project.url 
          }) || navigator.clipboard.writeText(project.url)}
          className="glass-card px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-white/10 transition-colors"
        >
          Share
        </button>
      </div>
    </div>
  );
};

const QRModal: React.FC<{ 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void; 
}> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 max-w-md w-full animate-fade-in border border-white/20">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Scan to Access
          </h3>
          <p className="text-muted-foreground mb-6">
            {project.title}
          </p>
          
          <div className="bg-white p-6 rounded-2xl mb-6 inline-block shadow-lg">
            <QRCodeSVG 
              value={project.url} 
              size={200}
              level="M"
              includeMargin={true}
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Scan with your phone camera or VR headset
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => navigator.clipboard.writeText(project.url)}
                className="flex-1 glass-card px-4 py-3 rounded-xl font-semibold text-foreground hover:bg-white/10 transition-colors"
              >
                Copy Link
              </button>
              <button
                onClick={onClose}
                className="flex-1 gradient-primary px-4 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [filter, setFilter] = useState<'all' | 'VR' | 'AR' | 'XR' | 'Web'>('all');

  const featuredProjects = vrProjects.filter(p => p.featured);
  const regularProjects = vrProjects.filter(p => !p.featured);

  const filteredRegularProjects = filter === 'all' 
    ? regularProjects 
    : regularProjects.filter(p => p.category === filter);

  const handleShowQR = (project: Project) => {
    setSelectedProject(project);
    setShowQR(true);
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium">
            <Award className="w-4 h-4 text-primary" />
            <span>Our Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            VR/AR/XR <span className="gradient-primary bg-clip-text text-transparent">Experience Gallery</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of immersive experiences, virtual spaces, and educational tools. 
            Scan QR codes for instant access on any device.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <h3 className="text-2xl font-bold text-foreground">Featured Projects</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  onShowQR={handleShowQR}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-foreground">All Projects</h3>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {(['all', 'VR', 'AR', 'XR', 'Web'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      filter === category
                        ? 'gradient-primary text-white'
                        : 'glass-card text-muted-foreground hover:text-foreground hover:bg-white/10'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegularProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onShowQR={handleShowQR}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Create Your Own VR Project?
            </h3>
            
            <p className="text-muted-foreground mb-6 text-lg">
              Join our VR Lab and learn to build immersive experiences. We provide training, 
              tools, and support for students and faculty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Visit VR Lab
              </button>
              
              <button className="glass-card px-6 py-3 rounded-xl font-semibold text-foreground hover:bg-white/10 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Workshop
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QR Modal */}
      <QRModal
        project={selectedProject}
        isOpen={showQR}
        onClose={() => setShowQR(false)}
      />
    </section>
  );
};