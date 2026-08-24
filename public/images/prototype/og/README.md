# Originale der Prototyp-Screenshots

Hier liegen die unkomprimierten Originale (PNG/JPG) der Screenshots aus dem
Prototypen. Sie werden **nicht** ausgeliefert — Next.js serviert nur, was in
`public/images/prototype/` liegt, und diese WebP-Dateien entstehen aus den
Originalen hier. Die Originale bleiben lokal (siehe `.gitignore`), damit das
Repository nicht mit jedem Export um mehrere Megabyte wächst.

Konvertieren:

    ./scripts/optimize-prototype-images.sh

Das Skript liest `mapping.txt` und schreibt je Eintrag `<slug>.webp` (1080px,
Lightbox) sowie `<slug>-thumb.webp` (480px, Schublade) nach
`public/images/prototype/`.

`mapping.txt` ist Pflicht — pro Zeile:

    <dateiname>  <slug>  [<oben-abschneiden-px>]

Die dritte Spalte ist optional und schneidet oben Pixel ab; sie entfernt bei
zwei Exporten die Rahmenbeschriftung aus Figma, die sonst über dem Telefon
stünde. Eine Zuordnung nach Dateinamen wäre keine Hilfe: Die Exporte sind nach
Routen benannt, die Slugs erzählen den Bogen der Schublade.

Die Slugs müssen zu `PROTOTYPE_SCREENS` in `src/lib/prototype.ts` passen. Ändert
sich die Höhe eines Screens, gehört die vom Skript ausgegebene Zahl als
`height` in denselben Eintrag — daran hängt das Seitenverhältnis der Lightbox.
