import React from 'react'

const Hero2 = () => {
  return (
    <div className='flex flex-row justify-center w-[1250px]  m-auto mt-32'>
        <div className='rightSide basis-1/2 flex flex-col justify-center mr-28'>
           
            <div className='title font-bold text-6xl bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text' >
            AI Marketing
            </div> <br />
            <div className='title font-bold text-6xl'>Optimized Reach.</div> <br />
            <div className='subtitle '>
            DOML is a digital media agency powered by AI technology providing real time, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution.
            </div> <br /> <br />
            <div className='line h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500'>
           </div> <br /> <br />
           <button className='flex border border-blue-500 rounded-xl hover:bg-blue-500 px-8 w-40'>
           Learn more
           </button>
         
        </div>

        <div className='left side basis-1/2'>
            <img src="../../src/assets/cube.png" alt="" />
        </div>

    </div>
  )
}

export default Hero2