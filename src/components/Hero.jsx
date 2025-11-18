import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-5 py-22 bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Grow Your Business with{" "}
          <span className="text-blue-600 hover:text-red-400 hover:cursor-pointer"
          >DealerBanao.Com
          </span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Find verified dealers, distributors, and business partners across India with ease.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Link to="/contact-us">
          Get Started
          </Link>
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=60"
          
          alt="Dealer Network"
          className="rounded-2xl shadow-lg w-95 md:w-[520px] object-cover transform transition duration-5000 hover:rotate-[360deg]"
        />
      </div>
    </section>
  );
}




// import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const VIDEO_ID = "gW22hVe5_fI"; // YouTube video ID

//   return (
//     <section className="relative flex items-center justify-center min-h-screen px-6 md:px-12 py-20 bg-gray-900 overflow-hidden">
//       {/* ✅ Responsive YouTube Background */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
//         <div className="relative w-full h-full">
//           <iframe
//             title="DealerBanao background video"
//             src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&showinfo=0&rel=0&fs=0&cc_load_policy=0&iv_load_policy=3&disablekb=1`}
//             allow="autoplay"
//             frameBorder="0"
//             allowFullScreen={false}
//             className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 md:w-[120%] md:h-[120%]"
//             style={{
//               objectFit: "cover",
//               border: "none",
//             }}
//           />
//         </div>
//       </div>

//       {/* Dark Overlay for readability */}
//       <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

//       {/* ✅ Main Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-20 text-center max-w-xl text-white px-4"
//       >
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           Grow Your Business with{" "}
//           <span className="text-blue-400 hover:text-red-400 cursor-pointer transition-colors duration-300">
//             DealerBanao.Com
//           </span>
//         </h1>

//         <p className="mt-4 text-base md:text-lg text-gray-200">
//           Connect with verified dealers, distributors, and business partners across India effortlessly.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
//         >
//           Get Started
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// }
