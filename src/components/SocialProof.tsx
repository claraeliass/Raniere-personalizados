import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="bg-brand-red py-6 border-y border-brand-red-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-brand-red object-cover"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Customer"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-300" />
                ))}
              </div>
              <p className="text-sm font-medium mt-0.5">Trusted by +500 clients</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/20" />
          
          <div className="flex items-center gap-8 opacity-80 grayscale invert brightness-0">
            {/* Placeholder logos for brands/clients */}
            <div className="font-display font-bold text-xl">STREETWEAR CO.</div>
            <div className="font-display font-bold text-xl">LOCAL GYM</div>
            <div className="font-display font-bold text-xl">TECH STARTUP</div>
            <div className="font-display font-bold text-xl hidden lg:block">EVENT PROS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
