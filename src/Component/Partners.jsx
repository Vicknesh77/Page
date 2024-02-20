import React from 'react'
import logo1 from '../assests/logo1.svg'
import logo2 from '../assests/logo2.svg'
import logo3 from '../assests/logo3.svg'
import logo4 from '../assests/logo4.svg'

const Partners = () => {
  return (
    <div className='w-full  h-full md:h-[280px] pt-10 bg-emerald-500 text-white mx-auto  py-8 text-center'>
       <h1 className=' font-bold text-3xl md:text-4xl'>Our Partners</h1>
       <div className='grid md:grid-cols-4 items-center text-center my-16 gap-[120px] justify-center md:gap-18 '>
            <img  className=' cursor-pointer text-center justify-center items-center mx-auto'src={logo1} alt="" />
            <img className=' cursor-pointer text-center justify-center items-center mx-auto' src={logo2} alt="" />
            <img className='cursor-pointer text-center justify-center items-center mx-auto' src={logo3} alt="" />
            <img className='cursor-pointer text-center justify-center items-center mx-auto' src={logo4} alt="" />
       </div>
      
    </div>
  )
}

export default Partners