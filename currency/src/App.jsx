import React, { useEffect, useState } from "react"
import axios from 'axios'


import currency from './assets/currency.svg'

function App() {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromcurrency] = useState("USD")
  const [toCurrency, setTocurrency] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [exchangerate, setExchangeRate] = useState(null)

  useEffect(() => {
    const getExchangeRate = async () => {
      try {

     ;

        const response = await axios.get( `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        // console.log(response)
        setExchangeRate(response.data.rates[toCurrency])

      } catch (error) {

        console.log(error)
      }
    }
    getExchangeRate();
  }, [toCurrency, fromCurrency])

  useEffect(() => {
    if (exchangerate !== null) {
      setConvertedAmount((amount * exchangerate).toFixed(2))
    }
  }, [amount, exchangerate])

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value)
    setAmount(isNaN(value) ? 0 : value)

  }

  const handleFromCurrencychange = (e) => {
    setFromcurrency(e.target.value)
  }

  const handleToCurrencychange = (e) => {
    setTocurrency(e.target.value)
  }

  return (
    <>
      <div className="font-[poppins] flex justify-center items-cente mt-6 w-full">

        <div className="flex flex-col w-[30%] bg-gray-100 shadow-lg drop-shadow-lg rounded-md px-4 py-6">

          <div className="mb-10 flex justify-center">
            <img src={currency} className="w-64 object-cover" alt="" />
          </div>

          <div className="flex flex-col ">

            <h2 className="text-center mb-6 font-semibold text-[22px] text-sky-800 underline decoration-wavy  ">Currency Convertor</h2>

            <div className="mb-4">
              <label className="block  font-semibold text-[16px] mb-3" htmlFor="amt">Amount:</label>
              <input type="number" id="amt" className="w-full outline-none  border border-gray-700 h-8 rounded-md px-3" value={amount} onChange={handleAmountChange} />
            </div>

            <div className="mb-4">
              <label className="block  font-semibold text-[16px] mb-3" htmlFor="fromCurrency">From Currenncy:</label>
              <select name="" id="fromCurrency" className="w-full outline-none  border border-gray-700 h-8 rounded-md px-3" value={fromCurrency} onChange={handleFromCurrencychange}>
                <option value="USD">USD - United Status Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Dollar</option>
                <option value="JPY">JPY - Japanese Yen </option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block  font-semibold text-[16px] mb-3" htmlFor="toCurrency">To Currenncy:</label>
              <select name="" id="toomCurrency" className="w-full outline-none  border border-gray-700 h-8 rounded-md px-3" value={toCurrency} onChange={handleToCurrencychange}>
                <option value="USD">USD - United Status Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Dollar</option>
                <option value="JPY">JPY - Japanese Yen </option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
              </select>
            </div>

            <div className="mt-4 flex justify-center items-center w-full ">
              <p className="outline-dotted rounded-sm px-3 py-2.5 outline-2 w-full text-center outline-offset-2">{amount} {fromCurrency} IS EQUAL TO {convertedAmount} {toCurrency}</p>
            </div>

          </div>


        </div>
      </div>


    </>
  )
}

export default App
