
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Nav from './components/Navbar/Nav'


  const fetchPromise = async()=>{
    const res = await fetch("/player.json")
    return res.json()
  }

function App() {
  const fetchData = fetchPromise()
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto my-5">
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
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Card fetchData ={fetchData}></Card>
      </Suspense>
    </>
  )
}

export default App
