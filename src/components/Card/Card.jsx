import { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Card = ({ fetchData, setToggle, toggle, setTotalBalance, totalBalance, selecedPlay, setSelecedPlay }) => {
    const playerData = use(fetchData);
    const players = playerData;
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="my-7">
                <div className="flex justify-between items-center">
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
                            className={`border border-gray-300 border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""} px-3 lg:px-7 py-2 rounded-l-2xl sora`}
                        >
                            Available
                        </button>
                        <button 
                            onClick={() => setToggle(false)} 
                            className={`border border-gray-300 border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""} px-4 lg:px-6 py-2 rounded-r-2xl sora`}
                        >
                            Selected <span>({selecedPlay.length})</span>
                        </button>
                    </div>
                </div>
            </div>

            {toggle && (
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {players.map(player => (
                        <PlayerCard 
                            player={player} 
                            key={player.id} 
                            setTotalBalance={setTotalBalance} 
                            totalBalance={totalBalance} 
                            selecedPlay={selecedPlay} 
                            setSelecedPlay={setSelecedPlay}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;