const SectionRight = () => {
  return (
    <div className="w-[1280px] h-[520px] flex justify-center m-auto gap-72">
      <div className="w-1/3 my-auto">
        <img src="src\assets\22.png" alt="" />
      </div>
      <div className="w-1/3 my-auto flex flex-col gap-5">
        <div className="text-4xl flex flex-col gap-2">
          <p className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            AI Marketing
          </p>
          <p>Optimized Reach</p>
        </div>
        <p className="text-lg">
          It's all about getting your message in front of the right audience and
          creating those valuable relationships. Learn More about how DOML can
          help you do just that - all with a simple, easy-to-use platform.
        </p>
        <div className="w-auto h-px bg-gradient-to-r from-purple-500 to-cyan-500"></div>
        <button className="w-36 p-2 border border-purple-500 rounded-full flex gap-2 justify-center items-center">
          <p>Learn more</p>
          <img src="src\assets\arrow.png" alt="arrow" className="object-none" />
        </button>
      </div>
    </div>
  )
}

export default SectionRight
