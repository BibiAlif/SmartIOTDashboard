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
        <Link to="/dashboardGov/govweatherKB"><Button className="w-full md:w-55 mb-4">Gateway Setup</Button></Link>
      </div>
  </Card>
</div>


<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
  <Card className="h-auto text-center">
    <CardBody>
      <i className="fas fa-wifi" style={{ fontSize: '100px', color: 'black' }} />
    </CardBody>
      <div className="flex flex-col justify-center items-center mt-2 space-x-1">
        <Link to="/dashboardGov/govweatherKB"><Button className="w-full md:w-40 mb-4">Sensor Setup</Button></Link>
      </div>
  </Card>
</div>




</div>
  {/*  2 Card header -------------------------------------------------------------------------*/}  


</div>
  );
}

export default GovWeatherBruneiMuaraSensorMenu;