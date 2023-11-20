import React from 'react'

const Hero3 = () => {
  return (
    <div className='flex flex-row-reverse justify-center w-[1250px]  m-auto mt-32'>
    <div className='rightSide basis-1/2 flex flex-col justify-center ml-28'>
       
        <div className='title font-bold text-6xl bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text' >
        AI Marketing
        </div> <br />
        <div className='title font-bold text-6xl'>Optimized Reach.</div> <br />
        <div className='subtitle '>
        It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
        </div> <br /> <br />
        <div className='line h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500'>
       </div> <br /> <br />
       <button className=' px-8 w-40 flex border border-blue-500 rounded-xl hover:bg-blue-500 '>
       Learn more
       </button>
     
    </div>

    <div className='left side basis-1/2 flex justify-center m-auto '>
        <img src="../../src/assets/abstract.png" alt="" />
    </div>

</div>
  )
}

export default Hero3