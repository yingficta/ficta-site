import { Smartphone, Users } from "lucide-react";

interface BottomNavProps {
  activeView: 'product' | 'teamandpolicy';
  onViewChange: (view: 'product' | 'teamandpolicy') => void;
}

export function BottomNav({ activeView, onViewChange }: BottomNavProps) {
  const navItems = [
    { id: 'product' as const, label: 'App', icon: Smartphone },
    { id: 'teamandpolicy' as const, label: 'Team and policy', icon: Users },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-border/50 px-4 py-2">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`
                  relative px-6 py-3 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className={`${isActive ? 'inline' : 'hidden sm:inline'}`}>
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}