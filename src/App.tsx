import { useState,ChangeEvent } from 'react';

function App():JSX.Element {
const [term, setterm] = useState<string>('');
const getFetchValue = (value:string) => {
 fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
}
const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.trim()
  setterm(value)
  if(value==="") return
  getFetchValue(value)
}
return (
<div className='flex justify-center items-center w-full h-[100vh] bg-gradient-to-br bg-bg-dark bg-bg-light'>
<form  className='p-10 bg-box backdrop-blur-lg rounded w-8/12 md:w-6/12 max-h-fit'>
<h1 className='text-white text-center font-thin text-3xl'>Weather <span className=' font-normal'>Forecast</span></h1>
<p className='text-white my-4 font-thin'>This weather app allows you to quickly check current weather conditions and forecasts for your city. Simply enter your location to get up-to-date information on temperature, precipitation, wind, and more.</p>
<div className='form flex justify-between'>
<input 
         type='text' 
         className='w-10/12 align-middle items-center placeholder:font-light placeholder:text-sm p-2 rounded-sm' 
         placeholder='Write Your City Name'
         onChange={inputChange}
         value={term}
       />
<button type='submit' className=' bg-teal-800 text-white text-sm rounded-sm sm:w-2/12 p-2'>Search</button>
</div>
</form>
</div>
);
}

export default App;