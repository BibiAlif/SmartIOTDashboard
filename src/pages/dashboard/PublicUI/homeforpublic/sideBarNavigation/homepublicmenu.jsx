import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


export function HomePublicMenu() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Menu</Typography>
      </CardHeader>
    </Card>


    <div className="flex flex-wrap justify-center space-x-2 mt-2">
   
{/* 2 Card header -------------------------------------------------------------------------*/}  

    

<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
<Link to="/dashboard/home">
  <Card className="h-96 text-center justify-center items-center">
    <CardBody>
    <i className="fas fa-house-user fa-5x mt-4" style={{ color: 'black', width: '100%', height: 'auto' }}></i>
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">House</Typography>
    </div>
    </CardBody>
  </Card>
</Link>
</div>


<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
<Link to="/dashboardPublic/weatherPublicKb">
  <Card className="h-96 text-center justify-center items-center">
    <CardBody>
    <i className="fas fa-cloud-sun-rain fa-5x mt-4" style={{ color: 'black', width: '100%', height: 'auto' }}></i>
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Weather Forecast</Typography>
    </div>
    </CardBody>
  </Card>
</Link>
</div>



<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
<Link to="/dashboard/home">
  <Card className="h-96 text-center justify-center items-center">
    <CardBody>
    <i className="fas fa-car-side fa-5x mt-4" style={{ color: 'black', width: '100%', height: 'auto' }}></i>
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Parking</Typography>
    </div>
    </CardBody>
  </Card>
</Link>
</div>



<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
<Link to="/dashboard/home">
  <Card className="h-96 text-center justify-center items-center">
    <CardBody>
    <i className="fas fa-car fa-5x mt-4" style={{ color: 'black', width: '100%', height: 'auto' }}></i>
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Traffic Jam Area</Typography>
    </div>
    </CardBody>
  </Card>
</Link>
</div>



<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
<Link to="/dashboard/home">
  <Card className="h-96 text-center justify-center items-center">
    <CardBody>
    <i className="fas fa-bus-alt fa-5x mt-4" style={{ color: 'black', width: '100%', height: 'auto' }}></i>
    <div className="mt-4"> {/* Adding margin-top for space */}
      <Typography variant="h5" color="blue-gray" className="mb-2">Bus Tracker</Typography>
    </div>
    </CardBody>
  </Card>
</Link>
</div>


{/*  2 Card header -------------------------------------------------------------------------*/}  

</div>
</div>
  );
}

export default HomePublicMenu;