import { useState,ChangeEvent, useEffect } from 'react';
import { optionType } from './types';
import { foreCastType } from './types';
import Search from './components/Search';
function App():JSX.Element {
const [term, setterm] = useState<string>('');
const [city, setcity] = useState<optionType | null>(null)
const [options, setoptions] = useState<[]>([])
const [forecast, setforecast] = useState<foreCastType| null>(null)
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
  setcity(option);
}
useEffect(() => {
  if(city){
    setterm(city.name)
    setoptions([])
  }
}, [city])
const getForecast = (city:optionType) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
  .then((res) => res.json()).then((data) => {
    const foreCastData = {
      ...data.city,
      list:data.list.slice(0,16)
    }
    setforecast(foreCastData)
  })
}
const onSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if(!city) return
  getForecast(city)
}
return (
<div className='flex justify-center items-center w-full h-[100vh] bg-gradient-to-br bg-bg-dark bg-bg-light'>
  {forecast ? 
  (
    <h1 className='text-white'>{forecast.sunrise}</h1>
  ):
  (  <Search term={term} options={options} inputChange={inputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>)
  }
</div>
);
}

export default App;