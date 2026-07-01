"use client";

import { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────
// Seed data — MVP static representation.
// [SCOPE] Replace with CSV / Supabase query when backend is ready.
// ─────────────────────────────────────────────

const GOOGLE_CAL_LINK =
  "https://calendar.google.com/calendar/u/0?cid=Y185MmEwYmFiYmViOTc0NTMzZWNkMDhjNDAyYTY5NGJmNmEwNjk2NzMzY2NjZDZhYjc2N2FlNGI4MzVjZmJjZTgwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";

// Artwork references used in the zoom event (array of base_ids)
// Spec §"Kunstobjekte-Referenzen": Werke, Serien oder Collections, die auf diesem Event ausgestellt wurden
const ZOOM_ARTWORK_REFS = [
  { base_id: "draw-04", name: "Zeichnung IV", kategorie: "Zeichnen" },
  { base_id: "poem-03", name: "Poem III", kategorie: "Dichten" },
  { base_id: "sculpture-01", name: "Skulptur I", kategorie: "Skulpturen" },
];

const ZOOM_EVENT = {
  id: "zoom-event-001",
  meetingname: "Flowstate Express — Wöchentlicher Zoom",
  eventname: "20 min Selbstausdruck · 10 min Sharing",
  // meetingkategorie: leer (Coming Soon) — Spec Z. 231: "erstmal leer" + QUESTIONS C-6
  meetingkategorie: null,
  zeit: "19:00 – 19:30 Uhr",
  datum: "Jeden Dienstag (wöchentlich wiederkehrend)",
  ort: null, // online
  online: true,
  teilnehmerzahl: "bis zu 12",
  meetingpartner: "Flowstate Foundation",
  mitwirkende_kuenstler: ["Nils Tenkotte"],
  artwork_refs: ZOOM_ARTWORK_REFS,
};

const COMMUNITY_CATEGORIES = [
  {
    id: "gedichte",
    label: "Gedichte",
    emoji: "✍️",
    description: "Teile Verse, Lyrik und Zeilen aus deiner Seele.",
    color: "from-sky/10 to-sky/5",
    accent: "text-sky",
    border: "border-sky/20",
  },
  {
    id: "zeichnen",
    label: "Zeichnen",
    emoji: "✏️",
    description: "Linien, Skizzen und Formen — der Ausdruck durch die Hand.",
    color: "from-orange/10 to-orange/5",
    accent: "text-orange",
    border: "border-orange/20",
  },
  {
    id: "philosophie",
    label: "Philosophie",
    emoji: "💭",
    description: "Gedanken, die dich bewegen. Vom Kopf ins Herz.",
    color: "from-fire/10 to-fire/5",
    accent: "text-fire",
    border: "border-fire/20",
  },
  {
    id: "skulpturen",
    label: "Skulpturen",
    emoji: "🗿",
    description: "Form trifft Raum — dreidimensionaler Ausdruck.",
    color: "from-muted/10 to-muted/5",
    accent: "text-muted",
    border: "border-muted/20",
  },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function ZoomIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="currentColor"
      aria-label="Zoom Video"
    >
      <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5l4 3V8.5l-4 3V7a2 2 0 0 0-2-2H4Z" />
    </svg>
  );
}

function ArtworkChip({ name, kategorie }: { name: string; kategorie: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-muted/20 text-xs text-muted">
      <span className="text-orange font-medium">{kategorie}</span>
      <span>·</span>
      <span>{name}</span>
    </span>
  );
}

function ZoomEventCard() {
  return (
    <article className="rounded-2xl bg-white border border-muted/15 overflow-hidden shadow-sm">
      {/* Header band */}
      <div className="flex items-center gap-2 px-5 py-3 bg-sky/10 border-b border-sky/15">
        <span className="text-sky">
          <ZoomIcon />
        </span>
        <span className="text-xs font-medium text-sky uppercase tracking-wide">
          Online · Zoom
        </span>
        <span className="ml-auto">
          <span className="inline-block px-2 py-0.5 rounded-full bg-orange/10 text-orange text-xs font-medium">
            {/* meetingkategorie: null → Coming Soon — QUESTIONS.md C-6 */}
            Meetingkategorie: Coming Soon
          </span>
        </span>
      </div>

      <div className="px-5 py-5 space-y-4">
        {/* Name + Eventname */}
        <div>
          <h3 className="font-display text-xl font-semibold text-text">
            {ZOOM_EVENT.meetingname}
          </h3>
          <p className="text-muted text-sm mt-0.5">{ZOOM_EVENT.eventname}</p>
        </div>

        {/* Meta grid */}
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="text-xs text-muted uppercase tracking-wide mb-0.5">
              Zeit
            </dt>
            <dd className="text-text font-medium">{ZOOM_EVENT.zeit}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted uppercase tracking-wide mb-0.5">
              Datum
            </dt>
            <dd className="text-text font-medium">{ZOOM_EVENT.datum}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted uppercase tracking-wide mb-0.5">
              Teilnehmer
            </dt>
            <dd className="text-text font-medium">{ZOOM_EVENT.teilnehmerzahl}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted uppercase tracking-wide mb-0.5">
              Veranstalter
            </dt>
            <dd className="text-text font-medium">{ZOOM_EVENT.meetingpartner}</dd>
          </div>
        </dl>

        {/* Mitwirkende Künstler */}
        <div>
          <p className="text-xs text-muted uppercase tracking-wide mb-1.5">
            Mitwirkende Künstler
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ZOOM_EVENT.mitwirkende_kuenstler.map((k) => (
              <span
                key={k}
                className="px-2.5 py-1 rounded-full bg-creme text-text text-xs font-medium"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Kunstobjekte-Referenzen — Spec §"Kunstobjekte-Referenzen" */}
        <div>
          <p className="text-xs text-muted uppercase tracking-wide mb-1.5">
            Ausgestellte Werke
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ZOOM_EVENT.artwork_refs.map((a) => (
              <ArtworkChip key={a.base_id} name={a.name} kategorie={a.kategorie} />
            ))}
          </div>
        </div>

        {/* Meeting-Link + Kalender */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={GOOGLE_CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky text-white text-sm font-medium hover:bg-sky/90 transition-colors"
          >
            <ZoomIcon />
            Zum Google-Kalender
          </a>
          {/* [SCOPE] Direct meeting link will be set once Zoom recurring link is published */}
          <button
            disabled
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-muted/30 text-muted text-sm font-medium cursor-not-allowed opacity-60"
            title="Meeting-Link folgt"
          >
            Meeting-Link folgt
          </button>
        </div>
      </div>
    </article>
  );
}

function PersonalEventPlaceholder() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-muted/20 p-8 text-center">
      <span className="inline-block text-3xl mb-3">🏛️</span>
      <h3 className="font-display text-lg font-semibold text-text mb-2">
        Persönliche Events
      </h3>
      <p className="text-muted text-sm max-w-xs mx-auto">
        Events mit Kooperations-Ateliers und Eventpartnern — kommen bald.
      </p>
      <p className="mt-2 text-xs text-muted/60">[SCOPE] Phase 2</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<"online" | "persoenlich">(
    "online"
  );

  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto w-full px-4 pt-12 pb-10">
        <p className="font-accent text-orange text-lg mb-2">Erleben</p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-text leading-tight mb-4">
          Spüre dich selbst und{" "}
          <span
            className="font-semibold"
            style={{
              background: "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            verleihe dem Ausdruck
          </span>
        </h1>
        <p className="text-muted text-lg max-w-xl">
          Finde deinen Ausdruck ortsungebunden in Gemeinschaft.
        </p>
      </section>

      {/* ── EVENT-FILTER + LIST ── */}
      <section className="max-w-4xl mx-auto w-full px-4 pb-12">
        {/* Filter Buttons — Spec Z. 196: "Filter: Online, Persönlich" */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("online")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "online"
                ? "bg-text text-creme"
                : "bg-white border border-muted/20 text-muted hover:border-text/30 hover:text-text"
            }`}
          >
            Online
          </button>
          <button
            onClick={() => setActiveFilter("persoenlich")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "persoenlich"
                ? "bg-text text-creme"
                : "bg-white border border-muted/20 text-muted hover:border-text/30 hover:text-text"
            }`}
          >
            Persönlich
          </button>
        </div>

        {/* Event Content */}
        {activeFilter === "online" ? (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text mb-1">
                Online-Events
              </h2>
              <p className="text-muted text-sm mb-6">
                Finde deinen Ausdruck ortsungebunden in Gemeinschaft
              </p>
              <ZoomEventCard />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text mb-1">
                Persönliche Events
              </h2>
              <p className="text-muted text-sm mb-6">
                Spüre die Resonanz mit anderen im gemeinschaftlichen Erleben
              </p>
              <PersonalEventPlaceholder />
            </div>
          </div>
        )}
      </section>

      {/* ── COMMUNITY CHAT ── */}
      {/* Spec §"Community Chat": 4 Kategorien — Gedichte, Zeichnen, Philosophie, Skulpturen */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-accent text-sky text-lg mb-2">Gemeinschaft</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text mb-3">
            Community Chat
          </h2>
          <p className="text-muted max-w-xl mb-10">
            Teile deine Freude am Ausdruck mit Gleichgesinnten und lass dich
            von ihnen verzaubern
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {COMMUNITY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-6 flex flex-col gap-3`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={cat.label}>
                    {cat.emoji}
                  </span>
                  <h3 className={`font-display text-xl font-semibold ${cat.accent}`}>
                    {cat.label}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {cat.description}
                </p>
                {/* [SCOPE] Chat functionality — Phase 2 (Supabase real-time) */}
                <div className="mt-auto pt-2">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/60 text-xs text-muted font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACK TO HOME ── */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}
