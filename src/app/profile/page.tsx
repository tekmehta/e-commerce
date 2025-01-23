"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function ProfilePage() {
    const profileDetails = {
        First_Name: "Tek Narayan",
        Last_Name: "Mehta",
        Gender: "Male",
        Email: "ntek7907@gmail.com",
        Phone: "+9779824765952",
        Address: "Rajbiraj, Saptari",
        Hobbies: "Reading, Traveling, Photography",
      };
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-4 sm:p-8">
    <div className="max-w-4xl w-full p-7  rounded-lg shadow-lg">
      {/* Navigation */}
      <div className="flex justify-center mb-6">
        <table className="w-full border-collapse">
          <thead className="text-gray-700 rounded-t-lg">
            <tr>
              <th className="px-4 py-2 text-center text-lg font-medium">
                <Link href="/component/orders" className="hover:underline hover:text-gray-400 transition">Your Orders</Link>
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium">
                <Link href="/component/wishlist" className="hover:underline hover:text-gray-400 transition">Wishlist</Link>
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium">
                <Link href="/component/cart" className="hover:underline hover:text-gray-400 transition">Cart</Link>
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium">
                <Link href="/allcontent/about" className="hover:underline hover:text-gray-400 transition">Supports</Link>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-center">
        <div className="flex-1 h-1 bg-gray-400"></div>
            <p className="mx-4 text-lg font-semibold">User Details</p>
        <div className="flex-1 h-1 bg-gray-400"></div>
      </div>
      <div className="text-center mb-8  p-6 rounded-lg shadow-md">
        <Image
          className="w-28 h-28 rounded-full mx-auto mb-4 shadow-lg"
          src="https://th.bing.com/th/id/OIP.eeZ3jfS4et6eKUi1je3mxwHaHa?rs=1&pid=ImgDetMain"
          alt="Profile Pic"
        />
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Tek Narayan Mehta</h1>
        <p className="text-gray-600 mt-2">Software Developer</p>
      </div>

      {/* Profile Info Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-400 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-semibold">Key</th>
              <th className="px-6 py-3 text-left text-lg font-semibold">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {Object.entries(profileDetails).map(([key, value], index) => (
              <tr
                key={key}
                className={`border-b last:border-none ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200 transition-all`}
              >
                <td className="px-6 py-4 font-medium text-sm text-gray-700">{key.replace("_", " ")}</td>
                <td className="px-6 py-4 font-light text-sm text-gray-800">
                  {Array.isArray(value) ? value.join(", ") : value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ProfilePage;