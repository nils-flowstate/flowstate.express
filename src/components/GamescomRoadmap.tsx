"use client";

import { useState } from "react";
import { PHASEN, ROADMAP_HINWEIS } from "@/lib/gamescom";

/**
 * Was als Nächstes kommt — mit vorgeschalteter Bestätigung.
 *
 * Wichtig ist die Reihenfolge: Der Hinweis steht dauerhaft sichtbar oben,
 * eingeklappt sind nur die Phasen dahinter. Andersherum wäre es schwächer —
 * ein weggeklappter Haftungsausschluss wird nicht gelesen und schützt nicht.
 *
 * Die Bestätigung ist eine Anzeige-Entscheidung, kein Vertrag: Sie wird nicht
 * gespeichert und nicht übertragen. Sie sorgt dafür, dass niemand die Phasen
 * sieht, ohne vorher gelesen zu haben, was sie sind.
 *
 * Die Phasen werden erst nach der Bestätigung gerendert und sind vorher gar
 * nicht im Dokument — nicht bloß eingeklappt. Sonst stünden sie im vorgerenderten
 * HTML und würden von Vorlesesoftware ausgegeben, noch bevor jemand den Hinweis
 * darüber zur Kenntnis genommen hat. Das kostet die Aufklapp-Animation und ist
 * das wert.
 */
export default function GamescomRoadmap() {
  const [bestaetigt, setBestaetigt] = useState(false);

  return (
    <div>
      {/* Dauerhaft sichtbar — nie hinter dem Klick. */}
      <div className="rounded-2xl border-2 border-orange/35 bg-orange/5 p-6 md:p-7">
        <p className="font-display text-xl font-semibold text-text mb-2">
          Bevor du weiterliest
        </p>
        <p className="text-text/80 leading-relaxed mb-4">
          Alles in diesem Abschnitt ist ein <strong>Plan</strong> — ein Wunsch, den ich
          verfolge. <strong>Nichts davon existiert heute</strong>, und nichts davon ist
          zugesagt.
        </p>
        <ul className="flex flex-col gap-2 text-sm text-muted leading-relaxed">
          {ROADMAP_HINWEIS.map((zeile) => (
            <li key={zeile} className="flex gap-2.5">
              <span aria-hidden="true" className="text-orange shrink-0">
                ·
              </span>
              <span>{zeile}</span>
            </li>
          ))}
        </ul>
      </div>

      {!bestaetigt ? (
        <button
          onClick={() => setBestaetigt(true)}
          className="mt-6 px-6 py-3 rounded-full border-2 border-text/20 text-text font-medium text-sm hover:bg-text/5 transition-colors"
        >
          Ich habe verstanden: Das Folgende ist ein Plan, kein Produkt. →
        </button>
      ) : (
        <div className="mt-10">
          <ol className="flex flex-col gap-8">
            {PHASEN.map((phase) => (
              <li key={phase.titel} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="w-1 rounded-full bg-linear-to-b from-sky via-orange to-fire shrink-0 mt-1"
                />
                <div>
                  <p className="font-accent text-orange text-lg leading-none mb-1.5">
                    {phase.wann}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-text mb-1.5">
                    {phase.titel}
                    {phase.gebaut && (
                      <span className="ml-3 align-middle text-[10px] font-body font-medium tracking-[0.12em] uppercase px-2 py-0.5 rounded-full bg-text/10 text-muted">
                        gibt es
                      </span>
                    )}
                  </h3>
                  <p className="text-muted leading-relaxed">{phase.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
