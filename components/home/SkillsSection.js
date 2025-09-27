import { SKILLS, ADDITIONAL_SKILLS } from '@/constants/portfolio';

export default function SkillsSection() {

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">
            Technical Arsenal
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
              <h3 className="text-xl md:text-lg font-semibold mb-4 text-purple-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-all"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-8 p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Also Proficient In</h3>
          <div className="flex flex-wrap gap-3">
            {ADDITIONAL_SKILLS.map((skill, i) => (
              <span key={i} className="px-2 py-1 text-xs sm:text-sm rounded bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400 text-center">
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
              className="block p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    CodeKaze - India's Biggest Coding Competition
                  </h4>
                  <div className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium ml-2">
                    Competitive
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Coding Ninjas • Apr 2022</p>
                <p className="text-xs text-gray-700 dark:text-gray-500">ID: 123309</p>
              </div>
            </a>
            
            <a 
              href="https://online.codingblocks.com/certificates/CBOL-173173-834e"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Full Stack Web Development with NodeJS
                  </h4>
                  <div className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium ml-2">
                    Full Stack
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Coding Blocks • May 2021</p>
                <p className="text-xs text-gray-700 dark:text-gray-500">ID: CBOL-173173-834e</p>
              </div>
            </a>
            
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                    JavaScript: The Hard Parts
                  </h4>
                  <div className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium ml-2">
                    Advanced
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Frontend Masters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}