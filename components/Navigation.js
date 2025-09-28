import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const isHomePage = router.pathname === '/';
  const isBlogPage = router.pathname.startsWith('/blog');

  const navItems = [
    { id: 'home', label: 'Home', isSection: true },
    { id: 'about', label: 'About', isSection: true },
    { id: 'experience', label: 'Experience', isSection: true },
    { id: 'projects', label: 'Projects', isSection: true },
    { id: 'skills', label: 'Skills', isSection: true },
    { id: 'contact', label: 'Contact', isSection: true },
    { id: 'blog', label: 'Blog', isSection: false, href: '/blog' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-black/80 backdrop-blur-md py-3 shadow-lg border-b border-gray-200 dark:border-white/10' 
          : 'py-5 bg-white/80 dark:bg-black/50 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Girja.</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Frontend Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex md:hidden items-center gap-6">
            {navItems.map(({ id, label, isSection, href }) => (
              isSection && isHomePage ? (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative group"
                >
                  <span className={`text-sm font-semibold transition-colors ${
                    activeSection === id
                      ? 'text-purple-700 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white'
                  }`}>
                    {label}
                  </span>
                  {activeSection === id && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                  )}
                  {activeSection !== id && (
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  )}
                </button>
              ) : !isSection ? (
                <Link
                  key={id}
                  href={href}
                  className="relative group ml-3"
                >
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                    isBlogPage
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 border border-gray-200 dark:border-white/10'
                  }`}>
                    {label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
              ) : !isHomePage && id === 'home' ? (
                <Link
                  key={id}
                  href="/"
                  className="relative group"
                >
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition-colors">
                    {label}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ) : isSection && !isHomePage ? (
                <Link
                  key={id}
                  href={`/#${id}`}
                  className="relative group"
                >
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition-colors">
                    {label}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ) : null
            ))}
            
            {/* Theme Toggle Button - Only show when not on blog page */}
            {!isBlogPage && (
              <button
                onClick={toggleTheme}
                className="ml-4 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group border border-gray-300 dark:border-gray-600"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700 group-hover:rotate-[-20deg] transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden md:flex relative w-8 h-6 flex-col justify-between"
          >
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 hidden md:block transition-all duration-500 ${
        mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-lg transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div className={`absolute right-0 top-0 h-full w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-20 space-y-6">
            {navItems.map(({ id, label, isSection, href }) => (
              isSection && isHomePage ? (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left text-lg font-medium transition-colors ${
                    activeSection === id
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ) : !isSection ? (
                <Link
                  key={id}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-medium transition-all ${
                    isBlogPage && id === 'blog'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}>
                    {label}
                    <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </Link>
              ) : !isHomePage && id === 'home' ? (
                <Link
                  key={id}
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ) : isSection && !isHomePage ? (
                <Link
                  key={id}
                  href={`/#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ) : null
            ))}
            
            {/* Mobile Theme Toggle - Only show when not on blog page */}
            {!isBlogPage && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-gray-700 dark:text-gray-300">Theme</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {theme === 'dark' ? 'Dark' : 'Light'}
                    </span>
                    {theme === 'dark' ? (
                      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;