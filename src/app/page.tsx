// src/app/page.tsx
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1517954278308-7b84c6e6f5a0?q=80&w=240&auto=format&fit=crop"
              alt="Liefertransporter bei Nacht"
              width={48}
              height={40}
              className="h-10 w-auto rounded"
              priority
            />
            <a href="/" className="font-semibold text-lg tracking-tight">
              guri<span className="text-indigo-600">-go</span>
            </a>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-700">Features</a>
            <a href="#kontakt" className="hover:text-indigo-700">Kontakt</a>
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Hintergrundbild eines Transporters auf der Autobahn (austauschbar) */}
          <div
            className="h-[70vh] w-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517954278308-7b84c6e6f5a0?q=80&w=1920&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-white/60 backdrop-blur">
              Schnell. Zuverlässig. Bundesweit.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow">
              Transport- und Kurieraufträge einfach online vergeben
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl">
              Vom Abholort bis zur Zustellung – in wenigen Schritten einen Auftrag anlegen.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/auftrag"
                className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
              >
                Auftrag vergeben
              </a>
              <a
                href="#features"
                className="inline-flex justify-center rounded-xl bg-white/90 px-5 py-3 font-medium text-gray-900 hover:bg-white"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Mobile First"
            desc="Layout, Typografie und Touch-Ziele sind auf Smartphones optimiert."
            emoji="📱"
          />
          <FeatureCard
            title="Blitzschnell"
            desc="Statisch ausgeliefert über CDN – minimale Ladezeiten, starke Core Web Vitals."
            emoji="⚡"
          />
          <FeatureCard
            title="Einfach erweiterbar"
            desc="Später leicht um Blog, Formulare oder SEO-Features ergänzbar."
            emoji="🧩"
          />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Kontakt</h2>
          <p className="mt-2 text-gray-600">
            Sag kurz hallo – ich melde mich.
          </p>

          {/* Statisches Formular über Formspree (Endpoint gleich im nächsten Schritt einrichten) */}
          <form
            action="https://formspree.io/f/REPLACEME"
            method="POST"
            className="mt-6 grid gap-4"
          >
            {/* Honeypot gegen Spam */}
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
            <input type="hidden" name="_subject" value="Neue Anfrage über guri-go.com" />

            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Dein Name"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">E-Mail</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="name@example.com"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">Nachricht</span>
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Worum geht’s?"
              />
            </label>

            <button
              type="submit"
              className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
            >
              Nachricht senden
            </button>

            {/* Fallback-Link (öffnet das E-Mail-Programm) */}
            <div className="text-xs text-gray-500">
              Oder per E-Mail:{" "}
              <a className="underline" href="mailto:hello@guri-go.com?subject=Kontakt%20guri-go.com">
                hello@guri-go.com
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} guri-go.com — Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-700" href="#kontakt">Kontakt</a>
            <a className="hover:text-gray-700" href="/impressum">Impressum</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc, emoji }: { title: string; desc: string; emoji: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 hover:shadow-sm transition-shadow">
      <div className="text-2xl">{emoji}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
