import { INTERESTS } from '@/constants/portfolio';

export default function AboutSection() {
  return (
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
                {INTERESTS.map((interest) => (
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
  );
}