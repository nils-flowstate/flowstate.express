# DSGVO — Übersicht

> Gepflegt vom Auditor. Komprimierter Stand. Details in `logs/`.
> Technische Prüfung, keine Rechtsberatung.

**Projekt:** Willkommensseite flowstate.express
**Domain(s):** https://flowstate.express (www. leitet um)
**Letzte Prüfung:** 2026-10-23
**Setzort Security-Header:** `Caddyfile` im Projekt — verbindlich, nicht im zentralen Caddy doppeln

## Stand je Prüfpunkt

| # | Prüfpunkt | Stand | Offen | Letztes Log |
|---|---|---|---|---|
| 1 | Consent Management | 🟢 | nicht nötig: keine Cookies, kein Tracking | 2026-10-23_2200 |
| 2 | Endgeräte-Zugriff (§ 25 TDDDG) | 🟢 | – | 2026-10-23_2200 |
| 3 | Third-Party-Einbindungen | 🟢 | – | 2026-10-23_2200 |
| 4 | Drittlandtransfer | 🟡 | Cloudflare: DPF laut Cloudflare, Liste nicht direkt geprüft | 2026-10-23_2200 |
| 5 | Formulare | 🟢 | keine vorhanden | 2026-10-23_2200 |
| 6 | Datenschutzerklärung | 🟡 | eigene Erklärung auf Test, live nach Freigabe | 2026-10-23_2200 |
| 7 | Technische Sicherheit (Art. 32) | 🟢 | Hinweis: HSTS ohne includeSubDomains | 2026-10-23_2200 |
| 8 | Privacy by Design (Art. 25) | 🟢 | – | 2026-10-23_2200 |
| 9 | Betroffenenrechte | 🟢 | in der Erklärung benannt | 2026-10-23_2200 |
| 10 | AVV und Verzeichnis | 🟢 | Hetzner: AVV laut Nils vorhanden · Cloudflare: DPA v6.4 über Self-Serve-Vertrag Ziff. 6.1 | 2026-10-23_2200 |

🟢 erfüllt · 🟡 teilweise · 🔴 offener kritischer Befund · ⚪ nicht geprüft

## Offene Befunde

| Klasse | Befund | Fundstelle | Log |
|---|---|---|---|
| HOCH | Cloudflare in der bisher verlinkten Erklärung nicht genannt (Behebung auf Test) | Fußzeile | 2026-10-23_2200 |

## Offene Rechtsfragen

| Frage | Sachstand | Log |
|---|---|---|
| Datenschutzbeauftragter nötig? | vermutet nein, Nils bestätigt | 2026-10-23_2200 |

## Bewusst zurückgestellt

| Befund | Begründung | Datum | Log |
|---|---|---|---|
| HSTS includeSubDomains | betrifft alle Unterdomains, eigene Entscheidung | 2026-10-23 | 2026-10-23_2200 |
