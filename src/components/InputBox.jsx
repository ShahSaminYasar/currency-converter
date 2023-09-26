import React from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  currencyOptions,
  currency,
  onCurrencyChange,
  isDisabled,
}) {
  return (
    <div className="w-full rounded-lg border-4 border-slate-300 dark:border-slate-400 px-4 py-6 flex flex-row gap-5">
      {/* Left Column */}
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="" className="text-slate-500">
          {label}
        </label>
        <input
          type="number"
          placeholder="Amount"
          className="rounded-lg outline-none border-2 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-400 text-slate-950 dark:text-slate-200 px-3 py-1 focus:shadow-md focus:border-slate-600 dark:focus:border-slate-950 duration-100"
          disabled={isDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Right Column */}
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="" className="text-slate-500">
          Currency
        </label>
        <select
          className="border-2 border-transparent rounded-lg py-1 px-3 bg-slate-100 dark:bg-slate-500 shadow-lg text-slate-900 outline-none"
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
