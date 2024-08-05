import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function GovWeatherTemburongGatewwaySetupForm() {
  return (
    
    <div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Temburong Setup Gateway Form</Typography>
      </CardHeader>
    </Card>





{/* 2 Card header -------------------------------------------------------------------------*/}  
<div className="mt-1">
<div className="mb-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3">

        <Card className="w-full md:col-span-2 mx-auto"  style={{ backgroundColor: '#EEEEEE' }}>
        <CardBody>

  <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal text-center">Enter Gateway Information.</Typography>


        <form className="mt-8 mb-2 mx-auto w-70 max-w-screen-lg lg:w-1/2">

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Gateway ID
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>



          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Gateway Name
            </Typography>
            <Input
              size="lg"
              placeholder="Password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Types Of Gateway
            </Typography>
            <Input
              size="lg"
              placeholder="Address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Gateway other detail
            </Typography>
            <Input
              size="lg"
              placeholder="Address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>Save New Sensor</Button>

        </form>

        </CardBody>
        </Card>

 



{/*  2 Card header -------------------------------------------------------------------------*/}  
</div>
</div>
</div>

  );
}

export default GovWeatherTemburongGatewwaySetupForm;