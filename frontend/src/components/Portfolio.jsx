import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Code2, Database, Briefcase, Mail, Linkedin, Github, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, skills, experiences, contact } from '../data/mock';

// Image Carousel Component
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentIndex
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-95 z-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#1A1A1A]/80 text-[#FAFAF9] p-3 rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#1A1A1A] hover:scale-110 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#1A1A1A]/80 text-[#FAFAF9] p-3 rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#1A1A1A] hover:scale-110 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#FAFAF9] w-8'
                : 'bg-[#FAFAF9]/50 hover:bg-[#FAFAF9]/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
      <nav className="fixed top-0 left-0 right-0 bg-[#FAFAF9]/95 backdrop-blur-sm z-50 border-b border-[#E5E5E5] animate-slideDown">
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
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <p className="text-[#A3A3A3] text-sm tracking-[0.2em] uppercase mb-4 font-sans animate-fadeIn" style={{animationDelay: '0.2s'}}>Web Developer & Data Science Student</p>
                <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1A1A1A] leading-[0.95] mb-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                  HEY, I'M<br />TARUN A S
                </h1>
                <p className="text-[#2D2D2D] text-lg lg:text-xl leading-relaxed font-sans max-w-xl animate-fadeIn" style={{animationDelay: '0.6s'}}>
                  Final-year BE Data Science student, Web Developer & UI-focused problem solver
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAFAF9] px-8 py-4 hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-lg transition-all duration-300 font-sans text-sm tracking-wide animate-fadeIn"
                style={{animationDelay: '0.8s'}}
              >
                VIEW MY WORK
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
            <div className="relative flex justify-center md:justify-end animate-fadeInRight">
              <div className="relative rounded-3xl overflow-hidden w-80 h-80 lg:w-96 lg:h-96 bg-[#E5E5E5] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_tarun-design/artifacts/62scao4b_protrait.jpg" 
                  alt="Tarun A S" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#E5E5E5] rounded-full -z-10 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className="py-20 px-6 lg:px-12 bg-white">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 hover:text-[#2D2D2D] transition-colors duration-300">About</h2>
            <p className="text-[#2D2D2D] text-lg lg:text-xl leading-relaxed font-sans hover:translate-x-2 transition-transform duration-300">
              As a Data Science undergraduate and web developer, I build real-world, user-focused applications using modern web technologies and data-driven approaches.
            </p>
            <p className="text-[#2D2D2D] text-lg lg:text-xl leading-relaxed font-sans hover:translate-x-2 transition-transform duration-300">
              I enjoy transforming ideas into functional, scalable products and have experience working on full-stack projects, analytics dashboards, and UI/UX-driven applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-animate className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 hover:text-[#2D2D2D] transition-colors duration-300">Featured Projects</h2>
            <p className="text-[#A3A3A3] text-lg font-sans">A selection of my recent work</p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                } transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${index * 0.2}s`}}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="rounded-3xl overflow-hidden bg-[#E5E5E5] aspect-video hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                    {project.images ? (
                      <ImageCarousel images={project.images} />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div>
                    <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight hover:text-[#2D2D2D] transition-colors duration-300">
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
                        className="px-4 py-2 bg-[#E5E5E5] text-[#2D2D2D] text-xs font-sans tracking-wide hover:bg-[#2D2D2D] hover:text-[#FAFAF9] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
      <section id="skills" data-animate className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 hover:text-[#2D2D2D] transition-colors duration-300">Skills & Expertise</h2>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4 hover:translate-y-[-8px] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-[#1A1A1A] animate-pulse" size={28} />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF9] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 hover:translate-y-[-8px] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#1A1A1A] animate-pulse" size={28} style={{animationDelay: '0.2s'}} />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF9] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 hover:translate-y-[-8px] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-[#1A1A1A] animate-pulse" size={28} style={{animationDelay: '0.4s'}} />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF9] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 hover:translate-y-[-8px] transition-all duration-300">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF9] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2 hover:translate-y-[-8px] transition-all duration-300">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 border border-[#E5E5E5] text-[#2D2D2D] text-sm font-sans hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF9] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section data-animate className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections.has('') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 hover:text-[#2D2D2D] transition-colors duration-300">Experience</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-[#E5E5E5] hover:border-[#1A1A1A] transition-all duration-500 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#1A1A1A] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <div className="space-y-3 hover:translate-x-4 transition-transform duration-300">
                  <p className="text-[#A3A3A3] text-sm tracking-wide font-sans">{exp.duration}</p>
                  <h3 className="font-serif text-3xl font-bold text-[#1A1A1A] group-hover:text-[#2D2D2D] transition-colors duration-300">{exp.role}</h3>
                  <p className="text-[#2D2D2D] text-xl font-sans">{exp.company}</p>
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-[#2D2D2D] text-base font-sans flex items-start gap-2 hover:text-[#1A1A1A] transition-colors duration-300">
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
      <section id="contact" data-animate className="py-20 px-6 lg:px-12 bg-[#1A1A1A] text-[#FAFAF9]">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight hover:scale-105 transition-transform duration-500">
            LET'S WORK<br />TOGETHER
          </h2>
          <p className="text-[#A3A3A3] text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-sans animate-fadeIn" style={{animationDelay: '0.3s'}}>
            I'm open to internships, collaborations, and real-world project opportunities.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 text-[#FAFAF9] hover:text-[#A3A3A3] hover:scale-110 transition-all duration-300">
                <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg font-sans">{contact.email}</span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#FAFAF9] hover:text-[#A3A3A3] hover:scale-110 transition-all duration-300">
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg font-sans">LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#FAFAF9] hover:text-[#A3A3A3] hover:scale-110 transition-all duration-300">
                <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg font-sans">GitHub</span>
              </a>
            </div>
            <p className="text-[#A3A3A3] text-base font-sans animate-fadeIn" style={{animationDelay: '0.6s'}}>{contact.location}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-[#FAFAF9] py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#A3A3A3] text-sm font-sans hover:text-[#FAFAF9] transition-colors duration-300">© 2025 Tarun A S. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#FAFAF9] hover:scale-125 hover:rotate-12 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#FAFAF9] hover:scale-125 hover:rotate-12 transition-all duration-300">
              <Github size={20} />
            </a>
          </div>
          {showScrollTop && (
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#FAFAF9] hover:scale-110 transition-all duration-300 text-sm font-sans animate-bounce"
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
