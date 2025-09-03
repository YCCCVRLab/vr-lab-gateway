import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AppCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

export const AppCard = ({ 
  title, 
  description, 
  icon: Icon, 
  iconColor, 
  gradient,
  delay = 0,
  onClick 
}: AppCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 hover-lift cursor-pointer group animate-fade-in",
        "border border-white/20 backdrop-blur-xl"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div 
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center",
            "group-hover:scale-110 transition-transform duration-300",
            gradient
          )}
        >
          <Icon 
            className={cn("w-8 h-8", iconColor)} 
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};