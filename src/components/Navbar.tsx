
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#" className="text-teal font-bold text-2xl">U.</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-3 py-2 text-slate-light hover:text-teal transition-colors duration-300 text-sm font-medium"
            >
              <span className="text-teal">0{i + 1}.</span> {link.name}
            </a>
          ))}
          <Button className="ml-4 bg-transparent text-teal border border-teal hover:bg-teal/10">Resume</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-navy-light z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-4 py-3 text-slate-light hover:text-teal text-lg font-medium"
              onClick={toggleMenu}
            >
              <span className="text-teal block text-sm mb-1">0{i + 1}.</span>
              {link.name}
            </a>
          ))}
          <Button className="mt-6 bg-transparent text-teal border border-teal hover:bg-teal/10">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
