import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar.jsx";

const RentalListings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      setError(null);

      try {
        const sampleData = [
          {
            _id: "1",
            title: "Gaming Laptop",
            description: "RTX 3060 gaming laptop.",
            category: "Electronics",
            image: "https://via.placeholder.com/200",
            price: 25,
          },
          {
            _id: "2",
            title: "Electric Scooter",
            description: "Eco-friendly city ride.",
            category: "Vehicles",
            image: "https://via.placeholder.com/200",
            price: 15,
          },
          {
            _id: "3",
            title: "Canon DSLR Camera",
            description: "4K recording DSLR.",
            category: "Electronics",
            image: "https://via.placeholder.com/200",
            price: 30,
          },
          {
            _id: "4",
            title: "Office Chair",
            description: "Ergonomic work chair.",
            category: "Furniture",
            image: "https://via.placeholder.com/200",
            price: 10,
          },
        ];

        setTimeout(() => {
          setListings(sampleData);
          setFilteredListings(sampleData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to fetch rental listings.");
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterListings(query, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterListings(searchQuery, category);
  };

  const filterListings = (query, category) => {
    let filtered = listings.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    setFilteredListings(filtered);
  };

 return (
   <>
     <Navbar />
     <div className="min-h-screen bg-gradient-to-br mt-16 from-gray-50 to-[#fff5f5] p-16">
       <div className="max-w-7xl mx-auto">
         {/* Header Section */}
         <div className="text-center mb-16">
           <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ea580c] to-[#f97316] mb-6 animate-fade-in-down">
             Discover Amazing Rentals
           </h2>
           <p className="text-gray-600 text-xl font-light p-4">
             Find perfect items for your needs
           </p>
         </div>

         {/* Search & Filters */}
         <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center items-center ">
           <div className="relative w-full max-w-2xl border-2 border-black rounded-2xl">
             <input
               type="text"
               placeholder="Search rentals..."
               value={searchQuery}
               onChange={handleSearch}
               className="w-full px-6 py-4 border-0 rounded-2xl shadow-xl bg-white focus:ring-2 focus:ring-[#ff6b6b] focus:outline-none pr-16 transition-all duration-300 hover:shadow-2xl"
             />
             <svg
               className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
             >
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             </svg>
           </div>

           <div className="flex gap-3 flex-wrap justify-center">
             {["All", "Furniture", "Electronics", "Vehicles"].map((cat) => (
               <button
                 key={cat}
                 onClick={() => setSelectedCategory(cat === "All" ? "" : cat)}
                 className={`px-6 py-2 rounded-full transition-all duration-300 ${
                   selectedCategory === (cat === "All" ? "" : cat)
                     ? "bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-lg cursor-pointer"
                     : "bg-white text-gray-600 hover:text-black hover:bg-gray-300 shadow-md cursor-pointer"
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
         </div>

         {/* Content */}
         {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {[...Array(4)].map((_, i) => (
               <div
                 key={i}
                 className="bg-white rounded-2xl shadow-xl h-96 animate-pulse"
               >
                 <div className="h-48 bg-gray-200 rounded-t-2xl" />
                 <div className="p-6 space-y-4">
                   <div className="h-4 bg-gray-200 rounded w-3/4" />
                   <div className="h-4 bg-gray-200 rounded w-1/2" />
                   <div className="h-4 bg-gray-200 rounded w-1/3" />
                 </div>
               </div>
             ))}
           </div>
         ) : error ? (
           <div className="text-center py-20">
             <div className="text-6xl mb-4">😞</div>
             <p className="text-xl text-red-500 font-medium">{error}</p>
           </div>
         ) : filteredListings.length === 0 ? (
           <div className="text-center py-20">
             <div className="text-6xl mb-4">🔍</div>
             <p className="text-xl text-gray-600">No items match your search</p>
           </div>
         ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {filteredListings.map((item) => (
               <div
                 key={item._id}
                 className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
               >
                 {/* Popular Badge */}
                 {item.price > 20 && (
                   <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                     POPULAR
                   </div>
                 )}

                 {/* Image Section */}
                 <div className="relative h-60 overflow-hidden">
                   <img
                     src={item.image}
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                   <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-1 rounded-full text-lg font-bold text-[#ff6b6b] shadow-md">
                     ${item.price}/day
                   </div>
                 </div>

                 {/* Card Content */}
                 <div className="p-6">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="text-sm font-medium text-gray-500">
                       {item.category}
                     </span>
                   </div>
                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
                     {item.title}
                   </h3>
                   <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                     {item.description}
                   </p>

                   {/* Action Buttons */}
                   <div className="flex gap-3 mt-4">
                     <button
                       onClick={() => navigate(`/rental/${item._id}`)}
                       className="flex-1 cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                     >
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
                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                       </svg>
                       Details
                     </button>
                     <button
                       onClick={() => navigate(`/payment/${item._id}`)}
                       className="flex-1 cursor-pointer bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#ff5252] hover:to-[#ff3d3d] text-white px-4 py-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                     >
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
                           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                         />
                       </svg>
                       Rent Now
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
       </div>
     </div>
   </>
 );
};

export default RentalListings;
