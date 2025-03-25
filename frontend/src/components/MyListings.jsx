import React, { useState, useEffect } from "react";

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const sampleListings = [
    {
      id: 1,
      title: "Dell XPS 15 Laptop",
      description: "High-performance laptop for rent.",
      price: 25,
      image: "https://via.placeholder.com/150/0000FF/808080?text=Dell+XPS+15",
    },
    {
      id: 2,
      title: "Sony Alpha Camera",
      description: "Professional camera for photography.",
      price: 40,
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Sony+Camera",
    },
    {
      id: 3,
      title: "IKEA Office Chair",
      description: "Ergonomic chair for office use.",
      price: 15,
      image: "https://via.placeholder.com/150/008000/FFFFFF?text=IKEA+Chair",
    },
  ];

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("/listings/my-listings", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) throw new Error("Failed to fetch listings");
        const data = await response.json();
        setListings(data.length > 0 ? data : sampleListings);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setListings(sampleListings);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#4F46E5] pb-2">
          My Rentals
        </h3>
        {loading ? (
          <div className="animate-pulse space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-12">
            <div className="mb-4 text-6xl">📭</div>
            <p className="text-gray-600 text-lg">
              You haven't posted any items yet.
            </p>
            <button className="mt-4 bg-[#4F46E5] text-white px-6 py-2 rounded-lg hover:bg-[#4338CA] transition-transform hover:scale-105">
              Create New Listing
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[#4F46E5] transform hover:scale-[1.02] relative z-0 hover:z-10"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    ${item.price}/day
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center space-x-2 text-[#4F46E5] hover:text-[#4338CA] transition-transform hover:scale-105">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Manage Listing</span>
                    </button>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 hover:scale-110">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-red-500 transition-colors duration-200 hover:scale-110">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListings;
