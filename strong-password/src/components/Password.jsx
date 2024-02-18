import React, { useState } from 'react'

const Password = () => {

    const [length, setLength] = useState(8)

    const [includeLowercase, setIncludeLowercase] = useState(true)
    const [includeuppercase, setIncludeuppercase] = useState(true)
    const [includNumbers, setIncludNumbers] = useState(true)
    const [includeSymbols , setIncludeSymbols  ] = useState(true)

    const [password , setPassword] = useState('')

    const generatePassword = () => {
        let charset = '';
        if(includeuppercase) charset  += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(includeLowercase) charset  += "abcdefghijklmnopqrstuvwxyz"
        if(includNumbers) charset  += "0123456789"
        if(includeSymbols) charset  += "!@#$%^&*()_>?"

        
    }
    return (
        <div className='bg-blue-100 h-screen pt-10'>

            <div className='flex flex-col justify-center items-center bg-white shadow-md drop-shadow-md rounded-md w-[30%] mx-auto py-10 '>

                <h2 className='font-bold mb-4 text-[24px]'>Strong Password</h2>

                <div className='w-full px-6'>
                    <label htmlFor="num" className='block mb-3'>Password length:</label>
                    <input type="number" value={length} onChange={(e) => (setLength(parseInt(e.target.value)))} className='w-full outline-none border border-gray-700 rounded-md px-3 ' placeholder='Enter a Number' id='num' />
                </div>

                <div className='w-full px-6 mt-6 flex flex-col gap-y-2'>
                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" id="upper" checked={includeuppercase} onChange={(e) => setIncludeuppercase(e.target.checked)} />
                        <label htmlFor="upper">Include Uppercase</label>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" id="lower" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)}/>
                        <label htmlFor="lower">Include Lowercase</label>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" id="number" checked={includNumbers} onChange={(e) => setIncludNumbers(e.target.checked)} />
                        <label htmlFor="number">Include Number</label>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" id="symbol" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
                        <label htmlFor="symbol">Include Uppercase</label>
                    </div>

                    <div>
                        <button className='bg-blue-500  rounded-md px-3 py-1 shadow-md hover:bg-blue-700 text-white' onClick={generatePassword}>Generate Password</button>
                    </div>

                    <div className='w-full flex items-center relative mt-4'>
                        <input type="text" className='w-full border border-gray-700 outline-none h-8 rounded-md' readOnly id=""  value={password}/>
                        <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 hover:text-white absolute right-0 h-8 px-3 rounded-r-md '>Copy</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Password