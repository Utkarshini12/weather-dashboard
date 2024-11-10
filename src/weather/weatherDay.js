import styles from '../styles.module.css'

function WeatherDay({min, max, weatherType, weatherKey, dayOfWeek }) {

    return(
        <div className='card text-white bg-dark m-3'>
           
            <div className={styles.day}> 
            <div className='text-center m-1'> {dayOfWeek}</div>
           
    <img src ={ `https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} alt={weatherType} /> 
    <div className='m-1'></div>
    Temp :{min} / {max} 
                </div>
           
        </div>
    )
}

export default WeatherDay