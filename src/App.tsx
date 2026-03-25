/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { ProductShowcase } from "./components/ProductShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Gallery } from "./components/Gallery";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { PricingCTA } from "./components/PricingCTA";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProductShowcase />
        <HowItWorks />
        <Gallery />
        <Features />
        <Testimonials />
        <PricingCTA />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

