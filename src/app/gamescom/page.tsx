import { redirect } from "next/navigation";

// Platzhalter für die Gamescom-Seite.
//
// Die Adresse /gamescom ist schon im Umlauf, die eigene Seite dahinter gibt es
// aber noch nicht. Bis dahin landen Besucher auf der Startseite, statt auf
// einem 404 zu stranden.
//
// Bewusst 307 (temporär, der Standard von `redirect`) und kein 308: Browser
// merken sich eine permanente Weiterleitung dauerhaft im Cache — wer die
// Adresse einmal aufgerufen hat, käme später nie auf der echten Seite an.
//
// Zum Ausbauen: den `redirect`-Aufruf durch den Seiteninhalt ersetzen.

export default function GamescomPage() {
  redirect("/");
}
