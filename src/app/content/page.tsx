import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl w-full p-8">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
                    Contact Us
                </h1>
                <p className="text-xl text-center text-gray-600 mb-8">
                    Welcome to our Online Shop! We specialize in providing a wide variety of high-quality and safe products for children and small kids. If you have any questions or need assistance, we are here to help!
                </p>

                <div className="flex justify-around mb-6 gap-2">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Our Location</h2>
                        <p className="text-gray-600">SantiNagar, Tinkune, beside Pentagon, Nepal</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Call Us</h2>
                        <p className="text-gray-600">(+977) 9824765952</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
                        <p className="text-gray-600">ntek7907@gmail.com</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Reach Out to Us
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-lg text-gray-700">Your Name</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg text-gray-700">Your Email</label>
                            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
                            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
