import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20 my-background text-white">
      <h1 className="text-4xl mt-10 font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl">📞</span>
            <a
              href="tel:+919897747567"
              className="text-blue-400 hover:underline"
            >
              +91 989-774-7567
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">📧</span>
            <a
              href="mailto:tiwarigirjashankar36@gmail.com"
              className="text-blue-400 hover:underline"
            >
              tiwarigirjashankar36@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">💼</span>
            <a
              href="https://linkedin.com/in/girja-sankar-tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">🐙</span>
            <a
              href="https://github.com/GIRJASANKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
