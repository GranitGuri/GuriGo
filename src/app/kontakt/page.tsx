// src/app/kontakt/page.tsx
import Header from "../components/Header";
import Link from "next/link";
export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Kontakt</h1>
        <p className="mt-2 text-gray-600">Schreib uns eine kurze Nachricht – wir melden uns zeitnah.</p>

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
              placeholder="Worum geht’s?"
            />
          </label>

          <button
            type="submit"
            className="inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
          >
            Nachricht senden
          </button>

          <div className="text-xs text-gray-500">
            Oder per E-Mail: <a className="underline" href="mailto:hello@guri-go.com">hello@guri-go.com</a>
          </div>
        </form>

        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">Zurück zur Startseite</Link>
        </div>
      </section>
    </main>
  );
}


