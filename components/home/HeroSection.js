import { METRICS, TECH_STACK } from '@/constants/portfolio';

export default function HeroSection({ isLoaded, scrollToSection }) {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative pt-20">
      <div className="max-w-7xl mx-auto">
        <div className={`space-y-6 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
          {/* Role Badge */}
          <div className="flex flex-col md:flex-col sm:flex-row justify-center items-center gap-2 mb-6">
            <div className="inline-flex px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
              Frontend Developer @ Wealthy
            </div>
            <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300">
              4 Years Experience
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
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold text-center">
              Frontend Developer | Fintech Specialist
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
              I build high-performance web applications that handle{' '}
              <span className="text-cyan-400 font-semibold">billions in transactions</span> and serve{' '}
              <span className="text-purple-400 font-semibold">millions of users</span>. 
              Specialized in creating scalable fintech solutions using modern JavaScript frameworks
              with a proven track record of delivering business-critical applications.
            </p>
          </div>

          {/* Key Achievements Grid - Desktop: 4 cols in a row, Mobile: 2x2 grid */}
          <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-3 mt-12 md:mt-8 mb-8">
            {METRICS.map((metric, i) => (
              <div 
                key={i} 
                className={`p-3 md:p-4 rounded-xl backdrop-blur transition-all transform hover:scale-105 ${
                  metric.highlight 
                    ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${
                    metric.highlight 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent' 
                      : 'text-white'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white">{metric.label}</div>
                  {metric.subtitle && (
                    <div className="text-xs text-gray-500 mt-0.5 hidden md:block">{metric.subtitle}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {TECH_STACK.map((tech) => (
              <div 
                key={tech}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/20 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Experience Highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <span className="text-green-400">●</span>
              <span className="text-gray-200 text-xs sm:text-sm text-center">Currently: <span className="text-white font-semibold">Frontend Developer @ Wealthy</span></span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-gray-300 text-xs sm:text-sm text-center">Previously: Open Financial • AdPushup • Altruism Labs</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center md:flex-col md:gap-3">
            <a
              href="/resume"
              target="_blank"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all w-full md:w-auto"
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
              className="group px-8 py-3 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all w-full md:w-auto"
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
  );
}