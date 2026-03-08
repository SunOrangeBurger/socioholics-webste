import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const blogPosts = [
  {
    id: 'preventive-healthcare',
    title: 'The Importance of Preventive Healthcare',
    date: 'March 1, 2025',
    author: 'Dr. Sarah Jenkins',
    preview: 'Preventive healthcare is crucial in reducing the burden of chronic diseases. Learn how simple lifestyle changes can make a big difference.',
    image: 'https://picsum.photos/seed/preventive/800/600',
    content: 'Full content goes here...',
    readTime: '5 min read',
  },
  {
    id: 'volunteering-experience',
    title: 'My Experience Volunteering at the Rural Camp',
    date: 'February 15, 2025',
    author: 'John Doe, Med Student',
    preview: 'A first-hand account of the challenges and rewards of providing medical care in remote areas.',
    image: 'https://picsum.photos/seed/volunteerblog/800/600',
    content: 'Full content goes here...',
    readTime: '8 min read',
  },
  {
    id: 'basic-first-aid',
    title: 'Understanding Basic First Aid',
    date: 'January 28, 2025',
    author: 'Jane Smith, RN',
    preview: 'Essential first aid skills everyone should know to handle common emergencies effectively.',
    image: 'https://picsum.photos/seed/firstaid/800/600',
    content: 'Full content goes here...',
    readTime: '6 min read',
  },
  {
    id: 'mental-health-students',
    title: 'Mental Health Strategies for Medical Students',
    date: 'January 10, 2025',
    author: 'Dr. Michael Chang',
    preview: 'Balancing studies and clinical rotations can be stressful. Here are some strategies to maintain mental well-being.',
    image: 'https://picsum.photos/seed/mentalhealthstudents/800/600',
    content: 'Full content goes here...',
    readTime: '7 min read',
  },
];

export function Blog() {
  return (
    <div className="bg-[#F7F7FF] dark:bg-[#0e1531] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#27187E] dark:bg-[#1a1f3a] py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#F7F7FF]"
          >
            Our Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#F7F7FF]/90"
          >
            Insights, stories, and medical awareness from our community.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1f3a] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#dec0ad]/20 flex flex-col hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-[#dec0ad]/70 mb-4 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-3 leading-snug group-hover:text-secondary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-[#dec0ad]/70 text-sm mb-6 flex-grow">{post.preview}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-[#dec0ad]/20">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-[#dec0ad]/80">
                    <User className="h-4 w-4 text-secondary" />
                    {post.author}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-secondary hover:text-blue-800 transition-colors"
                  >
                    Read
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
