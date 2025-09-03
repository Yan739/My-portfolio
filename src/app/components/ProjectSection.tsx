"use client";
import { Globe, Code, Database, Star, Smartphone } from "lucide-react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const categories = [
    { key: "all", label: "Tous", icon: Globe },
    { key: "frontend", label: "Frontend", icon: Code },
    { key: "backend", label: "Backend", icon: Database },
    { key: "fullstack", label: "Fullstack", icon: Star },
    { key: "mobile", label: "Mobile", icon: Smartphone },
  ];

  return (
    <section id="projets" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Mes Projets
        </h2>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === key
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        /*<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              onHover={setHoveredProject}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
