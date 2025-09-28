import Link from 'next/link';
import BlogCard from '../blog/BlogCard';
import { getFeaturedPosts } from '@/constants/blogPosts';

export default function BlogSection() {
  const featuredPosts = getFeaturedPosts();

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Latest Insights
          </span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Sharing my journey in frontend development, system architecture, and personal growth through detailed articles and tutorials.
        </p>

        {/* Under Development Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50">
            <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-amber-700 dark:text-amber-200">
              Sample Articles • Real Content Coming Soon
            </span>
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Blog Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div className="text-3xl font-bold text-cyan-500 mb-2">8+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Articles Published</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div className="text-3xl font-bold text-purple-500 mb-2">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Topic Categories</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div className="text-3xl font-bold text-pink-500 mb-2">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technical Topics</div>
          </div>
        </div>
      </div>
    </section>
  );
}