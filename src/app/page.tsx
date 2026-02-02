"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

const TYPEWRITER_PHRASES = [
  "Applications closed",
  "Feb 20—22nd, 2026",
  "50+ builders selected",
  "Teams announced soon",
  "Time to build something real",
];

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#2a3020]">
      {/* Background Image */}
      <div
        className={`absolute inset-0 ${
          imageLoaded ? "animate-cinematic-bg" : ""
        }`}
      >
        <Image
          src="/Background.png"
          alt="Painterly California landscape"
          fill
          priority
          className={`object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 text-gradient-overlay pointer-events-none" />

      {/* Content Container - only show after image loads */}
      <div
        className={`relative z-10 h-full flex flex-col p-5 sm:p-6 md:p-10 lg:p-12 transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Top Row - Logos */}
        <header
          className={`flex justify-end ${
            imageLoaded ? "animate-soft-fade delay-3200" : "opacity-0"
          }`}
        >
          <div className="hidden md:flex items-center gap-5 lg:gap-6 scale-90">
            <Image
              src="/OpenAI.png"
              alt="OpenAI"
              width={200}
              height={70}
              className="h-20 lg:h-24 xl:h-28 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
            <Image
              src="/CSAI.png"
              alt="CS+AI Club"
              width={200}
              height={70}
              className="h-20 lg:h-24 xl:h-28 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
            <Image
              src="/Codebox.png"
              alt="CodeBox"
              width={160}
              height={56}
              className="h-16 lg:h-20 xl:h-24 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-2xl mx-auto md:mx-0 md:ml-4 lg:ml-8 w-full px-1 sm:px-0">
          {/* Title */}
          <h1
            className={`text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-shadow-lg tracking-tight leading-[1.05] ${
              imageLoaded ? "animate-text-reveal delay-500" : "opacity-0"
            }`}
          >
            Poly Prompt
          </h1>

          {/* Typewriter Line */}
          <div
            className={`mt-3 sm:mt-4 md:mt-5 h-7 sm:h-8 md:h-9 ${
              imageLoaded ? "animate-soft-fade delay-1200" : "opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 text-shadow font-medium font-mono tracking-tight">
              <Typewriter
                phrases={TYPEWRITER_PHRASES}
                typingSpeed={45}
                deletingSpeed={20}
                pauseDuration={2800}
              />
            </p>
          </div>

          {/* Description */}
          <div
            className={`mt-6 sm:mt-7 md:mt-9 space-y-1.5 sm:space-y-2 max-w-md md:max-w-xl ${
              imageLoaded ? "" : "opacity-0"
            }`}
          >
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] text-white/90 text-shadow leading-relaxed ${
                imageLoaded ? "animate-text-reveal delay-1800" : "opacity-0"
              }`}
            >
              Applications closed. 50+ builders selected. See you Feb 20th.
            </p>
          </div>

        </div>

        {/* Bottom Row */}
        <footer className="flex justify-center md:justify-end items-end px-1 sm:px-0 max-w-2xl md:max-w-none mx-auto md:mx-0 w-full md:w-auto pb-[15vh] md:pb-0">
          {/* Event Date */}
          <div
            className={`flex flex-col items-center md:items-end gap-1 ${
              imageLoaded ? "animate-element-rise delay-2800" : "opacity-0"
            }`}
          >
            <span className="text-white/60 text-sm sm:text-base font-medium tracking-wide text-shadow uppercase">
              Hackathon Weekend
            </span>
            <span className="text-white text-2xl sm:text-3xl md:text-[2rem] font-bold tracking-wide text-shadow-lg">
              Feb 20—22, 2026
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
