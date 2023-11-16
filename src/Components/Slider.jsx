import React from 'react'

const Slider = () => {
  return (
    <div className='flex justify-center py-16'>   
        <div className='bg-gradient-to-r from-purple-500 to-cyan-500 h-96 rounded-2xl w-[1200px] grid grid-cols-4 content-center px-24'>

        <div className='img flex justify-end col-span-1'>
        <img className='rounded-2xl pt-16 ' src="../../src/assets/people.png" alt="" />
        </div>
            

            <div className='rightSide col-span-3 flex flex-col justify-center'>
                <div className='text1 text-lg'>It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.</div> <br />
                <div className='text2 font-bold text-3xl'>Amaka Micheal</div>
                <div className='text3 text-lg'>Media Executive, Buying & Control</div>
                <img className='w-24' src="../../src/assets/discord.png" alt="" />
            </div>
  
          

        </div>
    </div>

  )
}

export default Slider