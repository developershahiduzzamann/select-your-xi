import React from 'react';

const Banner = () => {
    return (
        <div className="bg-white py-10 px-2">
            <div
                className="w-full max-w-7xl mx-auto md:h-[450px] rounded-[32px] overflow-hidden flex flex-col justify-center items-center text-center p-6 px-12 border border-gray-800 shadow-xl bg-cover bg-center bg-no-repeat bg-black"
                style={{ backgroundImage: `url('https://i.ibb.co.com/jZBMB6bk/bg-shadow.png')` }}>

                {/* Content Container */}
                <div className="flex flex-col items-center">

                    {/* Banner Logo */}
                    <div className="mb-6 max-w-[160px]">
                        <img
                            src="https://i.ibb.co.com/PsFN7wzb/banner-main.png"
                            alt="Cricket Logo"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white sora text-3xl md:text-4xl font-extrabold tracking-wide mb-4 max-w-[850px] leading-tight">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-400 sora text-lg font-medium mb-8 tracking-wide">
                        Beyond Boundaries Beyond Limits
                    </p>

                    {/* Call to Action Button */}
                    <button className="bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold px-6 py-3 rounded-xl border border-[#b5e600] transition-transform active:scale-95 sora text-sm shadow-[0_0_20px_rgba(204,255,0,0.25)]">
                        Claim Free Credit
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Banner;