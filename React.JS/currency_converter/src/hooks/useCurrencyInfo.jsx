import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data, setInfo] = useState({});
    useEffect(()=>{
        // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setInfo(res[currency]))
        ;
    },[currency]);
    return data;
}
export default useCurrencyInfo;