"use client"; // Mark this as a Client Component

import React from "react";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";
import { Footer } from "../components/Footer/Footer";
import { useRouter } from "next/navigation";

const CompletePage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] min-h-screen text-gray-200">
      <CompleteNavigators />

      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Order Complete</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f5a623] to-[#f55623] mx-auto"></div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12 px-4">
          <div className="w-full max-w-4xl flex items-center">
            <div className="h-1 flex-1 bg-gray-800"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f5a623] text-black font-bold">1</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f5a623] text-black font-bold">2</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f5a623] text-black font-bold">3</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex items-center justify-center mb-12 text-sm font-medium px-4">
          <div className="w-full max-w-4xl grid grid-cols-3">
            <div className="text-center text-[#f5a623]">CART</div>
            <div className="text-center text-[#f5a623]">PAYMENT</div>
            <div className="text-center text-[#f5a623]">COMPLETE</div>
          </div>
        </div>

        {/* Order Confirmation */}
        <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg shadow-xl p-6 border border-purple-900/30 max-w-2xl mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-[#5cb85c] mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-4">Thank You for Your Purchase!</h2>
          <p className="text-gray-400 mb-6">Your order has been successfully processed. A confirmation email has been sent to your registered email address.</p>
          <button
            className="bg-gradient-to-r from-[#f5a623] to-[#f55623] text-black font-bold py-3 px-6 rounded-md hover:from-[#f55623] hover:to-[#f5a623] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            onClick={() => router.push("http://localhost:3000/store")}
          >
            Continue Shopping
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompletePage;