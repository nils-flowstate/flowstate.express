"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setLightboxOpen(true)}
        className="block w-full cursor-zoom-in rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
        aria-label="Bild vergrößern"
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className="w-full h-auto max-h-[70vh] object-cover"
          priority
        />
      </button>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-atelier/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-3 -right-3 bg-creme rounded-full p-2 text-text hover:text-fire transition-colors shadow-lg"
              aria-label="Schließen"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
