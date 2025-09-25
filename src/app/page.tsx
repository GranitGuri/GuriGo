// Neuaufbau der Startseite
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
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

      {/* Hero mit großem Headerbild */}
      <section className="relative h-[75vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517954278308-7b84c6e6f5a0?q=80&w=2400&auto=format&fit=crop"
          alt="Transporter fährt bei Dämmerung auf der Autobahn"
          fill
          priority
          className="object-cover"
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
