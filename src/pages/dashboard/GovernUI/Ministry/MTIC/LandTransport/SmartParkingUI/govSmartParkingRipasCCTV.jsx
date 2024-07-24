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
import SmartParkingRipas from '../../../../../../../govdata/MTICData/LandTransportData/SmartParkingData/smartparking-Ripas-data';

export function GovSmartParkingRipasCCTV() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Parking Hospital Ripas</Typography>
      </CardHeader>
    </Card>


  <div className="flex flex-wrap justify-center space-x-2 mt-2">


{/* 2 Card header -------------------------------------------------------------------------*/}  

<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
  <Card className="h-auto text-center">

    <CardBody>
      <i className="fas fa-car-alt" style={{ fontSize: '80px', color: 'black' }} />
    </CardBody>

      <div className="flex flex-col justify-center items-center mt-2 space-x-1">
        <Link to="/dashboardGov/govSmartParkingRipas"><Button className="w-full md:w-40 mb-4">Smart Parking</Button></Link>
        <Link to=""><Button className="w-full md:w-40 mb-4">Traffic Jam Area</Button></Link>
        <Link to=""><Button className="w-full md:w-40 mb-4">Road Safety Complain</Button></Link>
        <Link to=""><Button className="w-full md:w-40 mb-4">JPD Que Up</Button></Link>
      </div>

  </Card>
</div>


      {SmartParkingRipas.map((parkingdata, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
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


{SmartParkingRipas.map((parkingdata, index) => (
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




{SmartParkingRipas.map((parkingdata, index) => (
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
        <Typography variant="h6" color="white">Parking Hospital Ripas AI CCTV</Typography>
      </CardHeader>

    
      <CardBody className="flex justify-center">
        <iframe 
          width="90%" 
          height="500" 
          src="https://www.youtube.com/embed/mggV_VomHUo?si=QkGPlEFHYTuMdrc0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </CardBody>

      <Link to="/dashboardGov/govSmartParkingRipas"><Button className="w-full md:w-40 mb-4">Back</Button></Link>
    
    </Card>
  
  </div>

  {/* Smart Parking Area Table -------------------------------------------------------------------------*/}  




</div>
  );
}

export default GovSmartParkingRipasCCTV;