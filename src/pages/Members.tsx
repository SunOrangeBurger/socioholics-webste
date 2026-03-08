import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Dr. Emily Chen',
    role: 'President',
    category: 'Leadership',
    specialization: 'Pediatrics',
    image: 'https://picsum.photos/seed/emily/400/400',
    bio: 'Leading Socioholics with a vision for accessible pediatric care.',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    role: 'Vice President',
    category: 'Leadership',
    specialization: 'Internal Medicine',
    image: 'https://picsum.photos/seed/james/400/400',
    bio: 'Overseeing medical camp operations and volunteer coordination.',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Secretary',
    category: 'Leadership',
    specialization: 'Medical Student (Year 4)',
    image: 'https://picsum.photos/seed/sarah/400/400',
    bio: 'Managing communications and event planning.',
  },
  {
    id: 4,
    name: 'Michael Chang',
    role: 'Treasurer',
    category: 'Leadership',
    specialization: 'Medical Student (Year 3)',
    image: 'https://picsum.photos/seed/michael/400/400',
    bio: 'Handling finances and fundraising initiatives.',
  },
  {
    id: 5,
    name: 'Dr. Aisha Patel',
    role: 'Head of Outreach',
    category: 'Core Committee',
    specialization: 'Public Health',
    image: 'https://picsum.photos/seed/aisha/400/400',
    bio: 'Developing community health programs and awareness campaigns.',
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Logistics Lead',
    category: 'Core Committee',
    specialization: 'Nursing Student',
    image: 'https://picsum.photos/seed/david/400/400',
    bio: 'Ensuring smooth operations during medical camps.',
  },
  {
    id: 7,
    name: 'Dr. Robert Fox',
    role: 'Volunteer',
    category: 'General Members',
    specialization: 'Dentistry',
    image: 'https://picsum.photos/seed/robert/400/400',
    bio: 'Providing free dental checkups at our rural camps.',
  },
  {
    id: 8,
    name: 'Lisa Wong',
    role: 'Volunteer',
    category: 'General Members',
    specialization: 'Pharmacy Student',
    image: 'https://picsum.photos/seed/lisa/400/400',
    bio: 'Assisting with medication dispensing and patient education.',
  },
];

const categories = ['All', 'Leadership', 'Core Committee', 'General Members'];

export function Members() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMembers = activeCategory === 'All' 
    ? members 
    : members.filter(m => m.category === activeCategory);

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
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#F7F7FF]/90"
          >
            The dedicated individuals behind Socioholics making healthcare accessible.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white dark:bg-[#1a1f3a] text-gray-600 dark:text-[#dec0ad] hover:bg-gray-100 dark:hover:bg-[#1a1f3a]/80 border border-gray-200 dark:border-[#dec0ad]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={member.id}
              className="bg-white dark:bg-[#1a1f3a] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#dec0ad]/20 hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="text-white hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="text-white hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
                  <a href="#" className="text-white hover:text-accent transition-colors"><Mail className="h-5 w-5" /></a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-1">{member.name}</h3>
                <p className="text-secondary dark:text-[#dec0ad]/90 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 dark:text-[#dec0ad]/70 text-xs uppercase tracking-wider mb-4">{member.specialization}</p>
                <p className="text-gray-600 dark:text-[#dec0ad]/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
