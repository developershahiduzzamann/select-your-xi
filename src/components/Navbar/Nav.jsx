import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            <div className=" flex items-center">
              <img
                src="https://i.ibb.co.com/p63YS00S/logo.png"
                alt="Cricket Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex items-center space-x-12 ml-auto">

              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 font-medium text-[17px] transition sora">Home</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 font-medium text-[17px] transition sora">Fixture</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 font-medium text-[17px] transition sora">Teams</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 font-medium text-[17px] transition sora">Schedules</a>
              </div>

              <div className="hidden md:flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl font-bold text-gray-800 shadow-sm bg-white">
                <span className="text-[16px] sora">6000000</span>
                <span className="text-[16px] sora">Coin</span>
                <span><img src="https://i.ibb.co.com/h1HXZ7kD/Currency.png" alt="" /></span>
              </div>

              <div className="flex items-center md:hidden">
                <label htmlFor="menu-toggle" className="cursor-pointer p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>

            </div>

          </div>
        </div>

        <input type="checkbox" id="menu-toggle" className="peer hidden" />

        <div className="hidden peer-checked:block md:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Fixture</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Teams</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Schedules</a>

            <div className="pt-4 pb-2 border-t border-gray-100 px-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl font-bold text-gray-800 shadow-sm bg-white">
                <span className="text-[16px]">6000000</span>
                <span className="text-[16px]">Coin</span>
                <span><img src="https://i.ibb.co.com/h1HXZ7kD/Currency.png" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;