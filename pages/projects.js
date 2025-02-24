import React from 'react';

const projects = [
  {
    name: 'CRM Platform',
    technologies: ['Next.js', 'GraphQL', 'TanStack Table', 'TypeScript'],
    description:
      'Built a scalable CRM platform with role-based dashboards (National/Zonal Sales Head), advanced filters for SIP metrics & Mutual Fund AUM tracking. Features include MyTeam module with CSV uploads, bulk reassignments, branch management, and customizable columns with pagination, enhancing operational efficiency by 60% for 300+ users.',
    links: {
      live: 'https://crm.buildwealth.in/',
    },
  },
  {
    name: 'CineScape',
    technologies: ['Node.js', 'Angular', 'TMDB API', 'JWT'],
    description:
      'Engineered a responsive movie web app integrated with TMDB API, featuring JWT authentication, lazy loading, and advanced UI effects like carousels and shimmers. Implemented search functionality and movie detail pages with dynamic routing.',
    links: {
      github: 'https://github.com/GIRJASANKAR/video-streaming-platform',
      live: 'https://cinescape.netlify.app/',
    },
  },
  {
    name: 'Threadify',
    technologies: ['Next.js', 'React', 'TypeScript', 'Clerk', 'MongoDB'],
    description:
      'Developed a scalable full-stack social media application with SSR and API routes. Integrated CLERK for authentication, UploadThing for file uploads, and webhooks for real-time events. Features include thread creation, comments, and community management.',
    links: {
      github: 'https://github.com/GIRJASANKAR/Threadify',
      live: 'https://threadify-two.vercel.app/',
    },
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-8 sm:p-20 my-background text-white">
      <h1 className="text-4xl mt-10 font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:scale-105 group"
          >
            <h3 className="text-xl font-bold text-blue-400">{project.name}</h3>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-purple-900 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                >
                  <span>Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
