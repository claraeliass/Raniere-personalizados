import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Models", href: "#models" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-display font-bold text-2xl tracking-tighter">
              RANIERE<span className="text-brand-red">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-brand-black text-white px-6 py-2.5 rounded-none font-medium text-sm hover:bg-brand-red transition-colors"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black hover:text-brand-red transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-red text-white px-6 py-4 rounded-none font-bold text-base"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
