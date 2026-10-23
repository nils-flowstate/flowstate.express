/**
 * Inhalte der Gamescom-Seite (/gamescom).
 *
 * Die Seite ist eine Kampagnenseite: Sie wird über QR-Code und Kurzlink
 * erreicht, erklärt die Geschichtenwelt in einem Durchlauf und endet in genau
 * einer Handlung — Prototyp-Zugang über WhatsApp anfragen.
 *
 * Texte stehen hier und nicht in der Seite, damit der Aufbau der Seite lesbar
 * bleibt und Formulierungen an einer Stelle geändert werden können.
 *
 * WICHTIG — keine fremden Marken. Die Zielgruppe wird über Gattungen
 * angesprochen (Manga, Anime, Pen & Paper, Fanfiction), nie über konkrete
 * Werke, Reihen oder Studios. Ein Markenname neben einer Roadmap legt eine
 * Zusammenarbeit nahe, die es nicht gibt. Siehe auch die Notiz in
 * public/images/prototype/og/mapping.txt.
 */

/** Breite der Screens in public/images/gamescom/ — siehe scripts/optimize-gamescom-images.sh */
export const SCREEN_WIDTH = 806;
export const SCREEN_HEIGHT = 1622;
export const SCREEN_THUMB_WIDTH = 480;

export interface GamescomScreen {
  /** Dateiname ohne Endung in public/images/gamescom/ */
  slug: string;
  /** Reitername in der App */
  reiter: string;
  /** Überschrift des Abschnitts — das Versprechen, nicht der Funktionsname */
  titel: string;
  /** Zwei bis drei Sätze, die den Reiter in der Sprache der Zielgruppe erklären */
  text: string;
  /** Zitat aus dem Screen selbst, in Caveat unter dem Bild */
  bildunterschrift: string;
  /** Alt-Text */
  alt: string;
}

/** Reihenfolge erzählt den Bogen: wann → wer zu wem → wo → woraus. */
export const GAMESCOM_SCREENS: GamescomScreen[] = [
  {
    slug: "zeitlinie",
    reiter: "Zeitlinie",
    titel: "Zwei Zeiten, ein Strang",
    text:
      "Erzählzeit ist, wann dein Publikum etwas erfährt. Weltzeit ist, wann es geschehen ist. Die Geschichtenwelt hält beide auseinander und zeigt sie nebeneinander — und ein Schieber blendet aus, was noch spoilern würde.",
    bildunterschrift: "5 Ereignisse liegen dahinter und bleiben für Leser verborgen.",
    alt: "Zeitleiste mit Umschaltern für Erzählzeit, Weltzeit und beide, dazu ein Schieber für den Leser-Wissensstand",
  },
  {
    slug: "geflecht",
    reiter: "Geflecht",
    titel: "Beziehungen, die ein Ablaufdatum haben dürfen",
    text:
      "Verrat in Kapitel 9 heißt nicht Verrat in Kapitel 1. Jede Beziehung gilt für einen Zeitraum, nicht für immer. Zieh den Schieber auf ein Kapitel, und das Geflecht zeigt, was damals galt.",
    bildunterschrift: "Beziehungen haben eine Gültigkeit, kein Für-immer.",
    alt: "Beziehungsgeflecht zwischen Figuren, gebunden an ein Kapitel",
  },
  {
    slug: "karte",
    reiter: "Karte",
    titel: "Kann sie in einer Nacht dort sein?",
    text:
      "Orte mit Reisezeiten dazwischen. Tippe einen Ort an, und du siehst, welche Figur nach welchem Ereignis dort war. Wer Wege plant, merkt sofort, wenn eine Nacht dafür nicht reicht.",
    bildunterschrift: "Wege mit Reisezeit — 3 Std Aufstieg, 40 Min, 20 Min.",
    alt: "Karte mit Orten, Reisezeiten dazwischen und einer Liste, wer dort war",
  },
  {
    slug: "werkstatt-figuren",
    reiter: "Werkstatt",
    titel: "Kanon, Entwurf, Verworfen",
    text:
      "Figuren, Orte, Dinge, Gruppen. Jeder Eintrag darf unfertig sein — „noch unklar, ob sie schützt oder verbirgt“ ist ein gültiger Stand. Entwurf bleibt Entwurf, bis du dich entscheidest, und Verworfenes bleibt auffindbar.",
    bildunterschrift: "Noch unklar, ob sie schützt oder verbirgt.",
    alt: "Werkstatt mit Figuren, Orten, Dingen und Gruppen, gefiltert nach Kanon, Entwurf und Verworfen",
  },
  {
    slug: "werkstatt-dinge",
    reiter: "Werkstatt",
    titel: "Dinge, die etwas bedeuten",
    text:
      "Ein Band von der Mutter. Ein Glas, das nur der bekommt, der einen Traum zurückgibt. Gegenstände tragen ihre Geschichte mit, statt in einer Notizliste zu verschwinden.",
    bildunterschrift: "Jede Münze ist eine vergessene Erinnerung.",
    alt: "Liste von Gegenständen der Geschichtenwelt mit Beschreibung und Stand",
  },
];

/**
 * Die Hinweiskarte aus der App („Bau deine Welt, nicht nur das Werk").
 *
 * Keine Telefonansicht, sondern eine Übersichtskarte — sie steht deshalb in
 * einem eigenen Block über den Bildabschnitten und nicht in der Galerie.
 */
export const UEBERBLICK = {
  slug: "ueberblick",
  width: 722,
  height: 1406,
  alt:
    "Hinweiskarte aus der App: „Bau deine Welt, nicht nur das Werk.“ Drei Schritte — Anlegen, " +
    "Verknüpfen, Freigeben — darunter eine Liste dessen, was zu einer Welt gehört: Figuren, Orte, " +
    "Dinge, zwei Zeitachsen, Weltregeln und offene Fragen.",
};

/**
 * Was auf der Karte steht, als echter Text.
 *
 * Die Karte ist ein Bild aus Text: Vorlesesoftware und Suchmaschinen kommen
 * nicht heran, und auf dem Telefon wird die Schrift klein. Deshalb stehen die
 * Punkte, die die Bildabschnitte darunter nicht ohnehin erklären, hier noch
 * einmal als Text daneben.
 */
export const UEBERBLICK_PUNKTE = [
  "Weltregeln und offene Fragen gehören zur Welt wie Figuren und Orte.",
  "Widersprüche fallen auf, bevor sie im fertigen Werk landen.",
  "Offene Fragen und offene Versprechen bleiben nicht liegen.",
  "Verknüpfungen werden vorgeschlagen — aus deinem eigenen Text.",
  "Werke, Serien und Kollektionen hängen direkt an der Welt.",
  "Ein Pitch-Paket für Verlag oder Studio: befristet, mit allem drin.",
];

/**
 * Abschnitte im Video, die per Klick angesprungen werden.
 * `sekunde` bezieht sich auf den geschnittenen Mitschnitt in public/video/.
 */
export interface VideoKapitel {
  sekunde: number;
  label: string;
}

export const VIDEO_KAPITEL: VideoKapitel[] = [
  { sekunde: 0, label: "Eigene Welten" },
  { sekunde: 4, label: "Zeitlinie" },
  { sekunde: 11, label: "Geflecht" },
  { sekunde: 26, label: "Eine Figur im Detail" },
  { sekunde: 38, label: "Prüfstand: Widersprüche" },
  { sekunde: 56, label: "Werkstatt" },
  { sekunde: 70, label: "Offene Fragen" },
];

/**
 * Drei Sätze zum Wiedererkennen, ganz oben. Sie beschreiben das Problem in der
 * Sprache der Zielgruppe, bevor irgendeine Funktion genannt wird.
 */
export const WIEDERERKENNUNG = [
  "Kapitel 3 sagt, sie kennen sich nicht. Kapitel 9 sagt, sie waren Geschwister.",
  "Dein Lore liegt in vier Dokumenten, einem Chatverlauf und einem Skizzenbuch.",
  "Nur du weißt, in welcher Reihenfolge das alles passiert ist.",
];

/** Für wen sich das deckt — Gattungen, keine Marken. */
export const ZIELGRUPPEN = [
  {
    titel: "Gamer",
    text:
      "Deine Gilden-Lore, deine eigene Kampagne, dein Headcanon zu der Welt, die du liebst — an einem Ort, der merkt, wenn sich zwei Einträge widersprechen.",
  },
  {
    titel: "Manga & Anime",
    text:
      "Ein großer Cast über viele Bände: dutzende Figuren, jahrelange Rückblenden, Beziehungen, die sich umkehren. Genau dafür gibt es Erzählzeit und Weltzeit getrennt.",
  },
  {
    titel: "Film, Serie & Drehbuch",
    text:
      "Zeitsprünge, Parallelstränge, Rückblenden. Die Zeitleiste zeigt beide Ordnungen nebeneinander, statt dich zwischen ihnen wählen zu lassen.",
  },
  {
    titel: "Pen & Paper",
    text:
      "Reisezeiten auf der Karte, Fraktionen im Geflecht, Orte mit Verlauf. Vorbereitung für den nächsten Abend, ohne fünf offene Fenster nebeneinander.",
  },
  {
    titel: "Fanfiction & Worldbuilding",
    text:
      "Kanon, Entwurf, Verworfen. Was du dir ausdenkst, darf Entwurf bleiben, ohne verloren zu gehen — und wird Kanon, wenn du soweit bist.",
  },
];

/** Wie man anfängt. */
export const SCHRITTE = [
  {
    titel: "Welt anlegen",
    text: "Ein Name und ein Satz, worum es geht. Mehr braucht der Anfang nicht.",
  },
  {
    titel: "Eintragen, was du schon hast",
    text:
      "Figuren, Orte, Dinge, Gruppen — auch halbfertig. Für alles, was noch wackelt, gibt es „Entwurf“.",
  },
  {
    titel: "Die Zeitleiste ziehen",
    text:
      "Sobald Ereignisse an Kapiteln hängen, verknüpfen sich Karte, Geflecht und Zeitlinie von selbst.",
  },
];

/**
 * Der Hinweis über den Roadmap-Phasen. Steht dauerhaft sichtbar auf der Seite —
 * eingeklappt sind nur die Phasen dahinter, nie dieser Text.
 */
export const ROADMAP_HINWEIS = [
  "Es gibt keinen Anspruch, keinen Termin, keinen Preis und keine Zusage, dass davon je etwas gebaut wird.",
  "Es besteht keine Verbindung, Partnerschaft, Lizenz, Zusammenarbeit oder Abstimmung mit Marken, Werken, Studios, Verlagen, Labels oder sonstigen Rechteinhabern.",
  "Die dafür nötigen Rechte liegen nicht vor. Ob einzelne Stufen überhaupt möglich werden, hängt auch daran, ob solche Rechte erworben werden können.",
  "Reihenfolge und Inhalt können sich jederzeit ändern oder ganz entfallen.",
  "Alle Namen, Figuren, Orte und Zahlen in den Bildern und im Video sind frei erfunden.",
];

export interface Phase {
  /** „Heute“, „Danach“ … — keine Jahreszahlen, es gibt keine Termine. */
  wann: string;
  titel: string;
  text: string;
  /** Nur für den heutigen Stand: Das hier gibt es wirklich. */
  gebaut?: boolean;
}

/**
 * Ausbaustufen, übersetzt aus .claude/roadmap/ROADMAP.md.
 *
 * Die ROADMAP nennt als Kategoriebeispiele konkrete Reihen und Franchises.
 * Die stehen hier bewusst nicht: Auf einer öffentlichen Seite neben einer
 * Roadmap gelesen, legen sie eine Lizenz nahe, die es nicht gibt. Gattungen
 * treffen dieselbe Zielgruppe und behaupten nichts.
 */
export const PHASEN: Phase[] = [
  {
    wann: "Heute",
    titel: "Der Prototyp",
    text:
      "Die Geschichtenwelt, die du auf dieser Seite siehst: Zeitlinie, Geflecht, Karte und Werkstatt. Ein Arbeitsstand, nicht öffentlich, Zugang auf Anfrage.",
    gebaut: true,
  },
  {
    wann: "Als Nächstes",
    titel: "Welten nach Interesse",
    text:
      "Kategorien, die sich an Interessen entlang bilden — von Natur und Sport über Manga bis zu Glaubens- und Lehrfragen. Zuerst für haptische, körperliche Kunst, danach versuchsweise für digitale wie Fotografie und Musikproduktion.",
  },
  {
    wann: "Danach",
    titel: "Unterstützen und abonnieren",
    text:
      "Künstler:innen legen Preis und Leistung selbst fest: Zugang zu Werken, Rechte an einzelnen Kategorien wie Beats oder Bildrechten, vergünstigte oder exklusive Live-Räume. Eine eigene Geschichtenwelt wäre Teil eines Abos.",
  },
  {
    wann: "Am Horizont",
    titel: "Export ins eigene Atelier",
    text:
      "Der eigene Ausdruck als Galerie unter einer eigenen Adresse, mit Zugangsschlüssel für Veranstalter:innen, Verlage oder Labels — und einem Zeitstrahl, der den Werdegang zeigt.",
  },
];
