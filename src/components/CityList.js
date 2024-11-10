export const CityList = ({city, selectedCity, setSelectedCity, getTemperature, weatherData, getWeatherIconUrl, removeCity}) => {
    return (


                <div
                  key={city}
                  className={`glass-card weather-bg-low m-2 ${
                    city === selectedCity ? "active" : ""
                  }`}
                  onClick={() => setSelectedCity(city)}
                >
                  <div className="row">
                    <div className="col pt-3">
                      <h4 className="text-capitalize text-start px-2">
                        {city}
                      </h4>
                      <h2 className="text-capitalize text-start fw-bolder px-2">
                        {getTemperature(weatherData[city]?.Temperature)}
                      </h2>
                    </div>
                    <div className="col pt-2 d-flex align-items-center justify-content-center">
                      <img
                        className="icon"
                        src={getWeatherIconUrl(weatherData[city]?.WeatherIcon)}
                        alt="weather icon"
                      />
                    </div>
                    <button
                      className="btn btn-sm btn-secondary float-end"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCity(city);
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
             
         
    )
}