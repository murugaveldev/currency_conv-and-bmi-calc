import React, { useEffect, useState } from "react"

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {

    const timer = setInterval(()=> {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ?  hour  - 12 : hour;
  }

  const formDate = (date) => {

    const options = {weekday : "long" , year: "numeric" , month: "long" , day: "numeric"}

    return date.toLocalDateString(undefined , options )
  }

  return (
    <>

      <div className="flex h-screen w-full justify-center items-center bg-gray-800">
        <div className="bg-white h-fit w-fit px-14 py-6 rounded-md shadow-md flex flex-col items-center">

          <h2 className="font-semibold text-[24px] mb-4">Digital Clock</h2>

          <div className="font-bold text-[36px]">
            {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}: 
            {formatTimeWithLeadingZero(currentTime.getMinutes())}:
            {formatTimeWithLeadingZero(currentTime.getSeconds())}

          
          </div>
          <div>{formDate()}</div>
        </div>
      </div>
    </>
  )
}

export default App
