import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
  CardFooter
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function GovWeatherBruneiMuaraGatewaySetup() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Brunei Muara Gateway Setup</Typography>
      </CardHeader>
    </Card>





{/* 2 Card header -------------------------------------------------------------------------*/}  
<div className="mt-1">
<div className="mb-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3">



  {/* Card Will be here -------------------------------------------------------------------------*/}  
   <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-plus" style={{ fontSize: '100px', color: 'gray'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">New Gateway Setup</Typography>
      <Link to="/dashboardGov/govweatherKBGatewaySetupForm"><Button>Add New Gateway</Button></Link>
    </CardFooter>
    </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  





 {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-satellite-dish" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">Multitech 1</Typography>
     <Button>Setup Gateway</Button>
    </CardFooter>
  </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  




{/*  2 Card header -------------------------------------------------------------------------*/}  
</div>
</div>
</div>

  );
}

export default GovWeatherBruneiMuaraGatewaySetup;