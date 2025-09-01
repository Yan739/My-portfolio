import { Menu, X, Mail, ExternalLink, Code, Database, Globe, Smartphone, Star, MapPin, Phone, Send, Github } from 'lucide-react';

const ProjectCard = ({ project, index, hoveredProject, onHover, onLeave }: { 
  project: Project; 
  index: number;
  hoveredProject: number | null;
  onHover: (id: number) => void;
  onLeave: () => void;
}) => (
  <div
    className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300"
    onMouseEnter={() => onHover(project.id)}
    onMouseLeave={onLeave}
    style={{
      animationName: 'fadeInUp',
      animationDuration: '0.6s',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
      animationDelay: `${index * 0.1}s`
    }}
  >
    <div className="relative overflow-hidden h-48">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
        hoveredProject === project.id ? 'opacity-80' : 'opacity-0'
      }`}>
        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
          <a href={project.liveUrl} className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors">
            <ExternalLink size={18} />
          </a>
          <a href={project.githubUrl} className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);
export default ProjectCard;