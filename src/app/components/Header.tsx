// src/app/components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg tracking-tight">
          guri<span className="text-indigo-600">-go</span>
        </a>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="/auftrag" className="hover:text-indigo-700">Auftrag</a>
          <a href="/kontakt" className="hover:text-indigo-700">Kontakt</a>
          <a href="/impressum" className="hover:text-indigo-700">Impressum</a>
        </nav>
        <a
          href="/auftrag"
          className="inline-flex items-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Auftrag vergeben
        </a>
      </div>
    </header>
  );
}


