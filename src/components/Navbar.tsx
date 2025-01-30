"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Searchbar from './Searchbar'
import Navicons from './Navicons'
import { useCart } from '@/context/CartContext'

function Navbar() {
    const {getTotalItems} = useCart();
  return (
    <div className="h-14 px-4 py-1 md:px-8 lg:px-16 xl:px-32 2xl:px-52 relative">
        {/* movile screen */}
        <div className="flex items-center justify-between md:hidden">
            <Link className='px-5' href="/">MEHTA</Link>
            <Menu/>
        </div>
        {/* bigger screen */}
        <div className='hidden md:flex h-12'>
            {/* left */}
            <div className='w-1/3 xl:w-1/2 flex gap-2 items-center  pr-12'>
                <Image src="/logo.jpg" alt='' width={40} height={40}></Image>
                <div className='hidden xl:flex gap-4 px-5'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/content">Contact</Link>
                    <Link href="/checkout">Cart({getTotalItems()})</Link>
                </div>
            </div>
            {/* right */}
            <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-6'>
                <Searchbar/>
                <Navicons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;