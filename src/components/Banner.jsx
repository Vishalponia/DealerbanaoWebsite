// import React from "react";

// const DealerBanaoBanner = () => {
//   return (
//     <div className="flex justify-center items-center w-full bg-white py-6 px-2 gap-6">
//       {/* LEFT — Bigger Banner (2x width) */}
//       <div className="flex-[2] h-48 rounded-xl overflow-hidden shadow-lg">
//         <img
//           src="https://dealerbanao.com/wp-content/uploads/2024/09/Untitled-design-7-2-768x77.png"
//           alt="Grow Business Banner"
//           className="w-full h-full object-contain"
//         />
//       </div>

//       {/* RIGHT — Smaller Flipping Logo */}
//       <div className="flex-[1] flex justify-center items-center">
//         <div className="w-32 h-32 [perspective:1000px] flex justify-center items-center">
//           <div className="relative w-28 h-28 [transform-style:preserve-3d] animate-[flip_2s_linear_infinite]">
//             <img
//               src="https://vectorseek.com/wp-content/uploads/2023/09/Patanjali-Logo-Vector.svg-.png"
//               alt="Patanjali Logo"
//               className="absolute w-full h-full object-contain [backface-visibility:hidden]"
//             />
//           </div>
//         </div>
//       </div>

//       {/*  Inline Keyframes (no Tailwind config edits) */}
//       <style>
//         {`
//           @keyframes flip {
//             0% { transform: rotateY(0deg); }
//             50% { transform: rotateY(180deg); }
//             100% { transform: rotateY(360deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default DealerBanaoBanner;







import React from "react";

const DealerBanaoBanner = () => {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
      {/* LEFT — Banner */}
      <div className="w-full md:w-2/3 rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://dealerbanao.com/wp-content/uploads/2024/09/Untitled-design-7-2-768x77.png"
          alt="Grow Business Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT — Flipping Logo */}
      <div className="w-40 h-40 md:w-48 md:h-48 flex justify-center items-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 [transform-style:preserve-3d] animate-[flip_3s_linear_infinite]">
          <img
            src="https://vectorseek.com/wp-content/uploads/2023/09/Patanjali-Logo-Vector.svg-.png"
            alt="Patanjali Logo"
            className="absolute w-full h-full object-contain [backface-visibility:hidden]"
          />
        </div>
      </div>

      {/* Inline Animation */}
      <style>
        {`
          @keyframes flip {
            0% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
            100% { transform: rotateY(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default DealerBanaoBanner;
