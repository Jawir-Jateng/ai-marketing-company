const SectionLeft = () => {
  return (
    <div className="w-[1280px] h-[520px] flex justify-center m-auto gap-72 mt-16">
      <div className="w-1/3 my-auto flex flex-col gap-5">
        <div className="text-4xl flex flex-col gap-2">
          <p className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            AI Marketing
          </p>
          <p>Optimized Reach</p>
        </div>
        <p className="text-lg">
          DOML is a digital media agency powered by AI technology providing real
          time, <span className="text-blue-500">data-driven insights</span> on
          your business and audience. The mission of DOML is to create the best
          experiences for companies through intelligent insights, powerful
          analytics and{' '}
          <span className="text-blue-500">strategic execution.</span>
        </p>
        <button className="w-36 p-2 border border-purple-500 rounded-full flex gap-2 justify-center items-center">
          <p>Learn more</p>
          <img src="src\assets\arrow.png" alt="arrow" className="object-none" />
        </button>
      </div>
      <div className="w-1/3 my-auto">
        <img src="src\assets\50.png" alt="" />
      </div>
    </div>
  )
}

export default SectionLeft
