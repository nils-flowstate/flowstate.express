"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";

// ─────────────────────────────────────────────
// Profile data (MVP static — from artworks.csv + series.csv)
// ─────────────────────────────────────────────

// Spec §Profile-Specs: "Ein Ausstellungswerk jeder Kategorie nach Wahl des Künstlers"
// draw-01.webp, philosophie-01.webp, poem-05.webp, sculpture-01.webp
const EXHIBITION_WORKS = [
  {
    base_id: "draw-01",
    filename: "draw-01.webp",
    name: "Zeichnung I",
    hauptkategorie: "Zeichnen",
    tags: ["zeichnung", "linie"],
  },
  {
    base_id: "philosophie-01",
    filename: "philosophie-01.webp",
    name: "Philosophie I",
    hauptkategorie: "Philosophieren",
    tags: ["philosophie", "gedanke"],
  },
  {
    base_id: "poem-05",
    filename: "poem-05.webp",
    name: "Gedicht V",
    hauptkategorie: "Dichten",
    tags: ["gedicht", "deutsch", "lyrik"],
  },
  {
    base_id: "sculpture-01",
    filename: "sculpture-01.webp",
    name: "Skulptur I",
    hauptkategorie: "Skulpturen",
    tags: ["skulptur", "form", "raum"],
  },
];

// Spec §Profile-Specs: "Rampenlicht: draw-02-02, 67%"
// Spec §Art-Instances-Datenlogik: Versionsverlauf per Dropdown
const RAMPENLICHT = {
  base_id: "draw-02",
  current_version: 2,
  rampenlicht_percent: 67,
  versions: [
    {
      version: 1,
      id: "draw-02-v1",
      filename: "draw-02-01.webp",
      name: "Linien im Raum — Stand 1",
      label: "draw-02-v1 alt",
    },
    {
      version: 2,
      id: "draw-02-v2",
      filename: "draw-02-02.webp",
      name: "Linien im Raum — Stand 2",
      label: "draw-02-v2 aktuell",
    },
  ],
};

// Spec §series.csv: show_in_profile=true → Serie "Deutsch" anzeigen
// Serie "English" (show_in_profile=false) → NICHT auf Profil
const PROFILE_SERIES = [
  {
    id: "series-02",
    name: "Deutsch",
    beschreibung: "Gedichte auf Deutsch",
    show_in_profile: true,
    tags: ["poem", "deutsch", "lyrik"],
    // Works in this series (from artworks.csv: series_id=series-02)
    artworks: [
      { base_id: "poem-01", filename: "poem-01.webp", name: "Gedicht I" },
      { base_id: "poem-05", filename: "poem-05.webp", name: "Gedicht V" },
    ],
  },
  // "English" (series-01): show_in_profile=false → deliberately excluded
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function ExhibitionCard({
  base_id,
  filename,
  name,
  hauptkategorie,
  tags,
}: (typeof EXHIBITION_WORKS)[number]) {
  return (
    <article className="rounded-2xl bg-white overflow-hidden shadow-sm border border-muted/10 group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={`/images/${filename}`}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="px-4 py-3 space-y-1.5">
        <p className="text-xs text-orange font-medium uppercase tracking-wide">
          {hauptkategorie}
        </p>
        <p className="font-display text-sm font-semibold text-text">{name}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((t) => (
            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-full bg-creme text-muted">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function RampenLichtSection() {
  const [selectedVersionIdx, setSelectedVersionIdx] = useState(
    RAMPENLICHT.current_version - 1 // default: current (index 1 = version 2)
  );
  const selectedVersion = RAMPENLICHT.versions[selectedVersionIdx];
  const percent = RAMPENLICHT.rampenlicht_percent;

  return (
    <div className="rounded-2xl bg-white border border-muted/10 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-muted/10 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="font-accent text-orange text-base">Rampenlicht</p>
          <h3 className="font-display text-lg font-semibold text-text">
            Aktuelles Projekt: Linien im Raum
          </h3>
        </div>

        {/* Version Dropdown — Spec §Profile-Login-Art-Instances-Sample-Explanation Z. 315-316 */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted">Versionsverlauf</label>
          <select
            value={selectedVersionIdx}
            onChange={(e) => setSelectedVersionIdx(Number(e.target.value))}
            className="text-sm border border-muted/20 rounded-lg px-3 py-1.5 bg-creme text-text focus:outline-none focus:ring-2 focus:ring-orange"
          >
            {RAMPENLICHT.versions.map((v, i) => (
              <option key={v.id} value={i}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <Image
          src={`/images/${selectedVersion.filename}`}
          alt={selectedVersion.name}
          width={900}
          height={600}
          className="w-full h-auto object-cover max-h-[420px]"
          unoptimized
        />
        {/* Version badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              selectedVersion.version === RAMPENLICHT.current_version
                ? "bg-orange text-white"
                : "bg-atelier/60 text-creme backdrop-blur-sm"
            }`}
          >
            {selectedVersion.version === RAMPENLICHT.current_version
              ? "Aktuell"
              : "Ältere Version"}
          </span>
        </div>
      </div>

      {/* Progress bar — Spec: "67 %" */}
      <div className="px-5 py-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Fertigstellungsgrad</span>
          <span className="font-display text-2xl font-semibold text-text">
            {percent} %
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-creme overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${percent}%`,
              background:
                "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)",
            }}
          />
        </div>
        <p className="text-xs text-muted">
          {selectedVersion.name}
        </p>
      </div>
    </div>
  );
}

function SeriesSection() {
  return (
    <div className="space-y-6">
      {/* Only series with show_in_profile=true are rendered.
          Serie "English" (show_in_profile=false) is intentionally excluded
          per series.csv and Spec §Art-Instances-Datenlogik. */}
      {PROFILE_SERIES.filter((s) => s.show_in_profile).map((serie) => (
        <div
          key={serie.id}
          className="rounded-2xl bg-white border border-muted/10 p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="font-accent text-sky text-base">{serie.name}</p>
              <p className="text-muted text-sm">{serie.beschreibung}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {serie.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full bg-creme text-muted text-xs"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {serie.artworks.map((a) => (
              <div
                key={a.base_id}
                className="rounded-xl overflow-hidden border border-muted/10 group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`/images/${a.filename}`}
                    alt={a.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="px-2 py-1.5">
                  <p className="text-xs text-text font-medium truncate">{a.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ProfilePage() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      <div className="flex flex-col">
        {/* ── HERO / ESSENZ ── */}
        {/* Spec §Profile-Specs: Titel "Was ist meine Essenz?" + Beschreibung "Was prägt(e) meinen Ausdruck?" */}
        <section className="max-w-4xl mx-auto w-full px-4 pt-12 pb-10">
          <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
            <div>
              <p className="font-accent text-fire text-lg mb-1">Ausdruck</p>
              <h1 className="font-display text-4xl md:text-5xl font-light text-text leading-tight">
                Was ist meine{" "}
                <span
                  className="font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Essenz?
                </span>
              </h1>
              <p className="text-muted text-lg mt-3 max-w-lg">
                Was prägt(e) meinen Ausdruck?
              </p>
            </div>

            {/* Login button — Spec §Profile-Specs: "Login-Button → öffnet LoginModal" */}
            <button
              onClick={() => setLoginOpen(true)}
              className="shrink-0 px-5 py-2.5 rounded-full bg-text text-creme text-sm font-medium hover:bg-text/90 transition-colors"
            >
              Login
            </button>
          </div>

          {/* Artist info */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky via-orange to-fire flex items-center justify-center text-white font-display font-semibold text-sm">
              NT
            </div>
            <div>
              <p className="font-medium text-text text-sm">Nils Tenkotte</p>
              <p className="text-muted text-xs">
                Zeichnen · Dichten · Philosophieren · Skulpturen
              </p>
            </div>
          </div>
        </section>

        {/* ── AUSSTELLUNGSWERKE ── */}
        {/* Spec §Profile-Specs: "Ein Ausstellungswerk jeder Kategorie nach Wahl des Künstlers" */}
        <section className="max-w-4xl mx-auto w-full px-4 pb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">
            Ausstellungswerke
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EXHIBITION_WORKS.map((w) => (
              <ExhibitionCard key={w.base_id} {...w} />
            ))}
          </div>
        </section>

        {/* ── RAMPENLICHT ── */}
        {/* Spec §Profile-Specs: "Rampenlicht: Derzeitiger Stand eines aktuellen Projektes (in Prozent)" */}
        {/* draw-02-02, 67%, Dropdown: draw-02-v1 alt, draw-02-v2 aktuell */}
        <section className="max-w-4xl mx-auto w-full px-4 pb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">
            Im Rampenlicht
          </h2>
          <RampenLichtSection />
        </section>

        {/* ── SERIEN ── */}
        {/* Spec §series.csv: "Deutsch" (show_in_profile=true) anzeigen
            "English" (show_in_profile=false) → bewusst nicht angezeigt */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-text mb-6">
              Serien
            </h2>
            <SeriesSection />
            {/* Note: Serie "English" is not shown because show_in_profile=false in series.csv */}
          </div>
        </section>

        {/* ── NAV ── */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-muted hover:text-text transition-colors"
            >
              ← Zurück
            </Link>
            <Link
              href="/observe"
              className="text-sm text-orange hover:underline font-medium"
            >
              Observe →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
