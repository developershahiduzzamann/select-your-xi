
const SeletedCard = ({ player, handleDeletePlayer }) => {
    return (
        <div>
            <div className="pt-2">
                <div className="space-y-4">
                    <div className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                        <div className="flex items-center gap-4 sm:gap-5">
                            {/* Avatar */}
                            <div className="h-14 w-14 rounded-2xl bg-slate-200 sm:h-16 sm:w-16">
                                <img 
                                    className="h-14 w-14 rounded-2xl sm:h-16 sm:w-16 object-cover" 
                                    src={player.image} 
                                    alt={player.name} 
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900 sm:text-xl">
                                    {player.name}
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    {player.battingStyle || player.batting_style}
                                </p>
                            </div>
                        </div>

                        {/* Delete Button */}
                        <button 
                            onClick={() => handleDeletePlayer(player)} 
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-red-500 transition hover:bg-red-50"
                        >
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
                                    stroke開n="round"
                                    d="M6 7h12M9 7V4h6v3m-8 4v7m4-7v7m4-7v7M5 7l1 13h12l1-13"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeletedCard;