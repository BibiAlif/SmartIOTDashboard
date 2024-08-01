import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Toilet() {
  return (


<div className="mt-12">
  <div className="mb-6 grid grid-cols-1 gap-y-12 md:grid-cols-2">



    {/* 1 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-lightbulb" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Lamp</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Lamp</Button>
      </CardFooter>
    </Card>


    {/* 2 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-plug" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Plug</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Plug</Button>
      </CardFooter>
    </Card>



    {/* 3 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-water" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Water Leak</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Water Leak</Button>
      </CardFooter>
    </Card>


    {/* 4 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-trash" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Waste</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Waste</Button>
      </CardFooter>
    </Card>


  </div>
</div>


  );
}

export default Toilet;