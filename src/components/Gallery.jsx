// import React from "react";

// export default function Gallery() {
//   const images = [
//     "https://dealerbanao.com/wp-content/uploads/2024/10/2-1.webp",
//     "https://dealerbanao.com/wp-content/uploads/2024/10/1-2.webp",
//     "https://dealerbanao.com/wp-content/uploads/2024/10/Add-a-subheading-2024-10-17T102119.288.webp",
//     "https://dealerbanao.com/wp-content/uploads/2024/11/For-Dealer-2.jpg",
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//         Our Business Gallery
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Gallery ${i + 1}`}
//             className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useState, useEffect } from "react";

export default function Gallery() {
  // 4 cards → each has 3 images
  const galleryData = [
    [
      "https://dealerbanao.com/wp-content/uploads/2024/10/2-1.webp",
      "https://dealerbanao.com/wp-content/uploads/2024/10/5-1.webp",
      "https://dealerbanao.com/wp-content/uploads/2024/10/1-2.webp",
    ],
    [
      "https://dealerbanao.com/wp-content/uploads/2024/09/4-1.webp",
      "https://dealerbanao.com/wp-content/uploads/2024/09/1-1.webp",
      "https://dealerbanao.com/wp-content/uploads/2024/09/5-1.webp",
    ],
    [
      "https://dealerbanao.com/wp-content/uploads/2024/09/Add-a-subheading-26.png",
      "https://dealerbanao.com/wp-content/uploads/2024/10/Add-a-subheading-2024-10-17T102119.288.webp",
      "https://dealerbanao.com/wp-content/uploads/2024/11/For-Dealer-2.jpg",
    ],
    [
      "https://dealerbanao.com/wp-content/uploads/2024/11/For-Dealer-1-1.jpg",
      "https://dealerbanao.com/wp-content/uploads/2024/10/Add-a-subheading-2024-10-17T103610.457.png",
      "https://dealerbanao.com/wp-content/uploads/2024/10/Add-a-subheading-2024-10-11T111645.537.png",
    ],
  ];

  const [indexes, setIndexes] = useState([0, 0, 0, 0]); // Track current image for each card

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((index, i) => (index + 1) % galleryData[i].length)
      );
    }, 5000); // Change every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-black mb-10">
        Our Business Gallery
      </h2>

      {/* 2x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {galleryData.map((images, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={images[indexes[i]]}
              alt={`Gallery ${i + 1}`}
              className="w-full h-80 object-fit  transition-opacity duration-700 ease-in-out"
            />

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div> 
          </div>
        ))}
      </div>
    </section>
  );
}
