import { CheckCircle } from "lucide-react";
import developerWorking from "../assets/images/developerMe.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });
  }, []);
  
  const capabilities = [
    "Full-stack web development with modern technologies",
    "Responsive design for all devices and screen sizes",
    "API development and third-party integrations",
    "Performance optimization and SEO best practices",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="relative">
            <div className="bg-linear-to-br from-orange-400/20 to-emerald-400/20 rounded-3xl p-8">
              <img
                src={developerWorking}
                alt="Developer working"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            {/* Decorative geometric shapes */}
            <div className="absolute -top-6 right-0 w-18 lg:-right-6 lg:w-24 lg:h-24 h-18 bg-primary/30 rounded-lg transform rotate-45"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/40 rounded-full"></div>
          </div>

          <div data-aos="fade-down" className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                I Can Develop Anything
                <br />
                <span className="text-primary">For Your Needs</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in creating scalable, performant, and user-friendly
                applications. I'm passionate about clean code, modern design,
                and delivering exceptional user experiences.
              </p>
            </div>

            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Project Success
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;