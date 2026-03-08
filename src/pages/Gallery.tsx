import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'Medical Camps', src: 'https://picsum.photos/seed/camp1/800/600', alt: 'Health checkup in progress' },
  { id: 2, category: 'Awareness', src: 'https://picsum.photos/seed/aware1/600/800', alt: 'Seminar on hygiene' },
  { id: 3, category: 'Workshops', src: 'https://picsum.photos/seed/work1/800/800', alt: 'First aid training' },
  { id: 4, category: 'Medical Camps', src: 'https://picsum.photos/seed/camp2/600/400', alt: 'Pharmacy distribution' },
  { id: 5, category: 'Awareness', src: 'https://picsum.photos/seed/aware2/800/600', alt: 'Community gathering' },
  { id: 6, category: 'Medical Camps', src: 'https://picsum.photos/seed/camp3/600/800', alt: 'Dental checkup' },
  { id: 7, category: 'Workshops', src: 'https://picsum.photos/seed/work2/800/600', alt: 'Volunteer training' },
  { id: 8, category: 'Medical Camps', src: 'https://picsum.photos/seed/camp4/800/800', alt: 'Eye camp' },
];

const categories = ['All', 'Medical Camps', 'Awareness', 'Workshops'];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#F7F7FF]/90"
          >
            Visual documentation of our impact and activities.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white dark:bg-[#1a1f3a] text-gray-600 dark:text-[#dec0ad] hover:bg-gray-100 dark:hover:bg-[#1a1f3a]/80 border border-gray-200 dark:border-[#dec0ad]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid (using CSS columns for simplicity) */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              key={image.id}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">{image.alt}</p>
                  <p className="text-blue-200 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="h-10 w-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
