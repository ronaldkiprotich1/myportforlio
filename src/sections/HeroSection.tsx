import { ArrowRight, Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useScrambleText } from "@/hooks/useScrambleText";

const HeroSection = () => {
  const [startScramble, setStartScramble] = useState(false);

  // Trigger scramble shortly after mount so AOS has settled
  useEffect(() => {
    const t = setTimeout(() => setStartScramble(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Two lines of the heading scramble independently with staggered delays
  const line1 = useScrambleText(startScramble ? "Ronald" : "", 0);
  const line2 = useScrambleText(startScramble ? "Kiprotich." : "", 400);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background pt-20 overflow-hidden"
    >
      {/* ── Subtle grid background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,146,60,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div className="pointer-events-none absolute -top-20 -right-16 w-80 h-80 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">

          {/* ── "Available" pill ── */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
              Available for work
            </span>
          </div>

          {/* ── Scramble heading ── */}
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-3 min-h-[1.05em]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
            }}
          >
            {/* Line 1 — scrambles first */}
            <span className="block text-foreground font-mono">
              {line1 || "\u00A0"}
            </span>
            {/* Line 2 — scrambles with delay, lands in orange */}
            <span
              className="block font-mono"
              style={{ color: "#fb923c" }}
            >
              {line2 || "\u00A0"}
            </span>
          </h1>

          {/* ── Role line ── */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-3 text-muted-foreground text-lg tracking-widest mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="inline-block w-8 h-0.5 bg-gradient-to-r from-orange-400 to-emerald-400 shrink-0" />
            Fullstack Developer
          </p>

          {/* ── Bio ── */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-muted-foreground text-[15px] leading-relaxed font-light max-w-lg mb-8"
          >
            Passionate about creating beautiful, functional, and user-centered
            digital experiences — from pixel-perfect frontends to robust backends.
          </p>

          {/* ── Buttons ── */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-3"
          >
            <a
              href="/RK.CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #fb923c, #34d399)",
                letterSpacing: "0.4px",
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border border-border text-foreground transition-all duration-200 hover:border-orange-400 hover:bg-orange-400/5 hover:-translate-y-0.5"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.4px" }}
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Stats row ── */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex gap-8 mt-10 pt-8 border-t border-border/50"
          >
            {[
              { num: "4+", label: "Projects" },
              { num: "2+", label: "Years exp." },
              { num: "100%", label: "Dedication" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  className="text-foreground leading-none mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                  }}
                >
                  <span className="text-orange-400">{num}</span>
                </div>
                <div className="text-muted-foreground text-[11px] uppercase tracking-[1.5px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <div
          className="w-px h-8 bg-gradient-to-b from-transparent to-orange-400"
          style={{ animation: "scrollLine 1.8s ease-in-out infinite" }}
        />
        <style>{`
          @keyframes scrollLine {
            0%   { transform: scaleY(0); transform-origin: top }
            50%  { transform: scaleY(1); transform-origin: top }
            51%  { transform: scaleY(1); transform-origin: bottom }
            100% { transform: scaleY(0); transform-origin: bottom }
          }
          @keyframes glitchFlash {
            0%, 100% { opacity: 1 }
            50% { opacity: 0.7 }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;