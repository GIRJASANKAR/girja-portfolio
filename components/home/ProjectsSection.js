import { PROJECTS } from '@/constants/portfolio';

export default function ProjectsSection() {

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Key Projects
          </span>
        </h2>

        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-4">
          {PROJECTS.map((project, index) => (
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
  );
}