import { useState } from "react";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type FAQ = {
  icon: string;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    icon: "🔄",
    question: "Can you redesign an existing brand?",
    answer:
      "Absolutely. I handle full brand refreshes — logo, color palette, typography, and brand guidelines — making sure the new identity feels consistent across every touchpoint.",
  },
  {
    icon: "🗺️",
    question: "How do you approach a new project?",
    answer:
      "I start with a discovery call to understand your goals and audience, then move through wireframes, design mockups, and iterative development with your feedback at every stage.",
  },
  {
    icon: "💰",
    question: "How much does a web project cost?",
    answer:
      "Pricing depends on scope, features, and timeline. A simple landing page starts around KES 15,000, while full-stack web apps are quoted after a brief. I always provide a detailed breakdown upfront.",
  },
  {
    icon: "⏱️",
    question: "What is your typical turnaround time?",
    answer:
      "Simple sites: 1–2 weeks. Complex web apps: 4–8 weeks. Mobile apps: 6–10 weeks. I share a clear timeline before we start and keep you updated throughout.",
  },
  {
    icon: "📱",
    question: "Do you build mobile apps?",
    answer:
      "Yes — I build Android apps (see Matatu Monitor in my portfolio). I work with React Native and native Android depending on the project's needs.",
  },
  {
    icon: "🛠️",
    question: "Do you offer post-launch support?",
    answer:
      "Yes. I offer a 30-day bug-fix window after every launch, plus optional ongoing maintenance packages for updates, performance monitoring, and new features.",
  },
  {
    icon: "🔐",
    question: "Will I own the source code?",
    answer:
      "Always. Full source code and all project assets are handed over to you upon final payment. No vendor lock-in, ever.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggle = (index: number) =>
    setOpenFaq(openFaq === index ? null : index);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="mb-10">
          <div className="inline-flex items-center gap-2 border border-orange-400/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-400 text-xs tracking-[2px] uppercase font-light">
              FAQ
            </span>
          </div>
          <h2
            className="font-extrabold leading-tight tracking-tight mb-2"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            }}
          >
            Got <span className="text-orange-400">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* ── FAQ Items ── */}
        <div data-aos="fade-up" data-aos-delay="100" className="space-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              {/* Question row */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
              >
                {/* Icon box */}
                <div className="w-8 h-8 rounded-lg bg-orange-400/10 flex items-center justify-center shrink-0 text-base">
                  {faq.icon}
                </div>

                {/* Question text */}
                <span className="flex-1 text-sm font-medium text-foreground">
                  {faq.question}
                </span>

                {/* Animated chevron */}
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer — smooth CSS height transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed px-5 pb-5 pl-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-6 flex items-center gap-4 p-5 rounded-xl border border-orange-400/25 bg-orange-400/5"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-400/15 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-0.5">
              Still have questions?
            </p>
            <p className="text-xs text-muted-foreground">
              Drop me a message — I reply within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:underline shrink-0"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Contact me
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;