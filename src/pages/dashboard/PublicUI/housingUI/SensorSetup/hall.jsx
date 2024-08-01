import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Hall() {
  return (


<div className="mt-12">
  <div className="mb-6 grid grid-cols-1 gap-y-12 md:grid-cols-2">


    {/* 2 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-seedling" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Air Quality</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Air Quality</Button>
      </CardFooter>
    </Card>


    {/* 3 Card */}
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


    {/* 4 Card */}
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


    {/* 5 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-video" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart CCTV 2</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup CCTV 2</Button>
      </CardFooter>
    </Card>


    {/* 6 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-exclamation-triangle" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Gas Detector</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Gas Detector</Button>
      </CardFooter>
    </Card>



     {/* 7 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-exclamation-circle" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Fire Alarm</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Fire Alarm</Button>
      </CardFooter>
    </Card>


  </div>
</div>


  );
}

export default Hall;