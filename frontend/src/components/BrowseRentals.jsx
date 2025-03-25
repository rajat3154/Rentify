import React, { useState, useEffect } from "react";

const BrowseRentals = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRentals = async () => {
      setLoading(true);
      try {
        // Mock API response for sample data
        const sampleData = [
          {
            id: 1,
            title: "Luxury Sofa Set",
            description: "Comfortable and stylish sofa set for rent.",
            image: "https://via.placeholder.com/150",
            price: "₹500/day",
          },
          {
            id: 2,
            title: "Electric Bike",
            description: "Eco-friendly electric bike with 50km range.",
            image: "https://via.placeholder.com/150",
            price: "₹800/day",
          },
          {
            id: 3,
            title: "DSLR Camera",
            description: "Professional DSLR camera with multiple lenses.",
            image: "https://via.placeholder.com/150",
            price: "₹1000/day",
          },
        ];

        // Simulate API response delay
        setTimeout(() => {
          setRentals(sampleData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching rentals:", error);
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-[#E63946] mb-4">
        Browse Available Rentals
      </h3>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : rentals.length === 0 ? (
        <p className="text-gray-600">No rentals available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {rentals.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md bg-white overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-2">
                  {item.price}
                </p>
                <button className="mt-3 px-4 py-2 bg-[#E63946] text-white rounded-lg hover:bg-[#c53030]">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseRentals;
