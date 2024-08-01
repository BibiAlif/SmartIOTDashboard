import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Switch
} from "@material-tailwind/react";
import {  ToiletTableData } from "@/housedata/All-Housing-Table-Data/toilet-table-data";

export function AlertToilet() {
  return (
    
    /* Toilet Table data --------------------------------------------------------------------------------- */  
    <div className="mt-14 mb-4 flex flex-col gap-6">
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">Smart IOT Toilet</Typography>
      </CardHeader>
      <CardBody>


        <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["Device Name", "Updated", "function", "Connection", "Status", "Switch"].map((el) => (
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

        {ToiletTableData.map(
          ({ icon, date, name, measure, online, status}, key) => {
          const className = `py-3 px-5 ${
          key === ToiletTableData.length - 1
          ? ""
          : "border-b border-blue-gray-50"
          }`;


          return (
            <tr key={name}>
            <td className={className}>
            <div className="flex items-center gap-4">
            <i className={icon}></i>
            <div>

            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
              >
              {name}
            </Typography>

            </div>
            </div>
            </td>


            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {date}
              </Typography>
            </td>
            
            
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {measure[0]}
              </Typography>
            </td>
            
            
            <td className={className}>
              <Chip
                variant="gradient"
                color={online ? "green" : "blue-gray"}
                value={online ? "online" : "offline"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
            />
            </td>


            <td className={className}>
              <Typography
                as="a"
                href="#"
                className="text-xs font-semibold text-blue-gray-600"
                >

               <Chip
                variant="gradient"
                color={status ? "green" : "yellow"}
                value={status ? "normal" : "alert"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                />
              </Typography>
            </td>

            <td className={className}>
              <Typography
                as="a"
                href="#"
                className="text-xs font-semibold text-blue-gray-600"
                >
              </Typography>
           
              <Switch defaultChecked />
            </td>
            </tr>
            );
            }
            )}
        </tbody>
        </table>
        </div>
    </CardBody>
    </Card>


</div>


  );
}

export default AlertToilet;