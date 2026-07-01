# IMPLEMENTATION_PLAN.md
Quelle der Wahrheit: `Flowstate.Express.md` · Design: `design-tokens.md`
Scope: **nur [MVP]-Tasks, Phase 1 (Website)**. Langfristige Roadmap (Phasen 2-4) siehe `ROADMAP.md` — nicht Teil dieses Plans.

Status-Werte: `offen` / `in Arbeit` / `fertig`. Diese Datei wird vom Builder-Agent laufend aktualisiert.
Offene Design-Fragen gehören nicht hierher, sondern in `QUESTIONS.md`.

---

## 0. Setup
- [x] **Next.js + Tailwind Grundgerüst** — Status: **fertig**
  - Tailwind-Config strikt aus `design-tokens.md` ableiten (Farben, Fonts) — keine eigenen Werte erfinden
- [x] **CSV-Datenmodell anlegen** — Status: **fertig**
  - 3 Dateien: `artworks.csv`, `series.csv`, `collections.csv`
  - `artworks.csv` Spalten: `id`, `base_id`, `version` (Integer), `name` (Pflicht), `beschreibung` (optional), `hauptkategorie`, `unterkategorie`, `tags`, `homepage`, `preis`, `veroeffentlichungsdatum`, `zeitraum`, `veroeffentlichungsort`, `event_id`, `event_exclusive_release`, `inspiration_kuenstler`, `inspiration_epoche`, `inspiration_gefuehl`, `filename`, `collection_id`, `series_id`, `is_rampenlicht`, `rampenlicht_percent`, `created_at`
  - `series.csv` / `collections.csv` Spalten: `id`, `name`, `beschreibung`, `tags`, `show_in_profile`
  - **Unterschied:** Collection = kategorienübergreifend (mehrere Kategorien erlaubt). Serie = nur eine einzige Kategorie.
  - Versionierung: neues Update = neuer Eintrag mit gleicher `base_id`, hochgezählter `version` — kein Überschreiben
  - **Rampenlicht ist exklusiv** (Spec Z. 340): nur ein Werk pro Künstler kann `is_rampenlicht = true` haben. Gilt auf `base_id`-Ebene: nur die neueste Version einer `base_id` trägt das Flag; bei Neuwahl wird das alte auf `false` gesetzt.
  - Spalten so anlegen, dass sie wie Fremdschlüssel funktionieren (`collection_id`, `series_id`) — spätere Supabase-Migration ohne Redesign

## 1. Header & Footer
- [x] **Header**: Logo + Login (vorausgefüllt) — Status: **fertig**
- [x] **Footer**: Logo + Datenschutz-Link + Impressum-Link — Status: **fertig**
- [x] **Impressum-Seite** (`/impressum`) — Status: **fertig**
  - Text exakt aus Spec Z. 136–159 übernommen, kein Wort geändert
- [x] **Datenschutzerklärung** (`/datenschutz`) — Status: **fertig**
  - Zoom.us als Auftragsverarbeiter ergänzt (QUESTIONS A-1: Zoom Video Communications Inc., US-Datentransfer mit Standardvertragsklauseln, Verweis auf https://explore.zoom.us/de/privacy/)
  - Datum aktualisiert auf 2026-07-01

## 2. React Tabs

### 2.1 Landingpage — Status: **fertig**
- [x] Hero: sculpture-01.webp, clickable/vergrößerbar (HeroImage Komponente)
- [x] 6 Sections (Core Vision, Experience, Observe, Profile, ZDF-Text, Verweis Flowstate Foundation)

### 2.2 Experience (`/experience`) — Status: **fertig**
- [x] Eventauflistung mit Filter-Buttons: Online / Persönlich
- [x] Zoom-Event-Komponente: Meetingname, Zeit, Datum, Online-Icon, Teilnehmerzahl, Meetingkategorie (Coming Soon), Google-Kalender-Link, Kunstobjekte-Referenz-Array, Meetingpartner, mitwirkende Künstler
- [x] Community Chat: 4 Kategorien (Gedichte, Zeichnen, Philosophie, Skulpturen) — visuell dargestellt mit Coming-Soon-Badge

### 2.3 Observe (`/observe`) — Status: **fertig**
- [x] 4 Beispielwerke im Feed (draw-04, poem-03, sculpture-01, draw-03) in exakter Spec-Reihenfolge
- [x] Bilder clickbar + vergrößerbar (Lightbox)
- [x] Kategorie + Tags pro Werk sichtbar
- [x] Profil-Link zu `/profile`
- [x] **KEINE öffentliche Kommentarfunktion** — im Code-Kommentar begründet: "Kommentarboxen senken Hemmschwelle für Hass" (Spec Z. 264)

### 2.4 Profile (`/profile`, ohne Login) — Status: **fertig**
- [x] Titel "Was ist meine Essenz?", Beschreibung "Was prägt(e) meinen Ausdruck?"
- [x] Je ein Ausstellungswerk pro Kategorie: draw-01 (Zeichnen), philosophie-01 (Philosophieren), poem-05 (Dichten), sculpture-01 (Skulpturen)
- [x] Rampenlicht: draw-02-02, 67%, Fortschrittsbalken + Dropdown für Versionsverlauf (draw-02-v1 alt, draw-02-v2 aktuell)
- [x] Login-Button → öffnet LoginModal
- [x] Serien-Section: "Deutsch" (show_in_profile=true) angezeigt; "English" (show_in_profile=false) bewusst ausgelassen

## 3. Profile-Login — Status: offen
- [ ] Basic Auth (Demo-Login, QUESTIONS C-3 bestätigt: vorbefüllte Demo-Credentials)
- [ ] CRUD Art-Instances (Werke, Collections, Serien) inkl. Suche/Filter nach Tags/Kategorie
- [ ] Drag & Drop Modulreihenfolge
- [ ] Collection-/Serien-Toggle "Präsentation auf Profil": rein visuell/frontend, keine Exklusivitäts-Logik in dieser Phase

## 4. Seed-Daten — Status: **fertig**
- [x] `artworks.csv` — 13 Werke (draw-01 bis draw-04 inkl. Versionen, poem-01 bis poem-06, philosophie-01, sculpture-01)
- [x] `series.csv` — serie-01 "English" (show_in_profile=false), serie-02 "Deutsch" (show_in_profile=true)
- [x] `collections.csv` — leer (korrekt für Phase 1)

## Grundprinzipien (gelten über alle Punkte hinweg)
- Inhalte zeigen Kunst, nicht Gesichter/Personen — Ausnahme: Event-Atmosphäre-Fotos
- Kein öffentliches Kommentieren von Werken (D-1)
- CSV-Spalten als Fremdschlüssel-Äquivalent anlegen (spätere Supabase-Migration)
- Bei Mehrdeutigkeit: Eintrag in `QUESTIONS.md`, plausibelste Annahme wählen, weiterarbeiten

## Referenzen
- `Flowstate.Express.md` — Produktspezifikation
- `design-tokens.md` — Farben/Fonts
- `ROADMAP.md` — langfristige Phasen (nicht Teil dieses Plans)
- `QUESTIONS.md` — offene Punkte, die Rückfrage an Nils brauchen
