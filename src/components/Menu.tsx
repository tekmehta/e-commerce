"use client"
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)
    const {getTotalItems} = useCart();
  return (
    <div>
        <Image className='py-3' src="/R.png" alt='' width={24} height={24} onClick={()=>setOpen((prev) => !prev) }/>{
            open && (
                <div className="absolute bg-black text-white top-14 left-0 w-full h-fit flex flex-col items-center gap-3 text-xl z-10">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/content">Contact</Link>
                    <Link href="/checkout">Cart({getTotalItems()})</Link>
                    <Link href="/">Logout</Link>
                </div>
            )
        }
    </div>
  )
}

export default Menu