import { useState } from 'react'
import './App.css'
import './index.css'
// import Card from './Card.jsx'
function App() {
  const [color,setColor]=useState("black")
  return (
    <div className='w-full h-screen justify-center align-center rounded-lg' style={{backgroundColor:color}}>
    {/* <Card className="card" title="Hello, Tailwind"/> */}
    {/* <Card title="Hello, React"/> */}
  <div className=" inline-flex m-3 border-black-500 p-2 rounded-lg bg-gray-300/[.06]">
  <button class=" bg-violet-500 text-gray-800 font-bold"
  onClick={()=>setColor("violet")}
  >
    Violet
  </button>
  <button class="bg-indigo-500 text-gray-800 font-bold"
  onClick={()=>setColor("indigo")}
  >
    Indigo
  </button>
  <button class="bg-blue-500 text-gray-800 font-bold"
  onClick={()=>setColor("blue")}
  >
    Blue
  </button>
  <button class="bg-green-500 text-gray-800 font-bold"
  onClick={()=>setColor("green")}
  >
    Green
  </button>
  <button class="bg-yellow-500 text-gray-800 font-bold"
  onClick={()=>setColor("yellow")}
  >
    Yellow
  </button>
  <button class="bg-orange-500 text-gray-800 font-bold"
  onClick={()=>setColor("orange")}
  >
    Orange
  </button>
  <button class="bg-red-500 text-gray-800 font-bold"
  onClick={()=>setColor("red")}
  >
    Red
  </button>
</div>
    </div>
  )
}

export default App
