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

/**
 * Derselbe Weg, aber mit Gamescom als Herkunft: Die vorbelegte WhatsApp-
 * Nachricht nennt dann die Messe. `von` ist in route.ts eine feste Zuordnung,
 * kein durchgereichter Text.
 */
export const PROTOTYPE_ACCESS_PATH_GAMESCOM = "/zugang?von=gamescom";

export interface PrototypeScreen {
  /** Dateiname ohne Endung in public/images/prototype/ */
  slug: string;
  /** Höhe von <slug>.webp in Pixeln; die Breite ist stets PROTOTYPE_IMAGE_WIDTH. */
  height: number;
  /** Bildunterschrift in der Schublade (Caveat) */
  caption: string;
  /** Alt-Text — beschreibt, was der Screen zeigt */
  alt: string;
  /**
   * Fähnchen unter dem Bild, wo der Screen nicht den gebauten Stand zeigt,
   * sondern wohin es gehen soll. Ohne Angabe erscheint keines.
   */
  tag?: string;
  /**
   * Wie das Vorschaubild die Kachel füllt. Standard ist "cover": Die Kachel hat
   * ein festes Seitenverhältnis, damit die Reihe ruhig bleibt, und ein Screen in
   * Telefonform verliert dabei nur wenige Pixel links und rechts.
   *
   * "contain" ist für Screens, die nach einem Zuschnitt deutlich kürzer sind —
   * bei denen würde "cover" einen schmalen Streifen aus der Mitte zeigen und
   * links wie rechts den Text abschneiden.
   */
  fit?: "cover" | "contain";
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
    height: 1050,
    caption: "Eigene Welten",
    alt: "Ökosystem-Übersicht mit einer eigenen, frei erfundenen Welt",
    // Der Export zeigte darunter fremde Marken als abonnierbare Einträge; der
    // Screen ist deshalb unten beschnitten (siehe og/mapping.txt) und dadurch
    // deutlich kürzer als die übrigen — er wird eingepasst statt beschnitten.
    fit: "contain",
    // Die Ansicht nennt "10 € mtl." für etwas, das es noch nicht gibt. Das
    // Fähnchen hält fest, dass hier kein Angebot steht.
    tag: "Wunschansicht — kein Angebot",
  },
  {
    slug: "11-abonnements",
    height: 1956,
    caption: "Was du unterstützt",
    alt: "Abonnements mit Transaktionsübersicht",
  },
];
