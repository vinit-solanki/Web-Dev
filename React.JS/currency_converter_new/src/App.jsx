import React, { useState, useEffect } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    useEffect(() => {
        // Update convertedAmount when amount or currencyInfo changes
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    }, [amount, to, currencyInfo]);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <div className='mainBox'>
                <InputBox 
                    label="From"
                    amount={amount}
                    onAmountChange={(value) => setAmount(value)}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    currencyOptions={options}
                    selectCurrency={from}
                />
                <p className='swap-btn' onClick={swap}>Swap</p>
                <InputBox
                    label="To"
                    amount={convertedAmount}
                    onCurrenyChange={(currency) => {setTo(currency)}}
                    onCurrencyChange={(currency) => setTo(currency)}
                    currencyOptions={options}
                    selectCurrency={to}
                    amountDisable
                />
                <button style={{width: "100%"}} onClick={convert}>Convert Currency</button>
            </div>
        </div>
    );
}

export default App;
