import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
  Chip,
} from "@material-tailwind/react";
import RTUTableGatewaydatatransmited from '../../../../../housedata/All-Housing-Table-Data/RTU-Gateway-table-transmitted';



export function GatewaySetup() {
  return (


<div className="mt-12">
<div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">



  {/* Card Will be here -------------------------------------------------------------------------*/}  
   <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-plus" style={{ fontSize: '100px', color: 'gray'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">New Gateway Setup</Typography>
      <Link to="/dashboard/AddNewGateway"><Button>Add New Gateway</Button></Link>
    </CardFooter>
    </Card>
  {/* Card Will be here -------------------------------------------------------------------------*/}  





 {/* Card Will be here -------------------------------------------------------------------------*/}  
  <Card className="mt-6 w-30 h-55 text-center">
    <CardBody>
    <i className="fas fa-satellite-dish" style={{ fontSize: '100px', color: 'Black'}}/>
    </CardBody>
    <CardFooter className="pt-0">
    <Typography variant="h5" color="blue-gray" className="mb-2">RTU Gateway 1</Typography>
    <Link to="/dashboard/SetupGatewayConnect"><Button>Setup Gateway</Button></Link>
    </CardFooter>
  </Card>
 {/* Card Will be here -------------------------------------------------------------------------*/}  


</div>

{/* Gateway Transmitted Table -------------------------------------------------------------------------*/}  
<div className="mt-14 mb-4 flex flex-col gap-6" >
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">RTU Gateway Data Transmitted</Typography>
      </CardHeader>
      </Card>
       
  
      <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["Id", "Status", "Speed", "Connection Type", "Transmitted data"].map((el) => (
          <th
            key={el}
            className="border-b border-blue-gray-50 py-3 px-5 text-left"
          >
          <Typography
            variant="small"
            className="text-[11px] font-bold uppercase text-blue-gray-400"
            >
          {el}
          </Typography>
          </th>
          ))}
          </tr>
          </thead>
          <tbody>

        {RTUTableGatewaydatatransmited.map(
          ({  id, status, Speed, connectionType, transmitteddata}, key) => {
          const className = `py-3 px-5 ${
          key === RTUTableGatewaydatatransmited.length - 1
          ? ""
          : "border-b border-blue-gray-50"
          }`;


          return (
            <tr key={id}>
            <td className={className}>
            <div className="flex items-center gap-4">

            <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
              >
              {id}
            </Typography>

            </div>
            </div>
            </td>

            <td className={className}>
              <Typography
                //as="a"
                //href="#"
                className="text-xs font-semibold text-blue-gray-600"
                >
               <Chip
                variant="gradient"
                color={status ? "green" : "red"}
                value={status ? "Connected" : "Disconnected"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                />
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {Speed}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {connectionType}
              </Typography>
            </td>

            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {transmitteddata}
              </Typography>
            </td>

            
            </tr>
            );
            }
            )}
        </tbody>
        </table> 


</div>
</div>
{/* Gateway Transmitted Table -------------------------------------------------------------------------*/}  

</div>

  );
}

export default GatewaySetup;