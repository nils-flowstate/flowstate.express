// Datenschutzerklärung — Quelle: .claude/context/Datenschutz.tsx
// Änderungen gegenüber der Vorlage:
//   1. Zoom.us-Abschnitt ergänzt (QUESTIONS.md A-1, Spec Z. 135)
//   2. Datum aktualisiert auf 2026-07-01
//   3. Tailwind-Klassen auf Design-Token-Namen angepasst (kein motion, kein navy/ocean)
//   4. In Next.js App-Router-Page konvertiert (kein Import von framer-motion im Server Component)

const tocItems: [string, string][] = [
  ["m716", "Präambel"],
  ["m3", "Verantwortlicher"],
  ["mOverview", "Übersicht der Verarbeitungen"],
  ["m2427", "Maßgebliche Rechtsgrundlagen"],
  ["m27", "Sicherheitsmaßnahmen"],
  ["m25", "Übermittlung von personenbezogenen Daten"],
  ["m24", "Internationale Datentransfers"],
  ["m12", "Allgemeine Informationen zur Datenspeicherung und Löschung"],
  ["m10", "Rechte der betroffenen Personen"],
  ["m317", "Geschäftliche Leistungen"],
  ["m326", "Zahlungsverfahren"],
  ["m225", "Bereitstellung des Onlineangebots und Webhosting"],
  ["mZoom", "Videokonferenzen (Zoom)"],
  ["m134", "Einsatz von Cookies"],
  ["m367", "Registrierung, Anmeldung und Nutzerkonto"],
  ["m432", "Community Funktionen"],
  ["m451", "Single-Sign-On-Anmeldung"],
  ["m104", "Blogs und Publikationsmedien"],
  ["m182", "Kontakt- und Anfrageverwaltung"],
  ["m296", "Audioinhalte"],
  ["m17", "Newsletter und elektronische Benachrichtigungen"],
  ["m408", "Umfragen und Befragungen"],
  ["m263", "Webanalyse, Monitoring und Optimierung"],
  ["m264", "Onlinemarketing"],
  ["m135", "Affiliate-Programme und Affiliate-Links"],
  ["m299", "Kundenrezensionen und Bewertungsverfahren"],
  ["m136", "Präsenzen in sozialen Netzwerken (Social Media)"],
  ["m328", "Plug-ins und eingebettete Funktionen sowie Inhalte"],
  ["m723", "Management, Organisation und Hilfswerkzeuge"],
  ["m15", "Änderung und Aktualisierung"],
  ["m42", "Begriffsdefinitionen"],
];

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-atelier pt-28 pb-12 px-4 text-center">
        <h1 className="font-display text-3xl font-bold text-creme">
          Datenschutzerklärung
        </h1>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto font-body text-text space-y-10">

          {/* Präambel */}
          <div id="m716">
            <h2 className="font-display text-xl font-bold text-text mb-3">Präambel</h2>
            <p className="leading-relaxed text-muted">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer
              personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken und
              in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
              Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch
              insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
              Onlinepräsenzen, wie z.&nbsp;B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet
              als „Onlineangebot").
            </p>
            <p className="leading-relaxed text-muted mt-3">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            {/* Stand: aktualisiert auf 2026-07-01 (QUESTIONS.md A-1) */}
            <p className="text-sm text-muted mt-3">Stand: 1. Juli 2026</p>
          </div>

          {/* Inhaltsverzeichnis */}
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-4">Inhaltsverzeichnis</h2>
            <ol className="space-y-1 list-decimal list-inside">
              {tocItems.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-orange text-sm hover:underline">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          {/* 1 – Verantwortlicher */}
          <div id="m3">
            <h2 className="font-display text-xl font-bold text-text mb-3">Verantwortlicher</h2>
            <p className="leading-relaxed text-muted">
              Nils Tenkotte<br />
              Gertrudisstraße 7<br />
              50859 Köln
            </p>
            <p className="leading-relaxed text-muted mt-3">Vertretungsberechtigte Personen: Nils Tenkotte</p>
            <p className="leading-relaxed text-muted mt-1">
              E-Mail-Adresse:{" "}
              <a href="mailto:nils@flowstate.foundation" className="text-orange hover:underline">
                nils@flowstate.foundation
              </a>
            </p>
            <p className="leading-relaxed text-muted mt-1">
              Impressum:{" "}
              <a href="/impressum" className="text-orange hover:underline">
                flowstate.express/impressum
              </a>
            </p>
          </div>

          {/* 2 – Übersicht der Verarbeitungen */}
          <div id="mOverview">
            <h2 className="font-display text-xl font-bold text-text mb-3">Übersicht der Verarbeitungen</h2>
            <p className="leading-relaxed text-muted">
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
              zusammen und verweist auf die betroffenen Personen.
            </p>

            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Arten der verarbeiteten Daten</h3>
            <ul className="list-disc list-inside space-y-1 text-muted leading-relaxed">
              <li>Bestandsdaten.</li>
              <li>Zahlungsdaten.</li>
              <li>Standortdaten.</li>
              <li>Kontaktdaten.</li>
              <li>Inhaltsdaten.</li>
              <li>Vertragsdaten.</li>
              <li>Nutzungsdaten.</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
              <li>Protokolldaten.</li>
            </ul>

            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Kategorien betroffener Personen</h3>
            <ul className="list-disc list-inside space-y-1 text-muted leading-relaxed">
              <li>Leistungsempfänger und Auftraggeber.</li>
              <li>Interessenten.</li>
              <li>Kommunikationspartner.</li>
              <li>Nutzer.</li>
              <li>Geschäfts- und Vertragspartner.</li>
              <li>Teilnehmer.</li>
            </ul>

            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Zwecke der Verarbeitung</h3>
            <ul className="list-disc list-inside space-y-1 text-muted leading-relaxed">
              <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.</li>
              <li>Kommunikation.</li>
              <li>Sicherheitsmaßnahmen.</li>
              <li>Direktmarketing.</li>
              <li>Reichweitenmessung.</li>
              <li>Tracking.</li>
              <li>Büro- und Organisationsverfahren.</li>
              <li>Konversionsmessung.</li>
              <li>Zielgruppenbildung.</li>
              <li>Affiliate-Nachverfolgung.</li>
              <li>Organisations- und Verwaltungsverfahren.</li>
              <li>Feedback.</li>
              <li>Umfragen und Fragebögen.</li>
              <li>Marketing.</li>
              <li>Profile mit nutzerbezogenen Informationen.</li>
              <li>Anmeldeverfahren.</li>
              <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
              <li>Informationstechnische Infrastruktur.</li>
              <li>Öffentlichkeitsarbeit.</li>
              <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren.</li>
            </ul>
          </div>

          {/* 3 – Maßgebliche Rechtsgrundlagen */}
          <div id="m2427">
            <h2 className="font-display text-xl font-bold text-text mb-3">Maßgebliche Rechtsgrundlagen</h2>
            <p className="leading-relaxed text-muted">
              <strong className="text-text">Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden
              erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene
              Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
              Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im
              Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
              Datenschutzerklärung mit.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed mt-3">
              <li>
                <strong className="text-text">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> — Die
                betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden
                personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
              </li>
              <li>
                <strong className="text-text">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> — Die
                Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person
                ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                betroffenen Person erfolgen.
              </li>
              <li>
                <strong className="text-text">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> — Die
                Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der
                Verantwortliche unterliegt.
              </li>
              <li>
                <strong className="text-text">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> — Die
                Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines
                Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der
                betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
              </li>
            </ul>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu
              den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland.
              Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
              Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
              Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
              Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und
              zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich
              Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung
              gelangen.
            </p>
          </div>

          {/* 4 – Sicherheitsmaßnahmen */}
          <div id="m27">
            <h2 className="font-display text-xl font-bold text-text mb-3">Sicherheitsmaßnahmen</h2>
            <p className="leading-relaxed text-muted">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik,
              der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
              sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte
              und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem
              Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
              Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als
              auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
              und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
              Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
              gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
              Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des
              Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):</strong> Um
              die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen
              zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Wenn eine Website durch ein
              SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert.
            </p>
          </div>

          {/* 5 – Übermittlung */}
          <div id="m25">
            <h2 className="font-display text-xl font-bold text-text mb-3">Übermittlung von personenbezogenen Daten</h2>
            <p className="leading-relaxed text-muted">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere
              Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt
              beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.&nbsp;B.
              mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in
              eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und
              schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
              dienen, mit den Empfängern Ihrer Daten ab.
            </p>
          </div>

          {/* 6 – Internationale Datentransfers */}
          <div id="m24">
            <h2 className="font-display text-xl font-bold text-text mb-3">Internationale Datentransfers</h2>
            <p className="leading-relaxed text-muted">
              <strong className="text-text">Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein
              Drittland (d.&nbsp;h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums
              (EWR)) übermitteln oder dies im Rahmen der Nutzung von Diensten Dritter oder der Offenlegung bzw.
              Übermittlung von Daten an andere Personen, Stellen oder Unternehmen geschieht, erfolgt dies stets
              im Einklang mit den gesetzlichen Vorgaben.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF),
              welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer
              Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern
              Standardvertragsklauseln abgeschlossen, die den Vorgaben der EU-Kommission entsprechen und
              vertragliche Verpflichtungen zum Schutz Ihrer Daten festlegen.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF bildet die
              primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche Sicherheit dienen.
              Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die Standardvertragsklauseln als
              zuverlässige Rückfalloption ein. So stellen wir sicher, dass Ihre Daten auch bei etwaigen
              politischen oder rechtlichen Veränderungen stets angemessen geschützt bleiben.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie nach dem DPF zertifiziert
              sind und ob Standardvertragsklauseln vorliegen. Weitere Informationen zum DPF und eine Liste der
              zertifizierten Unternehmen finden Sie auf der Website des US-Handelsministeriums unter{" "}
              <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                https://www.dataprivacyframework.gov/
              </a>{" "}
              (in englischer Sprache).
            </p>
          </div>

          {/* 7 – Datenspeicherung und Löschung */}
          <div id="m12">
            <h2 className="font-display text-xl font-bold text-text mb-3">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
            <p className="leading-relaxed text-muted">
              Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen,
              sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen
              Grundlagen für die Verarbeitung bestehen.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Aufbewahrung und Löschung von Daten:</strong> Die folgenden
              allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed mt-3">
              <li>
                <strong className="text-text">10 Jahre</strong> — Aufbewahrungsfrist für Bücher und
                Aufzeichnungen, Jahresabschlüsse, Inventare (§ 147 Abs. 1 Nr. 1 AO, § 257 HGB).
              </li>
              <li>
                <strong className="text-text">8 Jahre</strong> — Buchungsbelege, wie z.&nbsp;B. Rechnungen und
                Kostenbelege (§ 147 Abs. 1 Nr. 4 AO sowie § 257 HGB).
              </li>
              <li>
                <strong className="text-text">6 Jahre</strong> — Übrige Geschäftsunterlagen (§ 147 Abs. 1 Nr. 2, 3, 5 AO, § 257 HGB).
              </li>
              <li>
                <strong className="text-text">3 Jahre</strong> — Daten, die erforderlich sind, um potenzielle
                Gewährleistungs- und Schadensersatzansprüche zu berücksichtigen (§§ 195, 199 BGB).
              </li>
            </ul>
          </div>

          {/* 8 – Rechte der betroffenen Personen */}
          <div id="m10">
            <h2 className="font-display text-xl font-bold text-text mb-3">Rechte der betroffenen Personen</h2>
            <p className="leading-relaxed text-muted">
              <strong className="text-text">Rechte der betroffenen Personen aus der DSGVO:</strong> Ihnen stehen
              als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21
              DSGVO ergeben:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed mt-3">
              <li>
                <strong className="text-text">Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die
                sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie
                betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO
                erfolgt, Widerspruch einzulegen.
              </li>
              <li>
                <strong className="text-text">Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht,
                erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong className="text-text">Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
                darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
                sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
              </li>
              <li>
                <strong className="text-text">Recht auf Berichtigung:</strong> Sie haben das Recht, die Vervollständigung
                der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong className="text-text">Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie
                haben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw.
                alternativ eine Einschränkung der Verarbeitung zu verlangen.
              </li>
              <li>
                <strong className="text-text">Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie
                betreffende Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong className="text-text">Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht auf
                Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthaltsorts, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.
              </li>
            </ul>
          </div>

          {/* 9 – Geschäftliche Leistungen */}
          <div id="m317">
            <h2 className="font-display text-xl font-bold text-text mb-3">Geschäftliche Leistungen</h2>
            <p className="leading-relaxed text-muted">
              Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner, etwa Kunden,
              Auftraggeber, Interessenten, Lieferanten und sonstige Kooperationspartner (zusammenfassend
              „Vertragspartner"), zur Anbahnung, Durchführung und Abwicklung von Vertragsverhältnissen sowie
              vergleichbaren Rechtsverhältnissen.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Verarbeitete Datenarten:</strong> Bestandsdaten; Zahlungsdaten;
              Kontaktdaten; Vertragsdaten.{" "}
              <strong className="text-text">Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c)
              DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </p>
          </div>

          {/* 10 – Zahlungsverfahren */}
          <div id="m326">
            <h2 className="font-display text-xl font-bold text-text mb-3">Zahlungsverfahren</h2>
            <p className="leading-relaxed text-muted">
              Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen bieten wir den betroffenen Personen
              effiziente und sichere Zahlungsmöglichkeiten an und setzen hierzu neben Banken und
              Kreditinstituten weitere Dienstleister ein (zusammenfassend „Zahlungsdienstleister"). Der
              Zahlungsverkehr erfolgt ausschließlich über verschlüsselte Verbindungen.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Eingesetzte Zahlungsdienstleister</h3>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Google Pay</strong> — Google Ireland Limited, Gordon House, Barrow
                Street, Dublin 4, Irland.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">Mastercard</strong> — Mastercard Europe SA, Chaussée de Tervuren
                198A, B-1410 Waterloo, Belgien.{" "}
                <a href="https://www.mastercard.de/de-de/datenschutz.html" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">PayPal</strong> — PayPal (Europe) S.à r.l. et Cie, S.C.A.,
                22-24 Boulevard Royal, L-2449 Luxemburg.{" "}
                <a href="https://www.paypal.com/de/legalhub/paypal/privacy-full" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">Stripe</strong> — Stripe, Inc., 510 Townsend Street, San Francisco,
                CA 94103, USA. Grundlage Drittlandtransfers: Data Privacy Framework (DPF).{" "}
                <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* 11 – Webhosting */}
          <div id="m225">
            <h2 className="font-display text-xl font-bold text-text mb-3">Bereitstellung des Onlineangebots und Webhosting</h2>
            <p className="leading-relaxed text-muted">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu
              können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die
              Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu
              übermitteln.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Weitere Hinweise</h3>
            <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf
                unser Onlineangebot wird in Form von sogenannten „Server-Logfiles" protokolliert. Logfile-Informationen
                werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert.
              </li>
              <li>
                <strong className="text-text">Hetzner:</strong> Leistungen auf dem Gebiet der Bereitstellung von
                informationstechnischer Infrastruktur und verbundenen Dienstleistungen. Hetzner Online GmbH,
                Industriestr. 25, 91710 Gunzenhausen, Deutschland. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f)
                DSGVO. Ausschließliche Datenverarbeitung in Deutschland/EU.{" "}
                <a href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* ── NEU: Zoom ── QUESTIONS.md A-1 / Spec Z. 135 */}
          <div id="mZoom">
            <h2 className="font-display text-xl font-bold text-text mb-3">Videokonferenzen (Zoom)</h2>
            <p className="leading-relaxed text-muted">
              Für die Durchführung unserer Online-Events (wöchentliche Zoom-Meetings: 20 Minuten Selbstausdruck,
              10 Minuten Sharing) nutzen wir den Videokonferenzdienst Zoom der Zoom Video Communications, Inc.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              Wenn Sie an einem Zoom-Meeting teilnehmen, werden je nach Art Ihrer Teilnahme (Mikrofon, Kamera,
              Chat) personenbezogene Daten erhoben und verarbeitet. Dazu gehören insbesondere:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted leading-relaxed mt-2">
              <li>Vor- und Nachname, E-Mail-Adresse (sofern Sie sich mit einem Konto anmelden),</li>
              <li>IP-Adresse und Geräteinformationen,</li>
              <li>Audio- und Videodaten (bei aktivierter Kamera/Mikrofon),</li>
              <li>Chat-Nachrichten innerhalb des Meetings,</li>
              <li>Verbindungsmetadaten (Datum, Uhrzeit, Dauer der Teilnahme).</li>
            </ul>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Auftragsverarbeiter:</strong> Zoom Video Communications, Inc.,
              55 Almaden Blvd, Suite 600, San Jose, CA 95113, USA. Zoom agiert hierbei als Auftragsverarbeiter
              gemäß Art. 28 DSGVO auf Grundlage eines Auftragsverarbeitungsvertrags (Data Processing Agreement).
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Drittlandtransfer in die USA:</strong> Die Datenverarbeitung erfolgt
              auf Servern von Zoom Video Communications, Inc. in den USA. Grundlage für den Transfer in die USA
              sind EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO. Informationen zu den von Zoom
              eingesetzten Schutzmaßnahmen finden Sie in der Datenschutzerklärung von Zoom unter{" "}
              <a
                href="https://explore.zoom.us/de/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:underline"
              >
                https://explore.zoom.us/de/privacy/
              </a>.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO) für angemeldete Event-Teilnehmer; berechtigte
              Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) für das Angebot gemeinschaftlicher Ausdrucksformate.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Hinweis:</strong> Wenn Sie an einem Zoom-Meeting ohne eigenes
              Zoom-Konto teilnehmen, verarbeitet Zoom dennoch technische Verbindungsdaten. Bitte prüfen Sie
              vor der Teilnahme die aktuellen Datenschutzhinweise von Zoom unter dem oben genannten Link.
            </p>
          </div>

          {/* 12 – Cookies */}
          <div id="m134">
            <h2 className="font-display text-xl font-bold text-text mb-3">Einsatz von Cookies</h2>
            <p className="leading-relaxed text-muted">
              Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer
              speichern und aus ihnen auslesen, verstanden. Wir verwenden Cookies gemäß den gesetzlichen
              Vorschriften.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Verarbeitete Datenarten:</strong> Meta-, Kommunikations- und
              Verfahrensdaten.{" "}
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO); Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
            </p>
          </div>

          {/* 13 – Registrierung */}
          <div id="m367">
            <h2 className="font-display text-xl font-bold text-text mb-3">Registrierung, Anmeldung und Nutzerkonto</h2>
            <p className="leading-relaxed text-muted">
              Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden die erforderlichen
              Pflichtangaben zu Zwecken der Bereitstellung des Nutzerkontos verarbeitet. Zu den verarbeiteten
              Daten gehören insbesondere Login-Informationen (Nutzername, Passwort sowie eine E-Mail-Adresse).
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </p>
          </div>

          {/* 14 – Community */}
          <div id="m432">
            <h2 className="font-display text-xl font-bold text-text mb-3">Community Funktionen</h2>
            <p className="leading-relaxed text-muted">
              Die von uns bereitgestellten Community Funktionen erlauben es Nutzern miteinander in
              Konversationen oder sonst miteinander in einen Austausch zu treten. Hierbei bitten wir zu
              beachten, dass die Nutzung der Communityfunktionen nur unter Beachtung der geltenden Rechtslage,
              unserer Bedingungen und Richtlinien sowie der Rechte anderer Nutzer und Dritter gestattet ist.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Verarbeitete Datenarten:</strong> Bestandsdaten; Nutzungsdaten.{" "}
              <strong className="text-text">Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </p>
          </div>

          {/* 15 – Single-Sign-On */}
          <div id="m451">
            <h2 className="font-display text-xl font-bold text-text mb-3">Single-Sign-On-Anmeldung</h2>
            <p className="leading-relaxed text-muted">
              Als „Single-Sign-On" werden Verfahren bezeichnet, die es Nutzern erlauben, sich mit Hilfe eines
              Nutzerkontos bei einem Anbieter von Single-Sign-On-Verfahren auch bei unserem Onlineangebot
              anzumelden. Die Authentifizierung erfolgt direkt bei dem jeweiligen Single-Sign-On-Anbieter.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Eingesetzte Dienste</h3>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Apple Single-Sign-On:</strong> Apple Inc., Infinite Loop,
                Cupertino, CA 95014, USA.{" "}
                <a href="https://www.apple.com/legal/privacy/de-ww/" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">Google Single-Sign-On:</strong> Google Ireland Limited, Gordon
                House, Barrow Street, Dublin 4, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF).{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* 16 – Blogs */}
          <div id="m104">
            <h2 className="font-display text-xl font-bold text-text mb-3">Blogs und Publikationsmedien</h2>
            <p className="leading-relaxed text-muted">
              Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation. Die Daten der
              Leser werden für die Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für dessen
              Darstellung und die Kommunikation zwischen Autoren und Lesern oder aus Gründen der Sicherheit
              erforderlich ist.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
          </div>

          {/* 17 – Kontakt */}
          <div id="m182">
            <h2 className="font-display text-xl font-bold text-text mb-3">Kontakt- und Anfrageverwaltung</h2>
            <p className="leading-relaxed text-muted">
              Bei der Kontaktaufnahme mit uns (z.&nbsp;B. per E-Mail) werden die Angaben der anfragenden Personen
              verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen
              erforderlich ist.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO); Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
            </p>
          </div>

          {/* 18 – Audioinhalte */}
          <div id="m296">
            <h2 className="font-display text-xl font-bold text-text mb-3">Audioinhalte</h2>
            <p className="leading-relaxed text-muted">
              Wir nutzen Hosting-Angebote von Dienstanbietern, um unsere Audio-Inhalte zum Anhören und zum
              Download anzubieten.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Eingesetzte Dienste</h3>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Soundcloud:</strong> SoundCloud Limited, Rheinsberger Str. 76/77,
                10115 Berlin, Deutschland.{" "}
                <a href="https://soundcloud.com/pages/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">Spotify:</strong> Spotify AB, Regeringsgatan 19, SE-111 53
                Stockholm, Schweden.{" "}
                <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* 19 – Newsletter */}
          <div id="m17">
            <h2 className="font-display text-xl font-bold text-text mb-3">Newsletter und elektronische Benachrichtigungen</h2>
            <p className="leading-relaxed text-muted">
              Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen ausschließlich mit
              der Einwilligung der Empfänger oder aufgrund einer gesetzlichen Grundlage.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
              DSGVO).
            </p>
          </div>

          {/* 20 – Umfragen */}
          <div id="m408">
            <h2 className="font-display text-xl font-bold text-text mb-3">Umfragen und Befragungen</h2>
            <p className="leading-relaxed text-muted">
              Wir führen Umfragen und Befragungen durch, um Informationen für den jeweils kommunizierten
              Umfrage- bzw. Befragungszweck zu sammeln. Die von uns durchgeführten Umfragen werden anonym
              ausgewertet.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Eingesetzte Dienste</h3>
            <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Google-Formular:</strong> Google Ireland Limited, Gordon House,
                Barrow Street, Dublin 4, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF),
                Standardvertragsklauseln.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* 21 – Webanalyse */}
          <div id="m263">
            <h2 className="font-display text-xl font-bold text-text mb-3">Webanalyse, Monitoring und Optimierung</h2>
            <p className="leading-relaxed text-muted">
              Die Webanalyse (auch als „Reichweitenmessung" bezeichnet) dient der Auswertung der Besucherströme
              unseres Onlineangebots. Wir nutzen ein IP-Masking-Verfahren (Pseudonymisierung durch Kürzung der
              IP-Adresse) zum Schutz der Nutzer.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
              DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </p>
          </div>

          {/* 22 – Onlinemarketing */}
          <div id="m264">
            <h2 className="font-display text-xl font-bold text-text mb-3">Onlinemarketing</h2>
            <p className="leading-relaxed text-muted">
              Wir verarbeiten personenbezogene Daten zum Zweck des Onlinemarketings, worunter insbesondere die
              Vermarktung von Werbeflächen oder die Darstellung von werbenden und sonstigen Inhalten anhand
              potenzieller Interessen der Nutzer fallen können.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
              DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </p>
          </div>

          {/* 23 – Affiliate */}
          <div id="m135">
            <h2 className="font-display text-xl font-bold text-text mb-3">Affiliate-Programme und Affiliate-Links</h2>
            <p className="leading-relaxed text-muted">
              In unser Onlineangebot binden wir sogenannte Affiliate-Links oder andere Verweise auf die Angebote
              und Leistungen von Drittanbietern ein.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
              DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </p>
          </div>

          {/* 24 – Kundenrezensionen */}
          <div id="m299">
            <h2 className="font-display text-xl font-bold text-text mb-3">Kundenrezensionen und Bewertungsverfahren</h2>
            <p className="leading-relaxed text-muted">
              Wir nehmen an Rezensions- und Bewertungsverfahren teil, um unsere Leistungen zu evaluieren, zu
              optimieren und zu bewerben.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
          </div>

          {/* 25 – Social Media */}
          <div id="m136">
            <h2 className="font-display text-xl font-bold text-text mb-3">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p className="leading-relaxed text-muted">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen
              Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns
              anzubieten.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Eingesetzte Plattformen</h3>
            <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Instagram:</strong> Meta Platforms Ireland Limited, Merrion Road,
                Dublin 4, D04 X2K5, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF).{" "}
                <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">Facebook-Seiten:</strong> Meta Platforms Ireland Limited, Merrion
                Road, Dublin 4, D04 X2K5, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF),
                Standardvertragsklauseln.{" "}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">LinkedIn:</strong> LinkedIn Ireland Unlimited Company, Wilton Plaza,
                Dublin 2, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF),
                Standardvertragsklauseln.{" "}
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <strong className="text-text">YouTube:</strong> Google Ireland Limited, Gordon House, Barrow
                Street, Dublin 4, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF).{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* 26 – Plug-ins */}
          <div id="m328">
            <h2 className="font-display text-xl font-bold text-text mb-3">Plug-ins und eingebettete Funktionen sowie Inhalte</h2>
            <p className="leading-relaxed text-muted">
              Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer
              jeweiligen Anbieter bezogen werden.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
              DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </p>
            <h3 className="font-body font-semibold text-text mt-5 mb-2 text-base">Eingesetzte Dienste</h3>
            <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Google Fonts (Bereitstellung auf eigenem Server):</strong> Die
                Google Fonts werden auf unserem Server gehostet, es werden keine Daten an Google übermittelt.
                Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f) DSGVO.
              </li>
              <li>
                <strong className="text-text">Google Maps:</strong> Google Cloud EMEA Limited, 70 Sir John
                Rogerson{"'"}s Quay, Dublin 2, Irland. Grundlage Drittlandtransfers: Data Privacy Framework (DPF).{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>

          {/* 27 – Management & Organisation */}
          <div id="m723">
            <h2 className="font-display text-xl font-bold text-text mb-3">Management, Organisation und Hilfswerkzeuge</h2>
            <p className="leading-relaxed text-muted">
              Wir setzen Dienstleistungen, Plattformen und Software anderer Anbieter zu Zwecken der Organisation,
              Verwaltung, Planung sowie Erbringung unserer Leistungen ein.
            </p>
            <p className="leading-relaxed text-muted mt-3">
              <strong className="text-text">Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f) DSGVO).
            </p>
          </div>

          {/* 28 – Änderung und Aktualisierung */}
          <div id="m15">
            <h2 className="font-display text-xl font-bold text-text mb-3">Änderung und Aktualisierung</h2>
            <p className="leading-relaxed text-muted">
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir
              passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten
              Datenverarbeitungen dies erforderlich machen.
            </p>
          </div>

          {/* 29 – Begriffsdefinitionen */}
          <div id="m42">
            <h2 className="font-display text-xl font-bold text-text mb-3">Begriffsdefinitionen</h2>
            <p className="leading-relaxed text-muted mb-4">
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten
              Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten deren gesetzliche
              Definitionen.
            </p>
            <ul className="space-y-3 text-muted leading-relaxed">
              <li>
                <strong className="text-text">Bestandsdaten:</strong> Bestandsdaten umfassen wesentliche
                Informationen, die für die Identifikation und Verwaltung von Vertragspartnern,
                Benutzerkonten, Profilen und ähnlichen Zuordnungen notwendig sind.
              </li>
              <li>
                <strong className="text-text">Inhaltsdaten:</strong> Inhaltsdaten umfassen Informationen, die im
                Zuge der Erstellung, Bearbeitung und Veröffentlichung von Inhalten aller Art generiert werden.
              </li>
              <li>
                <strong className="text-text">Kontaktdaten:</strong> Kontaktdaten sind essentielle
                Informationen, die die Kommunikation mit Personen oder Organisationen ermöglichen.
              </li>
              <li>
                <strong className="text-text">Nutzungsdaten:</strong> Nutzungsdaten beziehen sich auf
                Informationen, die erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen oder
                Plattformen interagieren.
              </li>
              <li>
                <strong className="text-text">Personenbezogene Daten:</strong> „Personenbezogene Daten" sind
                alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
                beziehen (Art. 4 Nr. 1 DSGVO).
              </li>
              <li>
                <strong className="text-text">Protokolldaten:</strong> Protokolldaten sind Informationen über
                Ereignisse oder Aktivitäten, die in einem System oder Netzwerk protokolliert wurden.
              </li>
              <li>
                <strong className="text-text">Verantwortlicher:</strong> Als „Verantwortlicher" wird die
                natürliche oder juristische Person bezeichnet, die allein oder gemeinsam mit anderen über die
                Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </li>
              <li>
                <strong className="text-text">Verarbeitung:</strong> „Verarbeitung" ist jeder mit oder ohne
                Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
                Zusammenhang mit personenbezogenen Daten.
              </li>
              <li>
                <strong className="text-text">Vertragsdaten:</strong> Vertragsdaten sind spezifische
                Informationen, die sich auf die Formalisierung einer Vereinbarung zwischen zwei oder mehr
                Parteien beziehen.
              </li>
              <li>
                <strong className="text-text">Zahlungsdaten:</strong> Zahlungsdaten umfassen sämtliche
                Informationen, die zur Abwicklung von Zahlungstransaktionen zwischen Käufern und Verkäufern
                benötigt werden.
              </li>
            </ul>
          </div>

          <div className="border-t border-muted/10 pt-6">
            <p className="text-sm text-muted">
              Bei Fragen zum Datenschutz:{" "}
              <a href="mailto:nils@flowstate.foundation" className="text-orange hover:underline">
                nils@flowstate.foundation
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
