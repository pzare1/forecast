import { forecastType } from '../types'
import { BsSunset } from 'react-icons/bs';
import { BsSunrise } from 'react-icons/bs';
type Props = {
    data:forecastType
}
function Forecast({data}: Props):JSX.Element {
const getSunTime = (timestamp: number): string => {
        const date = new Date(timestamp * 1000)
        let hours = date.getHours().toString()
        let minutes = date.getMinutes().toString()
      
        if (hours.length <= 1) hours = `0${hours}`
        if (minutes.length <= 1) minutes = `0${minutes}`
      
        return `${hours}:${minutes}`
 }
  const today = data.list[0]
  return (
    <div className='p-10 bg-box backdrop-blur-lg rounded w-8/12 md:w-6/12 max-h-fit'>
        <div className='country_name flex justify-center items-center'>
        <h2 className='text-white text-2xl text-center text-bold'>{data.name}</h2>
        <span className='text-white text-2xl text-thin opacity-50 ml-1'>{`,${data.country}`}</span>
        </div>
        <h2 className='text-center text-2xl opacity-70 mt-3 text-white'>{`${Math.round(today.main.temp)} °C`}</h2>
        <div className='flex text-center justify-center mt-2 items-center'>
            <p className='text-white opacity-50 text-center mr-3'>{today.weather[0].main}</p>
            <p className='text-white opacity-30'>{`H:${Math.ceil(today.main.temp_max)}`}</p>
            <p className='text-white opacity-30 ml-2'>{`L:${Math.floor(today.main.temp_min)}`}</p>
        </div>
        <div className='flex overflow-x-scroll mt-4 pb-2 mb-5'>
        {data.list.map((item,i) => (
            <div className=' inline-block text-center w-[50px] flex-shrink-0' key={i}>
                <p className='text-sm font-bold text-white'>{i===0 ? `Now` : new Date(item.dt*1000).getHours()}</p>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                <p className='text-center text-white font-thin opacity-100 text-sm'>{`${Math.round(item.main.temp)} °C`}</p>
            </div> 
        ))}
        </div>
        <div className='flex justify-between'>
                    <div className='w-6/12 p-5 my-5 text-center text-white rounded-md m-2 bg-sub'>
                    <BsSunrise className='text-center opacity-70 text-4xl mx-auto'/>
                    <p className='mt-2 text-xl opacity-70 font-bold'>{getSunTime(data.sunrise)}</p>
                    </div>
                    <div className='w-6/12 p-5 my-5 text-center text-white rounded-md m-2 bg-sub'>
                    <BsSunset className='text-center opacity-70 text-4xl mx-auto'/>
                    <p className='mt-2 text-xl opacity-70 font-bold'>{getSunTime(data.sunset)}</p>
                    </div>
            </div>
    </div>
  )
}

export default Forecast