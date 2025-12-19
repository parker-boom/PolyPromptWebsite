"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Modal from "@/components/Modal";
import ModalContent from "@/components/ModalContent";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbmpHZKCambSfulk0nczuE9ImYuIdE6DNY91AgCHoWsZ3PNw/viewform?usp=dialog";

const TYPEWRITER_PHRASES = [
  "Powered by OpenAI",
  "Feb 13–15, 2026",
  "Applications close Jan 31",
  "All experience levels welcome",
  "50+ hackers. One weekend.",
  "Learn. Build. Ship.",
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          quality={90}
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
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            <Image
              src="/OpenAI.png"
              alt="OpenAI"
              width={200}
              height={70}
              className="h-14 lg:h-16 xl:h-[70px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
            <Image
              src="/CSAI.png"
              alt="CS+AI Club"
              width={200}
              height={70}
              className="h-14 lg:h-16 xl:h-[70px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
            <Image
              src="/Codebox.png"
              alt="CodeBox"
              width={160}
              height={56}
              className="h-11 lg:h-[52px] xl:h-14 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
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

          {/* Typewriter Line - now directly under title */}
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

          {/* Description - bigger text */}
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
              A weekend hackathon at Cal Poly, open to all majors. Build real AI
              products. Push what&apos;s possible.
            </p>
          </div>

          {/* Mobile: Learn More button - left aligned */}
          <div
            className={`md:hidden mt-8 sm:mt-9 ${
              imageLoaded ? "animate-element-rise delay-2800" : "opacity-0"
            }`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary-strong"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <footer className="flex flex-col md:flex-row justify-between items-center md:items-end gap-5 md:gap-4 px-1 sm:px-0 max-w-2xl md:max-w-none mx-auto md:mx-0 w-full md:w-auto">
          {/* Desktop: Learn More - Left */}
          <div
            className={`hidden md:block md:ml-4 lg:ml-8 ${
              imageLoaded ? "animate-element-rise delay-3000" : "opacity-0"
            }`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary-strong"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Learn More
            </button>
          </div>

          {/* Apply Section */}
          <div
            className={`flex flex-col items-center md:items-end gap-2.5 sm:gap-3 w-full md:w-auto ${
              imageLoaded ? "animate-element-rise delay-3400" : "opacity-0"
            }`}
          >
            <span className="text-white/85 text-base sm:text-lg md:text-base font-semibold tracking-wide text-shadow">
              February 13–15, 2026
            </span>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Apply
            </a>
          </div>
        </footer>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent />
      </Modal>
    </main>
  );
}
