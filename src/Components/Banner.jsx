const Banner = () => {
  return (
    <div
      className="w-[1200px] h-[415px] flex justify-center m-auto mb-80 pl-8 pr-20 mt-16"
      style={{
        backgroundImage: "url('../../src/assets/bg-gradient.png')",
        backgroundSize: '1200px 415px',
      }}
    >
      <div className="w-1/2 my-auto">
        <img src="src\assets\7.png" alt="" className="h-[480px]" />
      </div>
      <div className="w-1/2 my-auto flex flex-col gap-5">
        <div className="flex flex-col">
          <p className="text-5xl">
            Get exponential reach via{' '}
            <span className="font-bold">AI Marketing</span>{' '}
          </p>
          <div className="flex gap-2 mt-6">
            <div className="w-96 py-2 px-4 bg-white bg-opacity-20 rounded-full flex gap-2">
              <p className="text-gray-300">Enter your work email</p>
            </div>
            <div className="w-36 p-2 bg-black rounded-full flex gap-2 justify-center">
              <button>Get in touch</button>
              <img
                src="src\assets\arrow.png"
                alt="arrow"
                className="object-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
