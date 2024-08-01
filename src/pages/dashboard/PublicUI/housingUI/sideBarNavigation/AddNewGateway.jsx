import {
  Card,
  Input,
  CardBody,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";



export function AddnewGateway() {
  return (
    <section className="m-8 flex">
           
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Add New Gateway To Setup</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter Gateway Information.</Typography>
        </div>

        <Card className="w-full md:col-span-2 mx-auto"  style={{ backgroundColor: '#EEEEEE' }}>
        <CardBody>


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


      
          <div className="mb-1 flex flex-col gap-6">
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Upload Image Icons</Typography>
          <input
            type="file"
            className="border-t-blue-gray-200 focus:border-t-gray-900"
          />
          </div>
      
          <Button className="mt-6" fullWidth>Save New Sensor</Button>

        </form>

        </CardBody>
        </Card>

      </div>
    </section>
  );
}

export default AddnewGateway;

