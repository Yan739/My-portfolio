import { useState } from "react";
import ProjectsSection from "src/components/ProjectSection";
import projects from "src/data/projects";


const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-800">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Mes Projets
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets les plus significatifs, allant
          des applications web aux API backend.
        </p>

        {/* Barre de recherche */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Rechercher un projet ou une technologie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Filtres et grille - même logique que ProjectsSection */}
        <ProjectsSection />
      </div>
    </div>
  );
};
