import { Link } from 'react-router-dom';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <HeartPulse className="h-8 w-8 text-accent" />
              <span className="font-heading font-bold text-2xl tracking-tight">Socioholics</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Service Through Medicine. We are a community of medical professionals and students dedicated to making healthcare accessible to all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors text-sm">Our Events</Link></li>
              <li><Link to="/members" className="text-gray-300 hover:text-white transition-colors text-sm">Members</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-3">
              <li><Link to="/join" className="text-gray-300 hover:text-white transition-colors text-sm">Volunteer</Link></li>
              <li><Link to="/join" className="text-gray-300 hover:text-white transition-colors text-sm">Partner with Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Medical College Road,<br />Health City, HC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@socioholics.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Socioholics. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
