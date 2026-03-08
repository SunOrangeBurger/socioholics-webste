import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Users } from 'lucide-react';

const values = [
  {
    title: 'Compassion',
    description: 'We approach every individual with empathy, understanding, and a genuine desire to help.',
    icon: Heart,
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our medical and community practices.',
    icon: Shield,
  },
  {
    title: 'Inclusivity',
    description: 'We believe healthcare is a right for all, regardless of background or socioeconomic status.',
    icon: Users,
  },
];

const timeline = [
  { year: '2018', title: 'Foundation', description: 'Socioholics was founded by a group of 5 medical students with a vision to serve.' },
  { year: '2019', title: 'First Major Camp', description: 'Organized our first multi-specialty health camp serving over 500 patients.' },
  { year: '2021', title: 'COVID-19 Relief', description: 'Distributed essential medical supplies and conducted awareness drives during the pandemic.' },
  { year: '2023', title: 'Expansion', description: 'Expanded operations to 3 new districts and grew our volunteer base to 200+.' },
  { year: '2025', title: 'Present Day', description: 'Continuing our mission with regular weekly outreach programs and specialized clinics.' },
];

export function About() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#27187E] dark:bg-[#1a1f3a] py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            About Socioholics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Discover our history, our purpose, and the values that drive us.
          </motion.p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
                <p>
                  Socioholics began in 2018 as a small initiative by a group of passionate medical students who noticed a stark disparity in healthcare access between urban centers and rural communities.
                </p>
                <p>
                  What started as weekend health check-ups has now blossomed into a full-fledged non-profit organization. We are a registered entity dedicated to providing free medical consultations, basic treatments, and health education to marginalized populations.
                </p>
                <p>
                  Our name, "Socioholics," reflects our addiction to social service. We are driven by the belief that medicine is not just a profession, but a calling to serve humanity.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://picsum.photos/seed/about1/400/500" alt="Volunteers" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/about2/400/500" alt="Medical Camp" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-700 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-600"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 text-secondary dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-300 mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
                To provide accessible, high-quality basic healthcare and health education to underprivileged communities, while fostering a spirit of service among medical professionals and students.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-700 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-600"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 text-secondary dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-300 mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
                A society where basic healthcare is universally accessible, and where every medical professional actively contributes to community well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-blue-300 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 text-secondary dark:text-blue-400">
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-blue-300 mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary dark:bg-gradient-to-br dark:from-blue-700 dark:to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="text-4xl font-bold text-accent dark:text-blue-300">{item.year}</span>
                </div>
                <div className="md:w-3/4 bg-white/10 dark:bg-white/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 dark:border-white/20">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100 dark:text-blue-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
