# Hinweise für Claude Code

- Dieses Repository liefert **flowstate.express**, die offene Willkommensseite
  (kein Lockscreen). Sie verweist auf den Prototyp `prototype.flowstate.express`
  (Projekt `/home/nils/apps/prototype.flowstate.express`).
- Ein skriptfreies Projekt: `site/index.html` und `site/datenschutz.html`, Schriften und Logo
  lokal in `site/assets/`. Keine Drittanbieter, kein Tracking, keine Cookies.
- Alle Pfade relativ, damit die Seite auch unter einem Testpfad läuft.
- Änderungen laufen über den Skill `lieferkette` (Branch, Test, Freigabe).
- Impressum: Fußzeile verlinkt auf flowstate.foundation/impressum (gleicher
  Verantwortlicher, Nils Tenkotte). Datenschutz: eigene `site/datenschutz.html`,
  passend zu dieser Seite (Hetzner, Cloudflare, keine Cookies, kein Protokoll).
  Kommt etwas Neues dazu (Formular, Anmeldung, Einbindung), zuerst Skill
  `dsgvo-website-audit` und die Erklärung anpassen. Stand der Prüfung: `DSGVO/`.
