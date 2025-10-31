import Link from "next/link";

export default function Nav() {
  return (
    <header className="container flex items-center justify-between py-6">
      <Link href="/" className="text-xl font-semibold text-brand hover:text-opacity-80 transition-colors">
        Ficta
      </Link>
      <nav className="flex gap-6 text-sm text-[var(--muted)]" role="navigation" aria-label="Main navigation">
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <Link href="/team" className="hover:text-white transition-colors">Team</Link>
        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
      </nav>
    </header>
  );
}

