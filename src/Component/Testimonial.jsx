import React from 'react'
import name from '../assests/name.png'
import icon from '../assests/icon.svg'

const Testimonial = () => {
  return (
    <>
    <div className='bg-white w-full h-[600px] grid '>
       <div className='pt-[160px] mx-auto text-center items-center justify-center'>
          <img sizes={120}src={name} alt="" />
          <p className='mt-2  '>Tessa</p>
          <p>USA</p>
        
       </div>
       <p className='italic text-center text-black text-2xl md:text-3xl'>Sales representative</p>
       <div className='text-center items-center justify-center text-gray-500 text-3xl italic'>
        <p>"Share a real testimonial that hits some of your benefits <br /> (but isn’t too sales-y)."</p>
       </div>   
    </div>

    {/* Offers */}


    <div className='w-full md:h-[800px] my-16 md:px-[120px] '>
      <h1 className=' text-2xl md:text-4xl text-black font-semibold text-center '>Some more details of your offer</h1>
      <div>
      <div className='mt-16 mx-8 px-8 flex align-center'>
        <img src={icon} alt="" />
        <h1 className='text-center justify-center align-middle mt-2 mx-4 font-semibold text-2xl md:text-3xl'>Detail 1</h1>
      </div>
      <div className='text-gray-500  mx-32  my-2 '>
        <p>This is a great space to further clarify your offer, whether it’s additional benefits or need-to-know details,Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio </p>
      </div>
      </div>
      
      <div className='mt-16 mx-8 px-8 flex align-center'>
        <img src={icon} alt="" />
        <h1 className='text-center justify-center align-center mt-2 mx-4 font-semibold text-2xl md:text-3xl'>Detail 2</h1>
      </div>
      <div className='text-gray-500 mx-32 my-2 '>
        <p>For example, you could call out some of the specific, actionable learnings from your ebook or webinar Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quisquam! .</p>
      </div>

  
      <div className='mt-16 mx-8 px-8 flex align-center'>
        <img src={icon} alt="" />
        <h1 className='text-center justify-center align-center mt-2 mx-4 font-semibold text-2xl md:text-3xl'>Detail 2</h1>
      </div>
      <div className='text-gray-500 mx-32 my-2 '>
        <p>For example, you could call out some of the specific, actionable learnings from your ebook or webinar Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, unde?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti qui dolore officia beatae rerum delectus labore sit? .</p>
      </div>

   
      
    </div>
    </>
    
  )
}

export default Testimonial