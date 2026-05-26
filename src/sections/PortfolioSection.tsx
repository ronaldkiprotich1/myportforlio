import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Download, Smartphone } from "lucide-react";
import meruyouth from "../assets/images/meruyouth.png";
import merucounty from "../assets/images/merucounty.png";
import martians from "../assets/images/martians.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Project = {
  id: string;
  title: string;
  description: string;
  image: string | null;
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  isApp?: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: "1",
    title: "Martians Consulting",
    description: "Professional consulting services platform",
    image: martians,
    liveUrl: "https://martiansconsulting.com/",
  },
  {
    id: "2",
    title: "Meru Youth",
    description: "Collaborative task management application",
    image: meruyouth,
    liveUrl: "https://meruyouthservice.go.ke/",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Meru County Project Management",
    description: "Modern project management system",
    image: merucounty,
    githubUrl:
      "https://github.com/ronaldkiprotich1/MERU-COUNTY-PROJECT-MANAGEMENT-SYSTEM.git",
  },
  {
    id: "4",
    title: "Matatu Monitor",
    description:
      "An Android app for tracking and monitoring matatu routes in real time. Download the APK and install it directly on your device.",
    image: "/Matmon.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/1nfM9ByQaQuF5m5BMTjz1_exVAnmL0YVq/view?usp=sharing",
    isApp: true,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const PortfolioSection = () => {
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
    <section id="portfolio" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            data-aos="flip-up"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Recent <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>

        {/* Project grid */}
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  /* Fallback banner when no image is set */
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-900 via-indigo-700 to-primary flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-sm">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/60 text-xs tracking-widest uppercase">
                      Mobile App
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="secondary" className="cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="cursor-pointer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.downloadUrl && (
                    <a href={project.downloadUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="secondary" className="cursor-pointer">
                        <Download className="w-4 h-4 mr-2" />
                        Download APK
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.isApp && (
                    <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      APK
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground">{project.description}</p>

                {/* Always-visible download link for app cards */}
                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Download APK
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;