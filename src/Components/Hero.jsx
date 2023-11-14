import React from 'react'

const Hero = () => {
  return (

    <div className=' my-auto grid grid-cols-2 gap-36 place-items-center bg-black px-72 h-[720px]'>
        <div className='col-span-1'>
        <h1 className=' font- sans-serif text-4xl font-bold bg-gradient-to-r from-purple-500  to-cyan-500 text-transparent bg-clip-text'>AI Marketing.</h1>
        <h1 className='font- sans-serif text-4xl font-bold text-white'> Optimized Reach. </h1> <br/>
        <div className='subtitle text-white'> Our vision is to revolutionize the way brands and advertisers target, reach </div> <br /> <br />
        <div class="h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div> <br /> <br />
        <button className= ' font-Montserrat button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-[23.298px] max-w-xl'>Get Started</button>
        </div>
        

    
        <div className='flex justify-cente'>
        <img className='w-96 col-span-1' src="../../src/assets/heroimage.png" alt="ini gambar" />
        </div>
        
    </div>



   
    
  )
}

export default Hero