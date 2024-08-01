import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { WeatherTemburong } from "@/govdata/MTICData/WeatherForecastData/weatherTemburong-table-data";
import WeatherTemburongForecast from '../../../../../../../govdata/MTICData/WeatherForecastData/weatherTemburong-forecast-data';

export function GovWeatherTemburong() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Brunei Darussalam Weather Forecast</Typography>
      </CardHeader>
    </Card>


  <div className="flex flex-wrap justify-center space-x-2 mt-2">


{/* 2 Card header -------------------------------------------------------------------------*/}  

<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
  <Card className="h-auto text-center">
    <CardBody>
      <i className="fas fa-globe" style={{ fontSize: '100px', color: 'black' }} />
    </CardBody>

      <Typography variant="h5" color="blue-gray" className="mb-2">Forecast Report Temburong</Typography>

      <div className="flex flex-col justify-center items-center mt-2 space-x-1">
        <Link to="/dashboardGov/govweatherKB"><Button className="w-full md:w-40 mb-4">Kuala Belait</Button></Link>
        <Link to="/dashboardGov/govweatherTutong"><Button className="w-full md:w-40 mb-4">Tutong</Button></Link>
        <Link to="/dashboardGov/govweatherBruneiMuara"><Button className="w-full md:w-40 mb-4">Brunei Muara</Button></Link>
        <Link to="/dashboardGov/govweatherTemburong"><Button className="w-full md:w-40 mb-4">Temburong</Button></Link>
      </div>

  </Card>
</div>




      {WeatherTemburongForecast.map((forecast, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <Card className="h-96 text-center justify-center items-center">
            <div className="mt-4"> {/* Adding margin-top for space */}
              <Typography variant="h5" color="blue-gray" className="mb-2">Today Forecast</Typography>
            </div>
            <CardBody>
              <i className={forecast.icon} style={{ fontSize: '100px', color: 'black' }} />
            </CardBody>

            <CardFooter className="pt-0">
              <div className="flex items-center mb-2">
                <i className="fas fa-calendar-alt mr-2"></i>
                <Typography variant="h6" color="blue-gray">{forecast.dateforecast}</Typography>
              </div>

              <div className="flex items-center mb-2">
                <i className="fas fa-calendar-alt mr-2"></i>
                <Typography variant="h6" color="blue-gray">{forecast.dateformat}</Typography>
              </div>

              <div className="flex items-center mb-2">
                <i className="fas fa-sun mr-2"></i>
                <Typography variant="h6" color="blue-gray">{forecast.weather}</Typography>
              </div>

              <div className="flex items-center mb-2">
                <i className="fas fa-thermometer-three-quarters mr-2"></i>
                <Typography variant="h6" color="blue-gray">{forecast.temperature}</Typography>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}


{WeatherTemburongForecast.map((forecast, index) => (
<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
  <Card className="h-96 text-center justify-center items-center">
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Weather News</Typography>
    </div>
    <CardBody>
      <i className="fas fa-bell" style={{ fontSize: '100px', color: 'black' }} />
    </CardBody>

    <CardFooter className="pt-0">
    <Typography variant="h6" color="blue-gray" className="mb-2">{forecast.news}</Typography>
    
    </CardFooter>
  </Card>
</div>
))}




{WeatherTemburongForecast.map((forecast, index) => (
<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
  <Card className="h-96 text-center justify-center items-center">
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Alert Status</Typography>
    </div>
    <CardBody>
    <img src={forecast.status} alt="Alert Image" className="mt-4" style={{ width: '100%', height: 'auto' }} />
    </CardBody>
  </Card>
</div>
))}


</div>
  {/*  2 Card header -------------------------------------------------------------------------*/}  


  {/* Weather Table -------------------------------------------------------------------------*/}  
  <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Expected Weather Days Forecast</Typography>
      </CardHeader>

      <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["Days", "Date", "Temperature", "Fahrenheit", "Humidity", "Windy", "Weather", "Alert"].map((el) => (
          <th
            key={el}
            className="border-b border-blue-gray-50 py-3 px-5 text-left"
          >
          <Typography
            variant="small"
            className="text-[11px] font-bold uppercase text-blue-gray-400"
            >
          {el}
          </Typography>
          </th>
          ))}
          </tr>
          </thead>
          <tbody>

        {WeatherTemburong.map(
          ({ days, dateformat, temperature, fahrenheit, humidity, windy, weather, alert}, key) => {
          const className = `py-3 px-5 ${
          key === WeatherTemburong.length - 1
          ? ""
          : "border-b border-blue-gray-50"
          }`;


          return (
            <tr key={days}>
            <td className={className}>
            <div className="flex items-center gap-4">

            <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
              >
              {days}
            </Typography>

            </div>
            </div>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {dateformat}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {temperature}
              </Typography>
            </td>



            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {fahrenheit}
              </Typography>
            </td>

          
            
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {humidity}
              </Typography>
            </td>


            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {windy}
              </Typography>
            </td>


            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {weather}
              </Typography>
            </td>


            <td className={className}>
              <Typography
                as="a"
                href="#"
                className="text-xs font-semibold text-blue-gray-600"
                >
               <Chip
                variant="gradient"
                color={alert ? "green" : "yellow"}
                value={alert ? "normal" : "alert"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                />
              </Typography>
            </td>



           
            
            </tr>
            );
            }
            )}
        </tbody>
        </table> 
 </div>
    </Card>
  
</div>

  {/* Weather Table -------------------------------------------------------------------------*/}  




</div>
  );
}

export default GovWeatherTemburong;