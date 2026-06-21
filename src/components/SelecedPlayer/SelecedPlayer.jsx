// import React from 'react';
const SelecedPlayer = ({setToggle}) => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className=" my-7">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="sora font-bold text-base lg:text-2xl">Selected <span className="block md:inline">Player (4/6)</span></h1>
                    </div>
                    <div className=" md:flex justify-between">
                        <button onClick={()=>setToggle(true)} className=" border border-gray-300 border-r-0 px-4 lg:px-7 py-2 rounded-l-2xl sora">Available</button>
                        <button onClick={()=>setToggle(false)} className="border border-gray-300 border-l-0 bg-[#E7FE29] lg:px-6 px-3 py-2 rounded-r-2xl sora">Selected <span>(0)</span></button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className=" py-8">
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        {/* Avatar */}
                                        <div className="h-14 w-14 rounded-2xl bg-slate-200 sm:h-16 sm:w-16" />

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-base font-semibold text-slate-900 sm:text-xl">
                                                Darrell Steward
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Left-Hand-Bat
                                            </p>
                                        </div>
                                    </div>

                                    {/* Delete */}
                                    <button className="flex h-10 w-10 items-center justify-center rounded-xl text-red-500 transition hover:bg-red-50">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 7h12M9 7V4h6v3m-8 4v7m4-7v7m4-7v7M5 7l1 13h12l1-13"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Add Button */}
                        <div className="mt-10">
                            <button className="inline-flex items-center rounded-2xl border-2 border-slate-900 bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-lime-400">
                                Add More Player
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelecedPlayer;