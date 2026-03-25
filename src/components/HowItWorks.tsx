import { Upload, Eye, Scissors, Truck } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Upload,
    title: "1. Send Your Logo",
    description: "Upload your design or logo. We accept most formats (PNG, JPG, Vector).",
  },
  {
    icon: Eye,
    title: "2. Get a Preview",
    description: "We'll create a digital mockup so you can see exactly how it looks before production.",
  },
  {
    icon: Scissors,
    title: "3. Production",
    description: "Our machines get to work. Premium stitching on high-quality caps.",
  },
  {
    icon: Truck,
    title: "4. Delivery",
    description: "Fast shipping straight to your door, ready to be worn or sold.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">How It Works</h2>
          <p className="text-lg text-gray-600">
            Four simple steps to get your custom embroidered caps. Fast, easy, and professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-brand-black text-white rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
