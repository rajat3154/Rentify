import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ActiveRentedItems = () => {
  const [rentedItems, setRentedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Sample Rented Items (used if API returns empty)
  const sampleRentedItems = [
    {
      id: 1,
      title: "Sony Alpha Camera",
      description: "High-resolution mirrorless camera for professionals.",
      image:
        "https://images.unsplash.com/photo-1519181245277-cffeb31da2e7?w=500",
      price: 25,
      rentedUntil: "April 15, 2025",
      status: "Active",
    },
    {
      id: 2,
      title: "MacBook Pro 16-inch",
      description: "M2 Max MacBook Pro with 32GB RAM and 1TB SSD.",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
      price: 45,
      rentedUntil: "April 20, 2025",
      status: "Active",
    },
    {
      id: 3,
      title: "Electric Scooter",
      description: "Fast and lightweight electric scooter for city rides.",
      image:
        "https://images.unsplash.com/photo-1589405858862-e0b3f2086b57?w=500",
      price: 10,
      rentedUntil: "March 30, 2025",
      status: "Active",
    },
  ];

  useEffect(() => {
    const fetchRentedItems = async () => {
      try {
        const response = await fetch("/listings/my-listings`", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) throw new Error("Failed to fetch rented items");

        const data = await response.json();
        console.log("Fetched rented items:", data);

        // Ensure valid data structure before setting state
        setRentedItems(
          Array.isArray(data) && data.length > 0 ? data : sampleRentedItems
        );
      } catch (error) {
        console.error("Error fetching rented items:", error);
        setRentedItems(sampleRentedItems); // Fallback to sample data
      } finally {
        setLoading(false);
      }
    };

    fetchRentedItems();
  }, []);

  console.log("Displaying rented items:", rentedItems);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
     

      <h2 className="text-3xl font-bold text-[#E63946] mb-6">
        Active Rented Items
      </h2>

     {loading ? (
  <p className="text-gray-600">Loading...</p>
) : rentedItems.length === 0 ? (
  <p className="text-gray-600">No active rented items found</p>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {rentedItems.map((item) => (
      <div
        key={item.id}
        className="border rounded-lg shadow-md bg-white overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
      >
        <img
          src={item.image || "https://via.placeholder.com/150"}
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
          <div className="mt-2 flex justify-between items-center">
            <span className="text-[#E63946] font-bold text-lg">
              ${item.price}/day
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Rented until:{" "}
            <span className="font-semibold text-gray-700">
              {item.rentedUntil}
            </span>
          </p>
          <p
            className={`text-xs font-bold uppercase mt-1 ${
              item.status === "Active" ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.status}
          </p>
        </div>
      </div>
    ))}
  </div>
)}

        
    </div>
  );
};

export default ActiveRentedItems;
