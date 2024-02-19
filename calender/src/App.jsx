import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Ths", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "Steptember", "October", "November", "Dec"]


function App() {

  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysInMonth = () => {
    const daysArray = []

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)

    for(let i=0; i<firstDay.getDay(); i++){
      daysArray.push(null)

    }

    for(let i=1; i<=lastDay.getDate();i++){
      daysArray.push(new Date(selectedDate.getFullYear() ,selectedDate.getMonth(),i ))
    }

    return daysArray;


  };
  daysInMonth();

  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    setSelectedDate(new Date(selectedDate.getFullYear() , newMonth , 1))
  }

  const handleChangeYear= (e) => {
    const newYear = parseInt(e.target.value, 10)
    setSelectedDate(new Date(newYear , selectedDate.getMonth() , 1))



  }


  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="bg-white w-[50%] drop-shadow-md shadow-md p-2">
          <div className=" mx-auto bg-sky-500 shadow-lg drop-shadow-md flex items-center justify-between py-2 px-6  ">
            <button className="cursor-pointer " onClick={()=> {setSelectedDate(new Date(selectedDate.getUTCFullYear() ,  selectedDate.getMonth()-1,))}}>
              <FaRegArrowAltCircleLeft />
            </button>


            <select value={selectedDate.getMonth()}  onChange={handleChangeMonth} className="px-8 border border-sky-600 rounded-md">{months.map((month, index) => (

              <option key={index} value={index}>{month}</option>

            ))}</select>


            <select value={selectedDate.getFullYear()} onChange={handleChangeYear} className="px-8 border border-sky-600 rounded-md">

              {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 3 + i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}

            </select>
            <button className="cursor-pointer " onClick={()=> {setSelectedDate(new Date(selectedDate.getUTCFullYear() ,  selectedDate.getMonth()+1 ,1))}}>
              <FaRegArrowAltCircleRight className="" />
            </button>
          </div>

          {/*  ----------------- days ----------------- */}

          <div className="py-2 px-14 font-semibold flex items-center justify-between">
            {daysOfWeek.map((day) => (
              <div key={day} className="cursor-pointer">{day}</div>
            ))}
          </div>

          {/* day */}

        <div className="grid grid-cols-7 gap-x-4 gap-y-5 text-center">
          {daysInMonth().map((day , index) => (
            <div key={index} className={day? "text-center border border-gray-600 rounded-md hover:bg-sky-500 " : ""}>
              {day? day.getDate() : ""}
              </div>
          ))}
        </div>

        </div>
      </div>
    </>
  );
}

export default App;
