import Image from "next/image";
import Link from "next/link";

export default function LogoMark() {
  return (
    <Link
      href="/"
      className="fixed top-8 left-8 z-40 flex items-center gap-3 text-xl font-semibold tracking-tight text-foreground/90 transition hover:text-foreground"
    >
      <span className="relative h-12 w-12">
        <Image src="/images/logo.png" alt="Ficta logo" fill className="object-contain" priority />
      </span>
      <span className="text-2xl tracking-tight">FICTA</span>
    </Link>
  );
}
