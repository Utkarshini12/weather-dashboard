import axios from "axios";
import { BASE_URL, API_KEY } from "../const";

export const getLocationKey = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}/locations/v1/cities/search`, {
      params: {
        apikey: API_KEY,
        q: cityName,
      },
    });

    if (response.data.length > 0) {
      return response.data[0].Key;
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    console.error("Error fetching location key:", error);
    return null;
  }
};

export const getWeatherDetails = async (locationKey) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/currentconditions/v1/${locationKey}`,
      {
        params: {
          apikey: API_KEY,
          details: true,
        },
      }
    );

    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error("Weather data not found");
    }
  } catch (error) {
    console.error("Error fetching weather details:", error);
    return null;
  }
};

export const getHourlyForecast = async (locationKey) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}&metric=true`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hourly forecast:", error);
  }
};


