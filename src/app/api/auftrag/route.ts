// src/app/api/auftrag/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const INTERNAL_TO = "granitguri.gg@gmail.com";

export async function POST(req: NextRequest) {
  try {
    // Env validation
    const apiKey = process.env.RESEND_API_KEY;
    const FROM = process.env.MAIL_FROM || "noreply@guri-go.com";
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY env var");
      return NextResponse.json({ ok: false, error: "MISSING_RESEND_API_KEY" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const formData = await req.formData();
    const data: Record<string, string> = {};
    formData.forEach((v, k) => {
      if (typeof v === "string") data[k] = v;
    });

    // Honeypot: if bot filled this field, accept but skip sending
    if (data._gotcha) {
      const params = new URLSearchParams();
      const fields = [
        "pickup",
        "dropoff",
        "date",
        "pickup_time",
        "delivery_time",
        "cargo",
        "weight",
        "price_per_km",
      ] as const;
      fields.forEach((f) => {
        const v = (data as Record<string, string | undefined>)[f];
        if (v) params.set(f, v);
      });
      const url = new URL(`/auftrag/bestaetigt?${params.toString()}`, req.nextUrl.origin);
      return NextResponse.redirect(url, 303);
    }

    // Contact / Impressum from env
    const contact: ContactInfo = {
      name: process.env.CONTACT_NAME || "guri-go",
      address: process.env.CONTACT_ADDRESS || "Beispielstrasse 1",
      zipCity: process.env.CONTACT_ZIP_CITY || "12345 Musterstadt",
      email: process.env.CONTACT_EMAIL || "hello@guri-go.com",
      phone: process.env.CONTACT_PHONE || "+49 1573 4642843",
      vatId: process.env.CONTACT_VAT_ID || "DE000000000",
      impressumUrl: process.env.CONTACT_IMPRESSUM_URL || "https://guri-go.com/impressum",
    };

    const senderEmail = data.email || "";
    const subjectInternal = `Neuer Transportauftrag von ${data.name || "Unbekannt"}`;

    const htmlInternal = `
      <h2>Neuer Auftrag</h2>
      <p><b>Name:</b> ${data.name || "-"}</p>
      <p><b>E-Mail:</b> ${data.email || "-"}</p>
      <p><b>Telefon:</b> ${data.phone || "-"}</p>
      <p><b>Datum:</b> ${data.date || "-"}</p>
      <p><b>Abholuhrzeit:</b> ${data.pickup_time || "-"}</p>
      <p><b>Ziel-Lieferzeit:</b> ${data.delivery_time || "-"}</p>
      <p><b>Abholort:</b> ${data.pickup || "-"}</p>
      <p><b>Zielort:</b> ${data.dropoff || "-"}</p>
      <p><b>Ladung:</b> ${data.cargo || "-"}</p>
      <p><b>Gewicht:</b> ${data.weight || "-"}</p>
      <p><b>Angebotener Kilometerpreis:</b> ${data.price_per_km || "-"}</p>
      <p><b>Hinweise:</b><br/>${(data.notes || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const { html: htmlConfirm, text: textConfirm } = renderConfirmationEmail(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        pickup: data.pickup,
        dropoff: data.dropoff,
        date: data.date,
        pickup_time: data.pickup_time,
        delivery_time: data.delivery_time,
        cargo: data.cargo,
        weight: data.weight,
        price_per_km: data.price_per_km,
        notes: data.notes,
      },
      contact
    );

    // Send internal notification
    await resend.emails.send({
      from: FROM,
      to: INTERNAL_TO,
      subject: subjectInternal,
      html: htmlInternal,
      reply_to: senderEmail || undefined,
    });

    // Send confirmation to sender if email provided
    if (senderEmail) {
      await resend.emails.send({
        from: FROM,
        to: senderEmail,
        subject: "Auftragseingang bestaetigt - guri-go",
        html: htmlConfirm,
        text: textConfirm,
        reply_to: INTERNAL_TO,
      });
    }

    // Redirect to confirmation page with a summary of submitted details
    const params = new URLSearchParams();
    const fields = [
      "pickup",
      "dropoff",
      "date",
      "pickup_time",
      "delivery_time",
      "cargo",
      "weight",
      "price_per_km",
    ] as const;
    fields.forEach((f) => {
      const v = (data as Record<string, string | undefined>)[f];
      if (v) params.set(f, v);
    });
    const url = new URL(`/auftrag/bestaetigt?${params.toString()}`, req.nextUrl.origin);
    return NextResponse.redirect(url, 303);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "MAIL_FAILED" }, { status: 500 });
  }
}

type ConfirmData = {
  name?: string;
  email?: string;
  phone?: string;
  pickup?: string;
  dropoff?: string;
  date?: string;
  pickup_time?: string;
  delivery_time?: string;
  cargo?: string;
  weight?: string;
  price_per_km?: string;
  notes?: string;
};

type ContactInfo = {
  name: string;
  address: string;
  zipCity: string;
  email: string;
  phone: string;
  vatId?: string;
  impressumUrl?: string;
};

function renderConfirmationEmail(data: ConfirmData, contact: ContactInfo): { html: string; text: string } {
  const esc = (v?: string) => (v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const fmt = (v?: string, fallback = "-") => (v && String(v).trim() ? v : fallback);
  const dateTime = [fmt(data.date, "-"), data.pickup_time ? `(${data.pickup_time})` : ""].join(" ").trim();

  const html = `
  <div style="background:#f6f7f9;padding:24px;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif;color:#111">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6e8eb">
      <tr>
        <td style="background:#111827;color:#fff;padding:20px 24px;font-size:18px;font-weight:600;">
          guri-go – Auftragseingang bestaetigt
        </td>
      </tr>
      <tr>
        <td style="padding:20px 24px">
          <p style="margin:0 0 12px 0;font-size:16px">Hallo${data.name ? ` ${esc(data.name)}` : ""},</p>
          <p style="margin:0 0 16px 0;line-height:1.55;color:#374151">
            vielen Dank fuer deine Anfrage. Wir pruefen die Angaben und melden uns zeitnah mit einem Angebot.
          </p>

          <div style="margin:16px 0 8px 0;font-weight:600">Zusammenfassung</div>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;font-size:14px">
            <tr><td style="padding:6px 0;color:#6b7280;width:38%">Abholort</td><td style="padding:6px 0;color:#111">${esc(fmt(data.pickup))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Zielort</td><td style="padding:6px 0;color:#111">${esc(fmt(data.dropoff))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Datum / Uhrzeit</td><td style="padding:6px 0;color:#111">${esc(dateTime)}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Ladung</td><td style="padding:6px 0;color:#111">${esc(fmt(data.cargo))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Gewicht</td><td style="padding:6px 0;color:#111">${esc(fmt(data.weight))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Preis/km</td><td style="padding:6px 0;color:#111">${esc(fmt(data.price_per_km))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Telefon</td><td style="padding:6px 0;color:#111">${esc(fmt(data.phone))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">E-Mail</td><td style="padding:6px 0;color:#111">${esc(fmt(data.email))}</td></tr>
          </table>

          ${fmt(data.notes, "").trim() ? `<div style="margin:16px 0 4px 0;font-weight:600">Hinweise</div>
            <div style=\"white-space:pre-wrap;color:#111;font-size:14px;line-height:1.55\">${esc(data.notes).replace(/\n/g, "<br/>")}</div>` : ""}

          <p style="margin:18px 0 0 0;color:#374151;line-height:1.55">Falls du Rueckfragen hast, antworte einfach auf diese E-Mail.</p>
        </td>
      </tr>
      <tr>
        <td style="background:#f9fafb;border-top:1px solid #e6e8eb;padding:16px 24px;font-size:12px;color:#6b7280">
          <div style="font-weight:600;color:#374151;margin-bottom:6px">Impressum & Kontakt</div>
          <div>${esc(contact.name)}</div>
          <div>${esc(contact.address)} · ${esc(contact.zipCity)}</div>
          <div>E-Mail: ${esc(contact.email)} · Telefon: ${esc(contact.phone)}</div>
          ${contact.vatId ? `<div>USt-IdNr.: ${esc(contact.vatId)}</div>` : ""}
          ${contact.impressumUrl ? `<div style="margin-top:8px">Weitere Informationen: <a href="${esc(contact.impressumUrl)}" style="color:#4f46e5;text-decoration:underline">${esc(contact.impressumUrl)}</a></div>` : ""}
        </td>
      </tr>
    </table>
    <div style="text-align:center;color:#9ca3af;font-size:11px;margin-top:10px">Diese Nachricht wurde automatisch erzeugt.</div>
  </div>`;

  const text = `Hallo${data.name ? ` ${data.name}` : ""},\n\n` +
    `Vielen Dank fuer deine Anfrage. Wir pruefen die Angaben und melden uns zeitnah.\n\n` +
    `Zusammenfassung:\n` +
    `- Abholort: ${fmt(data.pickup)}\n` +
    `- Zielort: ${fmt(data.dropoff)}\n` +
    `- Datum / Uhrzeit: ${dateTime}\n` +
    `- Ladung: ${fmt(data.cargo)}\n` +
    `- Gewicht: ${fmt(data.weight)}\n` +
    `- Preis/km: ${fmt(data.price_per_km)}\n` +
    `- Telefon: ${fmt(data.phone)}\n` +
    `- E-Mail: ${fmt(data.email)}\n` +
    (fmt(data.notes, "").trim() ? `\nHinweise:\n${fmt(data.notes)}\n` : "") +
    `\nImpressum & Kontakt:\n` +
    `${contact.name}\n${contact.address} · ${contact.zipCity}\n` +
    `E-Mail: ${contact.email} · Telefon: ${contact.phone}\n` +
    (contact.vatId ? `USt-IdNr.: ${contact.vatId}\n` : "") +
    (contact.impressumUrl ? `Weitere Informationen: ${contact.impressumUrl}\n` : "");

  return { html, text };
}
