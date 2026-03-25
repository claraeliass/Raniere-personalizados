import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder, Urban Threads",
    content: "The embroidery quality is insane. We've used other suppliers before, but Raniere's attention to detail on our complex logo was perfect. Fast shipping too.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Event Coordinator",
    content: "Needed 200 caps for a corporate retreat with only 2 weeks notice. They delivered early and the quality blew everyone away. Highly recommended.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Local Gym Owner",
    content: "Our members love the new merch. The snapbacks fit great and the 3D puff embroidery on our logo looks incredibly premium. Will be ordering again.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">What Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what brands and businesses have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-200 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-brand-red" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 text-lg italic">"{t.content}"</p>
              <div>
                <p className="font-bold uppercase tracking-wide">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
