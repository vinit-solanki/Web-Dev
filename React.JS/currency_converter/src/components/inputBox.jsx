import React from "react";
import './inputBox.css';
function InputBox({inputType,heading,amt}){
    return(
<div className="entireBox">
  <div className="inputDisplay flex flex-column gap-2">
    <p>{heading}</p>
    <br/>
    <input type="number" />
  </div>
  <div className="inputDisplay flex flex-column">
  <p>Curreny Type</p>
  <select class=" block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option value="">{inputType}</option>
    <option>USD</option>
    <option value="">INR</option>
  </select>
  </div>
</div>

)
}
export default InputBox;