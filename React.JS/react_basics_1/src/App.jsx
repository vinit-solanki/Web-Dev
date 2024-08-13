import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Shopping_list from './Shopping_list.jsx';
import Property from './Property.jsx';
import Boxes from './Boxes.jsx';
function App() {
  const [a, setA] = useState(0);
  const [on, setOn] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [emojies,setEmojies]= useState([":)"]);

  const items = [
    { id: 1, item: "Milk", quantity: "2 liters", completed: false },
    { id: 2, item: "Bread", quantity: "1 loaf", completed: true },
    { id: 3, item: "Milk", quantity: "2 liters", completed: false },
    { id: 4, item: "Bread", quantity: "1 loaf", completed: true },
  ];
  const details = [
    {name:"Siddharth Nagar", price:"3,000/sq. ft.", rating:3.5, id:1},
    {name:"City Of Joy", price:"10,000/sq. ft.", rating:4.5,id:2},
    {name:"Siddharth Nagar", price:"3,000/sq. ft.", rating:3.5, id:3},
    {name:"City Of Joy", price:"10,000/sq. ft.", rating:4.5,id:4},
  ]; 
  // Password Generator
  const [length,setLength]=useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [char,setChar] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    if (numbers) str += "0123456789";
    if (symbols) str += "!@#$%^&*()_+={}[]:'<>,.//?\\|";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (char) str += characters;
    for (let i = 0; i < length; i++) {
      let r = Math.floor(Math.random() * str.length);
      let ch = str[r];
      pass += ch;
    }
    setPassword(pass);
  }, [length, symbols, uppercase, numbers, char,setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, symbols, uppercase, numbers, char]);
  const passwordRef = useRef(null);
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    navigator.clipboard.writeText(passwordRef.current.value);
    setCopied(true);
  },[password]);
  return (
    <main>
      <div className='bg-zinc-900 p-5 m-0 flex-column justify-center align-center'>
        <div className='bg-blue-500 rounded-xl p-9 text-white mb-2'>
          <h1 className='text-2xl font-bold'>Hello React Again</h1>
          <p className='text-lg'>Count: {a}</p>
          <button
            onClick={() => setA(a + 1)}
            className='btn color-white bg-black p-3 rounded-md'
          >
            Click me
          </button>
        </div>
        <div className={on ? 'bg-yellow-500 rounded-xl p-7 text-white mb-2' : 'bg-black-500 rounded-xl p-7 text-white mb-2'}>
          <h1 className='text-2xl font-bold'>{on ? "Light ON" : "Light OFF"}</h1>
          <button
            onClick={() => setOn(!on)}
            className='btn color-white bg-black p-3 rounded-md'
          >
            Toggle
          </button>
        </div>
      </div>
      <div>
        <h1 className='bg-red-500 text-black p-2 text-2xl font-bold'>Todo List</h1>
        <form className='justify-center align-center bg-black'>
          <input
            type="text"
            placeholder='Enter your task'
            className='rounded-md text-lg m-5 p-2 border-black-500 border-4 font-black'
          />
          <input
            type="text"
            placeholder='Enter description'
            className='rounded-md text-lg m-5 p-2 border-black-500 border-4 font-black'
          />
          <button
            type="button"
            className='bg-red-500 px-5 py-3 rounded-md text-white text-lg'
          >
            Add
          </button>
        </form>
      </div>
      <div>
        <h1 style={{color:"black", fontWeight:"bold", fontSize:"1.5rem", display:"flex",alignItems:"center", justifyContent:"center",textAlign:"center"}}>Shopping List</h1>
        <Shopping_list items={items}/>
      </div>
      <div>
        <h1 className='bg-red-500 text-black p-2 text-2xl font-bold text-center'>Reviews</h1>
        <Property details={details}/>
      </div>
      <div>
      </div>
      <div>
        <Boxes n={25} />
      </div>
      <div className='flex-col justify-center align-center text-center g-2 bg-gray'>
        <h1 className='text-black text-xl font-bold'>Password Generator</h1>
        <div className='flex m-2 w-full justify-center align-center g-4'>
        <input class="bg-gray-500 text-black border border-gray-200 rounded py-3 px-4 leading-tight" id="grid-zip" type="text" value={password} ref={passwordRef} placeholder={passwordGenerator} readOnly/>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipBoard}>Copy</button>    
        </div>
         <div className='flex text-sm gap-x-2 justify-center '>
          <div className='flex items-center gap-x-2 text-black justify-center align-center text-center'>
            <input type="checkbox" id="uppercase" name="uppercase" value={uppercase} onChange={(e)=>{setUppercase((prev)=>!prev)}}/>
            <label className='text-lg' for="uppercase">Uppercase</label>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{ setLength(e.target.value)}}/>
            <label className='text-lg' for="length">Length: {length}</label>
            <input type="checkbox" id="char" name="char" value= {char} onChange={(e)=>{setUppercase((prev)=>!prev)}}/>
            <label className='text-lg' for="char">Character</label>
            <input type="checkbox" id="symbol" name="symbol" value={symbols} onChange={(e)=>{setUppercase((prev)=>!prev)}}/>
            <label className='text-lg' for="symbol">Symbols</label>
            <input type="checkbox" id="numbers" name="numbers" value={numbers} onChange={(e)=>{setUppercase((prev)=>!prev)}}/>
            <label className='text-lg' for="numbers">Numbers</label>
            
            
          </div>
         </div>
      </div>
      <div style={{justifyContent:"center", alignItems:"center"}}>
        {
          emojies.map((e)=>(
           <span key={e.id} style={{fontSize:"4rem"}}>{e.emoji}</span>   
          )
        )
      }
      <button style={{backgroundColor:"black", padding:"1rem"}}>Add Emoji</button>
      </div>
    </main>
  );
}

export default App;
