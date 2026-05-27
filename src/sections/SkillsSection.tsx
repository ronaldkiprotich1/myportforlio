import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "HTML & CSS", level: 92 },
      { name: "TailwindCSS", level: 88 },
    ],
  },
  {
    label: "Backend & Mobile",
    skills: [
      { name: "Kotlin & Jetpack Compose", level: 85 },
      { name: "Python / Django", level: 80 },
      { name: "Java / Android SDK", level: 78 },
      { name: "Firebase & REST APIs", level: 82 },
    ],
  },
  {
    label: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Android Studio", level: 85 },
      { name: "Google Maps SDK", level: 75 },
      { name: "Agile / Scrum", level: 80 },
    ],
  },
];

const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Kotlin", icon: "🟣" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Firebase", icon: "🔥" },
  { name: "Git", icon: "🌿" },
  { name: "Android", icon: "🤖" },
  { name: "Django", icon: "🟢" },
];

const AnimatedBar = ({ level, color }: { level: number; color: string }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100);
        } else {
          setWidth(0);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      ref={ref}
      className="h-1.5 w-full bg-border/40 rounded-full overflow-hidden"
    >
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: color }}
      />
    </div>
  );
};

const SkillsSection = () => {
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

  const colors = [
    "linear-gradient(90deg,#fb923c,#34d399)",
    "linear-gradient(90deg,#7f77dd,#378add)",
    "linear-gradient(90deg,#1d9e75,#fb923c)",
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
              Skills
            </span>
          </div>
          <h2
            className="font-extrabold leading-tight tracking-tight mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            My <span className="text-orange-400">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Technologies I work with across web, mobile, and backend development.
          </p>
        </div>

        {/* ── Tech icon pills ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {techIcons.map(({ name, icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card text-sm text-foreground hover:border-orange-400/50 hover:bg-orange-400/5 transition-all duration-200 cursor-default"
            >
              <span>{icon}</span>
              <span className="font-medium text-xs">{name}</span>
            </div>
          ))}
        </div>

        {/* ── Skill bars grid ── */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.label}
              data-aos="fade-up"
              data-aos-delay={ci * 100}
              className="bg-card border border-border/40 rounded-2xl p-6 space-y-5"
            >
              <h3
                className="text-sm font-bold text-foreground uppercase tracking-widest"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {cat.label}
              </h3>
              {cat.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <AnimatedBar level={skill.level} color={colors[ci]} />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;