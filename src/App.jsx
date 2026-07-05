import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import SelecedPlayer from './components/SelecedPlayer/SelecedPlayer'


const fetchPromise = async () => {
    const res = await fetch("/player.json")
    return res.json()
}
const fetchData = fetchPromise()

function App() {
  const [toggle, setToggle] = useState(true)
  const [totalBalance, setTotalBalance] = useState(6000000)
  const [selecedPlay, setSelecedPlay] = useState([])

  const handleDeletePlayer = (player) => {
    setTotalBalance(totalBalance + player.price);
    const remainingPlayers = selecedPlay.filter(p => p.id !== player.id);
    setSelecedPlay(remainingPlayers);
  };
  
  return (
    <>
      <Nav totalBalance={totalBalance}></Nav>
      <Banner></Banner>
      {toggle === true ? (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-2 text-center"><span className="loading loading-dots loading-xl"></span></div>}>
          <Card fetchData={fetchData} setToggle={setToggle} toggle={toggle} setTotalBalance={setTotalBalance} totalBalance={totalBalance} selecedPlay={selecedPlay} setSelecedPlay={setSelecedPlay}></Card>
        </Suspense>
      ) : (
        <SelecedPlayer setToggle={setToggle} selecedPlay={selecedPlay} toggle={toggle} handleDeletePlayer={handleDeletePlayer}></SelecedPlayer>
      )}
      <Footer></Footer>

      <ToastContainer/>
    </>
  )
}

export default App