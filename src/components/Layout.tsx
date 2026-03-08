import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex bg-[#F7F7FF] dark:bg-[#0e1531] transition-colors duration-300">
      <Navbar />
      <div className="flex-1 flex flex-col md:ml-20">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
