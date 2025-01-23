import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Welcome to <span className="text-pink-500 font-bold">KidzyMart</span>, your one-stop online shop for everything your child needs! From adorable outfits to fun toys, educational games, and baby essentials, we offer a carefully curated collection designed with your little one’s happiness in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
              <i className="text-blue-600 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-10 h-10 text-blue-600">
                    <path d="M631.9 110.2L496 16c-12.7-8.5-28.4-11.7-43.6-9.3l-101.1 15.6c-4.2 .7-8.3-2.1-9.7-6.1L320.6 5.2c-5-13.4-23.1-13.4-28.1 0L297.4 16.2c-1.4 4-5.5 6.8-9.7 6.1L186.6 6.7C171.4 4.3 155.7 7.5 143 16L8.1 110.2c-13.5 9.1-18.9 25.8-13.8 40.8l44.3 133c4.7 14 17.7 23 32.5 23h37.5L109 484.8c-1.3 15.3 12.6 27.2 27.8 23.6l111.4-28.5c8.6-2.2 14.8-9.7 15.8-18.6L278 288.6c1-8.8 8.6-15.2 17.4-15.2h49.2c8.8 0 16.4 6.4 17.4 15.2l14.9 172.3c1 8.9 7.2 16.3 15.8 18.6l111.4 28.5c15.2 3.7 29.1-8.2 27.8-23.6l-25.3-287.8h37.5c14.7 0 27.8-9 32.5-23l44.3-133c5-15 0-31.7-13.5-40.8zM320 200c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
                </svg>
              </i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Clothing</h2>
            <p className="text-gray-600 text-center mt-2">
              Trendy and comfy outfits for newborns, toddlers, and kids.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center shadow-md">
              <i className="text-yellow-500 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-10 h-10 text-green-600">
                    <path d="M512 352c0-35.3-28.7-64-64-64H448V256c0-35.3-28.7-64-64-64h-32V128h16c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352C334.3 32 320 46.3 320 64v16h-64V64c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v32H128c-35.3 0-64 28.7-64 64v32H32C14.3 192 0 206.3 0 224V288c0 17.7 14.3 32 32 32h32v64H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32v-16h32c35.3 0 64-28.7 64-64v-16h64v16c0 35.3 28.7 64 64 64h16v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h32c35.3 0 64-28.7 64-64V384h16c17.7 0 32-14.3 32-32V352z" />
                </svg>
              </i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Toys</h2>
            <p className="text-gray-600 text-center mt-2">
              Delightful toys and games to spark creativity and joy.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-md">
              <i className="text-green-500 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10 text-blue-600">
                    <path d="M448 358.4V32c0-17.7-14.3-32-32-32H96C60.7 0 32 28.7 32 64c0 15.5 5.8 29.6 15.4 40.7C13.8 123.4 0 151.6 0 184v264c0 53 43 96 96 96H416c17.7 0 32-14.3 32-32V377.6c0-8.4-3.4-16.6-9.4-22.6zM416 32v326.4l-64-32V64H416zM96 480c-35.3 0-64-28.7-64-64s28.7-64 64-64h288v128H96z" />
                </svg>
              </i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Learning</h2>
            <p className="text-gray-600 text-center mt-2">
              Educational tools and books to inspire young minds.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center shadow-md">
              <i className="text-red-500 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10 text-pink-600">
                    <path d="M224 0C100.3 0 0 100.3 0 224s100.3 224 224 224 224-100.3 224-224S347.7 0 224 0zm0 416c-59.5 0-108-48.5-108-108h48c0 33.1 26.9 60 60 60s60-26.9 60-60h48c0 59.5-48.5 108-108 108zm-96-112h192c8.8 0 16-7.2 16-16V232c0-8.8-7.2-16-16-16H128c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16zm48-64h96V280h-96v80zm0-96h96V184h-96v80z" />
                </svg>
              </i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Essentials</h2>
            <p className="text-gray-600 text-center mt-2">
              Quality products to care for your baby’s daily needs.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-8">
          Join our family and make your childs world magical with{" "}
          <span className="text-pink-500 font-bold">KidzyMart</span>. Happy Shopping!
        </p>
      </div>
    </div>
  );
};

export default About;
