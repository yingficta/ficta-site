export default function Footer() {
  return (
    <footer className="container border-t border-neutral-800 py-10 mt-20 text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} Ficta — Playful co-writing with AI ✨
    </footer>
  );
}

