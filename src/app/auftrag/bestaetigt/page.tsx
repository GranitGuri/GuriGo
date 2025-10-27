// src/app/auftrag/bestaetigt/page.tsx
import Header from "../../components/Header";
import Link from "next/link";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function AuftragBestaetigtPage({ searchParams = {} }: Props) {
  const get = (k: string) => (Array.isArray(searchParams[k]) ? (searchParams[k] as string[])[0] : (searchParams[k] as string)) || "-";

  const pickup = get("pickup");
  const dropoff = get("dropoff");
  const date = get("date");
  const pickup_time = get("pickup_time");
  const delivery_time = get("delivery_time");
  const cargo = get("cargo");
  const weight = get("weight");
  const price_per_km = get("price_per_km");

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Auftrag eingegangen</h1>
        <p className="mt-2 text-gray-600">Vielen Dank! Wir haben deine Angaben erhalten und melden uns zeitnah mit einem Angebot.</p>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Zusammenfassung</h2>
          <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <dt className="text-gray-500">Abholort</dt>
              <dd className="font-medium break-words">{pickup}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Zielort</dt>
              <dd className="font-medium break-words">{dropoff}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Datum</dt>
              <dd className="font-medium">{date}{pickup_time && pickup_time !== "-" ? ` (${pickup_time})` : ""}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Ziel‑Lieferzeit</dt>
              <dd className="font-medium">{delivery_time}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Ladung</dt>
              <dd className="font-medium break-words">{cargo}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Gewicht</dt>
              <dd className="font-medium">{weight}</dd>
            </div>
            {price_per_km && price_per_km !== "-" && (
              <div className="sm:col-span-2">
                <dt className="text-gray-500">Preis/km</dt>
                <dd className="font-medium">{price_per_km}</dd>
              </div>
            )}
          </dl>
          <p className="mt-4 text-xs text-gray-500">Diese Zusammenfassung basiert auf deinen Angaben.</p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link href="/" className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50">Zur Startseite</Link>
          <Link href="/auftrag" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">Neuen Auftrag anlegen</Link>
        </div>
      </section>
    </main>
  );
}

