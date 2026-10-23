"use client";

import { useRef } from "react";
import { VIDEO_KAPITEL } from "@/lib/gamescom";

/**
 * Der Mitschnitt durch die Geschichtenwelt.
 *
 * Zwei Quellen: WebM zuerst, weil VP9 bei einer Bildschirmaufnahme deutlich
 * kleiner ausfällt; MP4 als Rückfall für alles, was kein VP9 kann. Der
 * Mitschnitt hat keine Tonspur — deshalb gibt es auch keine Untertitel, es
 * ist nichts zu hören. Was zu sehen ist, steht als Text daneben.
 *
 * `preload="metadata"` statt „auto“: Die Datei liegt weit unten auf der Seite;
 * niemand soll sie herunterladen, nur weil er die Startseite überflogen hat.
 */
export default function GamescomVideo() {
  const video = useRef<HTMLVideoElement>(null);

  function springe(sekunde: number) {
    const v = video.current;
    if (!v) return;
    v.currentTime = sekunde;
    void v.play().catch(() => {
      // Autoplay-Regeln können das Abspielen verweigern; die Sprungmarke sitzt
      // dann trotzdem, und der Play-Knopf des Browsers übernimmt.
    });
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-start">
      <div className="w-full max-w-[280px] mx-auto md:mx-0 shrink-0">
        <video
          ref={video}
          controls
          playsInline
          preload="metadata"
          poster="/images/gamescom/geschichtenwelt-poster.webp"
          className="w-full h-auto rounded-3xl border border-creme/15 shadow-2xl bg-atelier"
        >
          <source src="/video/geschichtenwelt.webm" type="video/webm" />
          <source src="/video/geschichtenwelt.mp4" type="video/mp4" />
          Dein Browser kann dieses Video nicht abspielen.
        </video>
      </div>

      <div className="flex-1">
        <p className="text-creme/70 leading-relaxed mb-6">
          Einmal quer durch eine Geschichtenwelt: von der Zeitleiste über das
          Beziehungsgeflecht und die Karte bis in die Werkstatt. Ohne Ton — es gibt
          nichts zu hören, nur zu sehen.
        </p>

        {VIDEO_KAPITEL.length > 0 && (
          <>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-creme/40 mb-3">
              Direkt hinspringen
            </p>
            <ul className="flex flex-wrap gap-2">
              {VIDEO_KAPITEL.map((kapitel) => (
                <li key={kapitel.label}>
                  <button
                    onClick={() => springe(kapitel.sekunde)}
                    className="px-4 py-2 rounded-full border border-creme/25 text-creme/90 text-sm font-medium hover:bg-creme/10 transition-colors"
                  >
                    {kapitel.label}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="text-xs text-creme/40 mt-6 leading-relaxed">
          Beispielinhalte: Die gezeigte Welt und alle Namen, Figuren, Orte und Zahlen
          darin sind frei erfunden.
        </p>
      </div>
    </div>
  );
}
