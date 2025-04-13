
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-6 border-t border-slate-dark">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Shaikh Umar. All Rights Reserved.
        </p>
        
        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            className="bg-navy-light p-2 rounded-full text-slate-light hover:text-teal transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
          
          <p className="text-slate text-xs ml-4">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
