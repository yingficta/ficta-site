"use client";

import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Product } from "@/components/Product";
import { TeamAndPolicy } from "@/components/TeamAndPolicy";
import { Opportunity } from "@/components/Opportunity";
import logoImage from "figma:asset/9b57b1f721b7529f390f9b7efdeb42384e37b266.png";

export default function Home() {
  const [activeView, setActiveView] = useState<'product' | 'teamandpolicy' | 'opportunity'>('product');

  return (
    <div className="min-h-screen">
      {/* Logo in top left */}
      <div className="fixed top-8 left-8 z-40">
        <button onClick={() => setActiveView('product')} className="flex items-center gap-3 group cursor-pointer">
          <img
            src={logoImage.src}
            alt="Ficta Logo"
            className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl tracking-tight">FICTA</span>
        </button>
      </div>

      {/* Main Content */}
      <main>
        {activeView === 'product' && <Product />}
        {activeView === 'teamandpolicy' && <TeamAndPolicy />}
        {activeView === 'opportunity' && <Opportunity />}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
}