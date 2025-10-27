// src/app/components/Header.tsx
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight flex items-center gap-2">
          <img src="/favicon.ico" alt="guri-go" className="h-6 w-6 rounded-sm" />
          guri<span className="text-indigo-600">-go</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/auftrag" className="hover:text-indigo-700">Auftrag</Link>
          <Link href="/kontakt" className="hover:text-indigo-700">Kontakt</Link>
          <Link href="/impressum" className="hover:text-indigo-700">Impressum</Link>
        </nav>
        <Link
          href="/auftrag"
          className="inline-flex items-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Auftrag vergeben
        </Link>
      </div>
    </header>
  );
}


