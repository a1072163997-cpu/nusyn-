import React from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    image: 'https://picsum.photos/800/500?random=20',
    categories: ['Product Comparison', 'Product Guide'],
    title: 'Nusyn Titan Power 3000 vs. Titan 3600 Plus vs. Explorer 3000 Pro',
    date: 'September 15, 2025'
  },
  {
    id: 2,
    image: 'https://picsum.photos/800/500?random=21',
    categories: ['Product Comparison'],
    title: 'Product Comparison: Nusyn 5000 Plus vs 2000 Plus vs 3000 Pro vs HomePower 3000',
    date: 'June 18, 2025'
  },
  {
    id: 3,
    image: 'https://picsum.photos/800/500?random=22',
    categories: ['Product Comparison', 'Product Guide'],
    title: 'Product Comparison: Nusyn 1000 vs. 1000Pro vs. 1000 Plus vs. 1000 v2',
    date: 'September 25, 2024'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight">Blogs</h2>
          <button className="bg-orange-50 hover:bg-orange-100 text-nusyn-orange text-sm font-bold py-3 px-8 rounded-full transition-colors">
            View More
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10] w-full bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Optional: Overlay Pill Effect similar to screenshot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                   <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-center shadow-lg border border-white/50">
                      <span className="text-xs font-bold text-gray-900 line-clamp-1">Read Article</span>
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Categories */}
                <div className="flex items-center flex-wrap gap-x-2 mb-3 text-xs text-gray-500 font-medium">
                  {post.categories.map((cat, idx) => (
                    <React.Fragment key={idx}>
                      <span className="whitespace-nowrap">{cat}</span>
                      {idx < post.categories.length - 1 && <span className="text-gray-300">|</span>}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-nusyn-orange transition-colors line-clamp-3">
                  {post.title}
                </h3>
                
                {/* Date */}
                <div className="mt-auto pt-2">
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;