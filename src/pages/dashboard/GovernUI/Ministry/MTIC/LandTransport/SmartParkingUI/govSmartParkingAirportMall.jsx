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
import { SmartparkingTable } from "@/govdata/MTICData/LandTransportData/SmartParkingData/smartparking-table-data";
import smartparkingAirportMall from '../../../../../../../govdata/MTICData/LandTransportData/SmartParkingData/smartparking-AirportMall-data';

export function GovSmartParkingAirportMall() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Parking Airport Mall</Typography>
      </CardHeader>
    </Card>


  <div className="flex flex-wrap justify-center space-x-2 mt-2">


{/* 2 Card header -------------------------------------------------------------------------*/}  

<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
  <Card className="h-auto text-center">

    <CardBody>
      <i className="fas fa-car-alt" style={{ fontSize: '80px', color: 'black' }} />
    </CardBody>

      <div className="flex flex-col justify-center items-center mt-2 space-x-1">
        <Link to="/dashboardGov/govSmartParkingRipas"><Button className="w-full md:w-40 mb-4">Smart Parking</Button></Link>
        <Link to=""><Button className="w-full md:w-40 mb-4">Traffic Jam Area</Button></Link>
        <Link to=""><Button className="w-full md:w-40 mb-4">JPD Que Up</Button></Link>
      </div>

  </Card>
</div>


      {smartparkingAirportMall.map((parkingdata, index) => (
        <div key={index} className="">
          <Card className="h-96 text-center justify-center items-center">
            <div className="mt-4"> {/* Adding margin-top for space */}
              <Typography variant="h5" color="blue-gray" className="mb-2">Location</Typography>
            </div>
            <CardBody>
              <i className={parkingdata.icon} style={{ fontSize: '100px', color: 'black' }} />
            </CardBody>

            <CardFooter className="pt-0">
              <div className="flex items-center mb-2">
                <i className="fas fa-hospital-alt mr-2"></i>
                <Typography variant="h6" color="blue-gray">{parkingdata.location}</Typography>
              </div>

              <div className="flex items-center mb-2">
                <i className="fas fa-calendar-alt mr-2"></i>
                <Typography variant="h6" color="blue-gray">{parkingdata.dateformat}</Typography>
              </div>

              <div className="flex items-center mb-2">
                <i className="fas fa-sun mr-2"></i>
                <Typography variant="h6" color="blue-gray">{parkingdata.weather}</Typography>
              </div>

              <div className="flex items-center mb-2">
                <i className="fas fa-thermometer-three-quarters mr-2"></i>
                <Typography variant="h6" color="blue-gray">{parkingdata.temperature}</Typography>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}


{smartparkingAirportMall.map((parkingdata, index) => (
<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
  <Card className="h-96 text-center justify-center items-center">
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Total Parking</Typography>
    </div>
    <CardBody>
      <i className="fas fa-bell" style={{ fontSize: '100px', color: 'black' }} />
    </CardBody>

    <CardFooter className="pt-0">
    <Typography variant="h3" color="blue-gray" className="mb-2">{parkingdata.totalparking}</Typography>
    </CardFooter>
  </Card>
</div>
))}




{smartparkingAirportMall.map((parkingdata, index) => (
<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
  <Card className="h-96 text-center justify-center items-center">
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Parking Available</Typography>
    </div>
    <CardBody>
    <img src={parkingdata.status} alt="Alert Image" className="mt-4" style={{ width: '100%', height: 'auto' }} />
    <Typography variant="h3" color="blue-gray" className="mb-2">{parkingdata.parkingavailable}</Typography>
    </CardBody>
  </Card>
</div>
))}


</div>
  {/*  2 Card header -------------------------------------------------------------------------*/}  


  {/* Smart Parking Area Table -------------------------------------------------------------------------*/}  
  <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Parking Area</Typography>
      </CardHeader>

      <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["Area", "Date", "Weather", "Temperature", "Total Parking", "Parking Available", "Status", "Condition", "Book Parking"].map((el) => (
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

        {SmartparkingTable.map(
          ({ area, date, weather, temperature, totalParking, parkingAvailable, status, condition, bookParking, PageLink, cctvlink, booklink}, key) => {
          const className = `py-3 px-5 ${
          key === SmartparkingTable.length - 1
          ? ""
          : "border-b border-blue-gray-50"
          }`;


          return (
            <tr key={area}>
            <td className={className}>
            <div className="flex items-center gap-4">

            <div>
            <Link to={`/dashboardGov/${PageLink}`}><Button className="w-sm md:w-40">{area}</Button></Link>
            </div>
            </div>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {date}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {weather}
              </Typography>
            </td>

          
            
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {temperature}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {totalParking}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {parkingAvailable}
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
                color={status ? "green" : "red"}
                value={status ? "normal" : "full"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                />
              </Typography>
            </td>

            <td className={className}>
            <Link to={`/dashboardGov/${cctvlink}`}><Button className="w-sm md:w-40">{condition}</Button></Link>
            </td>

            <td className={className}>
              <Link to={`/dashboardGov/${booklink}`}><Button className="w-sm md:w-40">{bookParking}</Button></Link>
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

  {/* Smart Parking Area Table -------------------------------------------------------------------------*/}  




</div>
  );
}

export default GovSmartParkingAirportMall;