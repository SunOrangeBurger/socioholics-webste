import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake, ShieldCheck, GraduationCap } from 'lucide-react';

const roles = [
  {
    title: 'Medical Professionals',
    icon: ShieldCheck,
    description: 'Doctors, nurses, and specialists needed for consultations and treatments during our camps.',
  },
  {
    title: 'Medical Students',
    icon: GraduationCap,
    description: 'Gain hands-on experience by assisting senior doctors and managing patient flow.',
  },
  {
    title: 'General Volunteers',
    icon: HeartHandshake,
    description: 'Help with logistics, registration, crowd management, and awareness campaigns.',
  },
];

export function Join() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#27187E] dark:bg-[#1a1f3a] py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Socioholics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Become a part of our mission to make healthcare accessible to all.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Why Join & Roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Why Volunteer With Us?</h2>
            <ul className="space-y-4 mb-12">
              {[
                'Make a tangible impact on underserved communities.',
                'Network with like-minded medical professionals.',
                'Gain valuable field experience (for students).',
                'Develop leadership and organizational skills.',
                'Receive a certificate of appreciation for your service.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">Available Roles</h2>
            <div className="space-y-6">
              {roles.map((role, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl text-secondary shrink-0">
                    <role.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{role.title}</h3>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-8">Volunteer Application</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Interested Role</label>
                <select id="role" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Select a role...</option>
                  <option value="professional">Medical Professional</option>
                  <option value="student">Medical Student</option>
                  <option value="general">General Volunteer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join us?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us a bit about yourself..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                Submit Application
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
