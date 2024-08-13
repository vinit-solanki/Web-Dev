import React from 'react'
import CurrencyConverter from './components/currency_converter.jsx'
function App() {
  return (
    <div className='w-full h-screen bg-emerald-950 text-yellow-200 flex flex-column justify-center align-center p-3'
        style={{fontFamily:"Impact,sans-serif",display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <h1 className='text-5xl'>Currency Converter</h1>
        <CurrencyConverter/>
    </div>
  )
}

export default App