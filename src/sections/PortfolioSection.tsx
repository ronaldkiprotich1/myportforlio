import { useAppSelector } from "@/hooks/redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import meruyouth from "../assets/images/meruyouth.png";
import merucounty from "../assets/images/merucounty.png";
import martians from "../assets/images/martians.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PortfolioSection = () => {
  const projects = useAppSelector((state) => state.portfolio.projects);
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });

    // Refresh AOS on scroll and resize to re-trigger animations
    const handleScroll = () => AOS.refresh();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Default projects for demo
  const defaultProjects = [
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
      liveUrl: "",
      githubUrl: "https://github.com/ronaldkiprotich1/MERU-COUNTY-PROJECT-MANAGEMENT-SYSTEM.git",
    },
  ];

  const displayProjects = projects.length > 2 ? projects : defaultProjects;

  return (
    <section id="portfolio" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">
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

        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl}>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;