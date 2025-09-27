import { EXPERIENCES } from '@/constants/achievements';

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:hidden" />
          
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-6 pl-12 md:pl-0">
              {/* Timeline Dot - Desktop only */}
              <div className="absolute left-0 top-8 md:hidden">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-purple-500/30" />
                  <div className="absolute inset-[6px] rounded-full bg-gray-50 dark:bg-[#0a0a0a]" />
                  <div className="absolute inset-[10px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-purple-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{exp.duration}</span>
                    {index === 0 && (
                      <span className="hidden md:inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      <span className="text-cyan-400 mr-3 mt-1">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.description[5] && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="md:hidden">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Tech Stack: </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{exp.description[5].replace('Technologies: ', '')}</span>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-2">
                      {exp.description[5].replace('Technologies: ', '').split(', ').map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
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
  );
}