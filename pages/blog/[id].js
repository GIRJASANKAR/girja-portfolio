import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPostById, getRelatedPosts } from '@/constants/blogPosts';
import BlogCard from '@/components/blog/BlogCard';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (id) {
      const blogPost = getPostById(id);
      if (blogPost) {
        setPost(blogPost);
        const related = getRelatedPosts(id, blogPost.category);
        setRelatedPosts(related);
      } else {
        router.push('/blog');
      }
    }
  }, [id, router]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-500 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'from-cyan-500 to-blue-500',
      'Architecture': 'from-purple-500 to-pink-500',
      'Performance': 'from-green-500 to-emerald-500',
      'Fitness': 'from-orange-500 to-red-500',
      'Productivity': 'from-yellow-500 to-amber-500',
      'Life Lessons': 'from-indigo-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const renderContent = (content) => {
    // Simple markdown-like rendering
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
          codeContent = '';
        } else {
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-900 dark:bg-black/50 rounded-lg p-4 overflow-x-auto my-4 border border-gray-700 dark:border-white/10">
              <code className="text-sm text-gray-300 dark:text-gray-200 font-mono">
                {codeContent.trim()}
              </code>
            </pre>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${index}`} className="text-3xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">
            {line.slice(2)}
          </h1>
        );
      }
      // Bold text
      else if (line.includes('**')) {
        const parts = line.split('**');
        const formatted = parts.map((part, i) => 
          i % 2 === 1 ? <strong key={`strong-${index}-${i}`} className="font-semibold text-gray-900 dark:text-white">{part}</strong> : part
        );
        elements.push(
          <p key={`p-${index}`} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {formatted}
          </p>
        );
      }
      // List items
      else if (line.startsWith('- ')) {
        elements.push(
          <li key={`li-${index}`} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-disc">
            {line.slice(2)}
          </li>
        );
      } else if (line.startsWith('{index + 1}. ')) {
        elements.push(
          <li key={`ol-${index}`} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
            {line.slice(3)}
          </li>
        );
      }
      // Regular paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={`p-${index}`} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <>
      <Head>
        <title>{post.title} - Girja Sankar Tiwari</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Girja Sankar Tiwari" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:tag" content={post.tags.join(',')} />
      </Head>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <article className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Sample Content Notice */}
          <div className="mb-8 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-blue-700 dark:text-blue-200">
                <span className="font-medium">Note:</span> This is a sample article demonstrating the blog layout and functionality. Real technical content coming soon!
              </p>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-white/10">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By Girja Sankar Tiwari</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Share this article</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 transition-colors">
                LinkedIn
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 transition-colors">
                Copy Link
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">About the Author</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Girja Sankar Tiwari is a Senior Frontend Developer with 4+ years of experience building scalable fintech applications. 
              Currently leading frontend development at Wealthy, he specializes in React, performance optimization, and system architecture.
            </p>
            <div className="flex gap-3">
              <Link href="/" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                Portfolio
              </Link>
              <span className="text-gray-400">•</span>
              <a href="https://github.com/shuence" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                GitHub
              </a>
              <span className="text-gray-400">•</span>
              <a href="https://www.linkedin.com/in/girja-sankar-tiwari/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}