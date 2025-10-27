// src/app/impressum/page.tsx
import Header from "../components/Header";
import Link from "next/link";
import Laderampe from "../../../images/laderampe.jpg";
import Logo from "../../../images/gurigoLogo.png";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        {/* Kompakter Hero mit Laderampen-Bild; nur die Überschrift liegt auf dem Bild */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25)), url(${Laderampe.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-6 sm:p-8 min-h-[160px] flex items-end">
            <div className="flex items-center gap-3">
              <img src={Logo.src} alt="guri-go" className="h-8 w-auto" />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Impressum</h1>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-600">Angaben gemäß § 5 TMG</p>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div>
            <div className="font-semibold">Betreiber</div>
            <div>guri-go</div>
            <div>Beispielstrasse 1</div>
            <div>12345 Musterstadt</div>
          </div>

          <div>
            <div className="font-semibold">Kontakt</div>
            <div>E-Mail: hello@guri-go.com</div>
            <div>
              Telefon: <a className="underline" href="tel:+4915734642843">+49 1573 4642843</a>
            </div>
          </div>

          <div>
            <div className="font-semibold">USt-IdNr.</div>
            <div>DE000000000</div>
          </div>

          <div>
            <div className="font-semibold">Haftungsausschluss</div>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
              den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <div className="font-semibold">Datenschutz</div>
            <p>
              Hinweise zum Datenschutz findest du nachfolgend. Mit Absenden eines Formulars werden die eingegebenen
              Daten zur Bearbeitung deiner Anfrage verarbeitet.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">Zurück zur Startseite</Link>
        </div>
      </section>
    </main>
  );
}
