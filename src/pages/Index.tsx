import vrLabBg from "@/assets/vr-lab-bg.jpg";
import { VRLabHero } from "@/components/VRLabHero";
import { AppGrid } from "@/components/AppGrid";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${vrLabBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <main className="relative z-10">
        <VRLabHero />
        <AppGrid />
      </main>
    </div>
  );
};

export default Index;
