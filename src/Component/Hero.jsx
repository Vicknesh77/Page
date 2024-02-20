import React from 'react'
import png from '../assests/1.png'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div className='bg-neutral-800 pl-5 text-white pt-5 '>

      <h1 className='items-center flex justify-center my-10 mx-[30px] px=[30px] font-bold italic text-4xl md:text-6xl md:px-2  '>Concisely describe your Offers </h1>
   
    <div className='bg-neutral-800 text-white w-full md:h-[900px] h-[1240px] max-w-[1460px] grid md:grid-cols-2 mx-auto'>
      <div className='text-center text-white mx-10 text-2xl italic'>
        {/* <h1 className='items-center flex justify-center my-10 mx-[30px] px=[30px] font-bold italic text-4xl md:text-6xl md:px-2'>Concisely describe your offer</h1> */}
          <img className='flex justify-center px-5 py-2' src={png} alt="" />

   

          <p>No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p>
      </div>

      <div className=' mt-2 flex justify-center mx-auto  py-5'>
        <div className=' md:mt-[110px] '>

          <label htmlFor="">Firstname *</label><br />
            <input className='rounded-md mx-1 my-5 py-1 px-12 text-black' type="text" /><br />
            <label htmlFor="">LastName</label><br />
            <input className=' rounded-md mx-1 my-5 py-1 px-12 text-black' type="text" /><br />
            <label htmlFor="">Email *</label><br />
            <input className=' rounded-md mx-1 my-5 py-1 px-12 text-black' type="email" /><br />
            <label htmlFor="">Industry</label><br />
            <input className=' rounded-md mx-1 my-5 py-1 px-12 text-black' type="text" /><br />
            <button className='border rounded mt-5 items-center bg-emerald-500 font-bold tex-2xl border-spacing-3 px-[100px] py-2  '>Claim Now</button>

        </div>
      
     
      </div>
      </div>

       
     
              
  
      </div>

  )
}

export default Hero