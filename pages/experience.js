import { EXPERIENCES } from '@/constants/achievements';
import React from 'react';

export default function Experience() {
  return (
    <div className="min-h-screen p-8 sm:p-20 my-background text-white">
      <h1 className="text-4xl mt-10 font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Experience
      </h1>
      <div className="max-w-4xl space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                <p className="text-purple-300">{exp.company}</p>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <p className="text-gray-400">{exp.duration}</p>
                <p className="text-gray-500">{exp.location}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {exp.description.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2 text-gray-300"
                >
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {index !== EXPERIENCES.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-8">
                <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
