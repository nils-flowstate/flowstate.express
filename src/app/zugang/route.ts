import { NextResponse } from "next/server";

// Kein `export const dynamic` nötig: GET-Route-Handler sind seit Next 15 per
// Default dynamisch, und die Option wird in v16 mit Cache Components entfernt.
// PHONE_NUMBER wird dadurch bei jedem Request gelesen, nicht in den Build gebacken.

const STANDARD =
  "Hallo Nils, ich habe flowstate.express gesehen und würde mir gern den Prototyp anschauen.";

/**
 * Vorbelegte Nachrichten je Herkunft, angesteuert über ?von=.
 *
 * Bewusst eine feste Zuordnung und kein durchgereichter Text: Der Parameter
 * landet in einer Nachricht, die im Namen der Besucherin an die eigene Nummer
 * geht. Wäre er frei wählbar, könnte ein präparierter Link jeden beliebigen
 * Text in fremdem Namen vorschreiben — und der Link sähe dabei aus, als käme
 * er von flowstate.express. Unbekannte Werte fallen still auf STANDARD zurück.
 */
const NACHRICHTEN: Record<string, string> = {
  gamescom:
    "Hallo Nils, ich komme von der Gamescom und möchte Zugang zum Prototyp anfragen.",
};

/**
 * Zugang zum verborgenen Prototypen.
 *
 * Der Prototyp unter prototype.flowstate.express ist nicht öffentlich; Zugang
 * gibt es auf Anfrage. Diese Route leitet zu WhatsApp weiter und liest die
 * Nummer erst hier serverseitig aus PHONE_NUMBER — dadurch erscheint sie
 * nirgends im ausgelieferten HTML.
 */
export function GET(request: Request) {
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

  const von = new URL(request.url).searchParams.get("von") ?? "";
  // Object.hasOwn statt eines direkten Zugriffs: Sonst träfe ?von=constructor
  // eine geerbte Eigenschaft, die nicht undefined ist — der Rückfall auf
  // STANDARD würde nicht greifen und Unsinn in der Nachricht landen.
  const message = Object.hasOwn(NACHRICHTEN, von) ? NACHRICHTEN[von] : STANDARD;

  const target = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return NextResponse.redirect(target, 307);
}
