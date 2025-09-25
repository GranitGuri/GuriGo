// src/app/auftrag/page.tsx
import Link from "next/link";
import Header from "../components/Header";
export default function AuftragPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Auftrag vergeben</h1>
        <p className="mt-2 text-gray-600">
          Bitte fülle die wichtigsten Informationen aus. Wir melden uns umgehend.
        </p>

        <form
          action="https://formspree.io/f/REPLACEME"
          method="POST"
          className="mt-8 grid gap-5"
        >
          {/* Anti-Spam */}
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Neuer Transportauftrag über guri-go.com" />

          <div className="grid gap-1">
            <label className="text-sm font-medium">Firma (optional)</label>
            <input
              name="company"
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Firmenname"
            />
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Vor- und Nachname"
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
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Telefon</span>
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="z. B. +49 170 1234567"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Gewünschtes Datum</span>
              <input
                type="date"
                name="date"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </label>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Abholuhrzeit</span>
              <input
                type="time"
                name="pickup_time"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Ziel-Lieferzeit</span>
              <input
                type="time"
                name="delivery_time"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </label>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Abholort</span>
              <input
                name="pickup"
                required
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Straße, PLZ Ort"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Zielort</span>
              <input
                name="dropoff"
                required
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Straße, PLZ Ort"
              />
            </label>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Ladung</span>
              <input
                name="cargo"
                required
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Was soll transportiert werden?"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Gewicht (ca.)</span>
              <input
                name="weight"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="z. B. 500 kg"
              />
            </label>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Angebotener Kilometerpreis (€)</span>
              <input
                type="number"
                name="price_per_km"
                step="0.01"
                min="0"
                inputMode="decimal"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="z. B. 0,85"
              />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Hinweise</span>
            <textarea
              name="notes"
              rows={4}
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Zugang, Zeiten, besondere Anforderungen..."
            />
          </label>

          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">Zurück</Link>
            <button
              type="submit"
              className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
            >
              Auftrag senden
            </button>
          </div>

          <p className="text-xs text-gray-500">
            Mit dem Absenden bestätigst du die Verarbeitung deiner Daten gemäß unserer
            <Link className="underline ml-1" href="/impressum">Datenschutzhinweise</Link>.
          </p>
        </form>
      </section>
    </main>
  );
}


