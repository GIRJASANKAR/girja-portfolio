import { ACHIEVEMENTS, SKILLS } from '@/constants/achievements';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const achievementInterval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % ACHIEVEMENTS.length);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(achievementInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden my-background">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Cursor light effect */}
      <div 
        className="pointer-events-none fixed w-96 h-96 opacity-10"
        style={{
          background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
        <div className={`max-w-6xl w-full space-y-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            {/* Name with gradient animation */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                  Girja Sankar
                </span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 animate-gradient-x animation-delay-1000">
                  Tiwari
                </span>
              </h1>
            </div>

            {/* Title with typing effect */}
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 tracking-wider">
                <span className="font-mono">{'<'}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                  Frontend Developer
                </span>
                <span className="font-mono">{' />'}</span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>

          {/* Achievement display with smooth transitions */}
          <div className="flex justify-center">
            <div className="glass rounded-2xl p-6 max-w-3xl w-full">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse animation-delay-200"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse animation-delay-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-gray-300 text-lg font-medium transition-all duration-500">
                    {ACHIEVEMENTS[currentAchievement]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid with hover effects */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {SKILLS.map((skill, index) => (
              <div
                key={skill}
                className={`group relative ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative glass rounded-xl p-4 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-gray-200 font-medium text-sm">{skill}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Resume Button */}
            <Link
              href="/Girja-SDE-1-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl transform transition duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </button>
            </Link>

            {/* Contact Button */}
            <button className="group relative px-8 py-4 overflow-hidden rounded-xl border border-purple-500/50 text-purple-400 font-semibold hover:text-white transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </span>
            </button>
          </div>

          {/* Social Links with modern icons */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/GIRJASANKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition duration-300">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/girja-sankar-tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition duration-300">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>

            <a
              href="mailto:tiwarigirjashankar36@gmail.com"
              className="group relative"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition duration-300">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Status message */}
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Currently crafting exceptional user experiences at{' '}
              <span className="text-purple-400 font-semibold">scale</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default Profile;