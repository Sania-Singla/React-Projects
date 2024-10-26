import { useState } from "react";
import "./App.css";
import InputBox from "./components/inputBox";
import { useEffect } from "react";

function App() {
    const [currencyData, setCurrencyData] = useState({});
    const [from, setFromCurrency] = useState("usd");
    const [to, setToCurrency] = useState("inr");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.toLowerCase()}.json`
        )
            .then((res) => res.json())
            .then((data) => setCurrencyData(data[from]));
    }, [from]);

    const options = Object.keys(currencyData); //will be used in setting the options list

    function convert(e) {
        e.preventDefault();
        setConvertedAmount(currencyData[to] * enteredAmount);
    }

    function swap() {
        setFromCurrency(to);
        setToCurrency(from);
        setConvertedAmount(0);
    }

    return (
        <div className="form">
            <form onSubmit={convert}>
                <h2>Currency Convertor</h2>
                <InputBox
                    label="From"
                    inputId="from-input" // we needed to add these ids just becuase we were getting warnings related to multiple elements having same ids
                    selectId="from-select"
                    options={options}
                    amount={enteredAmount}
                    setAmount={setEnteredAmount} //similar to boxes challenge
                    selectedCurrency={from}
                    setCurrency={setFromCurrency}
                />
                <InputBox
                    label="To"
                    inputId="to-input"
                    selectId="to-select"
                    options={options}
                    amount={convertedAmount}
                    changeDisabled={true}
                    selectedCurrency={to}
                    setCurrency={setToCurrency}
                />
                <button type="button" id="swap-btn" onClick={swap}>
                    Swap
                </button>
                <button type="submit" id="submit-btn">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    );
}

export default App;
