"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Image className='py-3' src="/R.png" alt='' width={24} height={24} onClick={()=>setOpen((prev) => !prev) }/>{
            open && (
                <div className="absolute bg-black text-white top-14 left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-3 text-xl z-10">
                    <Link href="/">HomePage</Link>
                    <Link href="/">AboutPAge</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Cart(1)</Link>
                    <Link href="/">Logout</Link>
                </div>
            )
        }
    </div>
  )
}

export default Menu