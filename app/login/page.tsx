"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar&Sidebar/Navbar";
import { Eye, EyeOff, Mail, Lock, AlertCircle, Sparkles } from "lucide-react";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Login submitted:", formData);
      } catch (error) {
        console.error("Error logging in:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0508] text-white relative overflow-hidden">
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png')]"
          style={{ 
            animation: 'float 20s infinite linear',
            backgroundSize: '200px 200px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040105]/50 to-[#0e030f]/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-[calc(100vh-64px)] flex items-center justify-center p-4">
        {/* Glass-morphism Form Container */}
        <div className="w-full max-w-md bg-[#1a1119]/90 backdrop-blur-lg rounded-xl shadow-2xl border border-[#ffffff15] p-6 sm:p-8 transition-all duration-300 hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-[#D4AF37] animate-pulse" />
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] bg-clip-text text-transparent">
                Welcome Back
              </h2>
            </div>
            <p className="text-gray-400 text-sm">Unlock your mystical journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-[#00000030] border ${
                    errors.email ? "border-red-400/50" : "border-[#ffffff10]"
                  } rounded-lg py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all`}
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2.5 peer-focus:text-sm"
                >
                  Email Address
                </label>
                <Mail className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
              </div>
              {errors.email && (
                <div className="flex items-center mt-2 text-red-400 text-sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-[#00000030] border ${
                    errors.password ? "border-red-400/50" : "border-[#ffffff10]"
                  } rounded-lg py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all`}
                />
                <label 
                  htmlFor="password" 
                  className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2.5 peer-focus:text-sm"
                >
                  Password
                </label>
                <Lock className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 peer-focus:text-[#D4AF37] transition-colors" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-12 top-3.5 text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center mt-2 text-red-400 text-sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-[#D4AF37] bg-[#00000030] border-[#ffffff30] rounded focus:ring-[#D4AF37]"
                />
                <span className="text-gray-400 text-sm">Remember me</span>
              </label>
              <Link 
                href="/forgot-password" 
                className="text-sm text-[#D4AF37] hover:text-[#9b7f20] transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#9b7f20] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : null}
              {isSubmitting ? "Entering the Realm..." : "Sign In"}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#ffffff15]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-[#1a1119] text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#ffffff05] hover:bg-[#ffffff10] text-white py-3 px-6 rounded-lg transition-all border border-[#ffffff15]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Google</span>
            </button>

            {/* Signup Link */}
            <p className="text-center text-gray-400 text-sm mt-6">
              New to the realm?{" "}
              <Link 
                href="/sign-up" 
                className="text-[#D4AF37] hover:underline hover:text-[#9b7f20] transition-colors"
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { background-position: 0 0; }
          100% { background-position: 200px 200px; }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;