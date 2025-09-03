import { AppCard } from "@/components/AppCard";
import { 
  Box, 
  Palette, 
  Camera, 
  Gamepad2, 
  GraduationCap, 
  Microscope, 
  Building, 
  Music,
  Globe,
  Code,
  Headphones,
  Brain,
  Sparkles,
  Rocket,
  Eye,
  Settings,
  User,
  ExternalLink
} from "lucide-react";

const vrApps = [
  {
    title: "3D Modeling",
    description: "Create 3D models with hand gestures",
    icon: Box,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    title: "Art Studio",
    description: "Paint in virtual 3D space",
    icon: Palette,
    iconColor: "text-white", 
    gradient: "bg-gradient-to-br from-pink-500 to-purple-600"
  },
  {
    title: "VR Camera",
    description: "Capture 360° photos and videos",
    icon: Camera,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    title: "Game Studio",
    description: "Build VR games visually",
    icon: Gamepad2,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    title: "Architecture",
    description: "Design buildings in VR",
    icon: Building,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    title: "Music Studio",
    description: "Compose with spatial audio",
    icon: Music,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    title: "Neural Lab",
    description: "Brain training exercises",
    icon: Brain,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-rose-500 to-pink-600"
  },
  {
    title: "Code Space",
    description: "Program in 3D environments",
    icon: Code,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-slate-500 to-gray-600"
  },
  {
    title: "Audio Lab",
    description: "3D sound design studio",
    icon: Headphones,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-amber-500 to-yellow-600"
  },
  {
    title: "Magic Lab", 
    description: "Physics through magic",
    icon: Sparkles,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600"
  }
];

export const VRLabLauncher = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">VR Lab</h1>
            <p className="text-sm text-muted-foreground">Virtual Reality Learning Center</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://clever.com/in/yccc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-primary px-4 py-2 rounded-lg font-medium text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            VR Lab Portal
          </a>
          <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
            <User className="w-5 h-5 text-foreground" />
          </button>
          <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-6 pb-6">
        <div className="w-full max-w-6xl">
          {/* Apps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            {vrApps.map((app, index) => (
              <div key={app.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <AppCard
                  title={app.title}
                  description={app.description}
                  icon={app.icon}
                  iconColor={app.iconColor}
                  gradient={app.gradient}
                  onClick={() => console.log(`Opening ${app.title}`)}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Ready for Full VR?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Experience these tools with our VR headsets
              </p>
              <div className="flex gap-3 justify-center">
                <button className="gradient-primary px-4 py-2 rounded-lg font-medium text-white text-sm hover:scale-105 transition-transform flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Book Session
                </button>
                <button className="glass-card px-4 py-2 rounded-lg font-medium text-foreground text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};