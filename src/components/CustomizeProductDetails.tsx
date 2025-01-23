"use client"
import React from 'react'

const CustomizeProductDetails= () =>{ 
   
        
  return (
    <div className='flex flex-col gap-6'>
        {/* colors */}
                <h4 className='font-medium'>Choose a Color</h4>
                <ul className='flex items-center gap-6'>
                    <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
                    <div className='absolute w-10 h-10 ring-1 ring-gray-500 rounded-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'></div>
                    </li>
                    <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'></li>
                    <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500'>
                        <div className='absolute w-11 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'></div>
                    </li>
                </ul> 
         <h4 className='font-medium'>Choose a size</h4>
        <div className='flex items-center gap-3'>
            <ul className='flex items-center gap-6'>
                <li className='ring-1 ring-pink-500 text-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer'>Small</li>
                <li className='ring-1 ring-pink-500 text-white bg-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer'>Medium</li>
                <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed'>Large</li>
            </ul>
        </div>
    </div>
  )
}

export default CustomizeProductDetails