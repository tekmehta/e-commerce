// src/components/CartModel.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const CartModel = () => {
  const { cartItems, removeFromCart, getTotalItems } = useCart();

  return (
    <div className="absolute right-0 top-12 w-max rounded-lg z-50 bg-white">
      {cartItems.length === 0 ? (
        <h3 className='px-5 py-3'>Cart is Empty</h3>
      ) : (
        <div className="flex flex-col gap-3 shadow-md right-0 border-2 rounded-lg p-2 z-50">
          <div>
            <h1>
              <b>Shopping Cart</b>
            </h1>
          </div>
          <div className="flex gap-4 flex-col">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <Image
                  src={item.img[1]}
                  alt=""
                  height={50}
                  width={50}
                  />
                <div>
                  <div className="flex gap-5">
                    <h1>
                      <b>{item.name}</b>
                    </h1>
                    <p>
                      <b>${item.price}</b>
                    </p>
                  </div>
                  <p className="font-semibold text-gray-500 text-sm">available</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span className="text-blue-700 cursor-pointer" onClick={() => removeFromCart(item.id)}>
                      remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="font-semibold flex justify-between">
              <span>Subtotal</span>
              <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
            <div className="text-gray-500 text-sm">
              <p>Lorem ellict elit. Eligendi .</p>
            </div>
            <div className="flex justify-between p-2">
              <button className="ring-1 px-2 py-1 rounded-md ring-gray-500">
                <Link href="checkout">View Cart</Link>
              </button>
              <button className="px-2 py-1 rounded-md bg-black text-white border-2">
                <Link href="checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModel;