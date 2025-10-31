import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ficta - Co-creator of Stories",
  description: "Let kids lead, and let AI assist. Make writing feel like play.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground font-mono">
        <main>{children}</main>
      </body>
    </html>
  );
}
