import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "kironlang@gmail.com",
    href: "mailto:kironlang@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+254 729 971 518",
    href: "tel:+254729971518",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ronaldkiprotich1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ronald-kiprotich-ba9617290",
  },
];

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
              Contact
            </span>
          </div>
          <h2
            className="font-extrabold leading-tight tracking-tight mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Have a project{" "}
            <span className="text-orange-400">in mind?</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Let's talk about it. I'm always open to new ideas, collaborations,
            and opportunities.
          </p>
        </div>

        {/* ── Centered contact info ── */}
        <div data-aos="fade-up" className="max-w-lg mx-auto space-y-8">

          {/* Availability badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 rounded-lg px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                Available for freelance &amp; full-time roles
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed text-center">
            I'm Ronald — a fullstack developer based in Nairobi. Whether you need
            a web app, a mobile app, or just want to bounce an idea off someone,
            my inbox is always open.
          </p>

          {/* Contact details */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0 group-hover:bg-orange-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      {info.title}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-orange-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-border/50" />

          {/* Social links */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Find me online
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-orange-400/50 hover:text-orange-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;