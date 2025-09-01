const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          À propos de moi
        </h1>
        
        {/* Section biographie détaillée */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-cyan-400">Mon Parcours</h2>
              <p className="text-gray-300 leading-relaxed">
                Passionné par le développement web depuis plus de 5 ans, j'ai commencé mon voyage dans le monde de la programmation en autodidacte avant de me spécialiser dans les technologies modernes du web.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mon expertise s'étend du développement frontend avec React et Next.js au backend avec Node.js et les bases de données relationnelles et NoSQL. J'ai une approche pragmatique du développement, privilégiant les solutions robustes et scalables.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-2">Localisation</h3>
                <p className="text-gray-300">Paris, France</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-2">Expérience</h3>
                <p className="text-gray-300">5+ années</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-2">Spécialité</h3>
                <p className="text-gray-300">Développement Fullstack</p>
              </div>
            </div>
          </div>

          {/* Timeline d'expérience */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-cyan-400">Expérience Professionnelle</h2>
            <div className="space-y-6">
              {[
                {
                  period: "2022 - Présent",
                  position: "Développeur Fullstack Senior",
                  company: "TechCorp Solutions",
                  description: "Développement d'applications web complexes, mentoring d'équipe, architecture microservices."
                },
                {
                  period: "2020 - 2022",
                  position: "Développeur Frontend",
                  company: "Digital Agency",
                  description: "Création d'interfaces utilisateur modernes, optimisation des performances, intégration API."
                },
                {
                  period: "2019 - 2020",
                  position: "Développeur Junior",
                  company: "StartupLab",
                  description: "Apprentissage des technologies web modernes, participation à des projets innovants."
                }
              ].map((job, index) => (
                <div key={index} className="border-l-2 border-cyan-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{job.position}</h3>
                      <span className="text-cyan-400 font-semibold">{job.period}</span>
                    </div>
                    <p className="text-purple-400 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
