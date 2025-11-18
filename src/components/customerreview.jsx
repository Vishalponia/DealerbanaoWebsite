import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerReviews = () => {
  const reviews = [
    {
      category: "Electronic",
      name: "Komal",
      range: "₹20 Lac – 30 Lac",
      years: "8 Years",
      city: "Bhopal",
    },
    {
      category: "FMCG",
      name: "Tushar",
      range: "₹18 Lac – 25 Lac",
      years: "4 Years",
      city: "Mumbai",
    },
    {
      category: "FMCG",
      name: "Yuvraj",
      range: "₹22 Lac – 30 Lac",
      years: "4 Years",
      city: "Lucknow",
    },
    {
      category: "Chemicals",
      name: "Javed",
      range: "₹15 Lac – 20 Lac",
      years: "7 Years",
      city: "Lucknow",
    },
  ];

  const [zoomedCard, setZoomedCard] = useState(null);

  return (
    <div className="w-full py-10 bg-white text-center px-4">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Customer Reviews
      </h2>
      <button className="text-white bg-red-500 border-2 border-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition">
        Write a Review
      </button>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center  pt-6 gap-6 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            onClick={() =>
              setZoomedCard(zoomedCard === index ? null : index)
            }
            className={`cursor-pointer bg-white shadow-lg border rounded-2xl p-6 w-64 transition-all duration-300 transform hover:scale-105  ${
              zoomedCard === index ? "scale-110 shadow-2xl z-10 " : ""
            }`}
          >
            <h3 className="text-lg font-bold underline">
              {review.category}
            </h3>
            <p className="text-red-500 text-xl font-semibold mt-1">
              {review.name}
            </p>
            <p className="text-gray-700 mt-2">{review.range}</p>
            <p className="text-gray-600">{review.years}</p>
            <p className="mt-2">
              <span className="font-semibold">City:</span>{" "}
              <span className="text-gray-800">{review.city}</span>
            </p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"> <Link to="/Query-form" >
              Send Proposal
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
