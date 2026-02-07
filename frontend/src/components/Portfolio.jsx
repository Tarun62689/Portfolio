import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2, Database, Briefcase, Mail, Linkedin, Github, ChevronUp } from 'lucide-react';
import { projects, skills, experiences, contact } from '../data/mock';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FAFAF9]/95 backdrop-blur-sm z-50 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight">TARUN A S</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">HOME</button>
            <button onClick={() => scrollToSection('about')} className="text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">ABOUT</button>
            <button onClick={() => scrollToSection('projects')} className="text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">PROJECTS</button>
            <button onClick={() => scrollToSection('skills')} className="text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">SKILLS</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">CONTACT</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#1A1A1A]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FAFAF9] border-t border-[#E5E5E5] px-6 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">HOME</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">ABOUT</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">PROJECTS</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">SKILLS</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#2D2D2D] hover:text-[#1A1A1A] transition-colors text-sm font-medium tracking-wide">CONTACT</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-[#A3A3A3] text-sm tracking-[0.2em] uppercase mb-4 font-sans">Web Developer & Data Science Student</p>
                <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1A1A1A] leading-[0.95] mb-6">
                  HEY, I'M<br />TARUN A S
                </h1>
                <p className="text-[#2D2D2D] text-lg lg:text-xl leading-relaxed font-sans max-w-xl">
                  Final-year BE Data Science student, Web Developer & UI-focused problem solver
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAFAF9] px-8 py-4 hover:bg-[#2D2D2D] transition-colors font-sans text-sm tracking-wide"
              >
                VIEW MY WORK
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-square bg-[#E5E5E5]">
                <img 
                  src="https://customer-assets.emergentagent.com/job_tarun-design/artifacts/62scao4b_protrait.jpg" 
                  alt="Tarun A S" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#E5E5E5] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8">About</h2>
            <p className="text-[#2D2D2D] text-lg lg:text-xl leading-relaxed font-sans">
              As a Data Science undergraduate and web developer, I build real-world, user-focused applications using modern web technologies and data-driven approaches.
            </p>
            <p className="text-[#2D2D2D] text-lg lg:text-xl leading-relaxed font-sans">
              I enjoy transforming ideas into functional, scalable products and have experience working on full-stack projects, analytics dashboards, and UI/UX-driven applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">Featured Projects</h2>
            <p className="text-[#A3A3A3] text-lg font-sans">A selection of my recent work</p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="rounded-3xl overflow-hidden bg-[#E5E5E5] aspect-video hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div>
                    <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#2D2D2D] text-base lg:text-lg leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-[#E5E5E5] text-[#2D2D2D] text-xs font-sans tracking-wide hover:bg-[#2D2D2D] hover:text-[#FAFAF9] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-[#1A1A1A]" size={28} />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#1A1A1A]" size={28} />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-[#1A1A1A]" size={28} />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">Experience</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-[#E5E5E5]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#1A1A1A] rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-[#A3A3A3] text-sm tracking-wide font-sans">{exp.duration}</p>
                  <h3 className="font-serif text-3xl font-bold text-[#1A1A1A]">{exp.role}</h3>
                  <p className="text-[#2D2D2D] text-xl font-sans">{exp.company}</p>
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-[#2D2D2D] text-base font-sans flex items-start gap-2">
                        <span className="text-[#A3A3A3] mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12 bg-[#1A1A1A] text-[#FAFAF9]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
            LET'S WORK<br />TOGETHER
          </h2>
          <p className="text-[#A3A3A3] text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-sans">
            I'm open to internships, collaborations, and real-world project opportunities.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 text-[#FAFAF9] hover:text-[#A3A3A3] transition-colors">
                <Mail size={24} />
                <span className="text-lg font-sans">{contact.email}</span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#FAFAF9] hover:text-[#A3A3A3] transition-colors">
                <Linkedin size={24} />
                <span className="text-lg font-sans">LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#FAFAF9] hover:text-[#A3A3A3] transition-colors">
                <Github size={24} />
                <span className="text-lg font-sans">GitHub</span>
              </a>
            </div>
            <p className="text-[#A3A3A3] text-base font-sans">{contact.location}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-[#FAFAF9] py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#A3A3A3] text-sm font-sans">© 2025 Tarun A S. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#FAFAF9] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#FAFAF9] transition-colors">
              <Github size={20} />
            </a>
          </div>
          {showScrollTop && (
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#FAFAF9] transition-colors text-sm font-sans"
            >
              <ChevronUp size={20} />
              Back to top
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
