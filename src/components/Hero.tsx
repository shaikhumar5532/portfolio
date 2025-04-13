
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="animate-fade-in-up">
        <p className="text-teal font-mono mb-5">Hi, my name is</p>
        <h1 className="text-4xl md:text-7xl font-bold text-slate-light mb-4">Shaikh Umar.</h1>
        <h2 className="text-3xl md:text-6xl font-bold text-slate mb-6">I build things for the web.</h2>
        <p className="text-slate max-w-xl mb-12 text-lg">
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        
        <div className="flex space-x-4">
          <Button asChild className="bg-transparent text-teal border border-teal hover:bg-teal/10 px-6 py-4 rounded">
            <a href="#projects">Check out my work</a>
          </Button>
          <Button asChild className="bg-teal text-navy hover:bg-teal/90 px-6 py-4 rounded">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-teal" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
