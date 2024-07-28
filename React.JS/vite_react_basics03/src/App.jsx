// import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import ShoppingList from './ShoppingList.jsx';
function App() {
  // Shopping list
  const data = [
    {id:1,item:'bread',quantity:2,completed:false},
    {id:2,item:'milk',quantity:1,completed:true},
    {id:3,item:'soya chuncks',quantity:20,completed:false},
    {id:4,item:'butter',quantity:2,completed:false},
  ]
  // const [len, setLen] = useState(8);
  // const [numAllowed, setNumAllowed] = useState(false);
  // const [charAllowed, setCharAllowed] = useState(false);
  // const [password, setPassword] = useState("");
  // const passwordRef = useRef(null);

  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(password)
  //   alert(`${password} copied to clipboard!`);
  // }, [password]);

  // const passwordGenerator = useCallback(() => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   let num = "0123456789";
  //   let char = "!@#$%^&*()_+~`|}{[]:<>,./?";
  //   if (numAllowed) str += num;
  //   if (charAllowed) str += char;
  //   for (let i = 0; i < len; i++) {
  //     pass += str.charAt(Math.floor(Math.random() * str.length));
  //   }
  //   setPassword(pass);
  // }, [len, numAllowed, charAllowed]);

  // useEffect(() => {
  //   passwordGenerator();
  // }, [len, numAllowed, charAllowed, passwordGenerator]);

  return (
    // <div className='text-center justify-center align-center '>
    //   <h1 className='text-4xl text-center color-gray-700'>Password Generator</h1>
    //   <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-red bg-gray-900 flex gap-1 '>
    //     <input
    //       type="text"
    //       className="outline-none w-full p-1 rounded"
    //       placeholder='Password here...'
    //       value={password}
    //       readOnly
    //       ref={passwordRef}
    //     />
    //     <button
    //       className='border-none shrink-0 bg-gray-400 text-black font-bold hover:bg-black-200'
    //       onClick={copyPasswordToClipboard}
    //     >
    //       Copy
    //     </button>
    //   </div>
    //   <div className='flex items-center gap-x-1'>
    //     <input
    //       type="range"
    //       min={6}
    //       max={18}
    //       value={len}
    //       className='cursor-pointer'
    //       onChange={(e) => { setLen(Number(e.target.value)); }}
    //     />
    //     <label htmlFor="">Length: {len}</label>
    //   </div>
    //   <div className='flex items-center gap-x-1'>
    //     <input
    //       type="checkbox"
    //       checked={charAllowed}
    //       id='characterInput'
    //       onChange={() => {
    //         setCharAllowed((prev) => !prev);
    //       }}
    //     />
    //     <label htmlFor="characterInput">Include Special Characters</label>
    //   </div>
    //   <div className='flex items-center gap-x-1'>
    //     <input
    //       type="checkbox"
    //       checked={numAllowed}
    //       id='numberInput'
    //       onChange={() => {
    //         setNumAllowed((prev) => !prev);
    //       }}
    //     />
    //     <label htmlFor="numberInput">Include Numbers (0-9)</label>
    //   </div>
    // </div>
    <div className='App'>
      <ShoppingList items={data} />
    </div>
    );
}

export default App;
