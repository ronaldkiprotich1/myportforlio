import { CheckCircle } from "lucide-react";
import developerWorking from "../assets/images/developerMe.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const capabilities = [
  "Full-stack web development with modern technologies",
  "Responsive design for all devices and screen sizes",
  "API development and third-party integrations",
  "Performance optimization and SEO best practices",
];

const stats = [
  { value: "2+", label: "Years exp." },
  { value: "98%", label: "Project Success" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Image ── */}
          <div data-aos="fade-right" className="relative">
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-emerald-400/15 rounded-3xl blur-2xl" />

            {/* Image frame */}
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-xl">
              <img
                src={developerWorking}
                alt="Ronald working"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-orange-400/20 rounded-xl rotate-12 blur-sm" />
            <div className="absolute -bottom-5 -left-5 w-14 h-14 bg-emerald-400/20 rounded-full blur-sm" />
          </div>

          {/* ── Right: Content ── */}
          <div data-aos="fade-left" className="space-y-8">

            {/* Tag + heading */}
            <div>
              <div className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
                  About me
                </span>
              </div>
              <h2
                className="font-extrabold leading-tight tracking-tight mb-4"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                }}
              >
                I can build anything
                <br />
                <span className="text-orange-400">for your needs</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With over 2 years of experience in web and mobile development, I
                specialize in building scalable, performant, and user-friendly
                applications. I care deeply about clean code, thoughtful design,
                and shipping things that actually work.
              </p>
            </div>

            {/* Capabilities */}
            <div className="space-y-3">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4 border-t border-border/50">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="text-2xl font-extrabold text-orange-400 leading-none mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;