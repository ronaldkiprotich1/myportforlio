import { useEffect } from "react";
import { GraduationCap, Code, Smartphone, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const timeline = [
  {
    year: "2022",
    type: "education",
    icon: GraduationCap,
    title: "BSc Computer Science",
    org: "Meru University of Science and Technology",
    desc: "Enrolled in Bachelor of Science in Computer Science, building foundations in algorithms, data structures, software engineering, and systems design.",
    tags: ["Computer Science", "Algorithms", "Software Engineering"],
  },
  {
    year: "2024",
    type: "cert",
    icon: Award,
    title: "Android Development with Kotlin",
    org: "Udemy Certification",
    desc: "Completed professional Android development training covering Kotlin, Jetpack Compose, Firebase integration, and modern Android architecture patterns.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    year: "2025",
    type: "work",
    icon: Code,
    title: "Software Engineering Program",
    org: "Teach2Give",
    desc: "Completed an intensive software engineering program focused on full-stack development, Agile practices, and real-world project delivery.",
    tags: ["Full-Stack", "Agile", "React", "Django"],
  },
  {
    year: "2025",
    type: "work",
    icon: Code,
    title: "Fullstack Web Developer",
    org: "Freelance",
    desc: "Building full-stack web applications using React and Django. Delivered projects including Martians Consulting, Meru Youth platform, and Meru County Project Management System.",
    tags: ["React", "Django", "REST APIs", "TypeScript"],
  },
  {
    year: "2025",
    type: "project",
    icon: Smartphone,
    title: "Matatu Monitor System",
    org: "Final Year Research Project",
    desc: "Developed a Kotlin Android app tested by 50+ users for real-time matatu transport monitoring. Integrated Firebase and Google Maps SDK with crowd-verification and reputation scoring.",
    tags: ["Kotlin", "Firebase", "Google Maps SDK", "Android"],
  },
  {
    year: "2026",
    type: "education",
    icon: GraduationCap,
    title: "BSc Computer Science — Graduation",
    org: "Meru University of Science and Technology",
    desc: "Expected graduation after completing final year research project and coursework. Specialization in mobile and web application development.",
    tags: ["Graduation", "Computer Science"],
  },
];

const typeConfig: Record<string, { color: string; dot: string }> = {
  education: { color: "border-orange-400/30 bg-orange-400/5", dot: "bg-orange-400" },
  work:       { color: "border-emerald-400/30 bg-emerald-400/5", dot: "bg-emerald-400" },
  cert:       { color: "border-indigo-400/30 bg-indigo-400/5", dot: "bg-indigo-400" },
  project:    { color: "border-sky-400/30 bg-sky-400/5", dot: "bg-sky-400" },
};

const TimelineSection = () => {
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
    <section id="timeline" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
              Journey
            </span>
          </div>
          <h2
            className="font-extrabold leading-tight tracking-tight mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Experience &{" "}
            <span className="text-orange-400">Education</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            My journey from student to fullstack developer — every milestone that shaped who I am.
          </p>
        </div>

        {/* ── Legend ── */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { label: "Education", dot: "bg-orange-400" },
            { label: "Work", dot: "bg-emerald-400" },
            { label: "Certification", dot: "bg-indigo-400" },
            { label: "Project", dot: "bg-sky-400" },
          ].map(({ label, dot }) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${dot}`} />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="relative max-w-3xl mx-auto">

          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-orange-400/40 via-border/30 to-emerald-400/40 hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const cfg = typeConfig[item.type];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={i * 60}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card — takes up ~45% */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <div
                      className={`border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cfg.color}`}
                    >
                      {/* Year badge */}
                      <span className="inline-block text-xs font-mono font-bold text-muted-foreground bg-background/60 border border-border/50 rounded-md px-2 py-0.5 mb-3">
                        {item.year}
                      </span>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-background/60 border border-border/50 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-orange-400" />
                        </div>
                        <div>
                          <h3
                            className="text-sm font-bold text-foreground leading-tight"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {item.org}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-background/60 border border-border/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-background items-center justify-center z-10">
                    <div className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;