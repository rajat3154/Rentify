import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaPen,
  FaPlusCircle,
  FaClipboardList,
  FaShoppingBag,
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaLock,
} from "react-icons/fa";
import Navbar from "./shared/Navbar";
import EditProfile from "./EditProfile";
import ListItemPage from "./ListItemPage";
import MyListings from "./MyListings";
import ActiveRentedItems from "./ActiveRentedItems";
import PurchasedItems from "./PurchasedItems";
import BrowseRentals from "./BrowseRentals";
import ChatBot from "./ChatBot";

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [rentedItems, setRentedItems] = useState([]);
  const [rentedLoading, setRentedLoading] = useState(false);

  // Sample user data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setTimeout(() => {
          setUser({
            profilePhoto: "https://www.w3schools.com/w3images/avatar2.png",
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "+1 234 567 890",
            address: "123 Main St, Springfield, IL 62701",
            dob: "January 1, 1990",
            bio: "I am a software developer passionate about creating web applications.",
            socialLinks: {
              facebook: "https://facebook.com/johndoe",
              twitter: "https://twitter.com/johndoe",
            },
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (activeTab === "my-rentals") {
      const fetchRentedItems = async () => {
        setRentedLoading(true);
        try {
          // Simulated API call
          setTimeout(() => {
            setRentedItems([]);
            setRentedLoading(false);
          }, 1000);
        } catch (error) {
          console.error("Error fetching rented items:", error);
        }
      };
      fetchRentedItems();
    }
  }, [activeTab]);

  return (
    <>
      <Navbar />
      <ChatBot />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#fff5f5] pt-16 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-2xl rounded-r-xl p-6 transform transition-all duration-300 hover:shadow-3xl">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E63946] to-[#FF6B6B] mb-8">
            Dashboard
          </h2>
          <nav className="space-y-3">
            {[
              { key: "profile", icon: FaUser, label: "Profile" },
              { key: "edit-profile", icon: FaPen, label: "Edit Profile" },
              { key: "list-item", icon: FaPlusCircle, label: "List Item" },
              {
                key: "my-listings",
                icon: FaClipboardList,
                label: "My Listings",
              },
              { key: "my-rentals", icon: FaShoppingBag, label: "My Rentals" },
              {
                key: "purchased-items",
                icon: FaClipboardList,
                label: "Purchases",
              },
              { key: "browse", icon: FaSearch, label: "Browse" },
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 group ${
                  activeTab === key
                    ? "bg-gradient-to-r from-[#E63946] to-[#FF6B6B] text-white shadow-lg"
                    : "hover:bg-gray-100 text-gray-600 hover:text-[#E63946]"
                }`}
              >
                <Icon
                  className={`mr-3 text-lg ${
                    activeTab === key ? "text-white" : "text-[#E63946]"
                  }`}
                />
                <span className="font-medium">{label}</span>
                <div
                  className={`ml-auto w-2 h-2 rounded-full ${
                    activeTab === key ? "bg-white" : "bg-transparent"
                  } transition-all`}
                />
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 space-y-8">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#E63946]"></div>
            </div>
          ) : (
            <>
              {activeTab === "profile" && user && (
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-[#E63946] to-[#FF6B6B] p-8">
                      <div className="flex items-center space-x-6">
                        <div className="relative w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                          <img
                            src={user.profilePhoto}
                            alt="Profile"
                            className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                          />
                        </div>
                        <div>
                          <h1 className="text-3xl font-bold text-white">
                            {user.name}
                          </h1>
                          <p className="text-gray-200">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    {/* Profile Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                      <div className="space-y-6">
                        <DetailCard title="Contact Information" icon={FaUser}>
                          <DetailItem label="Phone" value={user.phone} />
                          <DetailItem label="Address" value={user.address} />
                          <DetailItem label="Date of Birth" value={user.dob} />
                        </DetailCard>

                        <DetailCard title="Bio" icon={FaPen}>
                          <p className="text-gray-600 leading-relaxed">
                            {user.bio}
                          </p>
                        </DetailCard>
                      </div>

                      <div className="space-y-6">
                        <DetailCard title="Social Connections" icon={FaUser}>
                          <div className="flex space-x-4">
                            <SocialLink
                              url={user.socialLinks.facebook}
                              platform="Facebook"
                              color="#3b5998"
                            />
                            <SocialLink
                              url={user.socialLinks.twitter}
                              platform="Twitter"
                              color="#1da1f2"
                            />
                          </div>
                        </DetailCard>

                        <DetailCard title="Account Security" icon={FaLock}>
                          <div className="space-y-4">
                            <SecurityItem
                              title="Two-Factor Authentication"
                              status="Enabled"
                            />
                            <SecurityItem
                              title="Last Login"
                              value="2 hours ago"
                            />
                          </div>
                        </DetailCard>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "edit-profile" && <EditProfile />}
              {activeTab === "list-item" && <ListItemPage />}
              {activeTab === "my-listings" && <MyListings />}
              {activeTab === "my-rentals" && <ActiveRentedItems />}
              {activeTab === "purchased-items" && <PurchasedItems />}
              {activeTab === "browse" && <BrowseRentals />}
            </>
          )}
        </div>
      </div>
    </>
  );
};

// Reusable Components
const DetailCard = ({ title, icon: Icon, children }) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="text-[#E63946] mr-2 text-xl" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

const DetailItem = ({ label, value }) => (
  <div className="py-2 border-b border-gray-200 last:border-0">
    <span className="text-gray-500 text-sm">{label}</span>
    <p className="text-gray-800 font-medium">{value}</p>
  </div>
);

const SocialLink = ({ url, platform, color }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-3 rounded-lg hover:transform hover:scale-105 transition-all"
    style={{ backgroundColor: `${color}10` }}
  >
    <span
      className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
      style={{ backgroundColor: color }}
    >
      {platform === "Facebook" ? (
        <FaFacebook className="text-white text-sm" />
      ) : (
        <FaTwitter className="text-white text-sm" />
      )}
    </span>
    <span className="text-gray-700 font-medium">{platform}</span>
  </a>
);

const SecurityItem = ({ title, status, value }) => (
  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-xs">
    <span className="text-gray-600">{title}</span>
    {status ? (
      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
        {status}
      </span>
    ) : (
      <span className="text-gray-500 text-sm">{value}</span>
    )}
  </div>
);

export default UserDashboard;
