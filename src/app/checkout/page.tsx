"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext"; // Import the CartContext

const CartPage = () => {
  const { cartItems, removeFromCart, getTotalItems } = useCart(); // Use the CartContext

  const handleSubmit = () => {
    alert("Form submitted!");
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex-1 h-0.5 bg-gray-400"></div>
        <h1 className="text-md font-sans flex justify-center py-3">
          <span className="text-gray-400 pr-1">| </span> C H E C K O U T{" "}
          <span className="text-gray-400 pl-1"> |</span>
        </h1>
        <div className="flex-1 h-0.5 bg-gray-400"></div>
      </div>
      <div className="px-6 flex flex-col md:flex-row gap-10 md:px-40 relative">
        {/* Left Section */}
        <div className="w-full md:w-3/4 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Customer Details</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
              />
            </div>

            <h1 className="font-bold">Delivery details</h1>

            <div>
              <label htmlFor="country" className="block text-lg font-medium text-gray-700 font-serif text-sm">
                Country/Region <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 font-serif"
                placeholder="Enter your country or region"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-lg font-medium text-gray-700 font-serif text-sm">
                Address
              </label>
              <textarea
                id="address"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 font-serif"
                placeholder="Enter your address"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="md:w-1/4 p-3 bg-pink-100 h-fit rounded-md">
          <div className="flex flex-row justify-between font-sans font-semibold text-sm py-1">
            <h1>Order Summary ({getTotalItems()})</h1>
            <Link href="/cart" className="underline">
              Edit Cart
            </Link>
          </div>

          <div className="flex-1 h-0.5 bg-gray-300 mb-3"></div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3 py-1 text-sm px-2">
              <Image
                src={item.img[0]}
                alt=""
                height={80}
                width={60}
                className="rounded-md"
              />
              <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row justify-between text-sm w-full">
                  <div className="font-bold">{item.name}</div>
                  <div>Rs.{item.price}</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Qty. {item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-blue-700 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
                <Link href="/test">
                  <select name="" id="" className="font-sans text-sm">
                    <option value="">More Details</option>
                  </select>
                </Link>
              </div>
            </div>
          ))}

          <div className="flex-1 h-0.5 bg-gray-300 mb-3 mt-2"></div>

          {/* Order Summary */}
          <div className="flex flex-col gap-2 text-sm font-sans">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>Rs.{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Sales Tax</span>
              <span>Rs.0.00</span>
            </div>
          </div>

          <div className="flex-1 h-0.5 bg-gray-300 mb-3 mt-2"></div>

          {/* Total */}
          <div className="flex flex-col gap-2 text-sm font-sans">
            <div className="flex justify-between text-sm font-bold font-serif">
              <span>Total</span>
              <span>Rs.{subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;