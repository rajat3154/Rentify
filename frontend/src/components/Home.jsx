import React from "react";
import Navbar from "./shared/Navbar";
import ai from "./assets/a.jpg";
import mountain from "./assets/mountain.png";
import electric from "./assets/electric.png";
import camera from "./assets/camera.png";
import furniture from "./assets/furniture.png";
import vehicle from "./assets/vehicle.png";
import gadgets from "./assets/gadgets.png";
import sport from "./assets/sport.png";





export const Home = () => {
  return (
    <>
      <Navbar />
      <div id="webcrumbs">
        <div className="min-h-screen bg-gray-50 font-sans">
          <main className="py-10 px-6 lg:px-12 max-w-7xl mx-auto">
            {/* Featured Rentals */}
            <section className="mb-16">
              <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                Featured Rentals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Mountain Bike Rental",
                    description:
                      "High-performance mountain bike, perfect for trails and off-road adventures.",
                    price: "₹25/day",
                    img: mountain,
                  },
                  {
                    title: "Electric Scooter",
                    description:
                      "Compact and eco-friendly electric scooter for easy city commuting.",
                    price: "₹100/day",
                    img: electric,
                  },
                  {
                    title: "Professional Camera",
                    description:
                      "Capture stunning photos with this high-quality DSLR camera, perfect for photography enthusiasts.",
                    price: "250/day",
                    img: camera, // Make sure to import the image
                  },
                ].map((rental, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={rental.img}
                        alt={rental.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg">{rental.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {rental.description}
                      </p>
                      <p className="text-lg font-bold text-orange-600">
                        {rental.price}
                      </p>
                      <button className="w-full py-2 mt-3 text-sm font-semibold text-orange-600 border border-indigo-500 rounded-lg hover:bg-indigo-50 transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Rental Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                Rental Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Furniture", img: furniture },
                  { name: "Vehicles", img: vehicle },
                  { name: "Gadgets", img: gadgets },
                  { name: "Sports", img: sport },
                ].map((category, index) => (
                  <a key={index} href="#" className="group">
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all flex flex-col items-center">
                      <div className="w-50 h-50 overflow-hidden rounded-lg">
                        <img
                          src={category.img}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="mt-3 text-sm font-semibold">
                        {category.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </main>
          <section className="text-center py-16 bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
              Find Your Dream Rental
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Discover the best rental properties that suit your lifestyle.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-blue-600">
              Explore Now
            </button>
          </section>

          {/* Featured Properties Section */}
          <section className="py-16 px-8">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">
              Featured Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[
                { name: "Furniture", img: furniture },
                { name: "Vehicles", img: vehicle },
                { name: "Gadgets", img: gadgets },
                { name: "Sports", img: sport },
              ].map((category, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-lg">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="rounded-md w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-bold mt-4">{category.name}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 py-16 px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4">
                <h3 className="text-xl font-bold">Verified Listings</h3>
                <p className="text-gray-600">
                  We ensure that all properties are verified and secure.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Affordable Prices</h3>
                <p className="text-gray-600">
                  Best deals on rentals to match your budget.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-gray-600">
                  Our team is available to assist you anytime.
                </p>
              </div>
            </div>
          </section>
          <section className="py-16 px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-4 border rounded-lg shadow-md">
                <p className="text-gray-600">
                  "Amazing service and smooth rental process!"
                </p>
                <h4 className="font-bold mt-2">- John Doe</h4>
              </div>
              <div className="p-4 border rounded-lg shadow-md">
                <p className="text-gray-600">
                  "Found my dream home within days!"
                </p>
                <h4 className="font-bold mt-2">- Jane Smith</h4>
              </div>
            </div>
          </section>
        </div>
        <footer className="bg-orange-600 text-white py-10 px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold">Dream Rental</h3>
              <p className="mt-2">
                Your trusted partner for rental properties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Listings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-400">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
// import React from "react";
// import Navbar from "./shared/Navbar";
// import {
//   FaStar,
//   FaHome,
//   FaBuilding,
//   FaUmbrellaBeach,
//   FaRegSmile,
//   FaCheckCircle,
//   FaPhoneAlt,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 font-sans">
//         {/* Hero Section */}
//         <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-700 text-white">
//           <div className="container mx-auto px-6 lg:px-12 h-full flex items-center">
//             <div className="max-w-3xl z-10">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//                 Find Your Perfect
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
//                   {" "}
//                   Rental Home
//                 </span>
//               </h1>
//               <p className="text-xl mb-8 text-gray-200">
//                 Discover thousands of verified properties across the globe
//               </p>
//               <div className="relative bg-white rounded-lg p-2 shadow-xl">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     placeholder="Search by location, property type, or keyword"
//                     className="flex-1 p-4 text-gray-800 rounded-lg focus:outline-none"
//                   />
//                   <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Featured Rentals */}
//         <section className="py-16 px-6 lg:px-12 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//               Featured Rentals
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[1, 2, 3].map((item) => (
//                 <div
//                   key={item}
//                   className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//                 >
//                   <div className="h-64 overflow-hidden">
//                     <img
//                       src={`https://source.unsplash.com/random/800x600?apartment=${item}`}
//                       alt="Property"
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
//                     />
//                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
//                       <FaStar className="text-yellow-400" /> 4.9
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">
//                       HP Pavilion 15
//                     </h3>
//                     <div className="flex items-center gap-2 text-gray-600 mb-4">
//                       <FaHome className="text-blue-600" />
//                       <span>Chhtrapati Sambhajinagar Area</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-2xl font-bold text-blue-600">
//                         ₹500/day
//                       </span>
//                       <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Rental Categories */}
//         <section className="py-16 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//               Explore Rental Types
//             </h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { icon: FaHome, title: "Apartments", count: "1,200+" },
//                 { icon: FaBuilding, title: "Villas", count: "500+" },
//                 {
//                   icon: FaUmbrellaBeach,
//                   title: "Vacation Homes",
//                   count: "800+",
//                 },
//                 { icon: FaStar, title: "Luxury Estates", count: "300+" },
//               ].map((category, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group text-center"
//                 >
//                   <category.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-125" />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {category.title}
//                   </h3>
//                   <p className="text-gray-600">{category.count} Properties</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us */}
//         <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Why Choose Us?
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: FaCheckCircle,
//                   title: "Verified Listings",
//                   description:
//                     "All properties undergo strict verification process",
//                 },
//                 {
//                   icon: FaStar,
//                   title: "Premium Quality",
//                   description: "Curated selection of high-quality rentals",
//                 },
//                 {
//                   icon: FaPhoneAlt,
//                   title: "24/7 Support",
//                   description: "Dedicated support team always available",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg"
//                 >
//                   <feature.icon className="w-12 h-12 mb-4 text-orange-400" />
//                   <h3 className="text-xl font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-200">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//               What Our Clients Say
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   text: "The entire process was seamless and professional. Found my dream apartment in just 3 days!",
//                   author: "Sarah Johnson",
//                   role: "Software Engineer",
//                 },
//                 {
//                   text: "Excellent service and support throughout the rental process. Highly recommended!",
//                   author: "Michael Chen",
//                   role: "Entrepreneur",
//                 },
//               ].map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-50 p-8 rounded-2xl shadow-lg"
//                 >
//                   <FaRegSmile className="w-12 h-12 text-blue-600 mb-4" />
//                   <p className="text-lg text-gray-600 mb-4">
//                     "{testimonial.text}"
//                   </p>
//                   <h4 className="font-bold text-gray-800">
//                     {testimonial.author}
//                   </h4>
//                   <p className="text-gray-500">{testimonial.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-800 text-white py-12 px-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">RentalHub</h3>
//               <p className="text-gray-400">
//                 Your trusted partner in finding perfect rentals worldwide
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Blog
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     FAQ
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Privacy Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Connect</h4>
//               <div className="flex gap-4 text-gray-400">
//                 <a href="#" className="hover:text-white transition-colors">
//                   <FaFacebook size={24} />
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   <FaTwitter size={24} />
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   <FaInstagram size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

export default Home;
