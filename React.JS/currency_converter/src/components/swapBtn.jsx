import React from "react";
import './swapBtn.css';

function DisplaySwap(){
    alert("Swap button clicked");
}
function SwapButton({innertext}){
    return (
        <>
        <button className="swap-btn" onClick={<DisplaySwap/>}>{innertext}</button>
        </>
    );
}
export default SwapButton;