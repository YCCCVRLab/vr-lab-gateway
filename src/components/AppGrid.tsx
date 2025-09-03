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
  Zap,
  Globe,
  Code,
  Headphones,
  Brain,
  Sparkles,
  Rocket,
  Eye
} from "lucide-react";

const vrApps = [
  {
    title: "3D Modeling Studio",
    description: "Create stunning 3D models and sculptures in virtual reality with intuitive hand gestures.",
    icon: Box,
    iconColor: "text-white",
    gradient: "gradient-cyber"
  },
  {
    title: "Art Canvas VR",
    description: "Paint and draw in three-dimensional space with unlimited colors and brushes.",
    icon: Palette,
    iconColor: "text-white", 
    gradient: "gradient-accent"
  },
  {
    title: "Virtual Photography",
    description: "Capture and create immersive 360° photos and videos in virtual environments.",
    icon: Camera,
    iconColor: "text-white",
    gradient: "gradient-primary"
  },
  {
    title: "VR Game Designer",
    description: "Build and test your own VR games with visual scripting and physics simulation.",
    icon: Gamepad2,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    title: "Interactive Learning",
    description: "Explore historical sites, molecules, and complex concepts through immersive education.",
    icon: GraduationCap,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    title: "Science Lab VR",
    description: "Conduct virtual experiments safely and explore microscopic worlds in detail.",
    icon: Microscope,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-600"
  },
  {
    title: "Architecture VR",
    description: "Design and walk through buildings before they're built with realistic materials.",
    icon: Building,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    title: "Music Creation",
    description: "Compose and perform music in virtual recording studios with spatial audio.",
    icon: Music,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    title: "Neural Interface",
    description: "Train your brain with cognitive exercises and memory enhancement programs.",
    icon: Brain,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-rose-500 to-pink-600"
  },
  {
    title: "Code in VR",
    description: "Program in three-dimensional code environments with gesture-based interactions.",
    icon: Code,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-slate-500 to-gray-600"
  },
  {
    title: "Spatial Audio",
    description: "Create immersive soundscapes and 3D audio experiences for VR environments.",
    icon: Headphones,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-amber-500 to-yellow-600"
  },
  {
    title: "Magic Workshop", 
    description: "Learn physics and chemistry through magical interactions and visual effects.",
    icon: Sparkles,
    iconColor: "text-white",
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600"
  }
];

export const AppGrid = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium">
            <Zap className="w-4 h-4 text-primary" />
            <span>Discover Tools</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Gateway to <span className="gradient-primary bg-clip-text text-transparent">Virtual Reality</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with these amazing tools and gradually discover the power of our full VR Lab experience.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vrApps.map((app, index) => (
            <AppCard
              key={app.title}
              title={app.title}
              description={app.description}
              icon={app.icon}
              iconColor={app.iconColor}
              gradient={app.gradient}
              delay={index * 100}
              onClick={() => console.log(`Opening ${app.title}`)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 space-y-6 animate-fade-in">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready for the Full Experience?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Book a session in our VR Lab and experience these tools with our state-of-the-art VR headsets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Book VR Session
              </button>
              
              <button className="glass-card px-6 py-3 rounded-xl font-semibold text-foreground hover:bg-white/10 transition-colors flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};