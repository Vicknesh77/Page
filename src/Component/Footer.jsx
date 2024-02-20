import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[580px] md:h-full bg-neutral-800 text-white text-center'>
        <h1 className='mx-auto items-center pt-[100px] font-bold md:text-4xl text-2xl font-serif '>End with one final call to action</h1>
     <div className='py-20 text-md text-gray-300 px-6'>
        <p className='text-center justify-center mx-auto '>This is your last shot at converting someone. Remember to link the call to action button so it sends visitors back to your form at the top of the page Lorem ipsum\Deserunt, quidem..</p>
        <button className='my-16 bg-emerald-500 rounded-md px-8 py-2 font-bold text-white'>Claim Now</button>
     </div>

     <div className='bg-white w-full h-50 flex justify-between px-5'>
        <div>
            <h1 className='text-emerald-500 italic font-bold text-3xl px-7 py-5'>Horizons</h1>
        </div>
        <div className='text-black text-center my-5'>
            <p>
            © 2024 kiki. All rights reserved.
            </p>
        </div>
     </div>

    </div>
  )
}

export default Footer