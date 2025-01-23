import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';
import React from 'react'

const List = () => {

  // console.log("Search params : "+SearchCategory)
  return (
    <div className='px-4 py-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='hidden sm:flex flex flex-row bg-pink-100 h-66'>
        <div className='w-2/3 flex flex-col items-center gap-6 py-8'>
          <p className='text-4xl'>Grap up to 50% off on <br /> Selected Products</p>
          <button className='bg-rose-600 text-white rounded-2xl px-3 py-1 text-sm'>Buy Now</button>
        </div>
        <div className='w-1/3 relative'>
          <Image src='/women.png' alt='' fill className='object-cover'/>
        </div>
      </div>
      {/* filter */}
      <Filter/>
      {/* products */}
      <h1 className='text-xl flex font-semibold py-9'>Shoes for You!</h1>
      <ProductList/>
    </div>
  )
}

export default List;