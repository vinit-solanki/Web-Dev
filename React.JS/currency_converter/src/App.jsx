import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import SwapButton from './components/swapBtn.jsx'
import InputBox from './components/inputBox.jsx'
function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo) 
  return (  
    <div className='dark:bg-gray-800 flex justify-center items-center'>
      <p className='text-xl'>Currency Converter</p>
      <InputBox inputType="USD" heading="From"/>
      <SwapButton innertext="Swap" from="USD" to="INR"/>
      <InputBox inputType="INR" heading="To"/>
    </div>
  )
}

export default App
