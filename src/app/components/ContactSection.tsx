import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section id="contact" className={`py-20 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Contactez-moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Restons en contact
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Vous avez un projet en tête ? Une question technique ? N'hésitez
                pas à me contacter. Je serais ravi de discuter de vos besoins et
                de voir comment je peux vous aider.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-cyan-500/20 rounded-full">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-semibold">
                    ngateuyann8@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-green-500/20 rounded-full">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Téléphone</div>
                  <div className="text-white font-semibold">
                    +32 465 70 58 78
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Localisation</div>
                  <div className="text-white font-semibold">
                    Quaregnon, Belgique
                  </div>
                </div>
              </div>
            </div>

            {/* Liens sociaux */}
            <div className="flex space-x-4 pt-6">
              <a
                href="http://www.github.com/Yan739"
                className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all duration-300 group"
              >
                <Github
                  className="text-gray-400 group-hover:text-white"
                  size={24}
                />
              </a>
              <a
                href="http://www.linkedin.com/in/yann-ngateu"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 group"
              >
                <Linkedin
                  className="text-gray-400 group-hover:text-white"
                  size={24}
                />
              </a>
              <a
                href="mailto:ngateuyann8@gmail.com?subject=Contact%20Portfolio&body=Bonjour%20Yann,"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all duration-300 group"
              >
                <Mail
                  className="text-gray-400 group-hover:text-white"
                  size={24}
                />
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
