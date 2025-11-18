import React from "react";

export default function Features() {
  const features = [
    {
      title: "Find Dealers Easily",
      desc: "Search verified dealers by product category and region in seconds.",
    },
    {
      title: "Expand Your Network",
      desc: "Grow your brand’s presence with trusted distributors across India.",
    },
    {
      title: "Simplify Communication",
      desc: "Directly connect with business partners through our platform.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Why Choose DealerBanao?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
