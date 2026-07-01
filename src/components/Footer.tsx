import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-atelier text-creme/70 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/Flowstate_Express-Logo.png"
              alt="Flowstate Express"
              width={120}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/datenschutz" className="hover:text-creme transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:text-creme transition-colors">
              Impressum
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-creme/10 text-xs text-creme/40">
          © {new Date().getFullYear()} Flowstate Foundation · Köln
        </div>
      </div>
    </footer>
  );
}
