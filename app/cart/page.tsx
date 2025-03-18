"use client"; // Mark this as a Client Component

import React, { useState, useEffect } from "react";
import { CompleteNavigators } from "../components/Navbar&Sidebar/Index";
import { Footer } from "../components/Footer/Footer";
import { useRouter } from "next/navigation"; // Updated import

interface CartItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
}

const CartPage: React.FC = () => {
  const router = useRouter(); // Initialize the router
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "High Heel Ankle Boots",
      description: "Super comfy boots!",
      quantity: 1,
      price: 40,
      originalPrice: 50,
      discount: 20,
      image: "/images/boots.jpg", // Replace with actual image path
    },
    {
      id: "2",
      name: "Stockings",
      description: "Super comfy stockings!",
      quantity: 2,
      price: 100,
      image: "/images/stockings.jpg", // Replace with actual image path
    },
    {
      id: "3",
      name: "Mini Skirt",
      description: "Super comfy skirt!",
      quantity: 1,
      price: 30,
      image: "/images/skirt.jpg", // Replace with actual image path
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (couponCode.toLowerCase() === "nocturne20") {
        setCouponApplied(true);
        setCouponDiscount(20);
      } else {
        setCouponApplied(false);
        setCouponDiscount(0);
        alert("Invalid coupon code");
      }
      setIsLoading(false);
    }, 800);
  };

  const goToStore = () => {
    router.push("http://localhost:3000/store"); // Updated usage
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = couponApplied ? (subtotal * couponDiscount) / 100 : 0;
  const totalPrice = subtotal - discount;
  const productCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#040105,#0e030f,#040105)] min-h-screen text-gray-200">
      <CompleteNavigators />

      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Your Cart</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f5a623] to-[#f55623] mx-auto"></div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12 px-4">
          <div className="w-full max-w-4xl flex items-center">
            <div className="h-1 flex-1 bg-gray-800"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f5a623] text-black font-bold">1</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 font-bold">2</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 font-bold">3</div>
            <div className="h-1 flex-1 bg-gray-800"></div>
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex items-center justify-center mb-12 text-sm font-medium px-4">
          <div className="w-full max-w-4xl grid grid-cols-3">
            <div className="text-center text-[#f5a623]">CART</div>
            <div className="text-center text-gray-500">PAYMENT</div>
            <div className="text-center text-gray-500">COMPLETE</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Panel */}
          <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg shadow-xl p-6 flex-1 border border-purple-900/30">
            <div className="flex items-center mb-6">
              <span className="text-[#f5a623]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              <span className="ml-2 font-bold text-white text-xl">
                My Cart ({productCount} {productCount === 1 ? "Item" : "Items"})
              </span>
            </div>

            {cartItems.length > 0 ? (
              <div className="border-t border-purple-900/30 pt-4">
                <div className="flex justify-between text-sm font-medium text-gray-400 mb-4 px-2">
                  <div className="w-2/5 md:w-1/2">Product</div>
                  <div className="w-1/5 md:w-1/6 text-center">Quantity</div>
                  <div className="w-1/5 md:w-1/6 text-center">Price</div>
                  <div className="w-1/5 md:w-1/6 text-right">Total</div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="border-t border-purple-900/30 py-6 group">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="w-full md:w-1/2 flex items-start mb-4 md:mb-0">
                        <div className="relative bg-purple-900/20 rounded-lg overflow-hidden w-20 h-20 mr-4 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x100";
                            }}
                          />
                          {item.discount && (
                            <div className="absolute top-0 right-0 bg-[#f55623] text-xs font-bold px-1 py-0.5 text-white">
                              {item.discount}% OFF
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-lg hover:text-[#f5a623] transition-colors duration-200">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                          <button
                            className="mt-2 bg-red-600/80 hover:bg-red-500 text-white text-sm flex items-center transition-colors duration-200 px-3 py-1 rounded-md"
                            onClick={() => removeItem(item.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="w-full md:w-1/6 flex md:justify-center items-center mb-4 md:mb-0">
                        <div className="flex border border-purple-900/50 rounded bg-purple-900/20">
                          <button
                            className="px-3 py-1 text-gray-400 hover:text-[#f5a623] transition-colors duration-200"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="w-10 text-center bg-transparent border-l border-r border-purple-900/50 text-white"
                            readOnly
                          />
                          <button
                            className="px-3 py-1 text-gray-400 hover:text-[#f5a623] transition-colors duration-200"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-full md:w-1/6 flex md:justify-center items-center mb-4 md:mb-0">
                        {item.originalPrice ? (
                          <div>
                            <span className="font-bold text-white">${item.price}</span>
                            <span className="text-gray-500 line-through ml-2 text-sm">${item.originalPrice}</span>
                          </div>
                        ) : (
                          <span className="font-bold text-white">${item.price}</span>
                        )}
                      </div>
                      <div className="w-full md:w-1/6 flex md:justify-end items-center">
                        <span className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between mt-8">
                  <button
                    onClick={goToStore}
                    className="px-4 py-2 bg-purple-900/40 hover:bg-purple-800/60 text-white rounded-md flex items-center transition-all duration-300 border border-purple-700/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Continue Shopping
                  </button>
                  <button
                    className="px-4 py-2 bg-purple-900/40 hover:bg-purple-800/60 text-white rounded-md flex items-center transition-all duration-300 border border-purple-700/30"
                  >
                    Update Cart
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="mt-6 text-gray-400 text-lg">Your cart is empty</p>
                <button
                  onClick={goToStore}
                  className="mt-6 bg-[#f5a623] hover:bg-[#f55623] text-black font-medium px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Panel */}
          {cartItems.length > 0 && (
            <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg shadow-xl p-6 lg:w-96 border border-purple-900/30 h-fit sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">ORDER SUMMARY</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-[#5cb85c]">
                    <span>Discount</span>
                    <span className="font-medium">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="font-medium text-white">FREE</span>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-900/30">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-300">Total</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">${totalPrice.toFixed(2)}</div>
                      <div className="text-xs text-gray-500 mt-1">Tax included</div>
                    </div>
                  </div>
                </div>

                {/* Proceed to Checkout Button */}
                <button
                  className="w-full bg-gradient-to-r from-[#f5a623] to-[#f55623] text-black font-bold py-4 px-4 rounded-md hover:from-[#f55623] hover:to-[#f5a623] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  onClick={() => router.push("http://localhost:3000/payment")} // Redirect to Payment Page
                >
                  
                  Proceed to Checkout
                </button>

                {/* Payment Icons and Secure Checkout Message */}
                <div className="pt-4 flex flex-col space-y-3">
                  <div className="flex items-center justify-center">
                    <img src="/visa.svg" alt="Visa" className="h-6 mx-1" />
                    <img src="/mastercard.svg" alt="Mastercard" className="h-6 mx-1" />
                    <img src="/amex.svg" alt="American Express" className="h-6 mx-1" />
                    <img src="/paypal.svg" alt="PayPal" className="h-6 mx-1" />
                  </div>
                  <div className="text-xs text-center text-gray-500">
                    Secure checkout provided by Nocturne Payment Systems
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* You Might Also Like Section */}
        {cartItems.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">You Might Also Like</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f5a623] to-[#f55623]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-purple-900/30">
                <div className="relative overflow-hidden h-64">
                  <img
                    src="/images/product1.jpg"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/120317/f5a623?text=Nocturne";
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-[#f55623] text-xs font-bold px-2 py-1 rounded text-white">
                    NEW
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-1">Gothic Earrings</h3>
                  <p className="text-gray-400 text-sm mb-3">Elegant dark design</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-xl">$25</span>
                    <button className="bg-[#f5a623] hover:bg-[#f55623] text-black font-medium px-4 py-2 rounded-md transition-colors duration-300 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-purple-900/30">
                <div className="relative overflow-hidden h-64">
                  <img
                    src="/images/product2.jpg"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/120317/f5a623?text=Nocturne";
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-[#f5a623] text-xs font-bold px-2 py-1 rounded text-white">
                    20% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-1">Leather Jacket</h3>
                  <p className="text-gray-400 text-sm mb-3">Classic black design</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white text-xl">$120</span>
                      <span className="text-gray-500 line-through ml-2">$150</span>
                    </div>
                    <button className="bg-[#f5a623] hover:bg-[#f55623] text-black font-medium px-4 py-2 rounded-md transition-colors duration-300 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png'),_linear-gradient(to_bottom,#080212,#120317,#080212)] rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-purple-900/30">
                <div className="relative overflow-hidden h-64">
                  <img
                    src="/images/product3.jpg"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/120317/f5a623?text=Nocturne";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-1">Platform Boots</h3>
                  <p className="text-gray-400 text-sm mb-3">Stylish and comfortable</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-xl">$85</span>
                    <button className="bg-[#f5a623] hover:bg-[#f55623] text-black font-medium px-4 py-2 rounded-md transition-colors duration-300 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;