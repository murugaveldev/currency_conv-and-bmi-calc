import React, { useState } from "react"

import banner from './assets/img.svg'

function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")
  const [error , setError] = useState("")

  const calculateBmi = () => {
    const isValidHeight= /^\d+$/.test(height)
    const isValidweight= /^\d+$/.test(weight)

    if (isValidHeight && isValidweight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2))
      if (bmiValue < 18.5) {
        setBmiStatus("underweight")
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus('normal weight')
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("overweight")
      } else {
        setBmiStatus("obese")
      }

      setError("")

    } else {
      setBmi(null)
      setBmiStatus("")

      setError("please enter valid numeric values for height and weight!")
    }
  }

  const clear = ()  => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmiStatus("")

  }

  return (
    <>

      <div className="flex items-start justify-center w-full mx-auto  ">
        <div className="w-[60%] mx-auto flex items-start bg-gray-100 mt-28 py-10 px-10 rounded-md shadow-lg">
          <div className="w-[50%] mx-auto flex justify-center">
            <img src={banner} className="w-60 object-cover" alt="" />

          </div>

          <div className="w-[50%] mx-auto flex flex-col justify-center">
            <h2 className="font-semibold text-sky-600  text-start text-[20px] mb-6">BMI CALCULTOR</h2>

            
             {error &&  <p className="text-red-500 mb-3 text-[14px]">{error}</p>}


            <div className="mb-4" >
              <label className="block font-semibold  mb-3" htmlFor="height">Height (cm):</label>
              <input type="text" className="w-full border border-gray-500 rounded-md h-8 outline-none px-2" value={height} onChange={(e) => setHeight(e.target.value)} id="height" />
            </div>

            <div className="mb-4" >
              <label className="block font-semibold  mb-3" htmlFor="weight">weight (kg):</label>
              <input type="text" className="w-full border border-gray-500 rounded-md h-8 outline-none px-2" value={weight} onChange={(e) => setWeight(e.target.value)} id="weight" />
            </div>

            <div className=" flex items-center gap-x-8 w-full">
              <button className="bg-sky-600 px-4 py-1.5 w-full rounded-md font-semibold text-gray-800 hover:bg-sky-800 hover:text-white duration-300" onClick={calculateBmi}>Calculate BMI</button>
              <button className="bg-sky-600 px-4 py-1.5 w-full rounded-md font-semibold text-gray-800 hover:bg-sky-800 hover:text-white duration-300" onClick={clear}>Clear</button>
            </div>
            {bmi !== null && (
              <div className="mt-6 border border-sky-600  px-4 py-2 rounded-md ">
                <p className="font-semibold text-[16px] text-sky-800 mb-2">Your BMI is: {bmi}</p>
                <p>Status: {bmiStatus}</p>
              </div>
            )}


          </div>
        </div>
      </div>



    </>
  )
}

export default App
