// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X,Home } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Contact Us", path: "/contact-us" },
//     { name: "FMCG Products", path: "/fmcg-products" },
//     { name: "Shoes & Slippers", path: "/shoes-slippers" },
//     { name: "Kitchen Appliances", path: "/kitchen-appliances" },
//     { name: "Solar Energy", path: "/solar-energy" },
//     { name: "Home Appliances", path: "/home-appliances" },
//     { name: "EV Manufacturer", path: "/ev-manufacturer" },
//   ];

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-3">
//         {/* LEFT — Logo */}
//         <Link to="/" className="flex items-center gap-3 shrink-0">
//           <img
//             src="https://dealerbanao.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-05-28-at-10.38.35-AM-1-400x400.jpeg"
//             alt="DealerBanao Logo"
//             className="h-14 w-14 rounded-full object-cover border-2 border-[#2c1f84] shadow-sm"
//           />
//           <span className="text-xl md:text-2xl font-bold text-[#2c1f84] whitespace-nowrap">
//             <span className="text-red-600">DEALER</span>BANAO.COM
//           </span>
//         </Link>

//         {/* CENTER — Nav Links (Desktop) */}
//         <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium ml-10">
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               to={link.path}
//               className="flex items-center gap-2 hover:text-red-500 transition"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name === "Home" && (
//                 <Home size={18} className="inline-block text-[#2c1f84]" />
//               )}
//               <span>{link.name}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* RIGHT — Sign In */}
//         <div className="hidden lg:flex">
//           <button
//             onClick={() => (window.location.href = "/login")}
//             className="px-6 py-2 rounded-md bg-[#2c1f84] text-white font-semibold hover:bg-red-500 transition-all duration-300 shadow-sm"
//           >
//             Sign In
//           </button>
//         </div>

//         {/* MOBILE MENU TOGGLE */}
//         <button
//           className="lg:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="lg:hidden bg-white border-t shadow-inner">
//           <div className="flex flex-col px-6 py-3 space-y-2 text-gray-700 font-medium">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className="flex items-center gap-2 py-2 hover:text-red-500 transition"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.name === "Home" && (
//                   <Home size={18} className="inline-block text-[#2c1f84]" />
//                 )}
//                 <span>{link.name}</span>
//               </Link>
//             ))}
//             <button
//               onClick={() => (window.location.href = "/login")}
//               className="mt-3 px-6 py-2 rounded-md bg-[#2c1f84] text-white font-medium hover:bg-red-500 transition"
//             >
//               Sign In
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, LogIn, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpenDesktop, setServiceOpenDesktop] = useState(false);
  const [serviceOpenMobile, setServiceOpenMobile] = useState(false);
  const dropdownRef = useRef(null);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "FMCG Products", path: "/fmcg-products" },
    { name: "Solar Energy", path: "/solar-energy" },
  ];

  const serviceLinks = [
    { name: "Shoes & Slippers", path: "/shoes-slippers" },
    { name: "Kitchen Appliances", path: "/kitchen-appliances" },
    { name: "Home Appliances", path: "/home-appliances" },
    { name: "EV manufacturer", path: "/ev-manufacturer" },
  ];

  // ✅ Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpenDesktop(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 md:px-8 ">
        {/* LEFT — Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://dealerbanao.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-05-28-at-10.38.35-AM-1-400x400.jpeg"
            alt="DealerBanao Logo"
            className="h-12 w-12 rounded-full object-cover border border-[#2c1f84]"
          />
          <span className="text-lg md:text-xl font-bold text-[#2c1f84]">
            <span className="text-red-600">DEALER</span>BANAO.COM
          </span>
        </Link>

        {/* RIGHT — Nav Links + Sign In */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium text-xl">
            {mainLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-red-500 transition"
              >
                {link.name === "Home" && (
                  <Home size={16} className="inline mr-1 text-[#2c1f84]" />
                )}
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-xl gap-1 hover:text-red-500 transition"
                onClick={() => setServiceOpenDesktop(!serviceOpenDesktop)}
              >
                Services <ChevronDown size={16} />
              </button>
              {serviceOpenDesktop && (
                <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md py-2 w-56">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                      onClick={() => setServiceOpenDesktop(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Sign In Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => (window.location.href = "/login")}
              className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#2c1f84] text-white text-xl font-semibold hover:bg-red-500 transition-all duration-300 shadow-sm"
            >
              <LogIn size={16} />
              <span>Sign In</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-inner">
          <div className="flex flex-col px-6 py-3 space-y-2 text-gray-700 font-medium text-sm">
            {mainLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="py-2 hover:text-red-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Services collapsible (Mobile) */}
            <div>
              <button
                onClick={() => setServiceOpenMobile(!serviceOpenMobile)}
                className="w-full flex justify-between items-center py-2 hover:text-red-500"
              >
                Services <ChevronDown size={16} />
              </button>
              {serviceOpenMobile && (
                <div className="pl-4 space-y-1">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block py-1 hover:text-red-500 transition"
                      onClick={() => {
                        setServiceOpenMobile(false);
                        setMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In */}
            <button
              onClick={() => (window.location.href = "/login")}
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-md bg-[#2c1f84] text-white text-sm font-medium hover:bg-red-500 transition"
            >
              <LogIn size={16} />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
