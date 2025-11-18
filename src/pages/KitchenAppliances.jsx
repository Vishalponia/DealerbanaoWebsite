import React, { useState, useMemo } from "react";

export default function KitchenAppliances() {
  // UI state
  const [selectedCategory, setSelectedCategory] = useState("All"); // dropdown value
  const [appliedCategory, setAppliedCategory] = useState("All");   // active filter

  // Data
  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Mixer Grinder",
        category: "Mixer Grinder",
        manufacturer: "Preethi Appliances Pvt. Ltd.",
        addedDate: "2025-10-30",
        image:
          "https://dealerbanao.com/wp-content/uploads/2024/10/sdaffdsgs-400x290.png",
      },
      {
        id: 2,
        name: "Microwave Oven",
        category: "Microwave",
        manufacturer: "LG Electronics",
        addedDate: "2025-10-28",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        id: 3,
        name: "Refrigerator",
        category: "Refrigerator",
        manufacturer: "Samsung India",
        addedDate: "2025-10-25",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        id: 4,
        name: "Induction Cooktop",
        category: "Cooktop",
        manufacturer: "Philips India",
        addedDate: "2025-10-22",
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 5,
        name: "Gas Stove",
        category: "Gas Stove",
        manufacturer: "Prestige Ltd.",
        addedDate: "2025-10-20",
        image:
          "https://dealerbanao.com/wp-content/uploads/2024/10/sdaffdsgs-2-400x290.png",
      },
      {
        id: 6,
        name: "Toaster",
        category: "Toaster",
        manufacturer: "Morphy Richards",
        addedDate: "2025-10-18",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        id: 7,
        name: "Dishwasher",
        category: "Dishwasher",
        manufacturer: "Bosch Home Appliances",
        addedDate: "2025-10-15",
        image:
          "https://dealerbanao.com/wp-content/uploads/2024/09/deep-fat-fryer-400x300.jpg",
      },
      {
        id: 8,
        name: "Coffee Maker",
        category: "Coffee Maker",
        manufacturer: "Havells India",
        addedDate: "2025-10-12",
        image:
          "data:image/jpeg;base64,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",
      },
    ],
    []
  );

  // build categories dynamically and ensure "All" present
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  // compute filtered products based on appliedCategory
  const filteredProducts = useMemo(() => {
    if (appliedCategory === "All") return products;
    return products.filter((p) => p.category === appliedCategory);
  }, [products, appliedCategory]);

  // Handler for Filter button
  function handleApplyFilter() {
    // Guard: ensure selectedCategory is a valid category (prevents typos)
    if (selectedCategory === "All" || categories.includes(selectedCategory)) {
      setAppliedCategory(selectedCategory);
      // optional: scroll to results or give visual feedback
      // document.getElementById("kitchen-results")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: set to All if something weird happened
      setAppliedCategory("All");
    }
  }

  // Quick "show all" helper
  function resetFilter() {
    setSelectedCategory("All");
    setAppliedCategory("All");
  }

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2c1f84]">
          Kitchen Appliances
        </h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2c1f84]"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <button
              onClick={handleApplyFilter}
              className="bg-[#2c1f84] text-white px-5 py-2 rounded-md hover:bg-red-500 transition"
            >
              Filter
            </button>
            <button
              onClick={resetFilter}
              className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Show All
            </button>
          </div>
        </div>

        {/* Active filter indicator */}
        <div className="text-center mb-6">
          <span className="text-sm text-gray-600">
            Showing:{" "}
            <strong className="text-gray-800">
              {appliedCategory === "All" ? "All Categories" : appliedCategory}
            </strong>
          </span>
        </div>

        {/* Results */}
        <div id="kitchen-results" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-sm text-gray-600">Manufacturer: {product.manufacturer}</p>
                  <p className="text-xs text-gray-500 mt-1">Added on: {product.addedDate}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-sm bg-[#2c1f84]/10 text-[#2c1f84] font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
