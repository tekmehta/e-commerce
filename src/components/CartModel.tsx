"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const CartModel = () => {

    const cartItem = true;
  return (
    <div className='absolute right-0 top-12 w-auto w-max z-50 bg-white'>
        {!cartItem ? (
            <h3>Cart is Empty</h3>
        ) : (
            // list
            <div className='flex flex-col gap-3  rounded-lg shadow-md right-0  border-2 flex p-2 z-50'>
                <div>
                    <h1><b>Shopping Cart</b></h1>
                </div>
                <div className='flex gap-4 flex-col'>
                {/* items details */}
                <div className='flex gap-4'>
                <Image src="https://th.bing.com/th/id/OIP.bCfu6mFwumnqEhMrpZLoqgHaEw?rs=1&pid=ImgDetMain" alt='' height={100} width={80}/>
                {/* <div>item details</div> */}
                <div>
                    {/* product title */}
                    <div className='flex gap-5'>
                    <h1><b>product name</b></h1>
                    <p><b>$45</b></p>
                    </div>
                    {/* available */}
                    <p className='font-semibold text-gray-500 text-sm'>available</p>
                    {/* quantity and remove button */}
                    <div className='flex items-center justify-between'>
                        <span className='text-gray-500 '>Qty. 1</span>
                        <span className='text-blue-700'>remove</span>
                    </div>
                </div>
                </div>
                {/* items details */}
                <div className='flex gap-4'>
                <Image src="https://th.bing.com/th/id/OIP.bCfu6mFwumnqEhMrpZLoqgHaEw?rs=1&pid=ImgDetMain" alt='' height={100} width={80}/>
                {/* <div>item details</div> */}
                <div>
                    {/* product title */}
                    <div className='flex gap-5'>
                    <h1><b>product name</b></h1>
                    <p><b>$45</b></p>
                    </div>
                    {/* available */}
                    <p className='font-semibold text-gray-500 text-sm'>available</p>
                    {/* quantity and remove button */}
                    <div className='flex items-center justify-between'>
                        <span className='text-gray-500 '>Qty. 1</span>
                        <span className='text-blue-700'>remove</span>
                    </div>
                </div>
                </div>
            </div>
            {/* details button */}
            <div>
                <div className='font-semibold flex justify-between'>
                    <span>Subtotal</span>
                    <span>$49</span>
                </div>
                <div className=' text-gray-500 text-sm'>
                    <p>Lorem ellict elit. Eligendi .</p>
                </div>
                <div className='flex justify-between p-2'>
                    <button className='ring-1 px-2 py-1 rounded-md ring-gray-500'><Link href="checkout"> View Cart</Link></button>
                    <button className='px-2 py-1 rounded-md bg-black text-white border-2'><Link href="checkout">Checkout</Link></button>
                </div>
            </div>
            </div>
        )}
    </div>
  )
}

export default CartModel