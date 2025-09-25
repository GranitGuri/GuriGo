// src/app/impressum/page.tsx
export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Impressum</h1>
        <p className="mt-2 text-gray-600">Angaben gemäß § 5 TMG</p>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div>
            <div className="font-semibold">Betreiber</div>
            <div>guri-go</div>
            <div>Beispielstraße 1</div>
            <div>12345 Musterstadt</div>
          </div>

          <div>
            <div className="font-semibold">Kontakt</div>
            <div>E-Mail: hello@guri-go.com</div>
            <div>Telefon: +49 170 0000000</div>
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
          <a href="/" className="text-sm text-gray-600 hover:text-gray-800">Zurück zur Startseite</a>
        </div>
      </section>
    </main>
  );
}


