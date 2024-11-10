// export const setWeatherBg = (uvIndex) => {
//     if(uvIndex === 'Low') {
//         setBg("weather-bg-low") 
//     } else if(uvIndex === 'Moderate') {
//         setBg("weather-bg-moderate") 
//     } else {
//         setBg("weather-bg-high") 
//     }

//   }

 

  export const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

 

  export const getWeatherIconUrl = (iconNumber) => {
    const formattedIcon = iconNumber.toString().padStart(2, "0");
    return `https://developer.accuweather.com/sites/default/files/${formattedIcon}-s.png`;
  };