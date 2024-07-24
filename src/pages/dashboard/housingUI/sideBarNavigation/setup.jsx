import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";



export function Category() {
  return (


<div className="mt-12">
<div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">



  {/* Card Will be here -------------------------------------------------------------------------*/}  
   <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-plus" style={{ fontSize: '100px', color: 'gray'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">New Sensor Setup</Typography>
      <Link to="/dashboard/AddNewSensor"><Button>Add New Sensor</Button></Link>
    </CardFooter>
    </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  





 {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-utensils" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">Smart IOT Kitchen</Typography>
     <Link to="/dashboard/kitchen"><Button>Kitchen</Button></Link>
    </CardFooter>
  </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  




  {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-couch" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">Smart IOT Hall</Typography>
    <Link to="/dashboard/hall"><Button>Hall</Button></Link>
    </CardFooter>
  </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  






  {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-shower" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">Smart IOT Toilet</Typography>
    <Link to="/dashboard/toilet"><Button>Toilet</Button></Link>
    </CardFooter>
  </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  







  {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-house-user" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">Smart IOT Outdoor</Typography>
    <Link to="/dashboard/outdoor"><Button>Outdoor</Button></Link>
    </CardFooter>
  </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  



</div>
</div>

  );
}

export default Category;