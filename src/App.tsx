import { useState,ChangeEvent } from 'react';
import { optionType } from './types';
function App():JSX.Element {
const [term, setterm] = useState<string>('');
const [options, setoptions] = useState<[]>([])
const getFetchValue = (value:string) => {
 fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
 .then((res) => res.json()).then((data) => setoptions(data))
}
const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.trim()
  setterm(value)
  if(value==="") return
  getFetchValue(value)
}
const onOptionSelect = (option:optionType,e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log(option.name);
}
return (
<div className='flex justify-center items-center w-full h-[100vh] bg-gradient-to-br bg-bg-dark bg-bg-light'>
<form  className='p-10 bg-box backdrop-blur-lg rounded w-8/12 md:w-6/12 max-h-fit'>
<h1 className='text-white text-center font-thin text-3xl'>Weather <span className=' font-normal'>Forecast</span></h1>
<p className='text-white my-4 font-thin'>This weather app allows you to quickly check current weather conditions and forecasts for your city. Simply enter your location to get up-to-date information on temperature, precipitation, wind, and more.</p>
<div className='form flex justify-between'>
<input 
         type='text' 
         className='w-10/12 align-middle text-md items-center placeholder:font-light placeholder:text-sm p-2 rounded-sm focus:border-none focus:outline-none' 
         placeholder='Write Your City Name'
         onChange={inputChange}
         value={term}
       />
<button type='submit' className=' bg-teal-800 text-white text-sm rounded-sm sm:w-2/12 p-2'>Search</button>
</div>
<ul className='w-full mt-1 text-teal-800 font-medium text-md bg-white'>
  {options.map((option:optionType,index:number) => (
    <li key={option.name+"-"+index}>
      <button onClick={(e) => onOptionSelect(option,e)} className='border-teal-800 p-2 hover:text-white w-full text-left hover:bg-teal-800 transition-all duration-300'>
      {option.name}
      </button>
    </li>
  ))}
</ul>
</form>
</div>
);
}

export default App;