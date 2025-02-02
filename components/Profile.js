import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  const achievements = [
    'Architected Next.js CRM for 250+ partners managing ₹4Cr+ AUM with 70% manual data reduction',
    'Pioneered real-time team hierarchy visualizations boosting onboarding efficiency by 45%',
    'Engineered Angular banking modules handling $5M+/month payouts for 10+ banks',
    'Built B2B Fintech platform processing $35B+ transactions for 3.5M+ businesses',
    'Designed loan application UI reducing submission time by 25% ($4M+/month processed)',
    'Mentored junior developers resulting in 30% team efficiency improvement',
    'Developed React-based FOS web app streamlining user data collection',
    'Created PySpark data pipelines reducing system latency by 20%',
    'Implemented bulk actions & automated dashboards saving 30 hours/month reporting',
    'Spearheaded BankingStack & Capital web apps using React.js',
    'Engineered mutual fund analytics tracking 20+ sales metrics in real-time',
    'Built scalable ad integrations using Mongoose & Node.js',
  ];

  const skills = [
    // Frontend
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'Redux',
    'Zustand',
    'RTK',
    'RxJS',
    'SASS',
    'SCSS',
    'Bootstrap',
    'Tailwind',
    'Jest',
    'Angular Material',

    // Backend
    'Node.js',
    'Express',

    // Tools & Technologies
    'GraphQL',
    'MongoDB',
    'Webpack',
    'Vite',
    'NX',
    'Babel',
    'Git',
    'Jira',
    'Postman',
    'C/C++',
    'PNPM',
    'NPM',
  ];
  return (
    <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center gap-8 text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 filter blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full -bottom-48 -right-48 filter blur-3xl animate-pulse delay-1000"></div>

        {/* Floating emojis */}
        <div className="absolute top-20 left-20 animate-float text-4xl opacity-50">
          💻
        </div>
        <div className="absolute bottom-40 right-32 animate-floatDelay text-4xl opacity-50">
          🚀
        </div>
        <div className="absolute top-[31%] left-[20%] animate-float text-4xl opacity-50">
          🔧
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Girja Sankar Tiwari
        </h1>

        <div className="mb-6">
          <p className="text-xl sm:text-2xl mt-4 font-mono bg-black/10 px-4 py-2 rounded-lg inline-block">
            <span className="animate-pulse">🚀 Website Under Construction</span>
          </p>
        </div>

        {/* Achievement ticker */}
        <div className="my-8 h-8 overflow-hidden relative">
          <div className="animate-achievementCycle absolute inset-0 space-y-2">
            {achievements.map((achievement, index) => (
              <p key={index} className="text-gray-300 text-lg font-medium">
                {achievement}
              </p>
            ))}
          </div>
        </div>

        {/* Animated skills grid */}
        <div className="flex flex-wrap justify-center gap-3 my-8">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-2 bg-gray-800/50 rounded-full text-sm animate-skillIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 my-8">
          <a
            href="https://github.com/GIRJASANKAR"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-transform duration-300 group"
          >
            <span className="text-3xl">🐙</span>
            <span className="absolute -mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/girja-sankar-tiwari"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-transform duration-300 group"
          >
            <span className="text-3xl">💼</span>
            <span className="absolute -mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </a>
          {/* <a
            href="http://girja.co.in"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-transform duration-300 group"
          >
            <span className="text-3xl">🌐</span>
            <span className="absolute -mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
              Portfolio
            </span>
          </a> */}
        </div>

        <Link
          href="/Girja-SDE-1-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg 
          hover:scale-105 transform transition-all duration-300 font-semibold shadow-lg hover:shadow-xl
          animate-buttonPulse"
        >
          📄 Download Resume
        </Link>

        {/* Construction animation */}
        <div className="mt-12 flex items-center justify-center space-x-4 text-2xl">
          <span className="animate-hammer">🔨</span>
          <span className="animate-bounce">🚀</span>
          <span className="animate-spinSlow">🛠️</span>
        </div>

        {/* Status message */}
        <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Crafting an amazing digital experience! Connect with me on{' '}
          <a
            href="https://linkedin.com/in/girja-sankar-tiwari"
            className="text-blue-400 hover:underline cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          or explore my{' '}
          <a
            href="https://github.com/GIRJASANKAR"
            className="text-blue-400 hover:underline cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          for latest projects! 🔥
        </p>
      </div>

      <style jsx global>{`
        @keyframes progress {
          0% {
            width: 0;
          }
          100% {
            width: 50%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes achievementCycle {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          25% {
            transform: translateY(0);
            opacity: 1;
          }
          30% {
            opacity: 0;
          }
          35% {
            transform: translateY(-100%);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          60% {
            transform: translateY(-100%);
            opacity: 1;
          }
          65% {
            opacity: 0;
          }
          70% {
            transform: translateY(-200%);
            opacity: 0;
          }
          75% {
            opacity: 1;
          }
          95% {
            transform: translateY(-200%);
            opacity: 1;
          }
          100% {
            transform: translateY(-300%);
            opacity: 0;
          }
        }
        @keyframes hammer {
          0% {
            transform: rotate(0);
          }
          30% {
            transform: rotate(-30deg);
          }
          60% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes skillIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes buttonPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-floatDelay {
          animation: float 4s ease-in-out infinite 2s;
        }
        .animate-achievementCycle {
          animation: achievementCycle 12s infinite linear;
        }
        .animate-hammer {
          animation: hammer 2s ease-in-out infinite;
        }
        .animate-spinSlow {
          animation: spinSlow 8s linear infinite;
        }
        .animate-skillIn {
          animation: skillIn 0.5s ease-out forwards;
        }
        .animate-buttonPulse {
          animation: buttonPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Profile;
