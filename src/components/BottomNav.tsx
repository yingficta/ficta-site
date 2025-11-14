import { Smartphone, Users, Briefcase } from "lucide-react";
import Link from "next/link";

interface BottomNavProps {
  activeView: 'product' | 'teamandpolicy' | 'opportunity';
}

export function BottomNav({ activeView }: BottomNavProps) {
  const navItems = [
    { id: 'product' as const, label: 'App', icon: Smartphone, href: '/' },
    { id: 'opportunity' as const, label: 'Opportunity', icon: Briefcase, href: '/opportunity/' },
    { id: 'teamandpolicy' as const, label: 'Team and policy', icon: Users, href: '/team-and-policy/' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-border/50 px-4 py-2">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
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
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}