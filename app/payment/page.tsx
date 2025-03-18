"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";
import { Footer } from "../components/Footer/Footer";
import { useRouter } from "next/navigation";

const PaymentPage: React.FC = () => {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      router.push("http://localhost:3000/complete"); // Redirect to the Complete page
    }, 1500);
  };

  return (
    <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] min-h-screen text-gray-200">
      <CompleteNavigators />

      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Payment</h1>
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
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 font-bold">3</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex items-center justify-center mb-12 text-sm font-medium px-4">
          <div className="w-full max-w-4xl grid grid-cols-3">
            <div className="text-center text-[#f5a623]">CART</div>
            <div className="text-center text-[#f5a623]">PAYMENT</div>
            <div className="text-center text-gray-500">COMPLETE</div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg shadow-xl p-6 border border-purple-900/30 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Enter Payment Details</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-800/50 rounded-md focus:outline-none focus:border-[#f5a623] text-white"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-800/50 rounded-md focus:outline-none focus:border-[#f5a623] text-white"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-800/50 rounded-md focus:outline-none focus:border-[#f5a623] text-white"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-[#f5a623] to-[#f55623] text-black font-bold py-4 px-4 rounded-md hover:from-[#f55623] hover:to-[#f5a623] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Confirm Payment"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;