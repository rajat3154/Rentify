import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarker,
  FaCamera,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    profilePhoto: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Simulated API call
        const mockUser = {
          name: "John Doe",
          phone: "+1 234 567 890",
          address: "123 Main St, Springfield, IL 62701",
          profilePhoto: "https://www.w3schools.com/w3images/avatar2.png",
        };
        setTimeout(() => {
          setUser(mockUser);
          setPreview(mockUser.profilePhoto);
        }, 1000);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required";
    if (!user.phone.match(/^\+?[1-9]\d{1,14}$/))
      newErrors.phone = "Invalid phone number";
    if (!user.address) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, photo: "Please upload an image file" }));
      return;
    }

    setSelectedFile(file);
    setErrors((prev) => ({ ...prev, photo: "" }));
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);
      // Simulated upload
      setTimeout(() => {
        setUser((prev) => ({ ...prev, profilePhoto: preview }));
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }, 1500);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      // Simulated update
      setTimeout(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }, 1500);
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#E63946] to-[#FF6B6B] p-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaUser className="text-2xl" />
            Edit Profile
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
              <FaCheck />
              Profile updated successfully!
            </div>
          )}

          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                <img
                  src={preview}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                  />
                  <FaCamera className="w-8 h-8 text-white" />
                </label>
              </div>
              {errors.photo && (
                <p className="text-red-500 text-sm mt-2">{errors.photo}</p>
              )}
            </div>

            <button
              type="button"
              onClick={handleUpload}
              disabled={!selectedFile || loading}
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
            >
              {loading ? <FaSpinner className="animate-spin" /> : <FaCheck />}
              <span>{loading ? "Uploading..." : "Update Photo"}</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <FaPhone className="absolute top-4 left-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                pattern="^\+?[1-9]\d{1,14}$"
                className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="relative">
              <FaMapMarker className="absolute top-4 left-3 text-gray-400" />
              <textarea
                name="address"
                value={user.address}
                onChange={handleChange}
                placeholder="Address"
                rows="3"
                className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none resize-none"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#E63946] to-[#FF6B6B] text-white rounded-lg
              font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            {loading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <>
                <FaCheck />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
