import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200  py-10">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left Logo */}
          <div className="flex flex-col items-start">
            <img
              src="https://dealerbanao.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-05-28-at-10.38.35-AM-1-400x400.jpeg"
              alt="Dealerbanao Logo"
              className="w-40 mb-3  cursor-pointer"
            />
            <p className="text-gray-700 font-semibold  cursor-pointer text-lg hover:text-red-500">
              DEALERBANAO.COM
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-between w-full md:w-3/4">
            {/* Listings */}
            <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-3  cursor-pointer border-b-2 border-red-500 inline-block">
                Listings
              </h3>
              <ul className="space-y-2 text-black text-xl cursor-pointer">
                 <li className="hover:text-red-500"><Link to="/fmcg-products">› FMCG PRODUCTS</Link></li>
               {/* </ul> <li className="hover:text-red-500" <Link to="/fmcg-products"> >› FMCG PRODUCTS</li></Link> */}
                <li className="hover:text-red-500"><Link to="/ev-manufacturer" >› EV Manufacturer</Link></li>
                <li className="hover:text-red-500"><Link to="/solar-energy">› Solar Energy</Link></li>
                <li className="hover:text-red-500"><Link to="/kitchen-appliances">› Kitchen Appliances</Link></li>
                <li className="hover:text-red-500"><Link to="/ev-manufacturer">› EV manufacturer</Link></li>
               </ul> 
            </div>

            {/* Blog */}
            <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-3  cursor-pointer border-b-2 border-red-500 inline-block">
                Blog
              </h3>
              <ul className="space-y-2 cursor-pointer text-black text-xl">
                <li className="hover:text-red-500">› Blog</li>
                <li className="hover:text-red-500">› Ideas</li>
                <li className="hover:text-red-500">›  Mitti  Manufacturers</li>
                <li className="hover:text-red-500">› Tips</li>
                <li className="hover:text-red-500">› Trends</li>
              </ul>
            </div>

            {/* Social */}
            <div className="w-1/2 md:w-1/4">
              <h3 className="text-lg font-bold mb-3 border-b-2 cursor-pointer border-red-500 inline-block">
                Social
              </h3>
              <ul className="space-y-2 cursor-pointer text-black text-xl">
                <li className="hover:text-red-500"><Link to="https://www.facebook.com/dealerbanao/" >› facebook</Link></li>
                <li className="hover:text-red-500"><Link to="https://x.com/dealerbanao/" >› Twitter</Link></li>
                <li className="hover:text-red-500"><Link to="https://www.linkedin.com/feed/dealerbanao/" >› LinkedIn</Link>n</li>
                <li className="hover:text-red-500"><Link to="https://in.pinterest.com/dealerbanao/" >› Pintrest</Link></li>
                <li className="hover:text-red-500"><Link to="https://www.instagram.com/dealerbanao/" >› Instagram</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2025 Copyright Dealerbanao. All Rights Reserved</p>
          <div className="space-x-4">
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Term & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


