// import { wixClientServer } from '@/lib/wixClientServer';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProductList= () =>{
  return (
    <div className='flex gap-x-8 gap-y-6 flex-wrap justify-between px-10'>
      {/* {res.items.map((product:products.Product)=>( */}
        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6z5fRViQdum31I0CWH1oxiIvBLIyRagGm3pqs-vtfMlcntSY8uSy2Pgb2WzVnQ6zuWdn__14L3iNzj9vpJMu5FAT2sVExSVGyS51Kh2hPDOQACEu6AL-V1dIkvJvpO-WjRLHTYXJO_CHx/s1600/Fashion+For+Women+(3).jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity duration-500'>
            </Image>
            <Image src="https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md'>
            </Image>
        </div>
        <div>
          {/* productname */}
          <div className='flex justify-between font-bold px-2'>
            <span>Kurta</span>
            <span>3000</span>
          </div>
          {/* describtion */}

          <div className='text-sm px-2'>This is kurta for ladies. New Model just arrive for you all. </div>

          {/* buitton */}
          <div className='p-2 text-red-600 px-2'>
            <button className='ring-1 ring-red-600 px-2 py-1 rounded-2xl hover:bg-red-600 hover:text-white'><b>Add to Cart</b></button>
          </div>
        </div>
      </Link>
        <Link href='/bags' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6z5fRViQdum31I0CWH1oxiIvBLIyRagGm3pqs-vtfMlcntSY8uSy2Pgb2WzVnQ6zuWdn__14L3iNzj9vpJMu5FAT2sVExSVGyS51Kh2hPDOQACEu6AL-V1dIkvJvpO-WjRLHTYXJO_CHx/s1600/Fashion+For+Women+(3).jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity duration-500'>
            </Image>
            <Image src="https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md'>
            </Image>
        </div>
        <div>
          {/* productname */}
          <div className='flex justify-between font-bold px-2'>
            <span>Kurta</span>
            <span>3000</span>
          </div>
          {/* describtion */}

          <div className='text-sm px-2'>This is kurta for ladies. New Model just arrive for you all. </div>

          {/* buitton */}
          <div className='p-2 text-red-600 px-2'>
            <button className='ring-1 ring-red-600 px-2 py-1 rounded-2xl hover:bg-red-600 hover:text-white'><b>Add to Cart</b></button>
          </div>
        </div>
      </Link>
        <Link href='/bags' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6z5fRViQdum31I0CWH1oxiIvBLIyRagGm3pqs-vtfMlcntSY8uSy2Pgb2WzVnQ6zuWdn__14L3iNzj9vpJMu5FAT2sVExSVGyS51Kh2hPDOQACEu6AL-V1dIkvJvpO-WjRLHTYXJO_CHx/s1600/Fashion+For+Women+(3).jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity duration-500'>
            </Image>
            <Image src="https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md'>
            </Image>
        </div>
        <div>
          {/* productname */}
          <div className='flex justify-between font-bold px-2'>
            <span>Kurta</span>
            <span>3000</span>
          </div>
          {/* describtion */}

          <div className='text-sm px-2'>This is kurta for ladies. New Model just arrive for you all. </div>

          {/* buitton */}
          <div className='p-2 text-red-600 px-2'>
            <button className='ring-1 ring-red-600 px-2 py-1 rounded-2xl hover:bg-red-600 hover:text-white'><b>Add to Cart</b></button>
          </div>
        </div>
      </Link>
        <Link href='/bags' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6z5fRViQdum31I0CWH1oxiIvBLIyRagGm3pqs-vtfMlcntSY8uSy2Pgb2WzVnQ6zuWdn__14L3iNzj9vpJMu5FAT2sVExSVGyS51Kh2hPDOQACEu6AL-V1dIkvJvpO-WjRLHTYXJO_CHx/s1600/Fashion+For+Women+(3).jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity duration-500'>
            </Image>
            <Image src="https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg" 
              alt='' 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md'>
            </Image>
        </div>
        <div>
          {/* productname */}
          <div className='flex justify-between font-bold px-2'>
            <span>Kurta</span>
            <span>3000</span>
          </div>
          {/* describtion */}

          <div className='text-sm px-2'>This is kurta for ladies. New Model just arrive for you all. </div>

          {/* buitton */}
          <div className='p-2 text-red-600 px-2'>
            <button className='ring-1 ring-red-600 px-2 py-1 rounded-2xl hover:bg-red-600 hover:text-white'><b>Add to Cart</b></button>
          </div>
        </div>
      </Link>
  {/* ) */}
  {/* )} */}
    </div>
  )
}

export default ProductList;