import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


export function Kitchen() {


return (


<div className="mt-12 ">
  
<div className="mb-6 grid grid-cols-1 gap-y-12 md:grid-cols-2">


    {/* 2 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-fire" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Gas LPG Tank</Typography>
        <Link to="/dashboard/SetupGasLPGTank"><Button>Setup Gas LPG Tank</Button></Link>
      </CardFooter>
    </Card>


    {/* 3 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-lightbulb" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Lamp</Typography>
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
        <Button>Setup Smart Plug</Button>
      </CardFooter>
    </Card>


    {/* 5 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-video" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart CCTV 1</Typography>
        <Button>Setup CCTV</Button>
      </CardFooter>
    </Card>


    {/* 6 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-exclamation-triangle" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Gas Detector</Typography>

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
        <Button>Setup Smart Water Leak</Button>
      </CardFooter>
    </Card>


     {/* 8 Card */}
    <Card className="w-3/4 text-center mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
      <CardBody>
        <i className="fas fa-exclamation-circle" style={{ fontSize: '100px', color: 'Black'}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2">Smart Fire Alarm</Typography>
        <Button>Setup Smart Fire Alarm</Button>
      </CardFooter>
    </Card>


</div>
</div>

  );
}

export default Kitchen;