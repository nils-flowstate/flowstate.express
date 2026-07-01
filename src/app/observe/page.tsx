"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// OBSERVE — Design decision log
//
// NO PUBLIC COMMENT FUNCTION (Spec Z. 264 + QUESTIONS D-1):
//   "Kommentarboxen senken Hemmschwelle für Hass-Kommentare."
//   Interaktion mit dem Künstler soll stattdessen direkt erfolgen —
//   nicht anonym-öffentlich. Öffentliche Kommentarfelder werden
//   bewusst nicht implementiert und sind [SCOPE] erst dann denkbar,
//   wenn eine Moderation und klare Identitätspflicht besteht.
//
// ONCE-VISIBLE principle (Spec Z. 263): Werke sind nur einmal
// sichtbar. [SCOPE] In Phase 1 werden die 4 Beispielwerke statisch
// angezeigt — das einmalige Anzeigen wird in Phase 2 (Supabase +
// Auth) technisch erzwungen.
// ─────────────────────────────────────────────

// Feed-Reihenfolge exakt laut Spec §"Observe-Specs":
// draw-04 → poem-03 → sculpture-01 → draw-03
const FEED_ARTWORKS = [
  {
    id: "draw-04-v1",
    base_id: "draw-04",
    filename: "draw-04.webp",
    name: "Zeichnung IV",
    beschreibung: null,
    hauptkategorie: "Zeichnen",
    tags: ["zeichnung", "licht"],
  },
  {
    id: "poem-03-v1",
    base_id: "poem-03",
    filename: "poem-03.webp",
    name: "Poem III",
    beschreibung: "An English poem",
    hauptkategorie: "Dichten",
    tags: ["poem", "english", "lyrik"],
  },
  {
    id: "sculpture-01-v1",
    base_id: "sculpture-01",
    filename: "sculpture-01.webp",
    name: "Skulptur I",
    beschreibung: null,
    hauptkategorie: "Skulpturen",
    tags: ["skulptur", "form", "raum"],
  },
  {
    id: "draw-03-v1",
    base_id: "draw-03",
    filename: "draw-03.webp",
    name: "Zeichnung III",
    beschreibung: null,
    hauptkategorie: "Zeichnen",
    tags: ["zeichnung", "form"],
  },
];

type Artwork = (typeof FEED_ARTWORKS)[number];

// ─────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────

function Lightbox({
  artwork,
  onClose,
}: {
  artwork: Artwork;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-atelier/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-creme/70 hover:text-creme transition-colors"
          aria-label="Schließen"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-white/5">
          <Image
            src={`/images/${artwork.filename}`}
            alt={artwork.name}
            width={900}
            height={700}
            className="w-full h-auto object-contain max-h-[75vh]"
            unoptimized
          />
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="font-display text-creme text-lg font-semibold">
            {artwork.name}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-creme/10 text-creme/80 text-xs font-medium">
            {artwork.hauptkategorie}
          </span>
          {artwork.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-white/5 text-creme/50 text-xs"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Feed Item Card
// ─────────────────────────────────────────────

function FeedCard({
  artwork,
  onOpen,
}: {
  artwork: Artwork;
  onOpen: (a: Artwork) => void;
}) {
  return (
    <article className="rounded-2xl bg-white overflow-hidden shadow-sm border border-muted/10 group">
      {/* Clickable image → Lightbox */}
      <button
        onClick={() => onOpen(artwork)}
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        aria-label={`${artwork.name} vergrößern`}
      >
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={`/images/${artwork.filename}`}
            alt={artwork.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-text/20">
            <span className="bg-white/90 rounded-full p-2.5">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-text"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                <path strokeLinecap="round" d="M11 8v6M8 11h6" />
              </svg>
            </span>
          </div>
        </div>
      </button>

      {/* Card body */}
      <div className="px-4 py-4 space-y-3">
        {/* Kategorie + Name */}
        <div>
          <p className="text-xs text-orange font-medium uppercase tracking-wide mb-0.5">
            {artwork.hauptkategorie}
          </p>
          <h2 className="font-display text-base font-semibold text-text">
            {artwork.name}
          </h2>
          {artwork.beschreibung && (
            <p className="text-muted text-sm mt-0.5">{artwork.beschreibung}</p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {artwork.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-creme text-muted text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Profil-Link — Spec: "Profil des Künstlers wählbar GoTo: Profile" */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text transition-colors group/link"
        >
          <span className="w-5 h-5 rounded-full bg-creme flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3"
              fill="currentColor"
            >
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z" />
            </svg>
          </span>
          <span className="group-hover/link:underline">Nils Tenkotte</span>
          <span className="text-muted/40">→</span>
        </Link>

        {/* NO COMMENT SECTION — deliberate omission.
            Spec Z. 264 + Observe-Rules: "Werke sind nicht öffentlich kommentierbar."
            Begründung: Eine öffentliche Kommentarbox senkt die Hemmschwelle für
            Hass-Kommentare. Interaktion mit dem Künstler soll stattdessen direkt
            erfolgen (nicht anonym-öffentlich). */}
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ObservePage() {
  const [lightboxArtwork, setLightboxArtwork] = useState<Artwork | null>(null);

  return (
    <>
      {/* Lightbox overlay */}
      {lightboxArtwork && (
        <Lightbox
          artwork={lightboxArtwork}
          onClose={() => setLightboxArtwork(null)}
        />
      )}

      <div className="flex flex-col">
        {/* ── HERO ── */}
        <section className="bg-atelier text-creme py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-accent text-sky text-lg mb-2">Wahrnehmen</p>
            <h1 className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
              Spüre den Ausdruck anderer{" "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                und lass ihn auf dich wirken
              </span>
            </h1>
            <p className="text-creme/60 text-lg max-w-xl">
              Jedes Werk ist nur einmal sichtbar — bewusst und ohne Filter.
            </p>
          </div>
        </section>

        {/* ── FEED ── */}
        <section className="max-w-4xl mx-auto w-full px-4 py-12">
          {/* Once-visible notice */}
          <div className="flex items-start gap-3 bg-creme rounded-xl px-4 py-3 mb-8 border border-muted/10">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-orange mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" d="M12 8v4M12 16h.01" />
            </svg>
            <p className="text-xs text-muted leading-relaxed">
              <span className="font-medium text-text">Einmalig sichtbar.</span>{" "}
              Werke erscheinen im Feed nur einmal — bewusste Begegnung statt
              endlosem Scrollen. Klicke auf ein Bild, um es zu vergrößern.
            </p>
          </div>

          {/* 2-column grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {FEED_ARTWORKS.map((artwork) => (
              <FeedCard
                key={artwork.id}
                artwork={artwork}
                onOpen={setLightboxArtwork}
              />
            ))}
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
              href="/profile"
              className="text-sm text-orange hover:underline font-medium"
            >
              Zum Künstler-Profil →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
