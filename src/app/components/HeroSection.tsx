"use client";

import { useState, useEffect } from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="accueil"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black ${
        className ?? ""
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse delay-75"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10 space-y-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Yann Ngateu
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Développeur{" "}
          <span className="text-primary font-semibold">Fullstack</span>{" "}
          passionné par la création d'expériences numériques exceptionnelles
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {["React", "Node.js", "TypeScript", "MySQL", "AZURE", "Java"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-primary border border-primary/30 backdrop-blur-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
        <div className="flex justify-center space-x-6 pt-8">
          <a
            href="#projets"
            className="bg-gradient-to-r from-primary to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border border-primary px-8 py-3 rounded-full text-primary hover:bg-primary hover:text-gray-900 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
