"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100'>
      {/* top */}
      <div className='flex flex-col md:flex-row gap-24  justify-between'>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href="/" className='text-xl tracking-wide'>Mehta</Link>
          <p>New Afno Boys Hostel, Backside of Pentagon college, Kathmandu-32, Bagmathi Provision, Nepal</p>
          <span>ntek7907@gmail.com</span>
          <span>+977 9824765952</span>
          <div className='flex gap-6'>
            <Image src="/facebook.jpg" alt='no img' width={16} height={16}/>
            <Image src="/insta.png" alt='no img' width={16} height={16}/>
            <Image src="/twitter.jpg" alt='no img' width={16} height={16}/>
            <Image src="/youtube.png" alt='no img' width={16} height={16}/>
          </div>
        </div>
        {/* center */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex gap-6 flex-col justify-between'>
            <h1 className='font-medium'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Affiliates</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
          <div className='flex gap-6 flex-col justify-between'>
            <h1 className='font-medium'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href="#">New Arrival</Link>
              <Link href="#">Accessories</Link>
              <Link href="#">Man</Link>
              <Link href="#">Womens</Link>
              <Link href="#">All Products Us</Link>
            </div>
          </div>
          <div className='flex gap-6 flex-col justify-between'>
            <h1 className='font-medium'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href="#">Customers Services</Link>
              <Link href="#">My Accounts</Link>
              <Link href="#">Find a Store</Link>
              <Link href="#">Legal & Privacy</Link>
              <Link href="#">Gift</Link>
            </div>
          </div>
        </div>
        {/* right*/}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get latest news about trends, promotions, and much more</p>
          <div className=''>
            <div>
            <input type="text" placeholder='Email Address' className='p-4 w-3/4'/>
            <button className='font-semibold bg-red-700 text-white font-serif px-3 py-3 w-1/4'>JOIN</button>
            </div>
            <div className='flex justify-between py-3 gap-3'>
              <Image src="/discover.jpg" alt=' ' width={40} height={20}/>
              <Image src="/skill.jpg" alt=' ' width={40} height={20}/>
              <Image src="/payment.jpg" alt=' ' width={40} height={20}/>
              <Image src="/mastercard.jpg" alt=' ' width={40} height={20}/>
              <Image src="/visa.jpg" alt=' ' width={40} height={20}/>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className='mt-20 flex flex-col justify-between md:flex-row gap-8 items-center'>
        {/* left */}
        <div className='font-semibold'>
          <p>© 2025 Mehta Shop</p>
        </div>
        {/* right */}
        <div className='flex flex-col justify-between md:flex-row gap-8 items-center'>
          <div className='flex gap-5'>
            <span className="text-gray-700">Language</span>
            <span className='font-semibold'>United States | English</span>
          </div>
          <div  className='flex gap-5'>
            <span className="text-gray-700">Currency</span>
            <span className='font-semibold'>NPR</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer