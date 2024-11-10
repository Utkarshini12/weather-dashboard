import React, { useState, useEffect } from "react";
// import {
//   RadialBarChart,
//   RadialBar,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import {
  getHourlyForecast,
  getLocationKey,
  getWeatherDetails,
  //   getWeeklyForecast,
} from "../services/api";

import { Placeholder } from "./Placeholder";
import { Loader } from "./Loader";
import { CityList } from "./CityList";
import { Summary } from "./Summary";

import Weather from "../assets/weather.gif";
import { HourlyForecasts } from "./HourlyForescast";
import { convertCelsiusToFahrenheit, getTemperature, getWeatherIconUrl } from "../util";

const WeatherDashboard = () => {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  //   const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
//   const [bg, setBg] = useState("");

  useEffect(() => {
    const fetchHourlyForecast = async () => {
      if (selectedCity) {
        const locationKey = await getLocationKey(selectedCity);
        if (locationKey) {
          const hourly = await getHourlyForecast(locationKey);
          setHourlyForecast(hourly);
        }
      }
    };
    fetchHourlyForecast();
  }, [selectedCity]);

  const addCity = async () => {
    if (!cityInput) return;

    setLoading(true);
    const locationKey = await getLocationKey(cityInput);
    if (locationKey) {
      const details = await getWeatherDetails(locationKey);
      const hourly = await getHourlyForecast(locationKey);
      //   const weekly = await getWeeklyForecast(locationKey);
      if (details) {
        setCities((prevCities) => [...prevCities, cityInput]);
        setWeatherData((prevData) => ({
          ...prevData,
          [cityInput]: details,
        }));
        setHourlyForecast(hourly);
        // setWeeklyForecast(weekly);
        // setWeatherBg(weatherData[selectedCity].UVIndexText)
        setSelectedCity(cityInput);
        setCityInput("");
      }
    } else {
      alert("Are you sure that's a city?");
    }
    setLoading(false);
  };

  const removeCity = (city) => {
    setCities((prevCities) => prevCities.filter((c) => c !== city));
    setWeatherData((prevData) => {
      const newData = { ...prevData };
      delete newData[city];
      return newData;
    });
    if (selectedCity === city) {
      setSelectedCity(cities.length > 1 ? cities[0] : null);

      setHourlyForecast([]);
      //   setWeeklyForecast([]);
    }
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevUnit) => !prevUnit);
  };

   const getHourlyTemperature = (tempCelsius) => {
    if (!tempCelsius) return "N/A";
    return isCelsius
      ? `${tempCelsius}°C`
      : `${convertCelsiusToFahrenheit(tempCelsius).toFixed(1)}°F`;
  };

    const getTemperature = (tempData) => {
    if (!tempData) return "N/A";
    return isCelsius
      ? `${tempData.Metric.Value}°C`
      : `${tempData.Imperial.Value}°F`;
  };



  //   console.log(weatherData);

  return (
    <div className="container-fluid vh-100">
      <div className="d-flex align-items-center justify-content-between p-2">
        <img src={Weather} alt="weather" height={50} width={50} />
        <h4 className="mx-2 mt-1 text-light">Weather</h4>

        <div className="input-group input-group-lg">
          <input
            type="text"
            placeholder="Enter city.."
            value={cityInput}
            className="form-control border border-dark bg-black text-light"
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button
            onClick={addCity}
            className="btn btn-outline-dark bg-dark text-light fw-bolder"
          >
            +
          </button>
        </div>
      </div>

      {cities.length === 0 ? (
        <>
          <Placeholder />
        </>
      ) : (
        <div className="row p-2">
          <div className="col-md-3 col-sm-12">
            {loading ? (
              <Loader />
            ) : (
              <ul className="list-group">
                {cities.map((city) => (
                  <CityList
                    city={city}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    getTemperature={getTemperature}
                    weatherData={weatherData}
                    getWeatherIconUrl={getWeatherIconUrl}
                    removeCity={removeCity}
                  />
                ))}
              </ul>
            )}
          </div>

          <div className="col-md-9 col-sm-12">
            {selectedCity && weatherData[selectedCity] && (
              <>
                <Summary
                  weatherData={weatherData}
                  selectedCity={selectedCity}
                />
                <>
                  <HourlyForecasts
                    isCelsius={isCelsius}
                    toggleTemperatureUnit={toggleTemperatureUnit}
                    hourlyForecast={hourlyForecast}
                    getHourlyTemperature={getHourlyTemperature}
                  />
                </>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
