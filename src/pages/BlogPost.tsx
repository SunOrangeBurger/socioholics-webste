import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from './Blog';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Post not found</h2>
          <Link to="/blog" className="text-secondary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-secondary hover:text-blue-800 mb-8 font-medium transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 text-sm md:text-base font-medium"
          >
            <span className="flex items-center gap-2">
              <User className="h-5 w-5 text-secondary" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" /> {post.readTime}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-sm"
            referrerPolicy="no-referrer"
          />
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700">
            <p className="lead text-xl text-gray-600 mb-8 font-medium">
              {post.preview}
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Core Issue</h2>
            <p className="mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 italic text-gray-600 my-8">
              "Prevention is better than cure, and it starts with awareness and education in our communities."
            </blockquote>
            <p className="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-primary mb-8">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((related) => (
              <Link to={`/blog/${related.id}`} key={related.id} className="group block">
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{related.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{related.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
