import { motion } from 'motion/react';
import { ArrowRight, Activity, Users, Calendar, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Patients Served', value: '10,000+', icon: Activity },
  { label: 'Medical Camps', value: '50+', icon: Calendar },
  { label: 'Active Volunteers', value: '200+', icon: Users },
  { label: 'Lives Impacted', value: '25,000+', icon: Heart },
];

const featuredEvents = [
  {
    id: 1,
    title: 'Rural Health Camp 2025',
    date: 'March 15, 2025',
    description: 'Providing free medical checkups and basic medications to the underserved rural community.',
    image: 'https://picsum.photos/seed/healthcamp/600/400',
  },
  {
    id: 2,
    title: 'Blood Donation Drive',
    date: 'April 2, 2025',
    description: 'Annual blood donation drive in collaboration with the city hospital.',
    image: 'https://picsum.photos/seed/blooddonation/600/400',
  },
  {
    id: 3,
    title: 'Mental Health Awareness',
    date: 'May 10, 2025',
    description: 'A seminar focusing on mental health awareness among college students.',
    image: 'https://picsum.photos/seed/mentalhealth/600/400',
  },
];

const latestBlogs = [
  {
    id: 1,
    title: 'The Importance of Preventive Healthcare',
    date: 'March 1, 2025',
    author: 'Dr. Sarah Jenkins',
    preview: 'Preventive healthcare is crucial in reducing the burden of chronic diseases. Learn how simple lifestyle changes can make a big difference.',
    image: 'https://picsum.photos/seed/preventive/400/300',
  },
  {
    id: 2,
    title: 'My Experience Volunteering at the Rural Camp',
    date: 'February 15, 2025',
    author: 'John Doe, Med Student',
    preview: 'A first-hand account of the challenges and rewards of providing medical care in remote areas.',
    image: 'https://picsum.photos/seed/volunteerblog/400/300',
  },
  {
    id: 3,
    title: 'Understanding Basic First Aid',
    date: 'January 28, 2025',
    author: 'Jane Smith, RN',
    preview: 'Essential first aid skills everyone should know to handle common emergencies effectively.',
    image: 'https://picsum.photos/seed/firstaid/400/300',
  },
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#27187E] dark:bg-[#1a1f3a] text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medicalbg/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
              Socioholics
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/90 dark:text-blue-100 mb-10">
              Service Through Medicine
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-[#27187E] dark:text-primary bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white border-2 border-white/30 hover:bg-white/10 transition-colors"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-white dark:bg-[#1a1f3a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 dark:text-[#dec0ad] mb-8 leading-relaxed">
                Socioholics is a dedicated community of medical professionals, students, and volunteers committed to bridging the gap in healthcare accessibility. We believe that quality healthcare is a fundamental right, not a privilege. Through medical camps, awareness drives, and community outreach, we strive to make a tangible difference in the lives of the underserved.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-secondary dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Read our full story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/aboutsnapshot/800/600"
                  alt="Volunteers at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-700 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-slate-600">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/50 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-secondary dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 font-medium uppercase tracking-wider">Founded In</p>
                    <p className="text-2xl font-bold text-primary dark:text-blue-300">2018</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 text-secondary dark:text-blue-400 mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-primary dark:text-blue-300 mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-slate-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-blue-300 mb-4">Featured Events</h2>
              <p className="text-gray-600 dark:text-slate-300 max-w-2xl text-lg">Join us in our upcoming initiatives and be part of the change.</p>
            </div>
            <Link
              to="/events"
              className="hidden md:inline-flex items-center text-secondary dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              View all events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary dark:text-blue-300">
                    {event.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary dark:text-blue-300 mb-3 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">{event.title}</h3>
                  <p className="text-gray-600 dark:text-slate-300 mb-6 flex-grow">{event.description}</p>
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center text-sm font-semibold text-secondary dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
             <Link
              to="/events"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-secondary dark:text-blue-300 bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/70 transition-colors"
            >
              View all events
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-blue-300 mb-4">Latest Insights</h2>
              <p className="text-gray-600 dark:text-slate-300 max-w-2xl text-lg">Read about our experiences, medical tips, and community stories.</p>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center text-secondary dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Read all posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-600 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 mb-3 font-medium uppercase tracking-wider">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-blue-300 mb-3 leading-snug hover:text-secondary dark:hover:text-blue-400 transition-colors">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm mb-6 flex-grow">{blog.preview}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-sm font-semibold text-secondary dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Whether you're a medical professional, a student, or someone who just wants to help, there's a place for you at Socioholics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-primary bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
