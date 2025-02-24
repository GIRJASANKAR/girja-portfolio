import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20 my-background text-white">
      <h1 className="text-4xl mt-10 font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="max-w-3xl">
        <p className="text-lg mb-6">
          Hi! I&apos;m Girja Sankar Tiwari, a passionate Frontend Developer with
          a keen eye for creating beautiful and functional user interfaces. I
          specialize in React.js and modern web technologies.
        </p>
        <p className="text-lg mb-6">
          With a strong foundation in web development and a constant desire to
          learn, I transform ideas into seamless digital experiences.
        </p>
        {/* Add more personal details as needed */}
      </div>
    </div>
  );
}
