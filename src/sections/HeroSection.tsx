import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import myProfile from "../assets/images/ronald-kiprotich.jpg";
import { Typewriter } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
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
      className="min-h-screen flex items-center bg-background pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Heading */}
              <h1
                data-aos="fade-right"
                className="text-4xl md:text-6xl font-bold text-orange-400 leading-tight"
              >
                <Typewriter
                  words={["Hello, I'm Ronald Kiprotich", "A Fullstack Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>

              {/* Paragraph */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg text-muted-foreground max-w-lg"
              >
                Passionate about creating beautiful, functional, and
                user-centered digital experiences. With expertise in modern web
                technologies.
              </p>
            </div>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-linear-to-r from-orange-400 to-emerald-400 cursor-pointer"
              >
                <a href="/RK.CV.pdf" download>
                  Download CV
                </a>
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <a href="#portfolio">View Work</a>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="relative" data-aos="fade-left" data-aos-delay="600">
            <div
              className="
                relative 
                rounded-3xl 
                duration-300
                p-0 md:p-8
                lg:bg-linear-to-br lg:from-orange-400 lg:to-emerald-400 
                lg:transform lg:rotate-90 lg:hover:rotate-85
              "
            >
              <div
                className="
                  bg-background rounded-2xl p-4 lg:p-8 
                  flex items-center justify-center  
                  lg:h-80 
                  lg:transform lg:-rotate-90
                "
              >
                <span>
                  <img
                    src={myProfile}
                    alt="ronald-kiprotich"
                    className="h-175 lg:h-125 object-contain w-fit"
                  />
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-20 h-20 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32 bg-black/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;