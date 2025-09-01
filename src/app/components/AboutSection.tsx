import skills from "../data/skills";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section id="about" className={`py-20 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Développeur fullstack en fin de bachelier, je suis passionné par
              la création d'applications web et mobiles performantes et
              intuitives.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon expertise couvre l'ensemble du stack technologique moderne, du
              frontend interactif aux architectures backend robustes, en passant
              par les bases de données et le déploiement cloud.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400">19+</div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Compétences techniques
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 flex items-center gap-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${
                      skill.category === "frontend"
                        ? "from-cyan-400 to-blue-500"
                        : skill.category === "backend"
                        ? "from-green-400 to-emerald-500"
                        : skill.category === "database"
                        ? "from-purple-400 to-pink-500"
                        : "from-orange-400 to-red-500"
                    } transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
