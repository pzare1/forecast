import React from 'react'

function App() {
  return (
    <>
      <div className='flex justify-center items-center w-full h-[100vh] bg-gradient-to-br bg-bg-dark bg-bg-light'>
        <div className='p-10 bg-box backdrop-blur-lg rounded w-8/12 md:w-6/12 max-h-fit'>
            <h1 className='text-white text-center font-thin text-3xl'>Weather <span className=' font-normal'>Forecast</span></h1>
            <p className='text-white my-4 font-thin'>This weather app allows you to quickly check current weather conditions and forecasts for your city. Simply enter your location to get up-to-date information on temperature, precipitation, wind, and more.</p>
            <div className='form flex justify-between'>
            <input type='text' className='sm:w-10/12 align-middle items-center p-2 rounded-sm' placeholder='Write Your City Name'></input>
            <button className=' bg-teal-800 text-white rounded-sm sm:w-2/12 p-2'>Search</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App