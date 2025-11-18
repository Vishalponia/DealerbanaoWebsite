import React from "react";

// export default function DealerCards() {
//   const cards = [
//     {
//       title: "Find Dealers Easily",
//       desc: "Search dealers by category or location and connect instantly.",
//       img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       title: "Expand Your Network",
//       desc: "Grow your business by partnering with verified distributors.",
//       img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       title: "Build Partnerships",
//       desc: "Create long-term relationships that help you scale fast.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//         Trusted by Businesses Nationwide
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 ">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="rounded-2xl overflow-hidden shadow hover:transition hover:shadow-xl duration-300 bg-gray-300"
//           >
//              <    img src={card.img}   alt={card.title}  className="w-full h-56 object-cover "  />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-blue-700 mb-2  hover:text-red-500 cursor-pointer">{card.title}</h3>
//               <p className="text-black">{card.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





//import React from "react";
import { Link } from "react-router-dom";

export default function DealerCards() {
  const cards = [
    {
      title: "Find Dealers Easily",
      desc: "Search dealers by category or location and connect instantly.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
      link: "/find-dealers"
    },
    {
      title: "Expand Your Network",
      desc: "Grow your business by partnering with verified distributors.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
      link: "/expand-network"
    },
    {
      title: "Build Partnerships",
      desc: "Create long-term relationships that help you scale fast.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
      link: "/partnerships"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Trusted by Businesses Nationwide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow hover:shadow-xl hover:transition duration-300 bg-gray-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2 hover:text-red-500 cursor-pointer">
                <Link to="/query-form">{card.title}</Link>
              </h3>
              <p className="text-black">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
