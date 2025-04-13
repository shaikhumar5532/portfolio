import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  links,
  featured = false
}: { 
  title: string; 
  description: string; 
  tags: string[];
  links: { github?: string; live?: string; };
  featured?: boolean;
}) => {
  if (featured) {
    return (
      <div className="grid md:grid-cols-12 gap-4 md:gap-10 mb-24 group">
        <div className="md:col-span-7 md:order-2 rounded-lg overflow-hidden relative bg-slate-dark/20">
          <div className="absolute inset-0 bg-teal/10"></div>
          <div className="w-full h-full aspect-video bg-navy-light flex items-center justify-center text-slate-dark">
            <span className="text-sm">Project Screenshot</span>
          </div>
        </div>
        
        <div className="md:col-span-5 md:order-1 flex flex-col justify-center z-10">
          <p className="text-teal font-mono mb-2 text-sm">Featured Project</p>
          <h3 className="text-2xl font-semibold text-slate-light mb-4">
            <a 
              href={links.live || links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors duration-300"
            >
              {title}
            </a>
          </h3>
          
          <div className="bg-navy-light p-6 rounded-lg shadow-xl mb-5">
            <p className="text-slate leading-relaxed">{description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-transparent border-slate-dark text-slate-light text-xs py-1">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-4">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {links.live && (
              <a 
                href={links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transition-colors duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Card className="bg-navy-light border-slate-dark h-full group hover:translate-y-[-5px] transition-transform duration-300">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="text-teal">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          
          <div className="flex gap-3">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {links.live && (
              <a 
                href={links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transition-colors duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-light mb-2 group-hover:text-teal transition-colors duration-300">
          <a href={links.live || links.github} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        
        <p className="text-slate mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-transparent border-slate-dark text-slate-light text-xs py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment processing. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      featured: true,
    },
    {
      title: "Task Management Dashboard",
      description: "A comprehensive task management system with real-time updates, team collaboration features, and detailed analytics. Implemented with React and Firebase.",
      tags: ["React", "Firebase", "Redux", "Tailwind CSS"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      featured: true,
    },
  ];
  
  const otherProjects = [
    {
      title: "Weather Application",
      description: "A weather application that provides real-time forecasts based on user location or search queries.",
      tags: ["JavaScript", "Weather API", "CSS Grid"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website designed to showcase skills and projects in a clean and modern layout.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "Recipe Finder",
      description: "An app that allows users to search for recipes based on ingredients they have available.",
      tags: ["React", "API Integration", "Styled Components"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Budget Tracker",
      description: "A financial tracking application that helps users manage their income and expenses with visual reports.",
      tags: ["JavaScript", "Chart.js", "LocalStorage"],
      links: {
        github: "https://github.com",
      },
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      
      <div className="space-y-12">
        {/* Featured Projects */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
              featured={true}
            />
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 flex items-center justify-center space-x-2">
            <span>Other Noteworthy Projects</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-teal inline-flex items-center hover:underline">
              <span className="text-sm">view archive</span>
              <ArrowUpRight size={16} className="ml-1" />
            </a>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
