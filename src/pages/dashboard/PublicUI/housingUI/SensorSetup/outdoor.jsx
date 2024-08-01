import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Outdoor() {
  return (


<div className="mt-12">
  <div className="mb-6 grid grid-cols-1 gap-y-12 md:grid-cols-2">

    {/* 2 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-video" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart CCTV 3</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup cctv 3</Button>
      </CardFooter>
    </Card>


    {/* 2 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-video" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart CCTV 4</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup cctv 4</Button>
      </CardFooter>
    </Card>


     {/* 2 Card */}
     <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-video" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart CCTV 5</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup cctv 5</Button>
      </CardFooter>
    </Card>


    {/* 5 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-video" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart CCTV 6</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup CCTV 6</Button>
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
        <i className="fas fa-water" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Water Leak</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Water Leak</Button>
      </CardFooter>
    </Card>


     {/* 8 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-lightbulb" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Lamp</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Lamp</Button>
      </CardFooter>
    </Card>



    {/* 9 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-door-open" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Door</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Door</Button>
      </CardFooter>
    </Card>



     {/* 10 Card */}
     <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-house-user" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Counting</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Counting</Button>
      </CardFooter>
    </Card>


     {/* 11 Card */}
     <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-warehouse" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Fence</Typography>
        <Typography color="blue" className="font-bold">Alert: No Alert</Typography>
        <Button>Setup Smart Fence</Button>
      </CardFooter>
    </Card>


  </div>
</div>


  );
}

export default Outdoor;