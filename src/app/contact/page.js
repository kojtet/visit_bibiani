"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold text-vb-gold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vb-green focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vb-green focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vb-green focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-vb-green text-white py-2 px-4 rounded-lg hover:bg-vb-gold transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-vb-gold mb-4">Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-vb-green mb-2">Office Address</h3>
              <p className="text-gray-600">
                Bibiani Municipal Assembly<br />
                Western North Region<br />
                Ghana
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-vb-green mb-2">Contact Information</h3>
              <p className="text-gray-600">
                Phone: +233 XX XXX XXXX<br />
                Email: info@visitbibiani.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-vb-green mb-2">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="text-vb-gold hover:text-vb-green">
                  Facebook
                </a>
                <a href="#" className="text-vb-gold hover:text-vb-green">
                  Twitter
                </a>
                <a href="#" className="text-vb-gold hover:text-vb-green">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 h-64 bg-gray-200 rounded-lg"></div>
        </section>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/your-number"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
} 