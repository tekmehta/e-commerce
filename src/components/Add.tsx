"use client"
import React, { useState } from 'react'

function Add() {

    const [quantity, setQuantity] = useState(3)
    
    // temporary
    const stock = 6;
    const handleQuantity = (type: "i" | "d") =>{
        if(type === "d" && quantity> 1 ){
            setQuantity((prev) =>prev-1);
        }
        if(type === "i" && quantity < stock ){
            setQuantity((prev) =>prev+1);
        }
    }

  return (
    <div className='flex flex-col gap-4'>
        <h4 className='font-medium '><b>Choose a Quantity</b></h4>
        <div className='flex justify-between'>
            <div className='flex items-center gap-6 '>
                <div className='bg-gray-100 px-4 py-2 rounded-3xl flex items-center justify-between w-32'>
                    <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("d")}>-</button>
                    {quantity}
                    <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("i")}>+</button>
                </div>
            <div className=' text-sm w-40'>
                Only <span className='text-orange-500'>{stock} items</span> left do not miss it
            </div>
            </div>
        <button className='w-36 text-sm rounded-3xl ring-1 ring-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-300 disabled:text-white disabled:ring-none'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Add;