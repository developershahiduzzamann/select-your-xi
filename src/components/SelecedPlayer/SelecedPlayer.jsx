import SelectedCard from "../SelectedCard/SelectedCard";

const SelecedPlayer = ({ setToggle, selecedPlay, toggle, handleDeletePlayer }) => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="my-7">
                <div className="md:flex justify-between items-center">
                    <div>
                        <h1 className="sora font-bold lg:text-2xl">
                            {toggle === true ? (
                                "Available"
                            ) : (
                                <>
                                    Selected <span className="block md:inline">Player ({selecedPlay.length}/6)</span>
                                </>
                            )}
                        </h1>
                    </div>
                    <div className="md:flex justify-between">
                        <button 
                            onClick={() => setToggle(true)} 
                            className={`border border-gray-300 border-r-0 px-4 lg:px-7 py-2 rounded-l-2xl sora ${toggle ? 'bg-[#E7FE29]' : ''}`}
                        >
                            Available
                        </button>
                        <button 
                            onClick={() => setToggle(false)} 
                            className={`border border-gray-300 border-l-0 lg:px-6 px-3 py-2 rounded-r-2xl sora ${!toggle ? 'bg-[#E7FE29]' : ''}`}
                        >
                            Selected <span>({selecedPlay.length})</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="space-y-4">
                    {selecedPlay.map((player, index) => (
                        
                        <SelectedCard
                            key={player.id || index} 
                            player={player} 
                            handleDeletePlayer={handleDeletePlayer} 
                        />
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <button 
                    onClick={() => setToggle(true)} 
                    className="inline-flex items-center rounded-2xl border-2 border-slate-900 bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-lime-400"
                >
                    Add More Player
                </button>
            </div>
        </div>
    );
};

export default SelecedPlayer;