const Header = () => {
  return (
    <div>
      <div className="w-[1280px] py-6 flex items-center justify-between m-auto">
        <div className="flex gap-3">
          <img src="../../src/assets/logo.svg" alt="logo" />
          <div className="flex gap-3 text-sm items-center">
            <div className="flex gap-1 items-center">
              <p>Product</p>
              <img
                src="src\assets\expand_more.png"
                alt="expand-more"
                className="object-none"
              />
            </div>
            <p>Team</p>
            <p>Enterprise</p>
            <div className="flex gap-1 items-center">
              <p>Explore</p>
              <img
                src="src\assets\expand_more.png"
                alt="expand-more"
                className="object-none"
              />
            </div>
            <p>Marketplace</p>
            <div className="flex gap-1 items-center">
              <p>Pricing</p>
              <img
                src="src\assets\expand_more.png"
                alt="expand-more"
                className="object-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-60 bg-slate-800 rounded-md border border-gray-600">
            <div className="flex justify-between py-1 px-2">
              <p className="text-gray-300">Search DOML</p>
              <div className="w-6 h-6 flex justify-center items-center border border-gray-600 rounded ">
                <p className="text-xs text-gray-300">/</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-sm items-center">
            <p>Sign in</p>
            <div className="border border-gray-600 rounded-lg p-2">
              <p className="">Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
