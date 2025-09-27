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
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Professional Summary</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <span className="text-gray-900 dark:text-white font-semibold">Senior Frontend Developer</span> with 4+ years of experience architecting and building 
              enterprise-grade fintech applications. Currently leading frontend development at <span className="text-cyan-400 font-semibold">Wealthy (BuildWealth Technologies)</span>, 
              where I've built systems managing <span className="text-purple-400 font-semibold">₹4Cr+ AUM</span> for 250+ financial advisors.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Previously at <span className="text-cyan-400 font-semibold">Open Financial</span>, I developed B2B payment platforms that process 
              <span className="text-purple-400 font-semibold"> $35B+ annually</span> for 3.5M+ businesses. My expertise spans the entire frontend ecosystem - 
              from building micro-frontend architectures to optimizing performance for high-traffic applications.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-gray-900 dark:text-white font-semibold">Core Expertise:</span> React.js, Next.js, Angular, TypeScript, GraphQL, and modern state management. 
              I focus on delivering <span className="text-cyan-400">measurable business impact</span> through clean code, optimal performance, 
              and exceptional user experiences. Computer Science graduate (B.Tech) with 8.6 GPA from BTKIT, Dwarahat.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-cyan-400">4+</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Years of Experience</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-cyan-400">20+</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Production Apps</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-cyan-400">3.5M+</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">End Users Served</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-cyan-400">8+</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Team Members Led</div>
              </div>
            </div>
          </div>
          
          {/* What I Bring to the Table */}
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Core Competencies</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-gray-900 dark:text-white font-medium">Enterprise Architecture:</span> Designed scalable frontend systems handling millions of users</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-gray-900 dark:text-white font-medium">Performance Optimization:</span> Reduced load times by 37% through code splitting & lazy loading</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-gray-900 dark:text-white font-medium">Fintech Compliance:</span> Built PCI-DSS compliant payment interfaces & secure data handling</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-gray-900 dark:text-white font-medium">Team Leadership:</span> Led frontend teams of 5-8 developers, conducted code reviews & mentoring</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-gray-900 dark:text-white font-medium">Cross-functional Collaboration:</span> Worked with Product, Design, Backend & QA teams</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-gray-900 dark:text-white font-medium">Agile Development:</span> Sprint planning, daily standups, retrospectives & continuous delivery</span>
              </div>
            </div>
          </div>

          {/* Languages & Interests */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-0 md:space-y-6">
            {/* Languages */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-4 text-purple-600 dark:text-purple-400">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-sm text-gray-700 dark:text-gray-400">Professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Hindi</span>
                  <span className="text-sm text-gray-700 dark:text-gray-400">Native</span>
                </div>
              </div>
            </div>
            
            {/* Interests */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-4 text-purple-600 dark:text-purple-400">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span key={interest} className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs">
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