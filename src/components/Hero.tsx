import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2000&auto=format&fit=crop"
          alt="Embroidery machine stitching a cap"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/20 text-brand-red font-semibold text-sm mb-6 border border-brand-red/30 uppercase tracking-wider">
              Premium Custom Headwear
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]"
          >
            YOUR BRAND,<br />
            <span className="text-brand-red">STITCHED</span> TO PERFECTION.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl text-balance"
          >
            High-quality custom embroidered caps for businesses, brands, and events. Fast turnaround, premium materials, and flawless detail.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-brand-red text-white px-8 py-4 font-bold text-lg hover:bg-brand-red-hover transition-colors group"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#models"
              className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 font-bold text-lg hover:bg-white hover:text-brand-black transition-colors"
            >
              View Models
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
