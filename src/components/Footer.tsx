import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#" className="font-display font-bold text-2xl tracking-tighter block mb-6">
              RANIERE<span className="text-brand-red">.</span>
            </a>
            <p className="text-gray-400 mb-6">
              Premium custom embroidered caps and headwear for brands, businesses, and events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#models" className="text-gray-400 hover:text-white transition-colors">Models</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#quote" className="text-gray-400 hover:text-white transition-colors">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-red mr-3 mt-0.5" />
                <a href="https://wa.me/1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567<br />
                  <span className="text-sm text-brand-red">Available on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-red mr-3 mt-0.5" />
                <a href="mailto:hello@ranierebordados.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@ranierebordados.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Location</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-red mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Embroidery Street<br />
                  Creative District<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Raniere Bordados. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
