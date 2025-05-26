
const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/cb4ef533-dab9-43cc-a7de-dc5a991a9015.png" 
              alt="Architechs Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">Architechs</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-navy-300 text-sm">
              © 2024 Architechs. Building the future, one system at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
