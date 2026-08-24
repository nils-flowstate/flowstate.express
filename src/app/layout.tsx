import type { Metadata } from "next";
import { Caveat, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PrototypeBanner from "@/components/PrototypeBanner";
import Footer from "@/components/Footer";

// Schriften über next/font — bewusst nicht über @import in globals.css.
//
// Ein @import von fonts.googleapis.com lässt jeden Browser beim Seitenaufruf
// Google kontaktieren; dabei überträgt er die IP-Adresse des Besuchers. Die
// Datenschutzerklärung sagt im Abschnitt „Plug-ins und eingebettete Funktionen"
// jedoch zu, die Schriften lägen auf dem eigenen Server. next/font lädt die
// Dateien beim Bauen herunter und liefert sie von der eigenen Domain aus —
// erst dadurch stimmt die Zusage.
//
// Alle drei sind Variable Fonts: ohne `weight` steht die volle Achse bereit,
// deshalb braucht es hier keine Gewichtsliste. Kursive Schnitte lädt niemand
// mit, weil im gesamten Auftritt keiner vorkommt.
const fraunces = Fraunces({
  subsets: ["latin"],
  // Fraunces trägt eine optische Größenachse; ohne sie fiele der Schriftschnitt
  // in Überschriften gröber aus als in der bisherigen Einbindung.
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Flowstate Express",
  description: "Spüre deinen Ausdruck — Raum für Kunst, Ausdruck und Verbindung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`h-full ${fraunces.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <body className="min-h-full flex flex-col bg-creme text-text font-body antialiased">
        <PrototypeBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
