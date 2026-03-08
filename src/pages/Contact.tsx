import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#F7F7FF]/90"
          >
            Have questions or want to collaborate? We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-8">Get in Touch</h2>
            <p className="text-gray-600 dark:text-[#dec0ad]/80 text-lg mb-12 leading-relaxed">
              Whether you're interested in volunteering, partnering for an event, or simply want to learn more about our work, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 dark:bg-[#1a1f3a] p-4 rounded-2xl text-secondary dark:text-[#dec0ad] shrink-0">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-2">Our Location</h3>
                  <p className="text-gray-600 dark:text-[#dec0ad]/70 leading-relaxed">
                    123 Medical College Road,<br />
                    Health City, HC 12345<br />
                    State, Country
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 dark:bg-[#1a1f3a] p-4 rounded-2xl text-secondary dark:text-[#dec0ad] shrink-0">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-2">Phone Number</h3>
                  <p className="text-gray-600 dark:text-[#dec0ad]/70 leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 dark:bg-[#1a1f3a] p-4 rounded-2xl text-secondary dark:text-[#dec0ad] shrink-0">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-2">Email Address</h3>
                  <p className="text-gray-600 dark:text-[#dec0ad]/70 leading-relaxed">
                    contact@socioholics.org<br />
                    volunteer@socioholics.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1f3a] p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-[#dec0ad]/20"
          >
            <h2 className="text-2xl font-bold text-[#27187E] dark:text-[#dec0ad] mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-[#dec0ad]/80 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#dec0ad]/20 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white dark:bg-[#0e1531] dark:text-[#dec0ad]" placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#dec0ad]/80 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#dec0ad]/20 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white dark:bg-[#0e1531] dark:text-[#dec0ad]" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-[#dec0ad]/80 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#dec0ad]/20 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white dark:bg-[#0e1531] dark:text-[#dec0ad]" placeholder="How can we help?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-[#dec0ad]/80 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#dec0ad]/20 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none bg-white dark:bg-[#0e1531] dark:text-[#dec0ad]" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
