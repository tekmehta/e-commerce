"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const slides = [
    {
        id: 1,
        title: "summer sale collections",
        describe: "Sale! Up to 50% off!",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6z5fRViQdum31I0CWH1oxiIvBLIyRagGm3pqs-vtfMlcntSY8uSy2Pgb2WzVnQ6zuWdn__14L3iNzj9vpJMu5FAT2sVExSVGyS51Kh2hPDOQACEu6AL-V1dIkvJvpO-WjRLHTYXJO_CHx/s1600/Fashion+For+Women+(3).jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },{
        id: 2,
        title: "summer sale collections",
        describe: "Sale! Up to 50% off!",
        img: "https://img.ltwebstatic.com/images3_pi/2019/10/14/15710414664fea00e1ed34c224f4f416d87db1b6e6.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    }
    ,{
        id: 3,
        title: "summer sale collections",
        describe: "Sale! Up to 50% off!",
        img: "https://th.bing.com/th/id/R.58298d62a32b94e69b6ada95e3d99c86?rik=Qrm4HdW7x652%2fg&riu=http%3a%2f%2fwww.sex-dresses.com%2fwp-content%2fuploads%2f2016%2f04%2fWomen-Zip-Front-Style-Sleeveless-Denim-Dress-.jpg&ehk=mkFetBZ4WMYON3gQ4PFdq3Jtijdo2dhToezXFlqtZsI%3d&risl=&pid=ImgRaw&r=0",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-500",
    }
]

const Slider = () => {

    const [currrent, setCurrent] = useState(0)

    // auto change function in 3 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length-1 ? 0 : prev +1 ));
        },3000);
        return () => clearInterval(interval);
    },[])

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
        <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={{ transform:`translateX(-${currrent * 100}vw)`}}>
            {slides.map(slide=>(
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                    {/* text container */}
                    <div className='h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center flex-col gap-8 2xl:gap-12 text-center'>
                        <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.describe}</h2>
                        <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h1>
                        <Link href={slide.url}>
                            <button className='rounded-md text-white bg-black text-4xl px-3 py-2'>SHOP NOW</button>
                        </Link>
                    </div>
                    {/* img conatainer */}
                    <div className='h-1/2 xl:h-full xl:w-1/2 relative'>
                        <Image src={slide.img} alt='' fill sizes='100%' className='object-cover'></Image>
                    </div>
                </div>
            ))}
        </div>
        <div className='absolute mb-5 left-1/2 buttom-8 flex gap-4'>
            {slides.map((slide, index)=>(
                <div 
                    className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${currrent === index ? "scale-150" :"" }`} 
                    key={slide.id}
                    onClick={()=>setCurrent(index)}
                >
                    {currrent === index && (
                        <div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>
                        )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider;