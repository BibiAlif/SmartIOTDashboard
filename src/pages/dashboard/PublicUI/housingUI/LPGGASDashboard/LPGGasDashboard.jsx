import React, { useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


//import { KitchenTableData, HallTableData, ToiletTableData, OutdoorTableData } from "@/housedata";

import { fetchLPGData, LPGTableData } from "../../../../../housedata/All-Housing-Table-Data/LPG-gas-table-data";

export function LPGGasDashboard() {

  // AZURE Fetching -----------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      await fetchLPGData();
      console.log(LPGTableData); // You can verify the data here
    };

    fetchData();
  }, []);
  // AZURE Fetching -----------------------------------------------------------------------------------------------

  return (
    
    /* LPG Gas Table data --------------------------------------------------------------------------------- */  
    <div className="mt-14 mb-4 flex flex-col gap-6">
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">LPG Gas Dashboard</Typography>
      </CardHeader>


      <div className="p-6">
      <Link to="/dashboard/OrderLPGForm">
        <Button className="w-full md:w-40 mb-4">Order LPG Gas</Button>
      </Link>
      </div>


    <CardBody>

        <div className="overflow-x-scroll">
        <table className="w-min min-w-[1000px] table-auto mx-auto">
        <thead>
        <tr>
          {["LPG Gas", "Date", "Connection", "battery", "Gas Reading",  "Status"].map((el) => (
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

        {LPGTableData.map(
          ({ icon, date, name, online, battery, gasreading, status}, key) => {
          const className = `py-3 px-5 ${
          key === LPGTableData.length - 1
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
              <Chip
                variant="gradient"
                color={online ? "green" : "blue-gray"}
                value={online ? "online" : "offline"}
                className="py-0.5 px-2 text-[11px] font-medium w-fit"
            />
            </td>


            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {battery[0]}
              </Typography>
            </td>
            
            
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
               {gasreading[0]}
              </Typography>
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

export default LPGGasDashboard;