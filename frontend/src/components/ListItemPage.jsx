import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUpload,
  FaImage,
  FaMoneyBillWave,
  FaTag,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";

const ListItemPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "Electronics",
    price: "",
    description: "",
    location: "",
    image: null,
  });
  const [preview, setPreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    "Electronics",
    "Furniture",
    "Vehicles",
    "Clothing",
    "Tools",
    "Sports Equipment",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    setFormData((prev) => ({ ...prev, image: file }));
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.image) {
      setError("Please upload an image");
      setIsSubmitting(false);
      return;
    }

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    try {
      // Simulated API call
      setTimeout(() => {
        console.log("Form submitted:", Object.fromEntries(formDataObj));
        setIsSubmitting(false);
        navigate("/dashboard?success=true");
      }, 2000);
    } catch (err) {
      setError("Failed to list item. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#E63946] to-[#FF6B6B] p-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaUpload className="text-2xl" />
            List Your Item
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
              <FaInfoCircle />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <FaTag className="absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                name="title"
                placeholder="Item Title"
                required
                className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <FaTag className="absolute top-4 left-3 text-gray-400" />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none bg-white appearance-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FaMoneyBillWave className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="number"
                  name="price"
                  placeholder="Daily Price ($)"
                  min="1"
                  required
                  className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                  className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="relative">
              <FaInfoCircle className="absolute top-4 left-3 text-gray-400" />
              <textarea
                name="description"
                placeholder="Detailed Description"
                required
                rows="4"
                className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none resize-none"
                onChange={handleChange}
              />
            </div>

            <div
              className={`border-2 border-dashed rounded-xl p-6 text-center transition-all 
                ${
                  isDragging
                    ? "border-[#E63946] bg-red-50"
                    : "border-gray-300 hover:border-[#E63946]"
                }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files[0])}
                className="hidden"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="space-y-3">
                  <FaImage className="text-4xl text-gray-400 mx-auto" />
                  <p className="text-gray-600">
                    {preview
                      ? "Change Image"
                      : "Drag & drop image or click to upload"}
                  </p>
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mt-4 mx-auto h-32 object-cover rounded-lg shadow-sm"
                    />
                  )}
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-[#E63946] to-[#FF6B6B] text-white rounded-lg
              font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Listing...
              </div>
            ) : (
              "Publish Listing"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListItemPage;
