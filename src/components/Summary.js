import { DataCard } from "./Card"

import Wind from "../assets/wind.gif";
import UV from "../assets/uv.gif";
import Humidity from "../assets/humid.png";
import Visibility from "../assets/Fog.gif";


export const Summary = ({weatherData, selectedCity}) => {
    return (
        <div className="row">
                
        <DataCard
          title="Wind"
          icon={"wind"}
          image={Wind}
          data={weatherData[selectedCity]?.Wind.Speed.Metric.Value}
          measure={weatherData[selectedCity]?.Wind.Speed.Metric.Unit}
        />
        <DataCard
          title="UV Index"
          icon={"brightness-high-fill text-warning"}
          image={UV}
          data={weatherData[selectedCity].UVIndexText}
        />

        <DataCard
          title="Visibility"
          icon={"eye-fill"}
          image={Visibility}
          data={weatherData[selectedCity]?.Visibility.Metric.Value}
          measure={weatherData[selectedCity]?.Visibility.Metric.Unit}
        />
        <DataCard
          title="Humidity"
          icon={"moisture text-white"}
          image={Humidity}
          data={weatherData[selectedCity].RelativeHumidity}
          measure={"%"}
        />
      </div>
    )
}