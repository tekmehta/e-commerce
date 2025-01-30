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
        'https://th.bing.com/th/id/OIP.H_lSfdfk8txprdHEOj7HMgAAAA?rs=1&pid=ImgDetMain',
        'https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg',
      ],
    },
    {
      id: 2,
      name: 'Shoes',
      price: 5000,
      description: 'High-quality shoes available now.',
      link: '/bags',
      images: [
        'https://th.bing.com/th/id/R.d544d1e231ab4688816f270143796cc9?rik=YXQgzhMq2OO3GA&pid=ImgRaw&r=0',
        'https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg',
      ],
    },
    {
      id: 3,
      name: 'Jacket',
      price: 9000,
      description: 'Stylish jacket to keep you warm.',
      link: '/bags',
      images: [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6z5fRViQdum31I0CWH1oxiIvBLIyRagGm3pqs-vtfMlcntSY8uSy2Pgb2WzVnQ6zuWdn__14L3iNzj9vpJMu5FAT2sVExSVGyS51Kh2hPDOQACEu6AL-V1dIkvJvpO-WjRLHTYXJO_CHx/s1600/Fashion+For+Women+(3).jpg',
        'https://i.pinimg.com/originals/52/6a/0b/526a0bddc82367e5bcec00f6e5125b0a.jpg',
      ],
    },
    {
      id: 4,
      name: 'Bags',
      price: 200,
      description: 'Stylish and durable bags.',
      link: '/bags',
      images: [
        'https://i.pinimg.com/originals/52/6a/0b/526a0bddc82367e5bcec00f6e5125b0a.jpg',
        'https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg',
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