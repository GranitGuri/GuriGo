// src/app/api/auftrag/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const INTERNAL_TO = "granitguri.gg@gmail.com";

export async function POST(req: NextRequest) {
  try {
    // Basic env validation for clearer errors
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

    // Honeypot: if bot filled this field, silently accept without sending email
    if (data._gotcha) {
      return NextResponse.json({ ok: true, skipped: true });
    }

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

    const htmlConfirm = `
      <h2>Dein Auftrag ist eingegangen</h2>
      <p>Vielen Dank${data.name ? `, ${data.name}` : ""}! Wir prüfen deine Angaben und melden uns zeitnah.</p>
      <p>Zusammenfassung:</p>
      <ul>
        <li><b>Abholort:</b> ${data.pickup || "-"}</li>
        <li><b>Zielort:</b> ${data.dropoff || "-"}</li>
        <li><b>Datum:</b> ${data.date || "-"} ${data.pickup_time ? `(${data.pickup_time})` : ""}</li>
        <li><b>Gewicht:</b> ${data.weight || "-"}</li>
        <li><b>Ladung:</b> ${data.cargo || "-"}</li>
        <li><b>Preis/km:</b> ${data.price_per_km || "-"}</li>
      </ul>
    `;

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
        subject: "Dein Auftrag ist eingegangen",
        html: htmlConfirm,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "MAIL_FAILED" }, { status: 500 });
  }
}



