// Neuaufbau der Startseite
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight text-white flex items-center gap-2">
            <img src="/favicon.ico" alt="guri-go" className="h-6 w-6 rounded-sm" />
            guri<span className="text-white">-go</span>
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm text-white">
            <Link href="/auftrag" className="hover:text-white/90">Auftrag</Link>
            <Link href="/kontakt" className="hover:text-white/90">Kontakt</Link>
            <Link href="/impressum" className="hover:text-white/90">Impressum</Link>
          </nav>
          <Link
            href="/auftrag"
            className="inline-flex items-center rounded-xl bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-white/90"
          >
            Auftrag vergeben
          </Link>
        </div>
      </header>

      {/* Hero mit großem Headerbild */}
      <section className="relative h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/delivery-van.webp'), url('/delivery-van.webp'), url('https://images.unsplash.com/photo-1517954278308-7b84c6e6f5a0?q=80&w=2400&auto=format&fit=crop')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
              Transporte einfach beauftragen – schnell, fair, zuverlässig
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90">
              In wenigen Schritten deinen Transportauftrag anlegen. Wir kümmern uns um den Rest.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/auftrag" className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700">
                Auftrag vergeben
              </a>
              <a href="#features" className="inline-flex justify-center rounded-xl bg-white/90 px-5 py-3 font-medium text-gray-900 hover:bg-white">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features – knapp und klar */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-2xl">⚡</div>
            <h3 className="mt-2 text-lg font-semibold">Schnell beauftragt</h3>
            <p className="mt-1 text-gray-600 text-sm">Auftrag in Minuten mit den wichtigsten Angaben anlegen.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-2xl">🛡️</div>
            <h3 className="mt-2 text-lg font-semibold">Zuverlässige Abwicklung</h3>
            <p className="mt-1 text-gray-600 text-sm">Verbindliche Kommunikation und planbare Durchführung.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-2xl">📱</div>
            <h3 className="mt-2 text-lg font-semibold">Mobil optimiert</h3>
            <p className="mt-1 text-gray-600 text-sm">Beauftrage bequem vom Smartphone oder Desktop.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-2xl">🌍</div>
            <h3 className="mt-2 text-lg font-semibold">Lieferung europaweit</h3>
            <p className="mt-1 text-gray-600 text-sm">Netzwerk und Routen für Ziele in ganz Europa.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-2xl">🚀</div>
            <h3 className="mt-2 text-lg font-semibold">Erfahrung in Expresslieferungen</h3>
            <p className="mt-1 text-gray-600 text-sm">Zeitkritische Transporte mit klaren SLAs.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-2xl">💊</div>
            <h3 className="mt-2 text-lg font-semibold">Erfahrung mit Medikamentenlieferungen</h3>
            <p className="mt-1 text-gray-600 text-sm">Sorgfältige Handhabung und zuverlässige Zustellung sensibler Güter.</p>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} guri-go.com — Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-700" href="/kontakt">Kontakt</a>
            <a className="hover:text-gray-700" href="/impressum">Impressum</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
