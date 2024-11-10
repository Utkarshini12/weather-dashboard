import { Navigate, createBrowserRouter } from "react-router-dom";

import WeatherDashboard from "./src/components/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [

        {
            path: "/",
            element: <WeatherDashboard />,
          },
      
      {
        path: "/dashboard",
        element: <Profile />,
      },
     

    ],
  },
 
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default routes;