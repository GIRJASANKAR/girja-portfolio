import { useState } from 'react';
import Head from 'next/head';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS, BLOG_CATEGORIES, getFeaturedPosts, getPostsByCategory } from '@/constants/blogPosts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(BLOG_CATEGORIES.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = getPostsByCategory(selectedCategory).filter(post => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Head>
        <title>Blog - Girja Sankar Tiwari | Frontend Developer</title>
        <meta name="description" content="Thoughts on frontend development, architecture, performance, fitness, and life lessons from a senior frontend developer." />
        <meta property="og:title" content="Blog - Girja Sankar Tiwari" />
        <meta property="og:description" content="Insights on building scalable applications, optimizing performance, and maintaining work-life balance." />
      </Head>

      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sharing my journey in frontend development, system architecture, and personal growth. 
              Learn from real-world experiences building applications that serve millions.
            </p>
          </div>

          {/* Under Construction Notice */}
          <div className="mb-8 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                  Blog Section Under Development
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  These are sample articles showcasing the blog structure and design. Actual technical articles based on my real-world experiences will be published soon. Stay tuned for in-depth content on React patterns, performance optimization, and fintech development.
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.values(BLOG_CATEGORIES).map((category) => {
              const count = category === BLOG_CATEGORIES.ALL 
                ? BLOG_POSTS.length 
                : BLOG_POSTS.filter(post => post.category === category).length;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Featured Posts Section */}
          {selectedCategory === BLOG_CATEGORIES.ALL && featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            {selectedCategory === BLOG_CATEGORIES.ALL && featuredPosts.length > 0 && (
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                All Articles
              </h2>
            )}
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about frontend development, system design, and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
              />
              <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}