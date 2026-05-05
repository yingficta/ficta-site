"use client";

import { BottomNav } from "@/components/BottomNav";
import { Product } from "@/components/Product";
import logoImage from "figma:asset/9b57b1f721b7529f390f9b7efdeb42384e37b266.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Logo in top left */}
      <div className="fixed top-8 left-8 z-40">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer border border-border rounded-md px-3 py-2 bg-background/80 backdrop-blur-sm shadow-sm">
          <img
            src={logoImage.src}
            alt="Ficta Logo"
            className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl tracking-tight">FICTA</span>
        </Link>
      </div>

      {/* Main Content */}
      <main>
        <Product />
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeView="product" />
    </div>
  );
}
