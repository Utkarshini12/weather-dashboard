export const HourlyForecasts = ({isCelsius, toggleTemperatureUnit, hourlyForecast, getHourlyTemperature}) => {
    return( 
        <div className="glass-cards  p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-start text-white-50">
                        <i className="bi bi-clock px-2 text-white-50"></i>Hourly
                        Forecast{" "}
                      </h5>

                      <div class="form-check form-switch">
                        <label
                          class="form-check-label text-white-50"
                          for="flexSwitchCheckDefault"
                        >
                          {" "}
                          Toggle to {isCelsius ? "F" : "C"}
                        </label>

                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          onClick={toggleTemperatureUnit}
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>

                    <hr />
                    <table className="table  table-borderless table-hover text-white-50">
                      <tbody>
                        {hourlyForecast.map((hour, index) => (
                          <tr key={index}>
                            <td>
                              {new Date(hour.DateTime).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>

                            <td>
                              {getHourlyTemperature(hour.Temperature?.Value)}
                            </td>
                            <td>{hour.IconPhrase}</td>
                            <td>
                              <img
                                src={`https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon.toString().padStart(
                                  2,
                                  "0"
                                )}-s.png`}
                                alt="weather icon"
                                style={{ width: "30px" }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
    )
}