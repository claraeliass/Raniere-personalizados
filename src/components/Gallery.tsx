import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1556306535-0f09a536f01f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514866726862-0f081731e63f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=800&auto=format&fit=crop",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Our Work</h2>
            <p className="text-lg text-gray-400">
              Real photos of our embroidery. Notice the precision, density, and quality of the stitching.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-red font-bold hover:text-white transition-colors"
          >
            Follow on Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square overflow-hidden bg-gray-900 group"
            >
              <img
                src={src}
                alt="Embroidered cap gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
