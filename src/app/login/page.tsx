"use client"
import Link from 'next/link'
import React from 'react'

function LogInPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-2xl rounded-lg p-4 w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-3 text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-3">Please login to your account</p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-1 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-3 px-6 border-1 font-bold rounded-lg shadow-lg hover:opacity-80 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 font-medium">Or login with</div>
        <div className="flex justify-between mt-6 gap-1">
          <button
            className="flex items-center justify-center w-1/3 bg-blue-500 text-white py-3 px-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <i className="fas fa-envelope mr-2"></i> Gmail
          </button>
          <button
            className="flex items-center justify-center w-1/3 bg-blue-500 text-white py-3 px-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <i className="fas fa-mail-bulk mr-2"></i> Mail
          </button>
          <button
            className="flex items-center justify-center w-1/3 bg-blue-500 text-white py-3 px-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <i className="fab fa-facebook-f mr-2"></i> Facebook
          </button>
        </div>
        {/* <link rel="stylesheet" href="/signup">Didn't have account</link> */}
        <Link className='flex justify-center hover:underline text-sm font-sans py-1' href="singup" >Did not have account</Link>
        {/* <button className='flex justify-center hover:underline text-sm font-sans py-1' src="/Signuppage">Didn't have account</button> */}
      </div>
      {/* <button src></button> */}
    </div>
    </div>
    
  )
}

export default LogInPage