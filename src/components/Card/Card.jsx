import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h1 className="sora font-bold text-2xl">Available</h1>
                    </div>
                    <div className="h-[48px] w-[278px] border-2 rounded-2xl md:flex justify-between">
                        <button className="bg-[#E7FE29] px-9  rounded-l-2xl">Available</button>
                        <button className="px-5 rounded-l-2xl">Selected (0)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;