import React from 'react'

function Filter() {
  return (
    <div className='mt-12 flex justify-between'>
        <div className='flex gap-6 flex-wrap'>
            <select name="type" id="" className='px-4 py-2 bg-gray-200 rounded-2xl text-sm font-medium'>
                <option value="">option</option>
                <option value="">Physical</option>
            </select>
            <input type="text" name='min' placeholder='Min Price' className='text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-200'/>
            <input type="text" name='max' placeholder='Max Price' className='text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-200'/>
            <select name="size" id="" className='px-4 py-2 bg-gray-200 rounded-2xl text-sm font-medium'>
                <option value="">Size</option>
                <option value="">Size</option>
            </select>
            <select name="color" id="" className='px-4 py-2 bg-gray-200 rounded-2xl text-sm font-medium'>
                <option value="">Color</option>
                <option value="">Test</option>
            </select>
            <select name="ribbon" id="" className='px-4 py-2 bg-gray-200 rounded-2xl text-sm font-medium'>
                <option value="">Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            <select name="type" id="" className='px-4 py-2 bg-gray-200 rounded-2xl text-sm font-medium'>
                <option value="">option</option>
                <option value="">Physical</option>
            </select>
        </div>
        <div>
        <select name="type" id="" className='px-4 py-2 bg-gray-200 rounded-2xl text-sm font-medium'>
                <option value="">Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
    </div>
  )
}

export default Filter