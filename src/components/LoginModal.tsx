"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

// Demo credentials — no real backend in Phase 1 (confirmed QUESTIONS.md C-3)
const DEMO_EMAIL = "nils@flowstate.foundation";
const DEMO_PASSWORD = ""; // Archivstand: Passwort entfernt (23.10.2026)

export default function LoginModal({ open, onClose }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState("");

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Store demo session in localStorage
      localStorage.setItem("flowstate_logged_in", "true");
      onClose();
      router.push("/profile");
    } else {
      setError("Ungültige Anmeldedaten.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-atelier/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-creme rounded-2xl p-8 w-full max-w-sm mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-display text-2xl font-semibold text-text mb-1">
          Willkommen zurück
        </h2>
        <p className="text-muted text-sm mb-6">Demo-Zugang (Credentials vorausgefüllt)</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs text-muted mb-1.5">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-muted/30 bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1.5">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-muted/30 bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>

          {error && <p className="text-fire text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-orange text-white font-medium text-sm hover:bg-orange/90 transition-colors"
          >
            Anmelden
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-text"
          aria-label="Schließen"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
