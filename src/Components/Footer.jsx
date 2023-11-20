import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 flex flex-col items-center'>
    <div className='line h-0.5 w-[1200px] bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto'></div>

    <div className='text py-3 w-[1200px] flex justify-between'>
    <p className='flex text-start'>Copyright © 2022 DOML. All rights reserved.</p>
    <p>Terms of Use & Privacy Policy</p>
    </div>
    
  </div>
  
    
  )
}

export default Footer