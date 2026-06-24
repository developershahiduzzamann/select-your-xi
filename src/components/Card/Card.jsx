import { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Card = ({ fetchData, setToggle, toggle, setTotalBalance, totalBalance }) => {

    const playerData = use(fetchData)
    const players = playerData;
    return (
        
        <div className="max-w-7xl mx-auto px-2">
            <div className=" my-7">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="sora font-bold lg:text-2xl">Available</h1>
                    </div>
                    <div className=" md:flex justify-between">
                        <button onClick={()=>setToggle(true)} className={`border border-gray-300 border-r-0 ${toggle===true? "bg-[#E7FE29]" :""} px-3 lg:px-7 py-2 rounded-l-2xl sora`}>Available</button>
                        <button onClick={()=>setToggle(false)} className="border border-gray-300 border-l-0 px-4 lg:px-6 py-2 rounded-r-2xl sora">Selected <span>(10)</span></button>
                    </div>
                </div>
            </div>
            <div className=" max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-1">
                {players.map(player => <PlayerCard player ={player} key = {player.id} setTotalBalance ={setTotalBalance} totalBalance ={totalBalance}></PlayerCard>)}
            </div>
        </div>
    );
};

export default Card;
