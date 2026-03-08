import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Members } from './pages/Members';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Gallery } from './pages/Gallery';
import { Join } from './pages/Join';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="members" element={<Members />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="join" element={<Join />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
