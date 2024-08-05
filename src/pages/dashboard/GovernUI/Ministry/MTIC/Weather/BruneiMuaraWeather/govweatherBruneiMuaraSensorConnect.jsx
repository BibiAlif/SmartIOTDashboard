import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
  Input,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import WeatherBruneiMuaraSensorReadingdata from '../../../../../../../govdata/MTICData/WeatherForecastData/WeatherForecaseBruneiMuara/weatherBruneiMuaraSensorReading-data';


export function GovWeatherBruneiMuaraSensorConnect() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Brunei Muara Sensor Connect</Typography>
      </CardHeader>
    </Card>


{/* 2 Card header -------------------------------------------------------------------------*/}  
<div className="mt-1">
<div className="mb-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3">

<Card className="w-full md:col-span-2 mx-auto"  style={{ backgroundColor: '#EEEEEE' }}>
<CardBody>

<Typography variant="paragraph" color="blue-gray" className="text-lg font-normal text-center">Sensor Information</Typography>


        <form className="mt-8 mb-2 mx-auto w-70 max-w-screen-lg lg:w-1/2">

        <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Sensor ID
            </Typography>
            <Input
              size="lg"
              readOnly
              value={1234567}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Sensor Name
            </Typography>
            <Input
              size="lg"
              readOnly
              value="Sensor 1"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Types Of Sensor
            </Typography>
            <Input
              size="lg"
              readOnly
              value="Sensor For Weather"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Sensor other detail
            </Typography>
            <Input
              size="lg"
              readOnly
              value="Sensor To Measure Weather"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Device EUI
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              //value=""
              placeholder="Enter Device EUI"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              App EUI
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              //value=""
              placeholder="Enter App EUI"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Appllication Key
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              //value=""
              placeholder="Enter Application Key"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <Button className="mt-6" fullWidth>Connect</Button>
         
        </form>

        </CardBody>
        </Card>

</div>
</div>      


{/*  2 Card header -------------------------------------------------------------------------*/}  


{/* Sensor Transmitted Table -------------------------------------------------------------------------*/}  
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
{/* Sensor Transmitted Table -------------------------------------------------------------------------*/}  



</div>

  );
}

export default GovWeatherBruneiMuaraSensorConnect;