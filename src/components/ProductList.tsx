// src/components/ProductList.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useCart } from '@/context/CartContext';

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Kurta',
      price: 3000,
      description: 'This is kurta for ladies. New Model just arrive for you all.',
      link: '/test',
      images: [
        'https://www.shauryasanadhya.com/cdn/shop/products/DSC6199_1800x1800.jpg?v=1621949172',
        'https://www.shauryasanadhya.com/cdn/shop/products/DSC6199_1800x1800.jpg?v=1621949172',
      ],
    },
    {
      id: 2,
      name: 'Shoes',
      price: 5000,
      description: 'High-quality shoes available now.',
      link: '/bags',
      images: [
        'https://img.kwcdn.com/product/visage/image/1665477587368/9077685415375322357.png',
        'https://www.dhresource.com/webp/m/0x0/f2/albu/g21/M00/6C/39/rBVaqmDb3WmACgReAACrYs2zaH0942.jpg',
      ],
    },
    {
      id: 3,
      name: 'Jacket',
      price: 9000,
      description: 'Stylish jacket to keep you warm.',
      link: '/bags',
      images: [
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/37/1505496795-eddie-bauer-sun-valley-down-parka.jpg?crop=1.0xw:1xh;center,top&resize=768:*',
        'https://i.pinimg.com/originals/aa/31/37/aa3137b9d696ca2c4fba5bdc04389704.jpg',
      ],
    },
    {
      id: 4,
      name: 'Bags',
      price: 200,
      description: 'Stylish and durable bags.',
      link: '/bags',
      images: [
        'https://gift-bagz.com/wp-content/uploads/2020/09/fashion.jpg',
        'https://i.pinimg.com/originals/e5/31/30/e53130b8589154338ff32a2f8783f2a0.jpg',
      ],
    },
  ];

  return (
    <div className="flex gap-x-0 gap-y-3 flex-wrap justify-between px-3">
      {products.map((product) => (
        <div key={product.id} className="cursor-pointer w-full flex flex-col gap-4 sm:w-[47%] lg:w-[22%]">
          <Link href={product.link} className="block group">
            <div className="relative w-full h-80">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={product.images[1]}
                alt={product.name}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between font-bold px-2">
                <span>{product.name}</span>
                <span>{product.price}</span>
              </div>
              <div className="text-sm px-2">{product.description}</div>
              <div className="p-2 text-red-600 px-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      img: product.images,
                    });
                  }}
                  className="ring-1 ring-red-600 px-2 py-1 rounded-2xl hover:bg-red-600 hover:text-white"
                >
                  <b>Add to Cart</b>
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;