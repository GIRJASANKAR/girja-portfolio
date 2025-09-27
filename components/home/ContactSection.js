export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        
        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-center">
          Currently building the future of wealth management at Wealthy. 
          Always open to discussing innovative fintech solutions and challenging opportunities.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-4 mb-12">
          {/* Email */}
          <a
            href="mailto:tiwarigirjashankar36@gmail.com"
            className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group md:flex md:items-center md:p-4"
          >
            <div className="w-12 h-12 mx-auto md:mx-0 mb-3 md:mb-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center md:text-left md:ml-4 md:flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
              <p className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-all">tiwarigirjashankar36@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/girja-sankar-tiwari"
            target="_blank"
            className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group md:flex md:items-center md:p-4"
          >
            <div className="w-12 h-12 mx-auto md:mx-0 mb-3 md:mb-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="text-center md:text-left md:ml-4 md:flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Connect with me</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919897747567"
            className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group md:flex md:items-center md:p-4"
          >
            <div className="w-12 h-12 mx-auto md:mx-0 mb-3 md:mb-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-center md:text-left md:ml-4 md:flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">+91 9897747567</p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = 'mailto:tiwarigirjashankar36@gmail.com'}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-base sm:text-lg text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}