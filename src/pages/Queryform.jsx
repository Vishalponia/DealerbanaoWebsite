import React from "react";


export default function CinematicForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-xl rounded-2xl shadow-2xl bg-gradient-to-b from-yellow-200 via-orange-300 to-red-400 p-4 sm:p-6 relative overflow-hidden">
        {/* Close Button */}
        <button className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 bg-teal-500 text-white text-xs sm:text-sm rounded-md shadow-lg hover:bg-teal-600 transition cursor-pointer">
          CLOSE
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-black mb-4 drop-shadow-lg">
          What are you looking ?
        </h2>

        {/* Checkboxes */}
        <div className="flex items-center gap-4 mb-6 text-black font-medium">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            I am looking for distributor
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            I want to become a distributor
          </label>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-black font-semibold">Full Name *</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mt-1 p-3 rounded-md bg-white/90 backdrop-blur shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="text-black font-semibold">Mobile Number *</label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full mt-1 p-3 rounded-md bg-white/90 backdrop-blur shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Company Name */}
        <div className="mb-1">
          <label className="text-black font-semibold">Company Name *</label>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full mt-1 p-3 rounded-md bg-white/90 backdrop-blur border border-red-500 shadow-md focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>
       

        {/* Requirement */}
        <div className="mb-1">
          <label className="text-black font-semibold">Requirement *</label>
          <textarea
            placeholder="Type Your Requirement"
            className="w-full mt-1 p-3 rounded-md bg-white/90 backdrop-blur border border-red-500 shadow-md h-20 focus:ring-2 focus:ring-red-500 outline-none"
          ></textarea>
        </div>
       

        {/* Button */}
        <button className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300">
          Send Proposal
        </button>
      </div>
    </div>
  );
}
