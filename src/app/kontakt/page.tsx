// src/app/kontakt/page.tsx
import Header from "../components/Header";
import Link from "next/link";
import Logo from "../../../images/gurigoLogo.png";
import CallBg from "../../../images/CallHintergrund.jpg";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        {/* Hero-Block mit Hintergrundbild bis zum Call-Button */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25)), url(${CallBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <img src={Logo.src} alt="guri-go" className="h-10 sm:h-12 md:h-14 w-auto" />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Kontakt</h1>
            </div>
            <p className="mt-2 text-white/90">Schreib uns eine kurze Nachricht – wir melden uns zeitnah.</p>

            {/* Direktanruf: prominenter Button */}
            <div className="mt-6">
              <a
                href="tel:+4915734642843"
                aria-label="Jetzt anrufen: +49 1573 4642843"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                Jetzt anrufen: +49 1573 4642843
              </a>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/REPLACEME"
          method="POST"
          className="mt-8 grid gap-5"
        >
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Neue Kontaktanfrage über guri-go.com" />

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
              placeholder="Worum geht's?"
            />
          </label>

          <button
            type="submit"
            className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
          >
            Nachricht senden
          </button>

          <div className="text-xs text-gray-500">
            Oder per E-Mail: <a className="underline" href="mailto:hello@guri-go.com">hello@guri-go.com</a> · Telefon: <a className="underline" href="tel:+4915734642843">+49 1573 4642843</a>
          </div>
        </form>

        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">Zurück zur Startseite</Link>
        </div>
      </section>
    </main>
  );
}
