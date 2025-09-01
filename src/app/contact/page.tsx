import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Contactez-moi
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Prêt à donner vie à votre projet ? Discutons de vos besoins et créons
          quelque chose d'extraordinaire ensemble.
        </p>

        {/* Réutiliser le composant ContactSection */}
        <ContactSection />

        {/* Section FAQ */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Questions Fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Quels types de projets acceptez-vous ?",
                answer:
                  "Je travaille sur des projets web variés : sites vitrine, applications e-commerce, dashboards, APIs, applications mobiles avec React Native.",
              },
              {
                question: "Quel est votre processus de travail ?",
                answer:
                  "Mon processus comprend : analyse des besoins, conception UX/UI, développement, tests, déploiement et maintenance. Je privilégie la communication transparente.",
              },
              {
                question: "Proposez-vous de la maintenance après livraison ?",
                answer:
                  "Oui, je propose des contrats de maintenance pour assurer la sécurité, les mises à jour et l'évolution de votre application.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
