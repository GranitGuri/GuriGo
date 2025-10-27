// src/app/auftrag/page.tsx
import Link from "next/link";
import Header from "../components/Header";

export default function AuftragPage() {
  const vehicles = [
    {
      title: "PKW Kombi",
      model: "Beispiel: E‑Klasse",
      maxLoad: "300 kg",
      pallets: "1 Palette (Euro)",
      cargoSize: "L 180 cm × B 100 cm × H 80 cm",
      prices: { base: "4 €", perKm: "1,15 € / km", min: "59,00 €" },
      image: "/images/delivery-van.webp",
    },
    {
      title: "Transporter Klein",
      model: "Beispiel: Kastenwagen",
      maxLoad: "800 kg",
      pallets: "2–3 Paletten (Euro)",
      cargoSize: "L 250 cm × B 130 cm × H 120 cm",
      prices: { base: "8 €", perKm: "1,45 € / km", min: "79,00 €" },
      image: "/images/delivery-van.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Auftrag vergeben</h1>
        <p className="mt-2 text-gray-600">
          Bitte fülle die wichtigsten Informationen aus. Wir melden uns umgehend.
        </p>

        {/* Fahrzeug-Infos */}
        <div className="mt-6 grid gap-6">
          {vehicles.map((v, i) => (
            <div key={i} className="rounded-2xl border p-4 bg-white shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                <div className="sm:col-span-2">
                  {/* Platzhalter-Bild: Hero-Bild der Startseite */}
                  <div
                    className="aspect-[4/3] w-full rounded-xl bg-center bg-cover border"
                    style={{ backgroundImage: `url('${v.image}'), url('/delivery-van.webp')` }}
                    aria-label={v.title}
                  />
                </div>
                <div className="sm:col-span-3 text-sm">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-semibold">{v.title}</h3>
                    <span className="text-gray-500">{v.model}</span>
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <dt className="text-gray-500">Max. Last</dt>
                      <dd className="font-medium">{v.maxLoad}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Paletten</dt>
                      <dd className="font-medium">{v.pallets}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-gray-500">Laderaum (Maße)</dt>
                      <dd className="font-medium">{v.cargoSize}</dd>
                    </div>
                  </dl>
                  <div className="mt-3 text-sm">
                    <div className="text-gray-500">Preise</div>
                    <div className="mt-1 grid grid-cols-3 gap-3">
                      <div><span className="text-gray-500">Anfahrt</span><div className="font-medium">{v.prices.base}</div></div>
                      <div><span className="text-gray-500">pro km</span><div className="font-medium">{v.prices.perKm}</div></div>
                      <div><span className="text-gray-500">Mindestfahrt</span><div className="font-medium">{v.prices.min}</div></div>
                    </div>
                    <p className="mt-1 text-gray-500 text-xs">Stunden- & Tagespreise auf Anfrage.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          action="/api/auftrag"
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
                placeholder="z. B. +49 1573 4642843"
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

          {/* Preisfeld entfernt – Preise sind oben ausgewiesen */}

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

