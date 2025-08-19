import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactSection = () => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      value: "+254 729971518",
      href: "tel:+254729971518",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Have Any Project In
            <br />
            <span className="text-primary">Your Mind?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your ideas
            to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Talk
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to work on new projects and collaborate with
                amazing people. Feel free to reach out if you have any questions
                or want to discuss a potential project.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;

                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.title}
                      </div>
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card data-aos="fade-down" className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-emerald-400 w-full group "
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
