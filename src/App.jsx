import React, { useState } from "react";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";
import { Inputbox } from "./components";

function App() {
  const [currency, setCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("bdt");

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(currency);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setCurrency(toCurrency);
    setToCurrency(currency);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center bg-slate-900 px-5 py-2">
        <h1 className="hidden lg:block text-8xl font-semibold text-slate-300 text-left leading-[1.1]">
          Currency
          <br />
          Converter
        </h1>
        <h1 className="lg:hidden text-center text-slate-300 text-4xl font-semibold mb-2">Currency Converter</h1>
      </div>

      {/* Right Column */}
      <div className="h-full w-full lg:w-1/2 bg-white dark:bg-slate-800 flex flex-col justify-center p-5 text-lg">
        <form
          className="w-full max-w-lg bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-400 rounded-xl p-5 mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* InputBox [From] */}
          <Inputbox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            currencyOptions={currencyOptions}
            currency={currency}
            onCurrencyChange={(currency) => setCurrency(currency)}
          />

          {/* Swap Button */}
          <div className="relative py-2">
            <button
              className="py-2 px-3 bg-slate-900 shadow-xl active:shadow-none duration-150 text-white rounded-lg absolute left-1/2 -translate-x-1/2 -my-6"
              type="button"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* InputBox [To] */}
          <Inputbox
            label={"To"}
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            currency={toCurrency}
            onCurrencyChange={(currency) => setToCurrency(currency)}
            isDisabled
          />

          {/* Convert Button */}
          <button
            className="w-full text-center bg-slate-900 text-white font-normal text-2xl mt-3 rounded-lg p-3 hover:bg-slate-950 duration-300"
            type="submit"
          >
            Convert {currency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
