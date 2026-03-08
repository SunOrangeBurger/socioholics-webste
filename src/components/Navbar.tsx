import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Home, Users, Calendar, BookOpen, Image, Mail, UserPlus, Info } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ThemeSwitch from './ThemeSwitch';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Members', path: '/members', icon: Users },
  { name: 'Events', path: '/events', icon: Calendar },
  { name: 'Blog', path: '/blog', icon: BookOpen },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed left-0 top-0 h-screen z-50 group">
        {/* Collapsed sidebar */}
        <div className="h-full w-20 bg-[#27187E] dark:bg-[#0e1531] shadow-2xl transition-all duration-300 group-hover:w-64">
          <div className="flex flex-col h-full py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 px-6 mb-8 group/logo">
              <HeartPulse className="h-8 w-8 text-white flex-shrink-0 group-hover/logo:scale-110 transition-transform" />
              <span className="font-heading font-bold text-lg text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Socioholics
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex-1 space-y-1 px-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group/item",
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="px-3 space-y-3">
              {/* Theme Switch - Only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center px-3 py-2">
                <ThemeSwitch />
              </div>
              
              {/* Join Button */}
              <Link
                to="/join"
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#F7F7FF] dark:bg-white text-[#27187E] dark:text-[#0e1531] hover:bg-white dark:hover:bg-gray-100 transition-all shadow-md group/join"
              >
                <UserPlus className="h-5 w-5 flex-shrink-0" />
                <span className="whitespace-nowrap font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Join Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="md:hidden sticky top-0 z-50 w-full bg-[#27187E] dark:bg-[#0e1531] shadow-lg">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-white" />
            <span className="font-heading font-bold text-xl text-white">Socioholics</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 py-3 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-colors",
                      isActive
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#F7F7FF] dark:bg-white text-[#27187E] dark:text-[#0e1531] text-base font-semibold hover:bg-white transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                Join Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
