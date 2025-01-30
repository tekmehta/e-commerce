import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          Our Blog - The Best Shopping for Your Little One
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Explore our latest blog posts to stay updated on the best products, deals, and tips for your child’s wardrobe, toys, baby essentials, and more! We cover everything from fashion to fun, ensuring your little one has the best of everything.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition duration-300">
            <Image
              src="https://www.kindercare.com/areas/kindercare/assets/refresh/img/css/kc_footer-illustration.png"
              alt="Blog Post 1"
              height={50}
              width={30}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Top Fashion Trends for Toddlers
            </h3>
            <p className="text-gray-600 mb-4">
              Discover the latest fashion trends for toddlers and find the perfect outfits for your little ones. From comfy everyday wear to special occasion attire, we have got you covered.
            </p>
            <a
              href="#"
              className="text-teal-500 hover:underline font-semibold"
            >
              Read More →
            </a>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition duration-300">
            <Image
              src="https://www.kindercare.com/areas/kindercare/assets/refresh/img/css/kc_footer-illustration.png"
              alt="Blog Post 2"
              height={50}
              width={30}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Must-Have Toys for Babies and Toddlers
            </h3>
            <p className="text-gray-600 mb-4">
              Check out the must-have toys that will help your baby or toddler grow, play, and learn. We have rounded up the best toys for development, fun, and safety.
            </p>
            <a
              href="#"
              className="text-teal-500 hover:underline font-semibold"
            >
              Read More →
            </a>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition duration-300">
            <Image
              src="https://www.kindercare.com/areas/kindercare/assets/refresh/img/css/kc_footer-illustration.png"
              alt="Blog Post 3"
              height={30}
              width={50}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Baby Care Essentials Every Parent Needs
            </h3>
            <p className="text-gray-600 mb-4">
              A checklist of the essential baby care items every new parent should have. From diapers to lotions, find out what’s essential for your baby’s first years.
            </p>
            <a
              href="#"
              className="text-teal-500 hover:underline font-semibold"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
