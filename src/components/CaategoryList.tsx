'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CaategoryList = () => {

  return (
    <div className='px-1 overflow-x-scroll pb-2 '>
        <div className='flex gap-4 w-[80%] md:gap-8 text-center'>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://th.bing.com/th/id/R.90697dc95a3c4f5398765128e13b6a7c?rik=6a%2fM7vg6WH34NQ&pid=ImgRaw&r=0" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-semibold text-xl tracking-wide '>All Product</h1>
            </Link>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://th.bing.com/th/id/R.6a7df6be70a503eb62aca070a1460c0f?rik=FWShpSqM8r%2ftXA&pid=ImgRaw&r=0" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-bold text-xl tracking-wide'>T-Shirt</h1>
            </Link>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://images.opumo.com/wordpress/wp-content/uploads/2022/10/opumo-5-18.jpg" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-bold text-xl tracking-wide'>Shoes</h1>
            </Link>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-bold text-xl tracking-wide'>Jacket</h1>
            </Link>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://ae01.alicdn.com/kf/HTB1F9wJQXXXXXaxaFXXq6xXFXXXI/Dress-Shoes-Women-Pumps-Open-toe-lace-wedding-shoes-Peep-Toe-Elegant-Stain-Riband-High-Heels.jpg" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-bold text-xl tracking-wide'>Sleepers</h1>
            </Link>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://static.vecteezy.com/system/resources/previews/022/460/209/large_2x/a-computer-desktop-wallpaper-for-forex-trading-terminal-ai-generative-desktop-background-free-photo.jpg" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-bold text-xl tracking-wide'>Computer</h1>
            </Link>
            <Link href={`/list?cat=test`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src= "https://th.bing.com/th/id/R.db0944f48beb99cbac9416dcd518bde2?rik=TQQuKHWD4vHJfA&pid=ImgRaw&r=0" alt='no img' fill sizes='20vw' className='object-cover rounded-md' />
                </div>
                <h1 className='mt-2 mb-2 font-bold text-xl tracking-wide'>Kurta</h1>
            </Link>
        </div>
    </div>
  )
}

export default CaategoryList;