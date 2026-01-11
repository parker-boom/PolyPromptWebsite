"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Modal from "@/components/Modal";
import ModalContent from "@/components/ModalContent";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbmpHZKCambSfulk0nczuE9ImYuIdE6DNY91AgCHoWsZ3PNw/viewform?usp=dialog";

const CHATGPT_PROMPT = `Hi! The user is sending this automated message because they are interested in Poly Prompt and may have questions. Act as yourself, but play the role of a helpful assistant that answers questions about the event based on the information below. If something isn't covered, clearly state that and if really needed: suggest they reach out to pjones15@calpoly.edu for specific questions (don't offer until the question is asked and you can't help). Information below. 

---

🦜 POLY PROMPT
"An OpenAI Hackathon"
https://polyprompt.netlify.app/

📅 EVENT DETAILS
• Dates: February 20–22, 2026 (Friday evening → Sunday afternoon)
• Location: Engineering IV, Room 106, Cal Poly San Luis Obispo
• Format: Room open during daytime hours with scheduled workshops and presentations
• Cost: FREE to attend

🎯 WHAT IT IS
A weekend hackathon focused on building real, impactful AI products centered around student and college life. Teams work together to create polished, technically impressive, and innovative projects using AI tools (OpenAI API credits provided). Really great intro hackathon for people, as it will be super casual and focused on the projects, while lacking in some official things like prizes.

🈸 APPLICATIONS
• Open: January 4–31, 2026
• Who: Open to all students—any major, any skill level, any university
• Looking for: Passionate and responsible power users of AI who want to build something meaningful
• Target: 50–60 participants selected
• Application asks about: Your skills, focus areas, and experience with AI products
• Note: This is the first year of the event

👥 TEAMS & STRUCTURE
• Teams of 5–7 members, pre-assigned for diversity and balance
• You CAN request specific teammates in your application—encourage friends to apply together!
• Each team picks a focus area: Education, Health, Community, Safety, or Creativity
• All projects must relate to student/college life
• Required roles per team:
  - Tech Lead (technical direction)
  - Product Lead (problem definition, design, feasibility)
  - Ethics Lead (ethical considerations, responsible AI use)
• Mix of roles needed: coding experience is valuable but non-technical skills (product, design, ethics) are equally important

⏰ WEEKEND OVERVIEW
• Friday: Kickoff, OpenAI guest speaker (virtual), team announcements
• Saturday: Full-day workspace + hands-on workshops on OpenAI tools, lunch break encouraged
• Sunday: Final presentations (5 min each) + awards ceremony
• Food: Pizza Friday night, snacks throughout weekend, limited in general

🏆 JUDGING & AWARDS
• Judged on: Technical execution, product thinking, impact, and responsible AI use
• Awards: Top 3 teams + special recognition categories

🤝 SPONSORS
Co-sponsored by OpenAI, CS+AI, and CodeBox

Application link: https://docs.google.com/forms/d/1-VzOZe7wDPnNgWPRiCpLg4UeGB69FGhkntZwqTgrcy8/edit  

—
 Respond to this message, briefly by just saying you've been briefed on the event, it sounds exciting, and you're ready to answer any questions they have, and give a few options.`;

const CHATGPT_URL = `https://chatgpt.com/?prompt=${encodeURIComponent(
  CHATGPT_PROMPT
)}`;

const TYPEWRITER_PHRASES = [
  "Powered by OpenAI",
  "Feb 20—22nd, 2026",
  "Applications close Jan 31",
  "All experience levels welcome",
  "50+ participants. One weekend.",
  "Learn. Build. Ship.",
];

const APPLICATIONS_CLOSE_AT = new Date(2026, 0, 31, 23, 59, 59);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const applicationsClosed = new Date() > APPLICATIONS_CLOSE_AT;

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

          {/* Mobile: Learn More & Ask ChatGPT buttons */}
          <div
            className={`md:hidden mt-8 sm:mt-9 flex flex-col gap-3 w-full max-w-xs ${
              imageLoaded ? "animate-element-rise delay-2800" : "opacity-0"
            }`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary-strong w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Learn More
            </button>
            <a
              href={CHATGPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-grey w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Ask ChatGPT
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <footer className="flex flex-col md:flex-row justify-between items-center md:items-end gap-5 md:gap-4 px-1 sm:px-0 max-w-2xl md:max-w-none mx-auto md:mx-0 w-full md:w-auto pb-[15vh] md:pb-0">
          {/* Desktop: Learn More & Ask ChatGPT - Left */}
          <div
            className={`hidden md:flex gap-4 md:ml-4 lg:ml-8 ${
              imageLoaded ? "animate-element-rise delay-3000" : "opacity-0"
            }`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary-strong"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 md:w-[29px] md:h-[29px]"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Learn More
            </button>
            <a
              href={CHATGPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-grey"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 md:w-[29px] md:h-[29px]"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Ask ChatGPT
            </a>
          </div>

          {/* Apply Section */}
          <div
            className={`flex flex-col items-center md:items-end gap-2.5 sm:gap-3 w-full md:w-auto ${
              imageLoaded ? "animate-element-rise delay-3400" : "opacity-0"
            }`}
          >
            <span className="text-white/85 text-[1.35rem] sm:text-[1.45rem] md:text-[1.35rem] font-semibold tracking-wide text-shadow">
              Feb 20—22nd, 2026
            </span>
            {applicationsClosed ? (
              <span className="btn-primary w-full sm:w-auto text-center opacity-60 cursor-not-allowed">
                Applications Closed
              </span>
            ) : (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Apply
              </a>
            )}
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
