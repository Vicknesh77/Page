import React from 'react'
import nature from '../assests/nature.png'

const Story = () => {
  return (
    <div className='w-full h-[1400px] md:h-screen bg-white text-gray-600 grid md:grid-cols-2 gap-2 py-36  text-center'>
        <div className='mx-auto'>
            <img className='size-[320px] md:size-full h-220' src={nature} alt="" />
        </div>

        <div className='mx-auto mt-4 md:mt-18 px-10 py-5 text-[20px]'>
            <h1 className='my-8 text-2xl md:text-4xl font-bold text-black'>Tell a compelling story</h1>
           <p>Use this long-form section to really paint a picture of the before and after. What’s the problem you’re solving? What’s the benefit people are getting?For example, if you’re hosting a webinar about how to collect leads for an online business,describe the struggle of trying to find and convert prospects—then explain how your webinar is gonna help make it easier. You can also highlight the urgency or exclusivity of your offer. <span className='text-black font-bold italic'>If this is only available on a particular day or for a limited time, make that clear</span>.</p>
        </div>
    </div>
  )
}

export default Story