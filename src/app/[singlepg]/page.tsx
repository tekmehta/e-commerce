"use client"
import Add from '@/components/Add';
import CustomizeProductDetails from '@/components/CustomizeProductDetails';
import ProductImages from '@/components/ProductImages';
import React from 'react'


const SinglePage = () => {

  // console.log("search bar name :" + params.singlepg);

  // const wixClient = await wixClientServer();

  // const products = await wixClient.products
  // .queryProducts()
  // .eq("slug", params.singlepg)
  // .find();
  // if(!products.items[0]){
  //   return notFound()
  // }
  // const product = products.items[0];
  
  // console.log("Clicked item varients" + product.productOptions)
  // console.log("Products:", JSON.stringify(products, null, 2));
// console.log("Product Variants:", JSON.stringify(product.));



  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
        {/* img */}
        <div className="w-full lg:w-1/2 top-20 lg:sticky h-max">
          {/* <ProductImages/> */}
          <ProductImages/>
        </div>
        {/* text */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <h1 className='text-4xl font-semibold'>Kurta</h1>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, error nihil? Eos quaerat est facilis excepturi optio impedit, ipsa aspernatur? Voluptas</p>
          <div className='h-[2px] bg-gray-100'/>
               <div className='flex items-center gap-4'>
               <h2 className='text-xl text-gray-500 line-through'>Rs - 299</h2>
               <h3 className='font-medium text-2xl'>Rs. 350</h3>
             </div>
         
          <div className='h-[2px] bg-gray-100'/>
          {/* <CustomizeProductDetails/> */}
          <CustomizeProductDetails/>
          <Add/>
          {/* Additional details */}
          <div className='h-[2px] bg-gray-100'/>
            <div className='text-sm'>
              <h4 className='font-medium mb-4'><b>PRODUCT INFO</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aperiam debitis unde,</p>
            </div>
            <div className='text-sm'>
              <h4 className='font-medium mb-4'><b>RETURN & REFUND POLICY</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at cupiditate eaque dolorum, praesentium similique voluptates quo quas, veniam quos pariatur omnis iusto fugit voluptatem, temporibus veritatis illo impedit quaerat!</p>
            </div>
            <div className='text-sm'>
              <h4 className='font-medium mb-4'><b>SHIPPING INFO</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aperiam debitis unde,</p>
            </div>
        </div>
    </div>
    // <h1>this is single</h1>
  )
}

export default SinglePage;
