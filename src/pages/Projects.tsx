import React from 'react';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { VRLabHero } from '@/components/VRLabHero';
import { AppGrid } from '@/components/AppGrid';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-600/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-32 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-24 bg-purple-500/5 rounded-full blur-2xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="container mx-auto max-w-7xl">
          <button
            onClick={() => navigate('/')}
            className="glass-card px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Desktop
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <VRLabHero />
        
        {/* Project Showcase */}
        <ProjectShowcase />
        
        {/* App Grid */}
        <AppGrid />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              YCCC VR Lab
            </h3>
            <p className="text-muted-foreground mb-4">
              York County Community College Virtual Reality Learning Center
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>Room 112, Wells Campus</span>
              <span>•</span>
              <span>Monday-Friday 8:00 AM - 4:30 PM</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;