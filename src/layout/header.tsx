import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/modeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-400">RK</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className=" hover:text-orange-400 dark:text-white dark:hover:text-orange-400 transition-colors ease-in-out duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex  md:item-center md:gap-4">
            <ModeToggle />
            <Button
              className="bg-gradient-to-r from-orange-400 to-emerald-400 cursor-pointer hover:bg-gradient-to-l hover:from-emerald-400 hover:to-orange-400 transition-all duration-200 ease-in-out"
              variant="default"
            >
            <a href="https://drive.google.com/uc?export=download&id=1zWy1h5Hw2xnzvQIIpz-7lQYDNXTsXM11">
  Download CV
</a>

            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col">
              <div className="flex ml-auto">
                <ModeToggle />
              </div>
              <Button variant="default" className="w-full mt-4">
                <a href="https://www.dropbox.com/scl/fi/rxe27nfa58v30hrzkf8yk/CV-Update.pdf?rlkey=qu78lz97oelu1xusw79uentbu&dl=0">
                  Download CV
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
