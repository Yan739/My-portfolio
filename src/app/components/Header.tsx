"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Star,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nyc.dev
          </div>

          <div className="hidden md:flex space-x-8">
            {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .replace("à propos", "about")
                  .replace(" ", "")}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .replace("à propos", "about")
                  .replace(" ", "")}`}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
