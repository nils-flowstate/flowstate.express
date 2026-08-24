"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  PROTOTYPE_ACCESS_PATH,
  PROTOTYPE_HOST,
  PROTOTYPE_IMAGE_WIDTH,
  PROTOTYPE_SCREENS,
  PROTOTYPE_THUMB_WIDTH,
  thumbHeight,
} from "@/lib/prototype";

export default function PrototypeBanner() {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const count = PROTOTYPE_SCREENS.length;

  const step = useCallback(
    (delta: number) => setLightbox((i) => (i === null ? null : (i + delta + count) % count)),
    [count],
  );

  // Lightbox: Escape schließt, Pfeile blättern
  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  const active = lightbox === null ? null : PROTOTYPE_SCREENS[lightbox];

  return (
    <>
      {/* Leiste — bewusst nicht sticky: sie begrüßt beim Laden, der Header bleibt oben.
          Der dauerhafte Verweis lebt als Pille im Header selbst. */}
      <section className="relative bg-atelier text-creme">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="shrink-0 text-[10px] font-bold tracking-[0.18em] uppercase px-2 py-1 rounded-full bg-orange text-white">
            Neu
          </span>

          <div className="flex-1 min-w-[12rem]">
            <p className="text-sm text-creme/85">
              Der Prototyp ist da —{" "}
              <span className="font-accent text-base text-orange">
                sieh, was daraus geworden ist.
              </span>
            </p>
            <p className="text-[11px] text-creme/45 mt-0.5">
              {PROTOTYPE_HOST} · Zugang auf Anfrage
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="prototype-peek"
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-creme/25 text-creme/90 hover:bg-creme/10 transition-colors"
            >
              Sneak Peek
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Serverseitiger Redirect zu WhatsApp — die Nummer steht nicht im HTML. */}
            <a
              href={PROTOTYPE_ACCESS_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-orange text-white hover:bg-fire transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Zugang anfragen
            </a>
          </div>
        </div>

        {/* Schublade */}
        <div
          id="prototype-peek"
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 pb-5">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pt-1 pb-2">
                {PROTOTYPE_SCREENS.map((screen, i) => (
                  <figure key={screen.slug} className="snap-start shrink-0 w-[152px] sm:w-[176px]">
                    <button
                      onClick={() => setLightbox(i)}
                      aria-label={`${screen.caption} — vergrößern`}
                      className="block w-full cursor-zoom-in rounded-[1.5rem] overflow-hidden border border-creme/15 bg-creme/5 shadow-lg hover:shadow-2xl hover:border-orange/50 transition-all"
                    >
                      {/* unoptimized: Die Dateien liegen bereits als WebP in
                          genau der Größe vor, in der sie ausgeliefert werden —
                          siehe scripts/optimize-prototype-images.sh. Ein zweiter
                          Durchlauf durch den Bildoptimierer kostet im Container
                          nur Speicher. */}
                      <Image
                        src={`/images/prototype/${screen.slug}-thumb.webp`}
                        alt={screen.alt}
                        width={PROTOTYPE_THUMB_WIDTH}
                        height={thumbHeight(screen)}
                        loading="lazy"
                        unoptimized
                        className="w-full h-auto aspect-[9/19] object-cover object-top"
                      />
                    </button>
                    <figcaption className="font-accent text-[15px] text-creme/70 mt-2 px-1 leading-snug">
                      {screen.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Signature-Gradient als Abschlusskante zum Header */}
        <div
          className="h-0.5 w-full"
          style={{ background: "linear-gradient(90deg, #4DD2F6, #FF7A2E, #FB343B)" }}
        />
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-atelier/95 backdrop-blur-sm p-4 gap-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <div
            className="relative flex items-center gap-3 sm:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <NavButton direction="prev" onClick={() => step(-1)} />
            <Image
              src={`/images/prototype/${active.slug}.webp`}
              alt={active.alt}
              width={PROTOTYPE_IMAGE_WIDTH}
              height={active.height}
              unoptimized
              className="max-h-[78vh] w-auto rounded-2xl shadow-2xl"
            />
            <NavButton direction="next" onClick={() => step(1)} />
          </div>

          <p className="font-accent text-xl text-creme/80" onClick={(e) => e.stopPropagation()}>
            {active.caption}
            <span className="font-body text-xs text-creme/40 ml-3">
              {lightbox! + 1} / {count}
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

function NavButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Vorheriger Screen" : "Nächster Screen"}
      className="shrink-0 rounded-full p-2 sm:p-3 bg-creme/10 text-creme hover:bg-creme/20 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 018.23 8.25c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1.01 2.54c.12.17 1.73 2.65 4.2 3.71.58.26 1.04.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
