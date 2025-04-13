
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-4">
          <p>
            Hello! I'm Shaikh Umar, a passionate developer who enjoys creating things that live on the internet. 
            My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          
          <p>
            Fast-forward to today, and I've had the privilege of working at 
            <a href="#" className="text-teal mx-1 hover:underline">a digital agency</a>,
            <a href="#" className="text-teal mx-1 hover:underline">a start-up</a>, and
            <a href="#" className="text-teal mx-1 hover:underline">a large corporation</a>. 
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          
          <p>
            I also recently launched a course that covers everything you need to build a web app with the MERN stack.
          </p>
          
          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Express', 'MongoDB'].map(tech => (
              <li key={tech} className="flex items-center before:content-['▹'] before:text-teal before:mr-2 text-sm">
                {tech}
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button asChild className="bg-transparent text-teal border border-teal hover:bg-teal/10">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-teal/30 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative">
            <div className="bg-navy-light border border-teal/20 rounded-lg p-1">
              <div className="relative w-full rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 bg-teal/10 rounded-lg"></div>
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-navy-light flex items-center justify-center text-teal">
                  <span className="text-sm">Your Photo Here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
