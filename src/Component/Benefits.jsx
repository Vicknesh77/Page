import React from 'react'
import sun from '../assests/sun.svg'
import map from '../assests/map.svg'
import horizon from '../assests/horizon.svg'

const Benefits = () => {
  return (
    <div className='h-[1450px] md:h-screen mt-16 mx-auto px-20 w-full grid  md:grid-cols-3  md:gap-8 '>

     <div className='w-full bg-white shadow-xl flex flex-col my-10 p-5 rounded-lg h-[380px] text-center  hover:scale-50 duration-600'>
           <img src={sun} className='w-25 text-center my-4 mx-auto 'alt="" />
           <h1 className='my-3 font-semibold text-2xl text-gray-800'>Benefit 1</h1>
            <p className='text-gray-600 my-8'>What’s the value people will get from your offer? Use this section to make your most compelling pitch.</p>
        </div>

        <div className='w-full bg-white shadow-xl flex flex-col my-10 p-5 rounded-lg h-[380px] text-center hover:scale-50 duration-600'>
           <img src={map} className='w-25 text-center my-4 mx-auto 'alt="" />
           <h1 className='my-3 font-semibold text-2xl text-gray-800'>Benefit 2</h1>

          
            <p className='text-gray-600 my-8'>
Tell visitors about the incredible discounts they’ll get with their coupon, or the must-read information included in your ebook.</p>
        </div>


        <div className='w-full bg-white shadow-xl flex flex-col my-10 p-5 rounded-lg h-[380px] text-center hover:scale-50 duration-600'>
           <img src={horizon} className='w-25 text-center my-4 mx-auto 'alt="" />
           <h1 className='my-3 font-semibold text-2xl text-gray-800'>Benefit 3</h1>
            <p className='text-gray-600 my-8'>Alternatively, you could include headshots for featured contributors or step-by-step instructions for claiming the offer.</p>
        </div>

      
    </div>
  )
}

export default Benefits