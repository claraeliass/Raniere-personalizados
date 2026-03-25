import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-24 bg-brand-red text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">
            Ready to Create Your Custom Caps?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Prices start from <span className="font-bold underline decoration-4 underline-offset-4">R$ 35,00</span> per unit.
            <br className="hidden md:block" />
            <span className="text-lg opacity-80 mt-2 block">Massive discounts available for bulk orders.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-brand-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-900 transition-colors group w-full sm:w-auto"
            >
              Request a Quote Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm font-medium opacity-80 mt-4 sm:mt-0 sm:ml-4">
              ✓ Fast response<br />
              ✓ No obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
