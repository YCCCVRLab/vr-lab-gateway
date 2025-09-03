import vrLabBg from "@/assets/vr-lab-bg.jpg";
import { VRLabLauncher } from "@/components/VRLabLauncher";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${vrLabBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-sm" />
      
      {/* Launcher */}
      <VRLabLauncher />
    </div>
  );
};

export default Index;
