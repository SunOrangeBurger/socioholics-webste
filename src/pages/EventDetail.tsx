import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowLeft, Users, Activity } from 'lucide-react';
import { eventsData } from './Events';

export function EventDetail() {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Event not found</h2>
          <Link to="/events" className="text-secondary hover:underline">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Banner */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {event.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base"
            >
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Calendar className="h-4 w-4" /> {event.date}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Clock className="h-4 w-4" /> {event.time}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <MapPin className="h-4 w-4" /> {event.location}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">About This Event</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {event.description}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            {/* Photo Gallery Placeholder */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Event Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                <img src={`https://picsum.photos/seed/${event.id}1/400/300`} alt="Gallery 1" className="rounded-xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <img src={`https://picsum.photos/seed/${event.id}2/400/300`} alt="Gallery 2" className="rounded-xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4">Impact Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-secondary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Target Audience</p>
                    <p className="font-semibold text-primary">500+ Patients</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-secondary">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Services</p>
                    <p className="font-semibold text-primary">General Checkup, Meds</p>
                  </div>
                </li>
              </ul>
            </div>

            {event.status === 'Upcoming' && (
              <div className="bg-primary p-6 rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold mb-2">Want to help?</h3>
                <p className="text-blue-100 text-sm mb-6">We are always looking for volunteers for our upcoming events.</p>
                <Link to="/join" className="block w-full py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                  Register as Volunteer
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
