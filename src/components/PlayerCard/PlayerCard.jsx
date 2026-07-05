import { toast } from "react-toastify";

const PlayerCard = ({ player, setTotalBalance, totalBalance, selecedPlay, setSelecedPlay }) => {
    
    const isAlreadySelected = selecedPlay.some(p => p.id === player.id);

    const handelClick = (playerPoint) => {
        if (totalBalance < playerPoint.price) {
            toast("Apnar Taka Kom");
            return;
        }

        if (selecedPlay.length >= 6) {
            toast("Maximum 6 players can be selected!");
            return;
        }

        if (isAlreadySelected) {
            toast("This player is already selected!");
            return;
        }

        setTotalBalance(totalBalance - playerPoint.price);
        setSelecedPlay([...selecedPlay, playerPoint]);
    };

    return (
        <div>
            <div className="mb-2">
                <div className="md:max-w-[330px] bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] font-sans">

                    <div className="w-full h-[145px] rounded-xl overflow-hidden mb-4">
                        <img
                            src={player.image}
                            alt={player.name || "Player"}
                            className="w-full h-[145px] object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
                        </svg>
                        <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
                            </svg>
                            <span>{player.country}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-xl">
                            {player.role}
                        </span>
                    </div>

                    <hr className="border-gray-100 mb-4" />

                    <div className="space-y-3 mb-5 text-sm">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900">Rating</span>
                            <span className="text-amber-500 font-bold flex items-center gap-1">
                                ⭐ {player.rating || "5.0"}
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900">Batting Style</span>
                            <span className="text-gray-500 font-medium">{player.battingStyle || player.batting_style}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900">Bowling Style</span>
                            <span className="text-gray-500 font-medium">{player.bowlingStyle || player.bowling_style}</span>
                        </div>
                    </div>

                    <hr className="border-gray-100 mb-4" />

                    <div className="flex justify-between items-center pt-1">
                        <div className="text-base font-extrabold text-gray-900">
                            Price: ${player.price?.toLocaleString()}
                        </div>
                        
                        <button 
                            disabled={isAlreadySelected} 
                            onClick={() => handelClick(player)} 
                            className={`border px-4 py-2.5 rounded-xl transition-all duration-300 text-xs font-semibold shadow-sm ${
                                isAlreadySelected 
                                ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed" 
                                : "bg-white border-gray-300 hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 text-gray-800"
                            }`}
                        >
                            {isAlreadySelected ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;