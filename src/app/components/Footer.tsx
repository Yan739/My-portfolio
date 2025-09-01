const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
            Nyc.dev
          </div>
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2025 Yann NGATEU. Tous droits réservés.</p>
            <p className="text-sm mt-1">Développé avec ❤️ en Next.js & TypeScript</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
