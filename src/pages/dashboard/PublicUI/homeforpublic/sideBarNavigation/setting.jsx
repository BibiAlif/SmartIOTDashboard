import {
  Card,
  Input,
  CardBody,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function Setting() {
  return (
    <section className="m-8 flex">
           
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Profile Setting</Typography>
        </div>

        <Card className="w-full md:col-span-2 mx-auto"  style={{ backgroundColor: '#EEEEEE' }}>
        <CardBody>
        <form className="mt-8 mb-2 mx-auto w-70 max-w-screen-lg lg:w-1/2">

        <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

           <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="*********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />


      <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
        Home Address
      </Typography>
      <textarea
        placeholder="Enter your home address"
        className="w-full p-2 border border-t-blue-gray-200 focus:border-t-gray-900 rounded-md"
        rows={4} // Adjust the number of rows as needed
      ></textarea>


            
          </div>
        
      
        <Button className="mt-6" fullWidth>Update</Button>

        </form>

        </CardBody>
        </Card>

      </div>
    </section>
  );
}

export default Setting;

