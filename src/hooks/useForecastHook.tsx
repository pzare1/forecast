import { useState, useEffect,ChangeEvent } from 'react';
import { optionType } from '../types';

const useForecastHook = () =>{
    const [term, setterm] = useState<string>('');
    const [city, setcity] = useState<optionType | null>(null)
    const [options, setoptions] = useState<[]>([])
    const [forecast, setforecast] = useState<any>(null)

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
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json()).then((data) => setforecast(data))
    }

    const onSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(!city) return
      getForecast(city)
    }

    return{
        forecast,
        options,
        term,
        onOptionSelect,
        onSubmit,
        inputChange,
    }
}

export default useForecastHook;
