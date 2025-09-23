import { useState, useEffect } from 'react';
import { EXPERIENCES } from '@/constants/achievements';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { value: '$35B+', label: 'Transactions Processed', highlight: true },
    { value: '3.5M+', label: 'Businesses Served', highlight: true },
    { value: '37%', label: 'Conversion Increase', highlight: false },
    { value: '70%', label: 'Automation Achieved', highlight: false }
  ];

  const skills = {
    'Frontend Frameworks': ['React', 'Next.js', 'Angular', 'TypeScript'],
    'State Management': ['Redux', 'Zustand', 'RTK', 'RxJS'],
    'Styling': ['Tailwind', 'SCSS', 'Styled Components'],
    'Tools & Testing': ['GraphQL', 'Jest', 'Webpack', 'Vite', 'Git']
  };

  const projects = [
    {
      title: 'Enterprise CRM Platform',
      description: 'Next.js CRM managing ₹4Cr+ AUM for 250+ partners with 70% automation',
      impact: 'Saved 30 hours/month in reporting',
      tech: ['Next.js', 'GraphQL', 'TanStack Table', 'TypeScript'],
      metrics: ['300+ Active Users', '60% Efficiency Gain', 'Real-time Analytics']
    },
    {
      title: 'B2B Fintech Platform',
      description: 'Angular & React platform processing $35B+ transactions for 3.5M+ businesses',
      impact: '40% faster payment processing',
      tech: ['Angular', 'React', 'RxJS', 'TypeScript'],
      metrics: ['$5M+/month volume', '10+ Bank Integrations', '25% Time Reduction']
    },
    {
      title: 'Banking Module Suite',
      description: 'Standalone Angular components for virtual accounts across 10+ banks',
      impact: 'Cut processing time by 40%',
      tech: ['Angular CLI', 'RxJS', 'SCSS', 'TypeScript'],
      metrics: ['$4M+/month loans', 'Multi-bank Support', 'Enterprise Scale']
    }
  ];

  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
        <div 
          className="absolute w-[800px] h-[800px] opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
            left: `${mousePos.x - 400}px`,
            top: `${mousePos.y - 400}px`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative pt-20">
        <div className="max-w-7xl mx-auto">
          <div className={`space-y-6 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
            {/* Role Badge */}
            <div className="flex flex-col md:flex-col sm:flex-row justify-center items-center gap-2 mb-6">
              <div className="inline-flex px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
                Frontend Developer SDE @ Wealthy
              </div>
              <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300">
                3.9+ YOE
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Girja Sankar
              </span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tiwari
              </span>
            </h1>

            {/* Strong Value Proposition */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold">
                Building Scalable Fintech Solutions at Enterprise Scale
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Result-driven Frontend Developer specializing in{' '}
                <span className="text-cyan-400 font-semibold">React, Next.js, Angular & TypeScript</span>.
                Successfully built CRM & Banking platforms processing{' '}
                <span className="text-white font-semibold">$35B+ transactions</span> for{' '}
                <span className="text-white font-semibold">3.5M+ businesses</span>.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-3 mt-12 md:mt-8 mb-8">
              {metrics.map((metric, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-xl backdrop-blur transition-all transform hover:scale-105 ${
                    metric.highlight 
                      ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl sm:text-2xl md:text-3xl font-bold ${
                      metric.highlight 
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent' 
                        : 'text-white'
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {['React.js', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'TailwindCSS'].map((tech) => (
                <div 
                  key={tech}
                  className="px-3 py-2 sm:px-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/20 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Experience Highlights */}
            <div className="flex flex-col md:flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-green-400">●</span>
                <span className="text-gray-300 text-sm">Currently @ <span className="text-white font-semibold">Wealthy</span></span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-gray-400 text-sm">Previously:</span>
                <span className="text-gray-300 text-sm">Open Financial • AdPushup • Altruism Labs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 justify-center items-center md:flex-col md:gap-3">
              <a
                href="/resume"
                target="_blank"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all md:w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-3 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all md:w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Let's Talk
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center mt-8 pt-8">
              <a href="https://github.com/GIRJASANKAR" target="_blank" className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/girja-sankar-tiwari" target="_blank" className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:tiwarigirjashankar36@gmail.com" className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="space-y-6">
            {/* Professional Summary */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">Professional Summary</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                I'm a passionate Frontend Engineer with 3+ years of experience building enterprise-scale fintech applications. 
                Currently at Wealthy (BuildWealth Technologies), I architect solutions that manage ₹4Cr+ in assets and serve 250+ partners.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                My journey in tech began with a strong foundation in Computer Science from BTKIT, where I graduated with an 8.6 GPA. 
                Since then, I've worked across the fintech spectrum - from building B2B platforms processing $35B+ in transactions at Open Financial 
                to creating innovative CRM solutions that reduce manual operations by 70%.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I specialize in React, Next.js, Angular, and TypeScript, with a focus on creating performant, scalable applications 
                that deliver exceptional user experiences. My approach combines technical excellence with business acumen, 
                ensuring that every line of code contributes to measurable business outcomes.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-cyan-400">3</div>
                  <div className="text-xs text-gray-400">Companies</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-cyan-400">15+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-cyan-400">5+</div>
                  <div className="text-xs text-gray-400">Team Mentored</div>
                </div>
              </div>
            </div>
            
            {/* What I Bring to the Table */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">What I Bring to the Table</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-sm sm:text-base text-gray-300">Deep expertise in modern JavaScript frameworks</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-sm sm:text-base text-gray-300">Proven track record of delivering at scale</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-sm sm:text-base text-gray-300">Strong focus on performance optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-sm sm:text-base text-gray-300">Experience with fintech compliance & security</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-sm sm:text-base text-gray-300">Leadership & mentoring capabilities</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-sm sm:text-base text-gray-300">Agile methodology practitioner</span>
                </div>
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-0 md:space-y-6">
              {/* Languages */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <h3 className="text-lg font-bold mb-4 text-purple-400">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-300">English</span>
                    <span className="text-sm text-gray-400">Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-300">Hindi</span>
                    <span className="text-sm text-gray-400">Native</span>
                  </div>
                </div>
              </div>
              
              {/* Interests */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <h3 className="text-lg font-bold mb-4 text-purple-400">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Open Source', 'Fintech', 'UI/UX', 'Web3', 'AI/ML', 'Cloud Tech'].map((interest) => (
                    <span key={interest} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line - Desktop only */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:hidden" />
            
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-6 ml-20 md:ml-0">
                {/* Timeline Dot - Desktop only */}
                <div className="absolute -left-12 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#0a0a0a] md:hidden" />
                
                <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <span className="text-gray-400 text-sm sm:text-base">{exp.duration}</span>
                      {index === 0 && (
                        <span className="hidden md:inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm sm:text-base">
                        <span className="text-cyan-400 mr-3 mt-1">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.description[5] && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="md:hidden">
                        <span className="text-sm text-gray-400">Tech Stack: </span>
                        <span className="text-sm text-gray-300">{exp.description[5].replace('Technologies: ', '')}</span>
                      </div>
                      <div className="hidden md:flex flex-wrap gap-2">
                        {exp.description[5].replace('Technologies: ', '').split(', ').map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Key Projects
            </span>
          </h2>

          <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <p className="text-sm text-purple-300 font-medium">💡 {project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded bg-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Link */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/GIRJASANKAR"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all"
            >
              View more projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <h3 className="text-xl md:text-lg font-semibold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 hover:border-purple-500/50 transition-all"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Also Proficient In</h3>
            <div className="flex flex-wrap gap-3">
              {['MongoDB', 'Node.js', 'Express', 'Jest', 'Bootstrap', 'Material-UI', 'Webpack', 'Babel', 'Git', 'Jira', 'Postman'].map((skill, i) => (
                <span key={i} className="px-2 py-1 text-xs sm:text-sm rounded bg-white/10 text-gray-400 text-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-purple-400">Certifications & Achievements</h3>
            <div className="space-y-4">
              <a 
                href="https://drive.google.com/file/d/1qdfqgv1vQivWZhtVvFJjVMyceckMKKvT/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-purple-400 transition-colors">
                      CodeKaze - India's Biggest Coding Competition
                    </h4>
                    <div className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium ml-2">
                      Competitive
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">Coding Ninjas • Apr 2022</p>
                  <p className="text-xs text-gray-500">ID: 123309</p>
                </div>
              </a>
              
              <a 
                href="https://online.codingblocks.com/certificates/CBOL-173173-834e"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-purple-400 transition-colors">
                      Full Stack Web Development with NodeJS
                    </h4>
                    <div className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium ml-2">
                      Full Stack
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">Coding Blocks • May 2021</p>
                  <p className="text-xs text-gray-500">ID: CBOL-173173-834e</p>
                </div>
              </a>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-sm sm:text-base text-white">
                      JavaScript: The Hard Parts
                    </h4>
                    <div className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium ml-2">
                      Advanced
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">Frontend Masters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto text-center">
            Currently building the future of wealth management at Wealthy. 
            Always open to discussing innovative fintech solutions and challenging opportunities.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-4 mb-12">
            {/* Email */}
            <a
              href="mailto:tiwarigirjashankar36@gmail.com"
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all group md:flex md:items-center md:p-4"
            >
              <div className="w-12 h-12 mx-auto md:mx-0 mb-3 md:mb-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center md:text-left md:ml-4 md:flex-1">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-xs font-medium group-hover:text-purple-400 transition-colors break-all">tiwarigirjashankar36@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/girja-sankar-tiwari"
              target="_blank"
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all group md:flex md:items-center md:p-4"
            >
              <div className="w-12 h-12 mx-auto md:mx-0 mb-3 md:mb-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="text-center md:text-left md:ml-4 md:flex-1">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">Connect with me</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919897747567"
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all group md:flex md:items-center md:p-4"
            >
              <div className="w-12 h-12 mx-auto md:mx-0 mb-3 md:mb-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-center md:text-left md:ml-4 md:flex-1">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-sm font-medium group-hover:text-green-400 transition-colors">+91 9897747567</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <button
              onClick={() => window.location.href = 'mailto:tiwarigirjashankar36@gmail.com'}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}