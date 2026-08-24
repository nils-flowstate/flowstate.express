import { NextResponse } from "next/server";

// Kein `export const dynamic` nötig: GET-Route-Handler sind seit Next 15 per
// Default dynamisch, und die Option wird in v16 mit Cache Components entfernt.
// PHONE_NUMBER wird dadurch bei jedem Request gelesen, nicht in den Build gebacken.

const MESSAGE =
  "Hallo Nils, ich habe flowstate.express gesehen und würde mir gern den Prototyp anschauen.";

/**
 * Zugang zum verborgenen Prototypen.
 *
 * Der Prototyp unter prototype.flowstate.express ist nicht öffentlich; Zugang
 * gibt es auf Anfrage. Diese Route leitet zu WhatsApp weiter und liest die
 * Nummer erst hier serverseitig aus PHONE_NUMBER — dadurch erscheint sie
 * nirgends im ausgelieferten HTML.
 */
export function GET() {
  const raw = process.env.PHONE_NUMBER ?? "";
  // wa.me erwartet die Nummer in reinen Ziffern, international, ohne + und ohne Trenner.
  const number = raw.replace(/\D/g, "");

  if (!number) {
    return NextResponse.json(
      {
        error: "Zugang zum Prototyp ist gerade nicht verfügbar.",
        hinweis: "Schreib gern an nils@flowstate.foundation.",
      },
      { status: 503 },
    );
  }

  const target = `https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}`;
  return NextResponse.redirect(target, 307);
}
