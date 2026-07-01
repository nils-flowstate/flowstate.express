# QUESTIONS.md — Flowstate Express

Offene Fragen, Annahmen und Reviewer-Funde. Jeder Eintrag hat einen Status: **offen** / **geklärt**.

---

## Reviewer-Funde (Spec-Compliance-Review 2026-07-01)

### [Reviewer-Fund / KRITISCH] A-1 Zoom.us fehlt in Datenschutz.tsx

**Status:** offen

Spec (Flowstate.Express.md, Z. 135) enthält die explizite Anweisung: *"Datenschutz (siehe Datenschutz.tsx und **füge Zoom.us als Service hinzu**)"*. Ein `grep` auf `Datenschutz.tsx` liefert 0 Treffer für "zoom". Zoom ist laut Spec (Z. 119, 197–201) das zentrale [MVP]-Tool für Online-Events → datenschutzrechtlich zwingend (US-Datentransfer, personenbezogene Daten).

**Aktion:** Zoom.us-Abschnitt in Datenschutz.tsx ergänzen, Datum (Z. 69, aktuell "12. Mai 2026") aktualisieren.

**Antwort**
Siehe Antwort darunter.
Gern selbst ergänzen. Dankee.

---

### [Reviewer-Fund] A-2 Tailwind-Klassennamen weichen von Design-Tokens ab

**Status:** geklärt / geschlossen

`Datenschutz.tsx` ist jetzt nur Textreferenz in `.claude/context/` — kein live Komponenten-Code. Tailwind-Klassen darin sind irrelevant. Verbindlich für die Implementierung sind ausschließlich die Token-Keys aus `.claude/design-tokens.md` (`sky`, `orange`, `fire`, `creme`, `atelier`, `text`, `muted`; Fonts: `display`, `body`, `accent`).

**Antwort** 
Datenschutz dient nur als textlicher Hinweis, was auf diese Seite darf. 
Aus diesem Grund jetzt in context. → Fund geschlossen.

---

### [Reviewer-Fund] B-2 Prozess-Artefakte fehlen (INIT_PROMPT-Workflow)

**Status:** offen

`INIT_PROMPT.md` (Z. 11–12) fordert **vor dem Coden**: `IMPLEMENTATION_PLAN.md` und `QUESTIONS.md`. Beide fehlen. Der vorgesehene Workflow (Plan → Fragen → Code) wurde nicht durchlaufen. `QUESTIONS.md` wird hiermit erstellt; `IMPLEMENTATION_PLAN.md` steht noch aus.

**Antwort**
Den IMPLEMENTATION_PLAN.md darf claude selbst entwerfen in /.claude/plan und wird vom Reviewer mit der Markdown gegengecheckt.

---

### [Reviewer-Fund] C-1 CSV-Schema (offene Design-Entscheidung)

**Status:** offen

Spec (Z. 337) gibt das Schema bewusst nicht vor: *"Schema leitest du selbst aus der Spec ab"*. Konkrete Entscheidungen nötig:
- Spaltennamen und Typen festlegen
- Wie wird `version_of` modelliert? Basis-ID (`draw-02`) + Versionsnummer (`-01`/`-02`) als zusammengesetzter Key, oder separates `version_of`-Feld mit Verweis auf die Basis-ID?
- `collection_id` / `series_id` als String-Fremdschlüssel (für spätere Supabase-Migration)

**Annahme (zu bestätigen):** Zwei CSV-Dateien — `artworks.csv` (Werke) und `series.csv` (Serien). Spalten in `artworks.csv`: `id`, `base_id`, `version`, `title`, `category`, `medium`, `year`, `description`, `filename`, `collection_id`, `series_id`, `show_in_profile`, `rampenlicht_percent`, `version_of`, `created_at`.


**Antwort**
Angepasst — der Vorschlag hatte Lücken (fehlende Spec-Pflichtfelder: Tags, Homepage, Preis,
Hauptkategorie/Unterkategorie getrennt, Inspiration, Event-Referenz) und eine Redundanz
(base_id/version/version_of gleichzeitig). Siehe aktualisierten Art-Instances-Datenlogik-Block in der Flowstate.Express.md
in der Spec — dort jetzt drei CSV-Dateien statt zwei, inkl. collections.csv.

---

### [Reviewer-Fund] C-2 Kategorie-Naming (Präfix-Mapping)

**Status:** offen

Spec nennt Kategorien mal als Verben ("Zeichnen, Dichten, Philosophieren, Skulpturen", Z. 306), mal über Dateipräfixe (`draw-`, `poem-`, `philosophie-`, `sculpture-`). Mapping ist implizit.

**Annahme:** `draw-` → "Zeichnen", `poem-` → "Dichten", `philosophie-` → "Philosophieren", `sculpture-` → "Skulpturen".

**Bestätigt**

---

### [Reviewer-Fund] C-3 Login "vorausgefüllt" + "Basic Auth"

**Status:** offen

Spec Z. 130 sagt Login ist "vorausgefüllt"; Z. 284 sagt "Basic Auth". Unklar: echtes HTTP Basic Auth oder Demo-Prototyp mit hardcodierten Credentials im Frontend?

**Annahme:** Demo-Login mit vorbefülltem Username/Passwort im Frontend (kein echtes Auth-Backend in Phase 1 / CSV-Phase). Muss vor Profile-Login-Implementierung bestätigt werden.

**Antwort**
Korrekt!

---

### [Reviewer-Fund] C-5 Hero-Bild auf Landingpage

**Status:** offen

Spec (Z. 176) sagt nur "ein Bild … da man sonst Gedichte nicht lesen konnte" → deutet auf ein `poem-*`-Asset. Kein konkretes Asset benannt.

**Annahme:** `poem-01.webp` als Hero-Placeholder. Zu bestätigen.

**Antwort**
Gerne sculpture-01 nutzen
Danke dir fürs mitdenken

---

### [Reviewer-Fund] C-6 Meetingkategorie "erstmal leer"

**Status:** offen

Spec (Z. 231) listet `meetingkategorie` als Event-Feld, sagt aber "erstmal leer". Als nullable/optional zu modellieren.

**Antwort**
Das Feld darf zu sehen sein, jedoch sind noch keine Events gelistet: Coming Soon

---

---

## Reviewer-Funde (Spec-Compliance-Review 2026-07-01 — Runde 2)

### [Reviewer-Fund / KRITISCH] P-1 — `.claude/plan/IMPLEMENTATION_PLAN.md` fehlt

**Status:** offen

INIT_PROMPT.md Z. 11 fordert diesen Plan **vor** dem ersten Code. Verzeichnis `.claude/plan/` existiert noch nicht. Laut Antwort zu B-2 darf Claude ihn selbst entwerfen. → **Erster Schritt für den Builder, blockiert alles andere.**

Mindest-Inhalt (nur `[MVP]`-Tasks, je mit Status offen/in Arbeit/fertig):
- Next.js + Tailwind-Setup (Tailwind-Config strikt aus `design-tokens.md`)
- Header (Logo + Demo-Login vorausgefüllt)
- Footer (Logo + Datenschutz + Impressum nach Z. 137–159, inkl. Zoom.us — A-1)
- 4 React-Tabs: Landingpage / Experience / Observe / Profile
- Landingpage: Hero (`sculpture-01.webp`), 6 Sections, ZDF-Text
- Experience: Zoom-Event-Komponente, Community Chat (4 Kategorien)
- Observe: 4 Werke (`draw-04, poem-03, sculpture-01, draw-03`), keine Kommentarfunktion (D-1)
- Profile (ohne Login): Essenz, Beschreibung, 1 Werk/Kategorie, Rampenlicht
- Profile-Login: CRUD Art-Instances, Drag&Drop
- 3 Seed-CSVs (`artworks.csv`, `series.csv`, `collections.csv`)


**Antwort**
Liegt nun in `/.claude/plan/IMPLEMENTATION_PLAN.md`
Roadmap in `/.claude/roadmap/ROADMAP.md`

---

### [Reviewer-Fund] C-1a — Schema-Widerspruch: `collections.csv` / `series.csv`

**Status:** offen — Entscheidung vor CSV-Erstellung nötig

Spec Z. 338 gibt beiden Dateien dasselbe Schema (`id, name, beschreibung, tags, show_in_profile`). Der Erklärungstext listet für Collections aber Zusatzfelder: `Veröffentlichungsdatum`, `Veröffentlichungsort`, `Zeitraum`, `Inspiration (Künstler/Epoche/Gefühl)`.

**Annahme:** Zusatzfelder sind `[SCOPE]` — in Phase 1 nur das kompakte Schema (Z. 338). Spalten ggf. trotzdem anlegen (für spätere Supabase-Migration), leer lassen. Zu bestätigen.

**Antwort**
Unterschied Collections und Series ist, dass Collections mehrere Kategorien beinhalten darf und Series nur ein und die selbe.
Füge das gern in die Flowstate.Express.md ein, sodass es klar wird.

---

### [Reviewer-Fund] C-1b — Nullable Fremdschlüssel `collection_id` / `series_id`

**Status:** offen — Annahme dokumentiert

Nicht alle Werke gehören einer Collection oder Serie an (z.B. `draw-01`, `philosophie-01`, `sculpture-01`). Beide Felder müssen nullable sein.

**Annahme:** `collection_id` und `series_id` optional/nullable in `artworks.csv`. Seed-Daten: nur `poem-*` haben `series_id` gesetzt; `collection_id` initial leer für alle.

**Antwort**
Korrekt!

---

### [Reviewer-Fund / KRITISCH] C-1c — Rampenlicht-Exklusivität auf `base_id`-Ebene

**Status:** offen — Logik-Falle, muss explizit im Plan stehen

Spec Z. 339 sagt: nur 1 Werk darf `is_rampenlicht = true` sein. Das Rampenlicht-Beispiel ist aber ein Versionspaar: `draw-02-01` (alt) und `draw-02-02` (aktuell, 67%) — beide haben `base_id = draw-02`. Wenn die Exklusivitätsregel auf Zeilenebene gilt, sind beide Versionen konkurrierende Kandidaten.

**Annahme (zu bestätigen):** Die Regel gilt auf **base_id-Ebene**: nur die jeweils neueste Version einer base_id kann `is_rampenlicht = true` tragen. Ältere Versionen erben den Wert nicht. Builder muss CRUD-Logik entsprechend implementieren.

**Antwort**
Annahme bestätigt

---

### [Reviewer-Fund] C-1d — `filename_before` Spalte: anlegen, aber leer in Phase 1

**Status:** offen — Annahme dokumentiert

Spec Z. 337 listet `filename_before` als Spalte, Z. 340 markiert Vorher/Nachher-Vergleich als `[SCOPE]`. `draw-02-01`/`draw-02-02` sind Versionen (base_id-Logik), **nicht** before/after-Paare — nicht verwechseln.

**Annahme:** Spalte `filename_before` anlegen (Migration-Vorbereitung), in Phase 1 leer lassen.

**Antwort**
Versionen kein filename_before
Habe dies entfernt

---

### [Reviewer-Fund] C-1e — Seed-Daten: `philosophie-01` ohne Serie

**Status:** offen — Annahme dokumentiert

Sample-Serien (Spec Z. 309–310) decken nur `poem-*` ab. `draw-*`, `sculpture-01`, `philosophie-01` gehören keiner Serie an → `series_id` leer. `artworks.csv` muss alle 13 Sample-Assets als Zeilen enthalten:
`draw-01, draw-02-01, draw-02-02, draw-03, draw-04, poem-01…06, philosophie-01, sculpture-01`
(`draw-02-01` und `draw-02-02` teilen `base_id = draw-02`.)

**Antwort**
Passt für Sample data

---

## Reviewer-Fund Runde 3 (Spec-Compliance-Review 2026-07-01 — IMPLEMENTATION_PLAN.md vs. Spec)

Geprüft: `.claude/plan/IMPLEMENTATION_PLAN.md` gegen `.claude/Flowstate.Express.md`. Nur konkrete Abweichungen, keine Bewertung.

### [Reviewer-Fund Runde 3 / KRITISCH] R3-1 — `filename_before` im Plan, aber aus Spec entfernt

**Status:** offen

`IMPLEMENTATION_PLAN.md` Z. 15 listet in den `artworks.csv`-Spalten weiterhin `filename_before` (zwischen `filename` und `collection_id`).
Spec `Flowstate.Express.md` Z. 337 ([MVP]-Spaltenliste) enthält `filename_before` **nicht mehr** — die Liste endet mit `filename`, `collection_id`, `series_id`, `is_rampenlicht`, `rampenlicht_percent`, `created_at`.
Spec Z. 341 markiert Vorher/Nachher-Vergleich (`filename_before`) explizit als `[SCOPE]`, nicht `[MVP]`.
QUESTIONS C-1d Antwort bestätigt: *"Versionen kein filename_before. Habe dies entfernt."*

**Abweichung:** Plan Z. 15 muss `filename_before` aus der [MVP]-Spaltenliste entfernen (oder klar als [SCOPE]/leer kennzeichnen konsistent zur Spec).

---

### [Reviewer-Fund Runde 3 / KRITISCH] R3-2 — Rampenlicht-Exklusivität: Plan widerspricht Spec

**Status:** offen

`IMPLEMENTATION_PLAN.md` Z. 18: *"**Rampenlicht ist unabhängig pro Werk** — mehrere Werke können gleichzeitig `is_rampenlicht = true` sein, jedes mit eigenem `rampenlicht_percent`. Keine Exklusivitäts-Logik nötig."*
Spec `Flowstate.Express.md` Z. 340: *"Rampenlicht ist **exklusiv**: nur ein Werk pro Künstler kann `is_rampenlicht = true` haben — bei Neuwahl wird das alte auf `false` gesetzt. Gilt auf `base_id`-Ebene: nur die jeweils neueste Version einer `base_id` trägt den Rampenlicht-Status."*
QUESTIONS Runde-2 C-1c Antwort: *"Annahme bestätigt"* (Exklusivität auf base_id-Ebene).

**Abweichung:** Direkter Widerspruch. Plan Z. 18 behauptet das Gegenteil der Spec und der bereits bestätigten Antwort. Muss auf base_id-Ebene-Exklusivität geändert werden (bei Neuwahl altes Werk auf `false`).

---

### [Reviewer-Fund Runde 3] R3-3 — Collection-vs.-Serie-Distinktion fehlt im Plan

**Status:** offen

Spec `Flowstate.Express.md` Z. 339 (neu): *"**Unterschied Collection vs. Serie:** Eine **Collection** darf Werke aus mehreren Kategorien enthalten (kategorienübergreifend). Eine **Serie** enthält ausschließlich Werke derselben Kategorie."*
`IMPLEMENTATION_PLAN.md` behandelt Collections und Serien durchgehend identisch, ohne diese Distinktion zu nennen:
- Z. 16: beiden Dateien dasselbe Schema, kein Hinweis auf Kategorien-Regel.
- Z. 53 / Z. 55: "Collections, Serien" bzw. "Collection-/Serien-Toggle" gemeinsam behandelt.
- Z. 59: Seed-Daten erwähnen nur die poem-Serien, keine Collection-Kategorien-Regel.

**Abweichung / Fehlend:** Die neue [MVP]-Regel aus Spec Z. 339 ist im Plan nirgends reflektiert. Relevant für Create/Update-Validierung von Serien (nur eine Kategorie) und für Seed-/CRUD-Logik.

---

### [Reviewer-Fund Runde 3] R3-4 — Falsche Zeilenreferenz für Impressum

**Status:** offen

`IMPLEMENTATION_PLAN.md` Z. 23: *"Footer: Logo + Impressum (**Spec Z. 95–119**, unverändert übernehmen)"*.
In der aktuellen Spec steht der Impressum-Block jedoch bei Z. 136–159 (`### [MVP] Impressum` … "Haftung für Inhalte"). Z. 95–119 ist inzwischen der Colours-/Tech-Infrastructure-Bereich.
QUESTIONS Runde-2 P-1 zitiert korrekt "Z. 137–159".

**Abweichung:** Zeilenreferenz im Plan veraltet (Spec seit Aktualisierung verschoben). Sollte auf Z. 136–159 korrigiert werden.

---

## Prinzipien-Gate (zur Implementierungszeit zu prüfen)

Diese Punkte sind laut INIT_PROMPT nicht verhandelbar und müssen beim jeweiligen Feature-Build als Review-Gate dienen:

- **D-1** Keine öffentliche Kommentarfunktion bei Werken (Spec Z. 264)
- **D-2** Keine Personen/Gesichter als Content — Ausnahme: Event-Atmosphäre-Fotos (Spec Z. 481–482)
- **D-3** Werk-Update = neuer CSV-Eintrag, keine Überschreibung (Spec Z. 335)
