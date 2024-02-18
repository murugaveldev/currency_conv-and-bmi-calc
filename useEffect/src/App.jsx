import React, { useEffect, useState } from "react"


function App() {

  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

   useEffect(()  => {
    console.log("hello i am useEffect")
   } , [time])


  return (
    <>


      <h3>count {count}</h3>
      

      <button onClick={() => setCount((value) => value + 1)}>+</button>
      <button onClick={() => setCount((value) => value - 1)}>-</button>


      
      <h3>count {time}</h3>

      <button onClick={() => setTime((value) => value + 1)}>+</button>
      <button onClick={() => setTime((value) => value - 1)}>-</button>

    </>
  )
}

export default App
