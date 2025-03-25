import { useState } from "react";
import Navbar from "../shared/Navbar";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      const strength =
        value.length > 10 ? "Strong" : value.length > 6 ? "Medium" : "Weak";
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation logic...
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "Strong":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "Weak":
        return "bg-red-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] mt-16">
      {/* Navbar */}
      <Navbar className="mt-12" />

      {/* Main Signup Form */}
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 m-4 transition-all duration-300 hover:shadow-3xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-clip-text  text-orange-600 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">Join our community today</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
              <span className="mr-2">✖</span>
              {error}
            </div>
          )}

          {/* Success Message */}
          {success ? (
            <div className="text-center py-8">
              <MdCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-checkmark" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600">
                Please check your email to verify your account
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none transition-all"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 border-b-2 focus:border-[#E63946] focus:outline-none transition-all"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="mt-2 flex items-center">
                    <div
                      className={`h-2 w-24 rounded-full ${getStrengthColor()} transition-colors`}
                    />
                   
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Create Account
                </button>
              </form>

              {/* Social Sign-in Options */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Google and Facebook Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors cursor-pointer">
                    <FaGoogle className="mr-2" />
                    Google
                  </button>
                  <button className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors cursor-pointer">
                    <FaFacebook className="mr-2" />
                    Facebook
                  </button>
                </div>

                {/* Login Link */}
                <p className="mt-8 text-center text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-orange-600 hover:underline">
                    Log in
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
