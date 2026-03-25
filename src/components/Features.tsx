import { CheckCircle2, Zap, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "High-Quality Stitching",
    description: "We use premium threads and state-of-the-art machines for dense, vibrant, and durable embroidery.",
  },
  {
    icon: Zap,
    title: "Fast Production",
    description: "Tight deadline? No problem. We pride ourselves on quick turnaround times without sacrificing quality.",
  },
  {
    icon: CheckCircle2,
    title: "Durable Materials",
    description: "Our caps are sourced from top manufacturers, ensuring they look great and last long.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "You're not just an order number. We work closely with you to ensure your vision comes to life perfectly.",
  },
];

export function Features() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              Why Choose <br />
              <span className="text-brand-red">Raniere Bordados</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We specialize exclusively in custom headwear. This focus allows us to deliver unmatched quality and expertise for your brand or event.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1000&auto=format&fit=crop"
                alt="Embroidery detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-red -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-brand-black -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
