import React, { useState, useEffect } from "react";

const PurchasedItems = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      setLoading(true);
      try {
        // Mock API response for sample data
        const sampleData = [
          {
            id: 1,
            title: "Gaming Laptop",
            description: "Powerful gaming laptop with RTX 3060 GPU.",
            image: "https://via.placeholder.com/150",
            bookingDate: "2024-03-01",
            status: "Completed",
          },
          {
            id: 2,
            title: "Electric Scooter",
            description: "Eco-friendly electric scooter for daily commutes.",
            image: "https://via.placeholder.com/150",
            bookingDate: "2024-02-20",
            status: "Ongoing",
          },
          {
            id: 3,
            title: "DSLR Camera",
            description: "Professional DSLR camera with multiple lenses.",
            image: "https://via.placeholder.com/150",
            bookingDate: "2024-03-10",
            status: "Pending",
          },
        ];

        // Simulate API response delay
        setTimeout(() => {
          setPurchasedItems(sampleData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching purchased items:", error);
        setLoading(false);
      }
    };

    fetchPurchasedItems();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-[#E63946] mb-4">
        Purchased Items
      </h3>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : purchasedItems.length === 0 ? (
        <p className="text-gray-600">No purchased items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {purchasedItems.map((item) => (
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
                <p className="text-sm text-gray-500 mt-2">
                  Booking Date:{" "}
                  <span className="font-semibold text-gray-700">
                    {new Date(item.bookingDate).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      item.status === "Completed"
                        ? "text-green-600"
                        : item.status === "Ongoing"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchasedItems;

// import React, { useState, useEffect } from "react";

// const PurchasedItems = () => {
//   const [purchasedItems, setPurchasedItems] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPurchasedItems = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("/bookings/user", {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//         });

//         if (!response.ok) throw new Error("Failed to fetch purchased items");

//         const data = await response.json();
//         setPurchasedItems(data);
//       } catch (error) {
//         console.error("Error fetching purchased items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPurchasedItems();
//   }, []);

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md">
//       <h3 className="text-2xl font-semibold text-[#E63946] mb-4">Purchased Items</h3>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : purchasedItems.length === 0 ? (
//         <p className="text-gray-600">No purchased items found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//           {purchasedItems.map((item) => (
//             <div
//               key={item._id}
//               className="border rounded-lg shadow-md bg-white overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
//             >
//               <img
//                 src={item.image || "https://via.placeholder.com/150"}
//                 alt={item.title}
//                 className="w-full h-40 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h4 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h4>
//                 <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Booking Date:{" "}
//                   <span className="font-semibold text-gray-700">
//                     {new Date(item.bookingDate).toLocaleDateString()}
//                   </span>
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Status:{" "}
//                   <span
//                     className={`font-semibold ${
//                       item.status === "Completed"
//                         ? "text-green-600"
//                         : item.status === "Ongoing"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {item.status}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PurchasedItems;
