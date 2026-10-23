import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GamescomScreens from "@/components/GamescomScreens";
import GamescomVideo from "@/components/GamescomVideo";
import GamescomRoadmap from "@/components/GamescomRoadmap";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  SCHRITTE,
  UEBERBLICK,
  UEBERBLICK_PUNKTE,
  WIEDERERKENNUNG,
  ZIELGRUPPEN,
} from "@/lib/gamescom";
import { PROTOTYPE_ACCESS_PATH_GAMESCOM, PROTOTYPE_HOST } from "@/lib/prototype";

// Die Seite wird über QR-Code und Kurzlink geteilt und landet dadurch in
// Chats und Vorschaukarten — anders als die übrigen Seiten lohnen sich hier
// eigene Metadaten. Sie erzwingen zugleich, dass diese Datei eine Server
// Component bleibt; alles Interaktive liegt in den drei Gamescom-Komponenten.
export const metadata: Metadata = {
  title: "Geschichtenwelt — Flowstate Express",
  description:
    "Figuren, Orte, Zeitlinien und Beziehungen deiner eigenen Welt an einem Ort. Prototyp-Zugang auf Anfrage.",
  openGraph: {
    title: "Gib deiner Welt einen Ort",
    description:
      "Zeitlinie, Beziehungsgeflecht, Karte und Werkstatt für deine eigene Geschichte. Prototyp-Zugang auf Anfrage.",
    url: "/gamescom",
    siteName: "Flowstate Express",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/images/gamescom/geschichtenwelt-poster.webp" }],
  },
};

export default function GamescomPage() {
  return (
    <div className="flex flex-col">
      {/* Hero — bewusst creme und nicht bg-atelier: Die Prototyp-Leiste über
          jeder Seite ist selbst dunkel, beides würde ineinanderlaufen. */}
      <section className="max-w-4xl mx-auto w-full px-4 pt-12 pb-10">
        <p className="font-accent text-orange text-lg mb-2">Von der Gamescom</p>
        <h1 className="font-display text-4xl md:text-6xl font-light text-text leading-tight mb-4">
          Deine Welt lebt in deinem Kopf.{" "}
          <span
            className="font-semibold"
            style={{
              background: "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Gib ihr einen Ort.
          </span>
        </h1>
        <p className="text-muted text-lg max-w-xl mb-8">
          Eine Geschichtenwelt für alle, die eigene Figuren, Orte und Zeitlinien mit sich
          herumtragen — Gamer, Manga- und Filmfans, Pen-&-Paper-Runden, Schreibende.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10">
          <div className="flex flex-col gap-3 order-2 sm:order-1">
            <a
              href={PROTOTYPE_ACCESS_PATH_GAMESCOM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white font-medium text-sm hover:bg-fire transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Prototyp-Zugang anfragen
            </a>
            <a
              href="#mitschnitt"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-text/20 text-text font-medium text-sm hover:bg-text/5 transition-colors"
            >
              Ansehen, wie&rsquo;s funktioniert ↓
            </a>
            <p className="text-xs text-muted mt-1">
              {PROTOTYPE_HOST} · nicht öffentlich, Zugang auf Anfrage
            </p>
          </div>

          {/* Stumm, geloopt, ohne Bedienelemente — braucht kein JavaScript.
              Fällt auf das Standbild zurück, wenn das Video nicht lädt. */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/gamescom/geschichtenwelt-poster.webp"
            aria-label="Kurzer Mitschnitt: Blättern durch eine Geschichtenwelt"
            className="order-1 sm:order-2 w-full max-w-[200px] mx-auto sm:mx-0 h-auto rounded-3xl border border-muted/15 shadow-lg"
          >
            <source src="/video/geschichtenwelt-loop.webm" type="video/webm" />
            <source src="/video/geschichtenwelt-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Wiedererkennung */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-sky text-lg mb-3">Kennst du das?</p>
          <div className="grid gap-6 md:grid-cols-3">
            {WIEDERERKENNUNG.map((satz) => (
              <p
                key={satz}
                className="font-display text-lg font-light text-text leading-snug rounded-2xl bg-creme p-6"
              >
                {satz}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Die Bausteine */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-orange text-lg mb-3">Was drinsteckt</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-4 max-w-2xl">
            Eine Welt, mehrere Sichten
          </h2>
          <p className="text-muted mb-12 max-w-xl">
            Alles hängt an denselben Einträgen. Trägst du ein Ereignis ein, taucht es in
            der Zeitleiste, auf der Karte und im Geflecht auf.
          </p>

          {/* Überblickskarte aus der App. Die Punkte stehen daneben als Text —
              das Bild selbst besteht aus Schrift und ist für Vorlesesoftware
              wie für die Suche nicht lesbar. */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-16 md:mb-20 md:items-start">
            <div className="shrink-0 w-full max-w-[300px] mx-auto md:mx-0">
              {/* unoptimized: liegt bereits in Auslieferungsgröße vor —
                  siehe scripts/optimize-gamescom-images.sh */}
              <Image
                src={`/images/gamescom/${UEBERBLICK.slug}.webp`}
                alt={UEBERBLICK.alt}
                width={UEBERBLICK.width}
                height={UEBERBLICK.height}
                unoptimized
                className="w-full h-auto rounded-3xl shadow-lg"
              />
              <p className="text-xs text-muted mt-3 leading-relaxed">
                Ansicht aus dem Prototyp. Die dort genannte Abo-Funktion beschreibt eine
                Absicht — kein Angebot, keinen Preis, keine Verfügbarkeit.
              </p>
            </div>

            <div className="flex-1">
              <p className="font-accent text-sky text-lg mb-1">Auf einen Blick</p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-text mb-5 leading-tight">
                Was zu einer Welt gehört
              </h3>
              <ul className="flex flex-col gap-3">
                {UEBERBLICK_PUNKTE.map((punkt) => (
                  <li key={punkt} className="flex gap-3 text-muted leading-relaxed">
                    <span aria-hidden="true" className="text-orange shrink-0">
                      ·
                    </span>
                    <span>{punkt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <GamescomScreens />
          <p className="text-xs text-muted mt-12">
            Beispielinhalte: Die gezeigte Welt und alle Namen, Figuren, Orte und Zahlen
            darin sind frei erfunden.
          </p>
        </div>
      </section>

      {/* Mitschnitt */}
      <section id="mitschnitt" className="bg-atelier text-creme py-16 px-4 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-orange text-lg mb-3">Sieh es dir an</p>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-10 max-w-2xl">
            Einmal durch die Geschichtenwelt
          </h2>
          <GamescomVideo />
        </div>
      </section>

      {/* Zielgruppen */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-fire text-lg mb-3">Für wen das ist</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-10 max-w-2xl">
            Wenn du schon eine Welt hast, deckt sich das
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {ZIELGRUPPEN.map((gruppe) => (
              <div key={gruppe.titel} className="rounded-2xl bg-white border border-muted/15 p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {gruppe.titel}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{gruppe.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drei Schritte */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-sky text-lg mb-3">So fängt es an</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-10 max-w-2xl">
            In drei Schritten zu deiner Welt
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {SCHRITTE.map((schritt, i) => (
              <li key={schritt.titel} className="rounded-2xl bg-creme p-6">
                <p className="font-accent text-orange text-2xl leading-none mb-3">{i + 1}</p>
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {schritt.titel}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{schritt.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Was als Nächstes kommt — Hinweis sichtbar, Phasen hinter Bestätigung */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-orange text-lg mb-3">Ehrlich gesagt</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-10 max-w-2xl">
            Was als Nächstes kommt
          </h2>
          <GamescomRoadmap />
        </div>
      </section>

      {/* Abschluss */}
      <section className="bg-atelier text-creme py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4 max-w-2xl">
            Der Prototyp ist nicht öffentlich.
          </h2>
          <p className="text-creme/60 text-lg max-w-xl mb-8">
            Zugang gibt es auf Anfrage. Schreib mir, ich melde mich.
          </p>
          <a
            href={PROTOTYPE_ACCESS_PATH_GAMESCOM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white font-medium text-sm hover:bg-fire transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Prototyp-Zugang anfragen
          </a>
          <p className="text-sm text-creme/50 mt-6 max-w-xl leading-relaxed">
            Die Nachricht ist vorbereitet und nennt die Gamescom als Herkunft — abschicken
            musst du sie selbst. Lieber per Mail?{" "}
            <a
              href="mailto:nils@flowstate.foundation"
              className="underline underline-offset-2 hover:text-creme transition-colors"
            >
              nils@flowstate.foundation
            </a>
          </p>
          <p className="text-xs text-creme/40 mt-6 max-w-xl leading-relaxed">
            Der Prototyp ist ein Arbeitsstand, keine fertige Software: kein Anspruch auf
            Verfügbarkeit, Funktionsumfang oder darauf, dass eingetragene Inhalte erhalten
            bleiben.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm text-muted hover:text-text transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}
