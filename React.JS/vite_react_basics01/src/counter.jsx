import { useState } from "react";
import './counter.css';
export default function Counter(){
    let [counter,setCounter]=useState(0);
    const addValue=()=>{
        setCounter(counter+1);
    }
    const subValue=()=>{
        if(counter>0){
        setCounter(counter-1);
        }
        else{
            alert("Value can not be further decremented...");
            return;
        }
        }
    return(
        <div className="box">
            <h2>Counter Value: {counter}</h2>
            <button onClick={addValue}>Increment</button>
            <button onClick={subValue}>Decrement</button>
        </div>
    );
}