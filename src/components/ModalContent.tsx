"use client";

export default function ModalContent() {
  return (
    <div className="text-white">
      {/* Header */}
      <div className="mb-8">
        <h2 id="modal-title" className="text-3xl md:text-4xl font-bold mb-2">
          Poly Prompt
        </h2>
        <p className="text-lg text-white/70">An OpenAI Hackathon at Cal Poly</p>
      </div>

      {/* Status Banner */}
      <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
        <p className="text-white/90 text-center font-medium">
          Applications are closed. Teams announced soon.
        </p>
      </div>

      {/* About */}
      <Section title="What to Expect">
        <p className="text-white/80 leading-relaxed">
          Teams spend the weekend building AI-powered products focused around
          student life. There&apos;s an OpenAI guest speaker, hands-on
          workshops, and a lot of time to actually build. It&apos;s structured
          but flexible — mostly you&apos;ll be heads down with your team working
          on your project.
        </p>
      </Section>

      {/* When & Where */}
      <Section title="When & Where">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            label="Date"
            value="Feb 20—22nd, 2026"
            subtext="Friday evening → Sunday afternoon"
          />
          <InfoCard
            label="Location"
            value="Engineering IV, 106"
            subtext="Cal Poly, San Luis Obispo"
          />
        </div>
      </Section>

      {/* Teams */}
      <Section title="How It Works">
        <ul className="space-y-3 text-white/80">
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>
              <strong className="text-white">50+ participants</strong>{" "}
              selected from applicants
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>
              Teams of 5–7, assigned for diversity and skill balance
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>
              Focus areas:{" "}
              <span className="text-white/90">
                Education, Health, Community, Safety, or Creativity
              </span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>
              Team roles:{" "}
              <span className="text-white/90">
                Tech Lead, Product Lead, Ethics Lead
              </span>
            </span>
          </li>
        </ul>
      </Section>

      {/* Logistics */}
      <Section title="Good to Know">
        <ul className="space-y-3 text-white/80">
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>
              Limited food provided (pizza Friday night, snacks throughout)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>OpenAI API credits for every participant</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400/70 mt-0.5">→</span>
            <span>
              Awards for the top 3 teams, plus special recognition categories
            </span>
          </li>
        </ul>
      </Section>

      {/* Closing */}
      <Section title="What&apos;s Next">
        <p className="text-white/80 leading-relaxed">
          Accepted participants will be notified soon with team assignments and event details. Get ready to build something meaningful.
        </p>
      </Section>
    </div>
  );
}

// Helper Components
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-white/90 tracking-wide">
        {title}
      </h3>
      {children}
    </section>
  );
}

function InfoCard({
  label,
  value,
  subtext,
}: {
  label: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="text-sm text-white/60 mt-0.5">{subtext}</p>
    </div>
  );
}
