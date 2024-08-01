import {
  Card,
  Input,
  CardBody,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import localImage from '../../../../../../public/img/063ad1330e0c.png';


export function SetupLPGGasTank() {
  return (
    <section className="m-8 flex">
           
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Setup LPG Gas Tank</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your Gas Tank Information.</Typography>
        </div>

        <Card className="w-full md:col-span-2 mx-auto"  style={{ backgroundColor: '#EEEEEE' }}>
        <CardBody>


        <div className="flex justify-center items-center">
          <img src={localImage} alt="Local" className="max-w-full h-auto" />
        </div>


        <form className="mt-8 mb-2 mx-auto w-70 max-w-screen-lg lg:w-1/2">

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              LPG Gas Tank ID
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
              LPG Gas Tank Name
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
              Types Of LPG Gas Tank
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
              LPG Gas Tank Weight
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
      
          <Button className="mt-6" fullWidth>Save Gas Tank Info</Button>

        </form>

        </CardBody>
        </Card>

      </div>
    </section>
  );
}

export default SetupLPGGasTank;

