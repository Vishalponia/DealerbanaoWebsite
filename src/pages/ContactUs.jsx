import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // hide success msg after 4 sec
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 min-h-screen px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#2c1f84]">
          Get in Touch With Us
        </h1>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you! Fill out the form or reach us through the contact details below.
        </p>
      </div>

      {/* Contact Container */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-md rounded-xl p-8">
        {/* Left: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#2c1f84] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#2c1f84] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#2c1f84] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#2c1f84] text-white px-6 py-2 rounded-md hover:bg-red-500 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2">
              Your message has been sent successfully!
            </p>
          )}
        </form>

        {/* Right: Contact Info + Map */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#2c1f84] mb-2">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-2">
              📍 <strong>Address:</strong> A-167, Sector 63, Noida, Uttar Pradesh, India
            </p>
            <p className="text-gray-700 mb-2">
              📞 <strong>Phone:</strong> +91 9876543210
            </p>
            <p className="text-gray-700">
              📧 <strong>Email:</strong> support@dealerbanao.com
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="DealerBanao Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.18652414638!2d77.3807905!3d28.6198368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9b4f0aef6b%3A0xdeadbeef!2sA-167%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1694692800000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
