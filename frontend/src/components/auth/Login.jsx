import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // ... existing login logic ...

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 m-4 transition-all duration-300 hover:shadow-3xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-clip-text text-orange-600 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Login to continue your journey</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
              <span className="mr-2">✖</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-orange-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative cursor-pointer"
            >
              {isLoading ? (
                <ImSpinner8 className="w-6 h-6 mx-auto animate-spin" />
              ) : (
                "Login"
              )}
            </button>
          </form>

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

            <p className="mt-8 text-center text-gray-600">
              New to our platform?{" "}
              <Link
                to="/signup"
                className="text-orange-600 hover:underline font-medium"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
