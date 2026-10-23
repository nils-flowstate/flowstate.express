"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  GAMESCOM_SCREENS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_THUMB_WIDTH,
} from "@/lib/gamescom";

/**
 * Die Bausteine der Geschichtenwelt, je Screen ein Abschnitt.
 *
 * Auf breiten Schirmen stehen Bild und Text nebeneinander und wechseln die
 * Seite, damit die Reihe nicht wie eine Tabelle wirkt; auf dem Telefon liegt
 * das Bild oben. Ein Klick vergrößert.
 *
 * Die Lightbox ist eine eigene, schlankere Schwester der Lightbox in
 * PrototypeBanner.tsx — dort gehört sie zu einer Schublade mit anderer
 * Datenform. Wenn eine dritte dazukommt, lohnt das Herausziehen.
 */
export default function GamescomScreens() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const anzahl = GAMESCOM_SCREENS.length;

  const blaettern = useCallback(
    (delta: number) =>
      setLightbox((i) => (i === null ? null : (i + delta + anzahl) % anzahl)),
    [anzahl],
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") blaettern(1);
      if (e.key === "ArrowLeft") blaettern(-1);
    }
    window.addEventListener("keydown", onKey);

    // Die Seite darunter darf nicht mitscrollen, sonst wischt man auf dem
    // Telefon hinter dem Bild die Seite weg.
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = vorher;
    };
  }, [lightbox, blaettern]);

  const aktiv = lightbox === null ? null : GAMESCOM_SCREENS[lightbox];

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-20">
        {GAMESCOM_SCREENS.map((screen, i) => (
          <article
            key={screen.slug}
            className={`flex flex-col gap-6 md:gap-10 md:items-center ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="shrink-0 w-full max-w-[240px] mx-auto md:mx-0">
              <button
                onClick={() => setLightbox(i)}
                aria-label={`${screen.reiter} — vergrößern`}
                className="block w-full cursor-zoom-in rounded-3xl overflow-hidden border border-muted/15 shadow-md hover:shadow-xl hover:border-orange/40 transition-all"
              >
                {/* unoptimized: liegt bereits in Auslieferungsgröße vor —
                    siehe scripts/optimize-gamescom-images.sh */}
                <Image
                  src={`/images/gamescom/${screen.slug}-thumb.webp`}
                  alt={screen.alt}
                  width={SCREEN_THUMB_WIDTH}
                  height={Math.round((SCREEN_HEIGHT * SCREEN_THUMB_WIDTH) / SCREEN_WIDTH)}
                  loading="lazy"
                  unoptimized
                  className="w-full h-auto"
                />
              </button>
              <p className="font-accent text-[17px] text-muted mt-3 leading-snug text-center md:text-left">
                „{screen.bildunterschrift}“
              </p>
            </div>

            <div className="flex-1">
              <p className="font-accent text-orange text-lg mb-1">{screen.reiter}</p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-text mb-3 leading-tight">
                {screen.titel}
              </h3>
              <p className="text-muted leading-relaxed">{screen.text}</p>
            </div>
          </article>
        ))}
      </div>

      {aktiv && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-atelier/95 backdrop-blur-sm p-4 gap-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={aktiv.titel}
        >
          <div
            className="relative flex w-full items-center justify-center gap-3 sm:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Pfeil
              richtung="zurueck"
              onClick={() => blaettern(-1)}
              className="absolute left-1 top-1/2 z-10 -translate-y-1/2 bg-atelier/70 sm:static sm:translate-y-0 sm:bg-creme/10"
            />
            <Image
              src={`/images/gamescom/${aktiv.slug}.webp`}
              alt={aktiv.alt}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              unoptimized
              className="max-h-[78dvh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <Pfeil
              richtung="vor"
              onClick={() => blaettern(1)}
              className="absolute right-1 top-1/2 z-10 -translate-y-1/2 bg-atelier/70 sm:static sm:translate-y-0 sm:bg-creme/10"
            />
          </div>

          <p
            className="font-accent text-xl text-creme/80 text-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {aktiv.titel}
            <span className="font-body text-xs text-creme/40 ml-3">
              {lightbox! + 1} / {anzahl}
            </span>
          </p>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-creme rounded-full p-2 text-text hover:text-fire transition-colors shadow-lg"
            aria-label="Schließen"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

function Pfeil({
  richtung,
  onClick,
  className = "",
}: {
  richtung: "zurueck" | "vor";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={richtung === "zurueck" ? "Vorheriger Screen" : "Nächster Screen"}
      className={`shrink-0 rounded-full p-2 sm:p-3 text-creme transition-colors hover:bg-creme/20 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={richtung === "zurueck" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}
