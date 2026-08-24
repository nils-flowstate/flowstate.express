/**
 * Verweis auf den aktuellen Prototypen der Plattform.
 *
 * Der Prototyp liegt verborgen — Zugang nur auf Anfrage. Der CTA zeigt deshalb
 * nicht direkt auf den Host, sondern auf die Route /zugang, die serverseitig
 * zu WhatsApp weiterleitet. So taucht die Telefonnummer nie im HTML auf.
 */

/** Nur zur Anzeige — bewusst kein anklickbarer Link. */
export const PROTOTYPE_HOST = "prototype.flowstate.express";

/** Serverseitige Redirect-Route, siehe src/app/zugang/route.ts */
export const PROTOTYPE_ACCESS_PATH = "/zugang";

export interface PrototypeScreen {
  /** Dateiname ohne Endung in public/images/prototype/ */
  slug: string;
  /** Höhe von <slug>.webp in Pixeln; die Breite ist stets PROTOTYPE_IMAGE_WIDTH. */
  height: number;
  /** Bildunterschrift in der Schublade (Caveat) */
  caption: string;
  /** Alt-Text — beschreibt, was der Screen zeigt */
  alt: string;
}

/**
 * Breiten, die scripts/optimize-prototype-images.sh erzeugt. Die Höhe steht je
 * Screen daneben: Die Exporte sind unterschiedlich lang, und ein pauschales
 * Seitenverhältnis würde die Lightbox stauchen.
 */
export const PROTOTYPE_IMAGE_WIDTH = 1080;
export const PROTOTYPE_THUMB_WIDTH = 480;

/** Höhe des Vorschaubilds — <slug>-thumb.webp ist die auf 480px skalierte Datei. */
export function thumbHeight(screen: PrototypeScreen): number {
  return Math.round((screen.height * PROTOTYPE_THUMB_WIDTH) / PROTOTYPE_IMAGE_WIDTH);
}

/** Reihenfolge erzählt den Bogen: Eintritt → Atelier → Bühne → Erfahren → Events → Ökosysteme → Abo. */
export const PROTOTYPE_SCREENS: PrototypeScreen[] = [
  {
    slug: "01-einstieg",
    height: 1896,
    caption: "Wonach sehnst du dich?",
    alt: "Einstiegsbildschirm mit der Wahl zwischen Erlebe und Erfahre",
  },
  {
    slug: "02-atelier",
    height: 2062,
    caption: "Dein Atelier",
    alt: "Atelier-Übersicht mit Essenz, Bühne, Kunstsammlung und Events",
  },
  {
    slug: "03-buehne",
    height: 1956,
    caption: "Die Bühne des Künstlers",
    alt: "Öffentliches Künstlerprofil im Atelier-Modus mit Essenz und Werken",
  },
  {
    slug: "04-erfahre-feed",
    height: 2062,
    caption: "Verhüllt, bis du hinsiehst",
    alt: "Erfahre-Feed mit verhüllten Werken zum Enthüllen",
  },
  {
    slug: "05-resonanz",
    height: 1876,
    caption: "Resonanz statt Likes",
    alt: "Rückmeldung zu einem Werk über ein Bottom Sheet",
  },
  {
    slug: "06-werk-staende",
    height: 1861,
    caption: "Ein Werk in Ständen",
    alt: "Detailansicht eines Werks mit Entstehungsständen und Fertigstellungsgrad",
  },
  {
    slug: "07-events-live",
    height: 2023,
    caption: "Räume, die gerade offen sind",
    alt: "Event-Verwaltung mit laufenden Live-Räumen",
  },
  {
    slug: "08-events-timeline",
    height: 1956,
    caption: "Künstlergeschichte",
    alt: "Kommende Events und Zeitleiste der Künstlergeschichte",
  },
  {
    slug: "09-oekosysteme",
    height: 1887,
    caption: "Eigene Welten",
    alt: "Ökosystem-Übersicht mit eigener Welt und abonnierten Ökosystemen",
  },
  {
    slug: "10-oekosysteme-entdecken",
    height: 1887,
    caption: "Bekannte Ökosysteme",
    alt: "Entdecken-Ansicht mit Filtern nach Medium, Stil, Glaube und Herkunft",
  },
  {
    slug: "11-abonnements",
    height: 1956,
    caption: "Was du unterstützt",
    alt: "Abonnements mit Transaktionsübersicht",
  },
];
