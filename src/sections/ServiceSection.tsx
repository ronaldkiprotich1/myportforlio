import { Code, Monitor, Smartphone, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    id: "1",
    title: "Website Development",
    description:
      "Responsive, fast, and modern websites built with the latest technologies and best practices.",
    icon: Code,
  },
  {
    id: "2",
    title: "Fullstack Development",
    description:
      "End-to-end systems with React frontends and robust backends — from database to UI.",
    icon: Monitor,
  },
  {
    id: "3",
    title: "Mobile Development",
    description:
      "Native Android apps and cross-platform mobile solutions built for real-world use.",
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Web Applications",
    description:
      "Scalable web apps with modern architecture, REST APIs, and clean, maintainable code.",
    icon: Globe,
  },
];

const ServicesSection = () => {
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
    <section id="services" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
              Services
            </span>
          </div>
          <h2
            className="font-extrabold leading-tight tracking-tight mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            What I can{" "}
            <span className="text-orange-400">do for you</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            A comprehensive range of development services to bring your digital
            vision to life.
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl border border-border/50 bg-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-emerald-400/0 group-hover:from-orange-400/8 group-hover:to-emerald-400/8 transition-all duration-300 rounded-2xl" />

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center mb-5 group-hover:bg-orange-400/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                {/* Text */}
                <h3
                  className="relative text-base font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;