import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import WeatherBruneiMuaraTransmitted from '../../../../../../../govdata/MTICData/WeatherForecastData/WeatherForecaseBruneiMuara/weatherBruneiMuaraTransmitted';
import WeatherBruneiMuaraSensorReadingdata from '../../../../../../../govdata/MTICData/WeatherForecastData/WeatherForecaseBruneiMuara/weatherBruneiMuaraSensorReading-data';

export function GovWeatherBruneiMuaraSensorMenu() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white"> Brunei Muara Sensor Setup</Typography>
      </CardHeader>
    </Card>


  <div className="flex flex-wrap justify-center space-x-2 mt-2">


{/* 2 Card header -------------------------------------------------------------------------*/}  

<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
  <Card className="h-auto text-center">
    <CardBody>
      <i className="fas fa-satellite-dish" style={{ fontSize: '100px', color: 'black' }} />
    </CardBody>
      <div className="flex flex-col justify-center items-center mt-2 space-x-1">
        <Link to="/dashboardGov/govweatherBruneiMuaraGatewaySetup"><Button className="w-full md:w-55 mb-4">Gateway Setup</Button></Link>
      </div>
  </Card>
</div>


<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
  <Card className="h-auto text-center">
    <CardBody>
      <i className="fas fa-wifi" style={{ fontSize: '100px', color: 'black' }} />
    </CardBody>
      <div className="flex flex-col justify-center items-center mt-2 space-x-1">
        <Link to="/dashboardGov/govweatherBruneiMuaraSensorSetup"><Button className="w-full md:w-40 mb-4">Sensor Setup</Button></Link>
      </div>
  </Card>
</div>




</div>
  {/*  2 Card header -------------------------------------------------------------------------*/}

 {/* Gateway Transmitted Table -------------------------------------------------------------------------*/}  
 <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Multitech 1 Data Transmitted At Brunei Muara</Typography>
      </CardHeader>
      </Card>
       
  
      <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["Id", "Status", "Speed", "Connection Type", "Transmitted data"].map((el) => (
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

        {WeatherBruneiMuaraTransmitted.map(
          ({  id, status, Speed, connectionType, transmitteddata}, key) => {
          const className = `py-3 px-5 ${
          key === WeatherBruneiMuaraTransmitted.length - 1
          ? ""
          : "border-b border-blue-gray-50"
          }`;


          return (
            <tr key={id}>
            <td className={className}>
            <div className="flex items-center gap-4">

            <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
              >
              {id}
            </Typography>

            </div>
            </div>
            </td>

            <td className={className}>
              <Typography
                //as="a"
                //href="#"
                className="text-xs font-semibold text-blue-gray-600"
                >
               <Chip
                variant="gradient"
                color={status ? "green" : "red"}
                value={status ? "Connected" : "Disconnected"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                />
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {Speed}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {connectionType}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {transmitteddata}
              </Typography>
            </td>

            
            </tr>
            );
            }
            )}
        </tbody>
        </table> 
 </div>
  
{/* Gateway Transmitted Table -------------------------------------------------------------------------*/}  




{/* Sensor  Table -------------------------------------------------------------------------*/}  
<div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Sensor 1 Reading At Brunei Muara</Typography>
      </CardHeader>
      </Card>
       
  
      <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["Id", "Barometrict Pressure", "Wind Direction", "Wind Speed", "Humidty", "Temperature", "Rainfall", "Alert"].map((el) => (
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

        {WeatherBruneiMuaraSensorReadingdata.map(
          ({  id, BarometrictPressure, WindDirection, WindSpeed, Humidty, Temperature, Rainfall, Alert}, key) => {
          const className = `py-3 px-5 ${
          key === WeatherBruneiMuaraSensorReadingdata.length - 1
          ? ""
          : "border-b border-blue-gray-50"
          }`;


          return (
            <tr key={id}>
            <td className={className}>
            <div className="flex items-center gap-4">

            <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
              >
              {id}
            </Typography>

            </div>
            </div>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {BarometrictPressure}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {WindDirection}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {WindSpeed}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {Humidty}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {Temperature}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {Rainfall}
              </Typography>
            </td>

             <td className={className}>
              <Typography
                //as="a"
                //href="#"
                className="text-xs font-semibold text-blue-gray-600"
                >
               <Chip
                variant="gradient"
                color={Alert ? "green" : "red"}
                value={Alert ? "Normal" : "Danger"}
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
</div>
{/* Sensor Table -------------------------------------------------------------------------*/}  



</div>
</div>
  );
}

export default GovWeatherBruneiMuaraSensorMenu;