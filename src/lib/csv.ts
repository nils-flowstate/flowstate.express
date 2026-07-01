import fs from "fs";
import path from "path";
import Papa from "papaparse";

export interface Artwork {
  id: string;
  base_id: string;
  version: string;
  name: string;
  beschreibung: string;
  hauptkategorie: string;
  unterkategorie: string;
  tags: string;
  homepage: string;
  preis: string;
  veroeffentlichungsdatum: string;
  zeitraum: string;
  veroeffentlichungsort: string;
  event_id: string;
  event_exclusive_release: string;
  inspiration_kuenstler: string;
  inspiration_epoche: string;
  inspiration_gefuehl: string;
  filename: string;
  collection_id: string;
  series_id: string;
  is_rampenlicht: string;
  rampenlicht_percent: string;
  created_at: string;
}

export interface Series {
  id: string;
  name: string;
  beschreibung: string;
  tags: string;
  show_in_profile: string;
}

export interface Collection {
  id: string;
  name: string;
  beschreibung: string;
  tags: string;
  show_in_profile: string;
}

function readCsv<T>(filename: string): T[] {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const content = fs.readFileSync(filePath, "utf-8");
  const result = Papa.parse<T>(content, { header: true, skipEmptyLines: true });
  return result.data;
}

export function getArtworks(): Artwork[] {
  return readCsv<Artwork>("artworks.csv");
}

export function getSeries(): Series[] {
  return readCsv<Series>("series.csv");
}

export function getCollections(): Collection[] {
  return readCsv<Collection>("collections.csv");
}

/** Returns only the latest version of each base_id */
export function getLatestArtworks(): Artwork[] {
  const all = getArtworks();
  const map = new Map<string, Artwork>();
  for (const art of all) {
    const existing = map.get(art.base_id);
    if (!existing || parseInt(art.version) > parseInt(existing.version)) {
      map.set(art.base_id, art);
    }
  }
  return Array.from(map.values());
}

/** The single Rampenlicht artwork (is_rampenlicht === 'true' on latest version) */
export function getRampenlicht(): Artwork | null {
  const latest = getLatestArtworks();
  return latest.find((a) => a.is_rampenlicht === "true") ?? null;
}

/**
 * Category mapping from filename prefix to display name.
 * Confirmed in QUESTIONS.md (C-2):
 *   draw- → Zeichnen | poem- → Dichten | philosophie- → Philosophieren | sculpture- → Skulpturen
 */
export const KATEGORIE_MAP: Record<string, string> = {
  Zeichnen: "Zeichnen",
  Dichten: "Dichten",
  Philosophieren: "Philosophieren",
  Skulpturen: "Skulpturen",
};
