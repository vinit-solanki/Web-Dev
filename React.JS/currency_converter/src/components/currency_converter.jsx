import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  // Fetch currencies from API
  const fetchCurrencies = async () => {
    try {
      const resp = await fetch("https://api.frankfurter.app/currencies");
      const data = await resp.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  // Function to convert currency
  const convertCurrency = async () => {
    try {
      const resp = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await resp.json();
      setConvertedAmount(data.rates[toCurrency]);
    } catch (error) {
      alert("Error converting currency:", error);
    }
  };

  const swapCurrencies = () => {
    if (amount === "0") {
      alert("Please enter an amount to swap");
      return;
    }
    setFromCurrency(prevFromCurrency => {
      setToCurrency(prevToCurrency => {
        return prevFromCurrency;
      });
      return toCurrency;
    });
  };
  
  const DropDown = ({ value, onChange }) => (
    <select value={value} onChange={onChange} style={{ backgroundColor: "gray", opacity: "0.7", padding: "0.5rem 1rem", alignSelf: "center", color: "black", borderRadius: "0.5rem" ,marginTop:"2rem"}}>
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );

  return (
    <div
      className="text-white font-bold w-full max-w-md mt-5 bg-green-600 bg-opacity-20 rounded-md p-3 px-4 shadow-lg shadow-black"
      style={{ fontFamily: "Arial,sans-serif" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          width: "full",
        }}
      >
        <DropDown value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} />
        <div className="flex flex-col gap-3 mt-4 mb-5">
          <label htmlFor="amount" style={{ color: "lightgreen" }}>
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-black bg-gray-300 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded-md"
          />
        </div>
      </div>
      <div className="w-full align-center justify-center text-center">
        <button
          className="flex-shrink-0 bg-yellow-800 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700 text-md text-white py-2 px-7 rounded-lg"
          type="button"
          onClick={() => {
            swapCurrencies();
            convertCurrency();  // Optional: trigger conversion after swapping
          }}
        >
          Swap
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          width: "full",
        }}
      >
        <DropDown value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} />
        <div className="flex flex-col gap-3 mt-4">
          <label htmlFor="convertedAmount" style={{ color: "lightgreen" }}>
            Converted Amount
          </label>
          <input
            type="number"
            value={convertedAmount}
            readOnly
            className="text-black bg-gray-300 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded-md"
          />
        </div>
      </div>
      <button
        onClick={convertCurrency}
        className="mr-2 mb-3 mt-5 w-full bg-yellow-700 text-white shadow-lg py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-bold italic"
      >
        Convert Currency from {fromCurrency} to {toCurrency}
      </button>
    </div>
  );
}

export default CurrencyConverter;
