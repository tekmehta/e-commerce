"use client"
import Image from 'next/image'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation';
import React from 'react'

function Searchbar() {

    const router = useRouter();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("searchName") as string;

        if(name){
            router.push(`/list?name=${name}`)
        }
    }

  return (
    <div>
        <form action="" className='bg-gray-100 p-2 rounded-md flex gap-3' onSubmit={handleSubmit}>
            <input type="text" name="searchName" id="" placeholder='Seach' className=' w-full bg-transparent outline-none' />
            <button>
                <Image src="/search.jpg" alt='' width={16} height={16}/>
            </button>
        </form>
    </div>
  )
}

export default Searchbar