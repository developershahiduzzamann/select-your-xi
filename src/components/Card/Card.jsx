import React, { use } from 'react';

const Card = ({ fetchData }) => {

    const playerData = use(fetchData)
    console.log(playerData)
    return (
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-1">
            {playerData.map(player=><div className="mb-2 ">
                <div className="max-w-[350px] bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] font-sans ">

                {/* Player Image */}
                <div className="w-full h-45 rounded-xl overflow-hidden mb-4">
                    <img 
                        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500"
                        alt="Virat Kohli"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Player Name */}
                <div className="flex items-center gap-2 mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-800">Virat Kohli</h2>
                </div>

                {/* Country & Role Badge */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-gray-400 font-medium">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
                        </svg>
                        <span>India</span>
                    </div>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-xl">
                        All-Rounder
                    </span>
                </div>

                <hr className="border-gray-100 mb-4" />

                {/* Details Section */}
                <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Rating</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Left-Hand-Bat</span>
                        <span className="text-gray-400 font-medium">Left-Hand-Bat</span>
                    </div>
                </div>

                {/* Price & Action Button */}
                <div className="flex justify-between items-center pt-2">
                    <div className="text-base font-bold text-gray-900">
                        Price: $1500000
                    </div>
                    <button className="border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium px-4 py-2 rounded-xl transition-colors text-sm">
                        Choose Player
                    </button>
                </div>

            </div>
            </div>)}
            
        </div>
    );
};

export default Card;