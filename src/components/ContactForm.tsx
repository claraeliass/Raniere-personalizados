import { useState, ChangeEvent, FormEvent } from "react";
import { Upload, Send } from "lucide-react";

export function ContactForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Quote request submitted! We will contact you via WhatsApp shortly.");
  };

  return (
    <section id="quote" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Get Your Quote</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below with your details and upload your logo. We'll get back to you with a custom quote and digital mockup within 24 hours.
            </p>
            
            <div className="bg-brand-gray p-8 border-l-4 border-brand-red">
              <h3 className="font-bold text-xl mb-2">Need it faster?</h3>
              <p className="text-gray-600 mb-4">Message us directly on WhatsApp for an immediate response.</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-red font-bold hover:text-brand-red-hover transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2 uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-black focus:ring-0 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2 uppercase">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-black focus:ring-0 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-bold text-gray-900 mb-2 uppercase">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-black focus:ring-0 transition-colors"
                    placeholder="e.g., 50"
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-bold text-gray-900 mb-2 uppercase">Preferred Model</label>
                  <select
                    id="model"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-black focus:ring-0 transition-colors appearance-none"
                  >
                    <option value="">Select a model...</option>
                    <option value="trucker">Trucker Cap</option>
                    <option value="snapback">Snapback</option>
                    <option value="dadhat">Dad Hat</option>
                    <option value="custom">Custom / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase">Upload Logo (Optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed hover:border-brand-red transition-colors bg-gray-50 relative">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-brand-red hover:text-brand-red-hover focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,.pdf,.ai,.eps" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF, AI up to 10MB</p>
                    {fileName && (
                      <p className="text-sm font-bold text-brand-black mt-2">Selected: {fileName}</p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center bg-brand-red text-white px-8 py-4 font-bold text-lg hover:bg-brand-red-hover transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
