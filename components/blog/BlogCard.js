import Link from 'next/link';

export default function BlogCard({ post }) {
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

  return (
    <Link href={`/blog/${post.id}`}>
      <article className="group relative h-full overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer">
        {post.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
              Featured
            </span>
          </div>
        )}
        
        <div className="p-6 h-full flex flex-col">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(post.date)}
            </span>
            <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Read more →
            </span>
          </div>
        </div>

        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
      </article>
    </Link>
  );
}