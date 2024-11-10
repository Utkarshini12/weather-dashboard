// import { RouterProvider } from "react-router-dom";
import WeatherDashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const App = () => {
  return (
    <>
     {/* <RouterProvider router={routes} /> */}
      <WeatherDashboard />
    </>
  );
};

export default App;
