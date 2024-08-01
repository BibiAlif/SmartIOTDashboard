import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function GovWeatherKB() {
  return (
    <div className="mt-14 mb-4 flex flex-col gap-6">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">Sensor Setup</Typography>
        </CardHeader>
      </Card>

      <div className="flex flex-wrap justify-center mt-2">
        {/* 2 Card header -------------------------------------------------------------------------*/}  

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
          <Card className="h-auto text-center">
            <CardBody>
              <i className="fas fa-globe" style={{ fontSize: '100px', color: 'black' }} />
            </CardBody>
            <div className="flex flex-col justify-center items-center mt-2">
              <Link to="/dashboardGov/govweatherKBSensorsetupMenu">
                <Button className="w-full md:w-55 mb-4">Kuala Belait Setup</Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
          <Card className="h-auto text-center">
            <CardBody>
              <i className="fas fa-globe" style={{ fontSize: '100px', color: 'black' }} />
            </CardBody>
            <div className="flex flex-col justify-center items-center mt-2">
              <Link to="/dashboardGov/govweatherTutongSensorsetupMenu">
                <Button className="w-full md:w-40 mb-4">Tutong Setup</Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
          <Card className="h-auto text-center">
            <CardBody>
              <i className="fas fa-globe" style={{ fontSize: '100px', color: 'black' }} />
            </CardBody>
            <div className="flex flex-col justify-center items-center mt-2">
              <Link to="/dashboardGov/govweatherBruneiMuaraSensorsetupMenu">
                <Button className="w-full md:w-50 mb-4">Brunei Muara Setup</Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
          <Card className="h-auto text-center">
            <CardBody>
              <i className="fas fa-globe" style={{ fontSize: '100px', color: 'black' }} />
            </CardBody>
            <div className="flex flex-col justify-center items-center mt-2">
              <Link to="/dashboardGov/govweatherTemburongSensorsetupMenu">
                <Button className="w-full md:w-50 mb-4">Temburong Setup</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GovWeatherKB;
