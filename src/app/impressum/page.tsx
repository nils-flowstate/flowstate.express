// Impressum — Text exakt aus Spec .claude/Flowstate.Express.md Z. 136–159
// Kein Wort geändert.

export default function ImpressumPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-atelier pt-28 pb-12 px-4 text-center">
        <h1 className="font-display text-3xl font-bold text-creme">
          Impressum
        </h1>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto font-body text-text space-y-8">

          {/* Angaben gemäß § 5 TMG */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="leading-relaxed text-muted">
              Nils Tenkotte<br />
              Gertrudisstraße 7<br />
              50859 Köln
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">
              Kontakt:
            </h2>
            <p className="leading-relaxed text-muted">
              E-Mail:{" "}
              <a
                href="mailto:nils@flowstate.foundation"
                className="text-orange hover:underline"
              >
                nils@flowstate.foundation
              </a>
            </p>
          </div>

          {/* Steuer */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">
              Steuer:
            </h2>
            <p className="leading-relaxed text-muted">
              Kleinunternehmer gemäß § 19 UStG
            </p>
            <p className="leading-relaxed text-muted mt-1">
              Steuernummer: 223/5296/5078
            </p>
          </div>

          {/* Verantwortlich */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h2>
            <p className="leading-relaxed text-muted">
              Nils Tenkotte<br />
              Gertrudisstraße 7, 50859 Köln
            </p>
          </div>

          {/* Streitschlichtung */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">
              Streitschlichtung
            </h2>
            <p className="leading-relaxed text-muted">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="leading-relaxed text-muted mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Haftung für Inhalte */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">
              Haftung für Inhalte
            </h2>
            <p className="leading-relaxed text-muted">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
