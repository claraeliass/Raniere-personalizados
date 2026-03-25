import { motion } from "motion/react";

const products = [
  {
    id: "trucker",
    name: "Trucker Caps",
    description: "Classic mesh back, perfect for events and casual wear.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "snapback",
    name: "Snapbacks",
    description: "Structured fit with flat visor. Streetwear favorite.",
    image: "https://images.unsplash.com/photo-1556306535-0f09a536f01f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dadhat",
    name: "Dad Hats",
    description: "Unstructured, curved visor. Comfortable and trendy.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "custom",
    name: "Custom Models",
    description: "Bucket hats, beanies, and fully custom shapes.",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
  },
];

export function ProductShowcase() {
  return (
    <section id="models" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Premium Models</h2>
          <p className="text-lg text-gray-600">
            Choose from our high-quality blanks, ready to be customized with your brand's logo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 overflow-hidden hover:border-brand-black transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 h-10">{product.description}</p>
                <a
                  href={`#quote?model=${product.id}`}
                  className="block w-full text-center border-2 border-brand-black text-brand-black py-3 font-bold text-sm hover:bg-brand-black hover:text-white transition-colors uppercase tracking-wider"
                >
                  Customize This
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
