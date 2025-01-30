// src/components/Navicons.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartModel from './CartModel';
import { useCart } from '@/context/CartContext';

const Navicons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const handleProfile = () => {
    setProfileOpen((prev) => !prev);
  };

  const handleCart = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-3 cursor-pointer relative">
      <Image src="/profile.png" alt="" height={24} width={24} onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute p-4 top-12 left-0 shadow-lg border-2 text-lg rounded-lg z-50 bg-white">
          <Link href="profile">Profile</Link>
          <br />
          <Link href="login">Login</Link>
          <div>Logout</div>
        </div>
      )}

      <Image src="/notification.jpg" alt="" height={24} width={24} />
      <div className="relative cursor-pointer" onClick={handleCart}>
        <Image src="/cart.jpg" alt="" height={24} width={24} />
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-600 text-white rounded-[50%] flex items-center justify-center">
          {getTotalItems()}
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};

export default Navicons;