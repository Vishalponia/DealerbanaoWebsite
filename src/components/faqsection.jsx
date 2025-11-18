import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Q1 - What is Dealerbanao.com?",
      answer:
        "Dealerbanao.com is an online platform that connects automobile dealers and customers for new and used vehicles.",
    },
    {
      question: "Q2 - Who is the Founder of Dealerbanao.com?",
      answer: "The Founder of Dealerbanao.com is POOJA SHARMA.",
    },
    {
      question: "Q3 - Who is the Co-Founder of Dealerbanao.com?",
      answer: "The Co-Founder of Dealerbanao.com is ANKUR BANSAL.",
    },
    {
      question: "Q4 - Why Dealerbanao.com?",
      answer:
        "Dealerbanao.com simplifies the vehicle buying and selling process by offering trusted dealer connections and transparent pricing.",
    },
    {
      question: "Q5 - Where is Dealerbanao.com available?",
      answer:
        "Dealerbanao.com is currently available in major cities across India and expanding rapidly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-12 bg-gray-50 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-red-600 mb-10 uppercase tracking-wide">
        FAQ
      </h2>

      {/* FAQ Items */}
      <div className="w-full max-w-3xl space-y-6 text-left">
        {faqs.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-900 flex justify-between items-center">
              {item.question}
              <span className="text-red-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>

            {/* Show Answer */}
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-2xl transition-all duration-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
