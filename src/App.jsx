// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/hero.jsx";
// import DealerCards from "./components/DealerCards";
// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
// import Contact from "./components/contactus.jsx";
// import TopCategories from "./components/categories";
// import FAQSection from "./components/faqsection.jsx";
// import CustomerReviews from "./components/customerreview.jsx";
// import WhatsAppButton from "./components/WhatsAppButton.jsx";
// import DealerBanaoBanner from "./components/Banner.jsx";
// export default function App() {
//   return (
//     <div className="font-sans bg-gray-50">
//       <Navbar />
//       <Hero />
//       <DealerCards />
//       <TopCategories />
//       <Gallery />
//       <DealerBanaoBanner />
//       <CustomerReviews />
//       <FAQSection />
//       <WhatsAppButton />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }















import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/hero.jsx";
import DealerCards from "./components/DealerCards";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/contactus.jsx";
import TopCategories from "./components/categories";
import FAQSection from "./components/faqsection.jsx";
import CustomerReviews from "./components/customerreview.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import DealerBanaoBanner from "./components/Banner.jsx";

// Pages
import FmcgProducts from "./pages/FmcgProducts";
import ShoesAndSlippers from "./pages/ShoesAndSlippers.jsx";
import KitchenAppliances from "./pages/KitchenAppliances.jsx";
import SolarEnergy from "./pages/SolarEnergy.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import HomeAppliances from "./pages/HomeAppliances.jsx";
import EVManufacturer from "./pages/EVManufacturer.jsx";
import Login from "./pages/login.jsx";
import Queryform from "./pages/Queryform.jsx"

export default function App() {
  return (
    <div className="font-sans bg-gray-50">
      {/* 🔹 Navbar always visible */}
      <Navbar />

      {/* 🔹 All page routes */}
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DealerCards />
              <TopCategories />
              <Gallery />
              <DealerBanaoBanner />
              <CustomerReviews />
              <FAQSection />
              <WhatsAppButton />
              <Contact />
              <Footer />
            </>
          }
        />
          <Route path="/contact-us" element={<ContactUs />} />
        {/*  FMCG Products Page */}
        <Route path="/fmcg-products" element={<FmcgProducts />} />

        {/*  Shoes & Slippers Page */}
        <Route
          path="/shoes-slippers"
          element={<ShoesAndSlippers />}
        />

        {/*  Kitchen Appliances Page */}
        <Route
          path="/kitchen-appliances"
          element={<KitchenAppliances />}
        />

        {/* Solar Energy Page */}
        <Route
          path="/solar-energy"
          element={<SolarEnergy />}
        />

        {/*  Home Appliances Page */}
        <Route
          path="/home-appliances"
          element={<HomeAppliances />}
        />

        {/*  EV Manufacturer Page */}
       <Route
          path="/ev-manufacturer"
          element={<EVManufacturer />}
        />

          <Route path="/login" element={<Login />} />

          <Route path="/query-form" element={<Queryform />} />

          
       
      </Routes>

     
    </div>
  );
}
