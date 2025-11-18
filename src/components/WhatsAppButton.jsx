import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // npm install react-icons if not installed

export default function WhatsAppButton() {
  const phoneNumber = "8076151724"; // 👉 Replace with your WhatsApp number (with country code, no + sign)
  const message = "Hello! I’d like to know more about DealerBanao.com"; // optional

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
