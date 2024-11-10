import Weather from "../assets/weather.gif";
export const Loader = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
        <img src={Weather} alt="weather" height={100} width={100} />
      </div>
    )
}