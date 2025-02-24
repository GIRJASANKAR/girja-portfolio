import React from 'react';
import { SKILLS } from '@/constants/achievements';

export default function Skills() {
  return (
    <div className="min-h-screen p-8 sm:p-20 my-background text-white">
      <h1 className="text-4xl mt-10 font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Skills & Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-white animate-skillIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
