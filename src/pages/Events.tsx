import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const eventsData = [
  {
    id: 'rural-health-camp-2025',
    title: 'Rural Health Camp 2025',
    date: 'March 15, 2025',
    time: '09:00 AM - 04:00 PM',
    location: 'Village Community Center, District X',
    description: 'Providing free medical checkups and basic medications to the underserved rural community. We will have specialists in general medicine, pediatrics, and dentistry.',
    image: 'https://picsum.photos/seed/healthcamp/800/600',
    status: 'Upcoming',
  },
  {
    id: 'blood-donation-drive',
    title: 'Annual Blood Donation Drive',
    date: 'April 2, 2025',
    time: '10:00 AM - 05:00 PM',
    location: 'City Hospital Main Hall',
    description: 'Join us for our annual blood donation drive in collaboration with the city hospital. Your single donation can save up to three lives.',
    image: 'https://picsum.photos/seed/blooddonation/800/600',
    status: 'Upcoming',
  },
  {
    id: 'mental-health-awareness',
    title: 'Mental Health Awareness Seminar',
    date: 'May 10, 2025',
    time: '02:00 PM - 05:00 PM',
    location: 'University Auditorium',
    description: 'A seminar focusing on mental health awareness among college students, featuring guest speakers from the psychiatry department.',
    image: 'https://picsum.photos/seed/mentalhealth/800/600',
    status: 'Upcoming',
  },
  {
    id: 'winter-relief-drive',
    title: 'Winter Medical Relief Drive',
    date: 'December 15, 2024',
    time: '08:00 AM - 06:00 PM',
    location: 'Northern District Slums',
    description: 'Distributed winter clothing and provided medical care for cold-related illnesses to over 500 individuals.',
    image: 'https://picsum.photos/seed/winterrelief/800/600',
    status: 'Past',
  },
];

export function Events() {
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
            Our Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#F7F7FF]/90"
          >
            Join us in our upcoming initiatives or browse our past impact.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1f3a] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#dec0ad]/20 flex flex-col hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  event.status === 'Upcoming' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {event.status}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-4 group-hover:text-secondary transition-colors">
                  <Link to={`/events/${event.id}`}>{event.title}</Link>
                </h3>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-[#dec0ad]/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-[#dec0ad]/70 mb-6 flex-grow line-clamp-3">{event.description}</p>
                
                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-xl text-secondary bg-blue-50 hover:bg-blue-100 transition-colors mt-auto"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
