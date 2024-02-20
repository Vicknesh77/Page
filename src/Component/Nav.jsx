import React, { useState } from 'react'
import { AiOutlineClose , AiOutlineMenu } from "react-icons/ai";


const Nav = () => {

    const[nav , setNav] =useState(false)

    const handlenav = ()=>{
        setNav(!nav);
    }


  return (
    <div className='bg-neutral-800 text-white  h-24 px-4 py-6  mx-auto flex items-center justify-between'>
        <h1 className='text-emerald-500 w-full text-2xl font-bold md:pl-20 italic px-5'>Horizons</h1>

        <ul className='hidden md:flex md:my-5'>
            <li className='p-5 cursor-pointer '>Home</li>
            <li className='p-5 cursor-pointer '>Benefits</li>
            <li className='p-5 cursor-pointer '>Story</li>
            <li className='p-5 cursor-pointer '>Partner</li>
            <li className='p-5 cursor-pointer '>Contact</li>
        </ul>

       
          {/* For mobile response */}
        <div className='cursor-pointer block md:hidden px-10'onClick={handlenav}>

          {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/> }
         
        </div>

        {/* For Mobile Response */}

        <div className={nav ? 'fixed  left-0  top-0  w-[70%] h-full border-r-0  border-r-gray-600  bg-neutral-800' : ' ease-in-out duration-900 fixed left-[-100%]'}>

        <h1 className=' italic  w-full  text-2xl  m-4   font-bold py-4 text-[#00df9a]'>Horizons</h1>
        <ul className='p-4 uppercase'>
          <li className='p-5 border-b border-gray-600'>Home</li>
          <li className='p-5 border-b border-b-gray-600'>Benefits</li>
          <li className='p-5 border-b border-b-gray-600'>Story</li>
          <li className='p-5 border-b border-b-gray-600'>Partner</li>
          <li className='p-5'>Contact</li>
        </ul>
       

    </div>


    </div>

    
  )
}

export default Nav