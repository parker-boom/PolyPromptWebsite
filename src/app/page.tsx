"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Modal from "@/components/Modal";
import ModalContent from "@/components/ModalContent";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbmpHZKCambSfulk0nczuE9ImYuIdE6DNY91AgCHoWsZ3PNw/viewform?usp=dialog";

const TYPEWRITER_PHRASES = [
  "Feb 13–15, 2026",
  "Applications close Jan 31",
  "All experience levels welcome",
  "50+ hackers. One weekend. Real products.",
  "Learn. Build. Ship.",
  "Cal Poly's premier AI hackathon",
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#2a3020]">
      {/* Background Image with cinematic reveal */}
      <div className="absolute inset-0 animate-cinematic-bg">
        <div className="absolute inset-0 animate-bg-breathe">
          <Image
            src="/Background.png"
            alt="Painterly California landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 text-gradient-overlay pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col p-5 sm:p-6 md:p-10 lg:p-12">
        {/* Top Row - Logos */}
        <header className="flex justify-end animate-soft-fade delay-3600">
          <div className="hidden md:flex items-center gap-6">
            <Image
              src="/OpenAI.png"
              alt="OpenAI"
              width={180}
              height={60}
              className="h-14 lg:h-[60px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
            <Image
              src="/CSAI.png"
              alt="CS+AI Club"
              width={180}
              height={60}
              className="h-14 lg:h-[60px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
            <Image
              src="/Codebox.png"
              alt="CodeBox"
              width={180}
              height={60}
              className="h-14 lg:h-[60px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-lg"
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-2xl mx-auto md:mx-0 md:ml-4 lg:ml-8 w-full px-1 sm:px-0">
          {/* Title */}
          <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow-lg tracking-tight animate-text-reveal delay-800 leading-[1.1]">
            Poly Prompt
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 text-shadow mt-2 sm:mt-3 md:mt-4 tracking-wide font-medium animate-text-reveal delay-1600">
            Powered by OpenAI
          </p>

          {/* Typewriter Line */}
          <div className="mt-5 sm:mt-6 md:mt-8 h-7 sm:h-8 md:h-10 animate-soft-fade delay-2400">
            <p className="text-lg sm:text-xl md:text-2xl text-white text-shadow font-medium font-mono tracking-tight">
              <Typewriter
                phrases={TYPEWRITER_PHRASES}
                typingSpeed={45}
                deletingSpeed={20}
                pauseDuration={2800}
              />
            </p>
          </div>

          {/* Description */}
          <div className="mt-5 sm:mt-6 md:mt-8 space-y-1 sm:space-y-1.5 max-w-md md:max-w-lg">
            <p className="text-[15px] sm:text-base md:text-lg lg:text-xl text-white/90 text-shadow animate-text-reveal delay-2800 leading-relaxed">
              A weekend hackathon at Cal Poly, open to all majors.
            </p>
            <p className="text-[15px] sm:text-base md:text-lg lg:text-xl text-white/90 text-shadow animate-text-reveal delay-3200 leading-relaxed">
              Build real AI products. Push what&apos;s possible.
            </p>
          </div>

          {/* Mobile: Learn More button - left aligned */}
          <div className="md:hidden mt-7 sm:mt-8 animate-element-rise delay-3600">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
        <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-4 px-1 sm:px-0 max-w-2xl md:max-w-none mx-auto md:mx-0 w-full md:w-auto">
          {/* Desktop: Learn More - Left */}
          <div className="hidden md:block animate-element-rise delay-4000 md:ml-4 lg:ml-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
          <div className="flex flex-col items-start md:items-end gap-2.5 sm:gap-3 animate-element-rise delay-4400 w-full md:w-auto">
            <span className="text-white/80 text-sm sm:text-base font-semibold tracking-wide text-shadow">
              February 13–15, 2026
            </span>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Apply
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
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
