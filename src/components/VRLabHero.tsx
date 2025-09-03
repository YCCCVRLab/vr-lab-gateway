import { Button } from "@/components/ui/button";
import { Zap, Play } from "lucide-react";

export const VRLabHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vr-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 text-primary animate-glow" />
              <span className="gradient-primary bg-clip-text text-transparent font-semibold">
                Welcome to the Future
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">VR</span>
              <span className="gradient-primary bg-clip-text text-transparent"> Lab</span>
              <br />
              <span className="text-foreground">Experience</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover cutting-edge tools, immersive experiences, and educational apps 
            that will transform how you learn and create in virtual reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="gradient-primary text-lg px-8 py-6 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-xl font-semibold glass-card border-white/20 hover:bg-white/10 text-foreground"
            >
              Explore Tools
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">VR Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-vr-cyan">24/7</div>
              <div className="text-sm text-muted-foreground">Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};