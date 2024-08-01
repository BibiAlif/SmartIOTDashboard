import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";



export function GatewaySetup() {
  return (


<div className="mt-12">
<div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">



  {/* Card Will be here -------------------------------------------------------------------------*/}  
   <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-plus" style={{ fontSize: '100px', color: 'gray'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">New Gateway Setup</Typography>
      <Link to="/dashboard/AddNewGateway"><Button>Add New Gateway</Button></Link>
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




  {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-satellite-dish" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">Multitech 2</Typography>
    <Button>Setup Gateway</Button>
    </CardFooter>
  </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  
















</div>
</div>

  );
}

export default GatewaySetup;