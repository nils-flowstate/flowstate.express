import Link from "next/link";
import HeroImage from "@/components/HeroImage";

export default function Landingpage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="max-w-4xl mx-auto w-full px-4 pt-12 pb-10">
        <div className="mb-6">
          <h1 className="font-display text-4xl md:text-6xl font-light text-text leading-tight mb-4">
            Spüre deinen{" "}
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ausdruck
            </span>
          </h1>
          <p className="text-muted text-lg max-w-xl">
            Ein Raum für Künstler und Fühlende — Jenseits von Konsum.
          </p>
        </div>

        {/* Hero Image — sculpture-01.webp (confirmed QUESTIONS.md C-5) */}
        <HeroImage src="/images/sculpture-01.webp" alt="Skulptur I — Flowstate Express" />

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/profile"
            className="px-6 py-3 rounded-full bg-text text-creme font-medium text-sm hover:bg-text/90 transition-colors"
          >
            Zum Profil des Künstlers
          </Link>
          <Link
            href="/experience"
            className="px-6 py-3 rounded-full border-2 border-orange text-orange font-medium text-sm hover:bg-orange hover:text-white transition-colors"
          >
            Erlebe
          </Link>
          <Link
            href="/observe"
            className="px-6 py-3 rounded-full border-2 border-text/20 text-text font-medium text-sm hover:bg-text/5 transition-colors"
          >
            Spüre
          </Link>
        </div>
      </section>

      {/* ===== 2.1 CORE VISION ===== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-sky text-lg mb-3">Der Raum</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-10 max-w-2xl">
            Was uns alle verbindet, ist das Gefühl.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <VisionCard
              accent="Der Raum"
              text="Flowstate ist der Wunsch einen Raum für jeden zu schaffen, in der jede Emotion getragen wird um im Ausdruck des Selbst Raum findet."
            />
            <VisionCard
              accent="Der Ausdruck"
              text="Das was uns alle miteinander verbindet ist das Gefühl. Flowstate Express schafft ein Raum des Erkennens im Ausdruck des anderen. Das betrachten des Ausdrucks und des anderen ohne Filter."
            />
            <VisionCard
              accent="Die Relevanz"
              text="KI Übernimmt die Welt der Gedanken, kann aber nie fühlen oder wahrnehmen wie wir Menschen. Dies unterscheidet uns von der Maschine. Genau aus diesem Grund ist der Ausdruck durch das Gefühl wichtiger denn je. Vom Kopf ins Herz."
            />
            <VisionCard
              accent="Kultur"
              text="Das Ziel ist es die Menschen in ein gemeinschaftliches harmonisches Erleben zu führen. Voller Akzeptanz und Wertschätzung einander."
            />
          </div>
        </div>
      </section>

      {/* ===== 2.2 EXPERIENCE ===== */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-accent text-orange text-lg mb-1">Erleben</p>
              <h2 className="font-display text-3xl font-light text-text">
                Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="px-5 py-2.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors shrink-0"
            >
              Zur Experience →
            </Link>
          </div>
          <p className="text-muted max-w-xl">
            Finde deinen Ausdruck ortsungebunden in Gemeinschaft. Zoom-Events, Community-Chat und mehr — wöchentlich wiederkehrend.
          </p>
        </div>
      </section>

      {/* ===== 2.3 OBSERVE ===== */}
      <section className="bg-atelier text-creme py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-accent text-sky text-lg mb-1">Wahrnehmen</p>
              <h2 className="font-display text-3xl font-light">
                Observe
              </h2>
            </div>
            <Link
              href="/observe"
              className="px-5 py-2.5 rounded-full border border-creme/30 text-creme text-sm font-medium hover:bg-creme/10 transition-colors shrink-0"
            >
              Zur Observe →
            </Link>
          </div>
          <p className="text-creme/60 max-w-xl">
            Spüre den Ausdruck anderer und lass ihn auf dich wirken. Jedes Werk ist nur einmal sichtbar — bewusst und ohne Filter.
          </p>
        </div>
      </section>

      {/* ===== 2.4 PROFILE ===== */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-accent text-fire text-lg mb-1">Ausdruck</p>
              <h2 className="font-display text-3xl font-light text-text">
                Profil
              </h2>
            </div>
            <Link
              href="/profile"
              className="px-5 py-2.5 rounded-full bg-text text-creme text-sm font-medium hover:bg-text/90 transition-colors shrink-0"
            >
              Zum Profil →
            </Link>
          </div>
          <p className="text-muted max-w-xl">
            Entdecke die Werke, Serien und den laufenden künstlerischen Prozess. Rampenlicht zeigt den aktuellen Stand — transparent und lebendig.
          </p>
        </div>
      </section>

      {/* ===== 2.5 ZAHLEN DATEN FAKTEN ===== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-fire text-lg mb-3">Warum jetzt?</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-10 max-w-2xl">
            Der digitale Mangel — und der Gegenentwurf
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Der digitale Mangel */}
            <div className="rounded-2xl bg-creme p-6">
              <h3 className="font-display text-lg font-semibold text-text mb-4">
                Der digitale Mangel
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <span className="font-bold text-text text-2xl block leading-tight">95 %</span>
                  der 13–17-Jährigen nutzen Social Media; ein Drittel davon „fast ständig". <span className="text-xs">— Pew Research 2022</span>
                </li>
                <li>
                  <span className="font-bold text-text text-2xl block leading-tight">8 Std. 39 Min.</span>
                  Mediennutzung pro Tag bei Teenagern (2015–2021). <span className="text-xs">— Common Sense Media 2021</span>
                </li>
                <li>
                  <span className="font-bold text-text text-2xl block leading-tight">~50 %</span>
                  der 12–17-Jährigen: 4+ Stunden tägliche Bildschirmzeit. <span className="text-xs">— CDC NCHS 2021–2023</span>
                </li>
              </ul>
            </div>

            {/* Die Folgen */}
            <div className="rounded-2xl bg-creme p-6">
              <h3 className="font-display text-lg font-semibold text-text mb-4">
                Die Folgen
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <span className="font-bold text-text text-2xl block leading-tight">1 von 4</span>
                  Teenagern mit 4+ Stunden Bildschirmzeit berichten von Angst- oder Depressionssymptomen. <span className="text-xs">— CDC NCHS Brief Nr. 513, 2024</span>
                </li>
                <li>
                  Einsamkeit wurde 2023 zur Public-Health-Epidemie erklärt (US Surgeon General). Sie verdoppelt das Depressionsrisiko.
                </li>
                <li>
                  Soziale Medien bauen strukturell auf Vergleich auf — das Gegenteil von Selbstwert.
                </li>
              </ul>
            </div>

            {/* Der Gegenentwurf */}
            <div className="rounded-2xl p-6" style={{
              background: "linear-gradient(135deg, rgba(77,210,246,0.12), rgba(255,122,46,0.12), rgba(251,52,59,0.08))"
            }}>
              <h3 className="font-display text-lg font-semibold text-text mb-4">
                Ausdruck heilt
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <span className="font-bold text-text text-2xl block leading-tight">45 Min.</span>
                  künstlerisches Gestalten senken nachweislich den Cortisolspiegel — unabhängig von Vorerfahrung. <span className="text-xs">— Kaimal, Ray &amp; Muniz 2016</span>
                </li>
                <li>
                  Expressives Schreiben verbessert langfristig Gesundheit und reduziert Stress — auch bei Depression und Trauma.
                </li>
                <li>
                  Kunsttherapie steigert Wohlbefinden, Selbstwert und Lebenszufriedenheit. <span className="text-xs">— Systematische Reviews</span>
                </li>
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-orange pl-6 py-2">
            <p className="font-accent text-xl md:text-2xl text-text leading-relaxed">
              Glück kommt nicht durch das Außen. Es kommt durch das Fühlen, das Hinschauen, das Loslassen — durch den Ausdruck in uns.
            </p>
            <footer className="mt-2 text-sm text-muted">Genau dafür ist Flowstate Express ein Raum.</footer>
          </blockquote>
        </div>
      </section>

      {/* ===== 2.6 FLOWSTATE FOUNDATION ===== */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-accent text-sky text-lg mb-3">Größeres Ganzes</p>
          <h2 className="font-display text-2xl md:text-3xl font-light text-text mb-4">
            Ein Projekt der Flowstate Foundation
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-6">
            Flowstate Express ist Teil eines größeren Vorhabens: eines Raumes, in dem kreative Energie fließen kann — gemeinschaftlich, zeitlos und echt.
          </p>
          <a
            href="https://flowstate.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-orange font-medium hover:underline"
          >
            flowstate.foundation ↗
          </a>
        </div>
      </section>
    </div>
  );
}

function VisionCard({ accent, text }: { accent: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-1 rounded-full bg-linear-to-b from-sky via-orange to-fire shrink-0 mt-1" />
      <div>
        <p className="font-accent text-orange text-base mb-1">{accent}</p>
        <p className="text-text/80 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
