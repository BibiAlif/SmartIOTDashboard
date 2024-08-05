import {
  Card,
  Input,
  CardBody,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";



export function OrderLPGForm() {
  return (
    <section className="m-8 flex">
           
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Order LPG Gas</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Please check your detail</Typography>
        </div>

        <Card className="w-full md:col-span-2 mx-auto"  style={{ backgroundColor: '#EEEEEE' }}>
        <CardBody>


        <form className="mt-8 mb-2 mx-auto w-70 max-w-screen-lg lg:w-1/2">

        <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="Display Email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="Display Username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Ship To
            </Typography>
            <Input
              size="lg"
              placeholder="Display Address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="Display Phone Number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
      
          <Button className="mt-6" fullWidth>Order Now</Button>

        </form>

        </CardBody>
        </Card>

      </div>
    </section>
  );
}

export default OrderLPGForm;

