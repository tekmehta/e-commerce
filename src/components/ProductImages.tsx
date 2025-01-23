'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const images = [
  {
    id: 1,
    url: "https://th.bing.com/th/id/R.d544d1e231ab4688816f270143796cc9?rik=YXQgzhMq2OO3GA&pid=ImgRaw&r=0"
  },
  {
    id: 2,
    url: "https://i.pinimg.com/originals/52/6a/0b/526a0bddc82367e5bcec00f6e5125b0a.jpg"
  },
  {
    id: 3,
    url: "https://i.pinimg.com/originals/e1/c7/0e/e1c70ef07bd21b5c824a50908645d0e1.jpg"
  },
  {
    id: 4,
    url: "https://th.bing.com/th/id/OIP.H_lSfdfk8txprdHEOj7HMgAAAA?rs=1&pid=ImgDetMain"
  },
]

const ProductImages = () => {
    const [index, setIndex] = useState(0);

  return (
    <div>
      <div className='h-[500px] relative'>
        <Image src={images[index].url}  alt='' fill sizes='50vw' className='object-cover'/>
      </div>
      <div className='flex flex-row gap-6 pb-6 '>
        {images.map((img, i) => (
          <div className='w-1/4 h-32 relative gap-4 mt-4 cursor-pointer' key={img.id} onClick={()=>setIndex(i)}>
          <Image src={img.url} alt='' fill sizes='50vw' className='object-cover'/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ProductImages;


// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'

// // const images = [
// //   {
// //     id: 1,
// //     url: "https://th.bing.com/th/id/R.d544d1e231ab4688816f270143796cc9?rik=YXQgzhMq2OO3GA&pid=ImgRaw&r=0"
// //   },
// //   {
// //     id: 2,
// //     url: "https://i.pinimg.com/originals/52/6a/0b/526a0bddc82367e5bcec00f6e5125b0a.jpg"
// //   },
// //   {
// //     id: 3,
// //     url: "https://i.pinimg.com/originals/e1/c7/0e/e1c70ef07bd21b5c824a50908645d0e1.jpg"
// //   },
// //   {
// //     id: 4,
// //     url: "https://th.bing.com/th/id/OIP.H_lSfdfk8txprdHEOj7HMgAAAA?rs=1&pid=ImgDetMain"
// //   },
// // ]

// const ProductImages = ({items}: {items : any}) => {
//   // const [index, setIndex] = useState(0);

//   return (
//     <div>
//       <h1>hello</h1>
//       {/* <div className='h-[500px] relative'>
//         <Image src={images[index].url}  alt='' fill sizes='50vw' className='object-cover'/>
//       </div>
//       <div className='flex flex-row gap-6 pb-6 '>
//         {images.map((img, i) => (
//           <div className='w-1/4 h-32 relative gap-4 mt-4 cursor-pointer' key={img.id} onClick={()=>setIndex(i)}>
//           <Image src={img.url} alt='' fill sizes='50vw' className='object-cover'/>
//         </div>
//       ))}
//       </div> */}
//     </div>
//   )
// }

// export default ProductImages;