// src/app/auftrag/page.tsx
"use client";
import Link from "next/link";
import Header from "../components/Header";
import Logo from "../../../images/gurigoLogo.png";
import Background from "../../../images/background.webp";
import { useRef, useState } from "react";

export default function AuftragPage() {
  const vehicles = [
    {
      title: "PKW Kombi",
      model: "Beispiel: E-Klasse",
      maxLoad: "300 kg",
      pallets: "1 Palette (Euro)",
      cargoSize: "L 180 cm x B 100 cm x H 80 cm",
      prices: { base: "4 EUR", perKm: "1,15 EUR / km", min: "59,00 EUR" },
      image: Background.src,
    },
    {
      title: "Transporter Klein",
      model: "Beispiel: Kastenwagen",
      maxLoad: "800 kg",
      pallets: "2-3 Paletten (Euro)",
      cargoSize: "L 250 cm x B 130 cm x H 120 cm",
      prices: { base: "8 EUR", perKm: "1,45 EUR / km", min: "79,00 EUR" },
      image: Background.src,
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);
  const [vehicleError, setVehicleError] = useState(false);
  const vehicleBoxRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="flex items-center gap-3">
          <img src={Logo.src} alt="guri-go" className="h-10 sm:h-12 md:h-14 w-auto" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Auftrag vergeben</h1>
        </div>
        <p className="mt-2 text-gray-600">
          Bitte fuelle die wichtigsten Informationen aus. Wir melden uns umgehend.
        </p>

        {/* Fahrzeug-Infos (Pflicht) */}
        <div
          ref={vehicleBoxRef}
          className={`mt-6 grid gap-6 ${vehicleError ? "ring-2 ring-red-500 rounded-2xl ring-offset-2" : ""}`}
        >
          <div className="text-sm text-gray-700 -mb-2 flex items-center justify-between">
            <span>
              <span className="font-medium">Fahrzeugauswahl</span>
              <span className="text-red-600 ml-1" aria-hidden>*</span>
            </span>
            {vehicleError && (
              <span className="text-red-600">Bitte ein Fahrzeug auswaehlen</span>
            )}
          </div>

          {vehicles.map((v, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setSelected(i);
                setVehicleError(false);
              }}
              className={
                "w-full text-left rounded-2xl border p-4 bg-white shadow-sm transition ring-offset-2 " +
                (selected === i ? "ring-2 ring-indigo-600" : "hover:shadow")
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                <div className="sm:col-span-2">
                  {/* Platzhalter-Bild: Hero-Bild der Startseite */}
                  <div
                    className="aspect-[4/3] w-full rounded-xl bg-center bg-cover border"
                    style={{ backgroundImage: `url('${v.image}')` }}
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
                      <dt className="text-gray-500">Laderaum (Masse)</dt>
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
            </button>
          ))}
        </div>

        <form
          action="/api/auftrag"
          method="POST"
          className="mt-8 grid gap-5"
          onSubmit={(e) => {
            if (selected === null) {
              e.preventDefault();
              setVehicleError(true);
              vehicleBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          {/* Ausgewaehltes Fahrzeug als Hidden-Fields */}
          <input type="hidden" name="vehicle" value={selected !== null ? vehicles[selected].title : ""} />
          <input type="hidden" name="vehicle_model" value={selected !== null ? vehicles[selected].model : ""} />
          <input type="hidden" name="vehicle_max_load" value={selected !== null ? vehicles[selected].maxLoad : ""} />
          <input type="hidden" name="vehicle_pallets" value={selected !== null ? vehicles[selected].pallets : ""} />
          <input type="hidden" name="vehicle_cargo_size" value={selected !== null ? vehicles[selected].cargoSize : ""} />
          <input type="hidden" name="vehicle_price_base" value={selected !== null ? vehicles[selected].prices.base : ""} />
          <input type="hidden" name="vehicle_price_per_km" value={selected !== null ? vehicles[selected].prices.perKm : ""} />
          <input type="hidden" name="vehicle_price_min" value={selected !== null ? vehicles[selected].prices.min : ""} />

          {/* Anti-Spam */}
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Neuer Transportauftrag ueber guri-go.com" />

          <div className="grid gap-1">
            <label className="text-sm font-medium">Firma <span className="text-red-600" aria-hidden>*</span></label>
            <input
              name="company"
              required
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Firmenname"
            />
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name <span className="text-red-600" aria-hidden>*</span></span>
              <input
                name="name"
                required
                autoComplete="name"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Vor- und Nachname"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">E-Mail <span className="text-red-600" aria-hidden>*</span></span>
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
              <span className="text-sm font-medium">Telefon <span className="text-red-600" aria-hidden>*</span></span>
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
              <span className="text-sm font-medium">Gewuenschtes Datum <span className="text-red-600" aria-hidden>*</span></span>
              <input
                type="date"
                name="date"
                required
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
              <span className="text-sm font-medium">Abholort <span className="text-red-600" aria-hidden>*</span></span>
              <input
                name="pickup"
                required
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Strasse, PLZ Ort"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Zielort <span className="text-red-600" aria-hidden>*</span></span>
              <input
                name="dropoff"
                required
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Strasse, PLZ Ort"
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
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">Zurueck</Link>
            <button
              type="submit"
              className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
            >
              Auftrag senden
            </button>
          </div>

          <p className="text-xs text-gray-500">
            Mit dem Absenden bestaetigst du die Verarbeitung deiner Daten gemaess unserer
            <Link className="underline ml-1" href="/impressum">Datenschutzhinweise</Link>.
          </p>
        </form>
      </section>
    </main>
  );
}
