import {
  HomeIcon,
  BuildingOffice2Icon,
  SunIcon,
  TruckIcon,
  InboxIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import { 
  GovHome,
  GovSetting,
  GovLogout,
  GovWeatherKB,

  GovWeatherKBSensorMenu,
  GovWeatherKBGatewaySetup,
  GovWeatherKBGatewwaySetupForm,
  GovWeatherKBSensorSetup,
  GovWeatherKBSensorSetupForm,
  GovWeatherKBGatewayConnect,
  GovWeatherKBSensorConnect,

  GovWeatherTutongSensorMenu,
  GovWeatherTutongGatewaySetup,
  GovWeatherTutongGatewwaySetupForm,
  GovWeatherTutongSensorSetup,
  GovWeatherTutongSensorSetupForm,
  GovWeatherTutongGatewayConnect,
  GovWeatherTutongSensorConnect,

  GovWeatherBruneiMuaraSensorMenu,
  GovWeatherBruneiMuaraGatewaySetup,
  GovWeatherBruneiMuaraGatewwaySetupForm,
  GovWeatherBruneiMuaraSensorSetup,
  GovWeatherBruneiMuaraSensorSetupForm,
  GovWeatherBruneiMuaraGatewayConnect,
  GovWeatherBruneiMuaraSensorConnect,

  GovWeatherTemburongSensorMenu,
  GovWeatherTemburongGatewaySetup,
  GovWeatherTemburongGatewwaySetupForm,
  GovWeatherTemburongSensorSetup,
  GovWeatherTemburongSensorSetupForm,
  GovWeatherTemburongGatewayConnect,
  GovWeatherTemburongSensorConnect,

  } from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};


export const routesGov = [

  {
    layout: "dashboardGov",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "DashboardGov",
        path: "/govhome",
        element: <GovHome />,
      },
      
      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Prime Minister's Office",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Transport and Infocommunications",
        children: [
          {
            icon: <SunIcon {...icon} />,
            name: "Meteorlogical Department",
            path: "govweatherKB",
            element: <GovWeatherKB />,
          },
          {
            icon: < TruckIcon {...icon} />,
            name: "Land Transport Department",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <InboxIcon {...icon} />,
            name: "Brunei Postal Services Department",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <RocketLaunchIcon {...icon} />,
            name: "Department Of Civil Aviation",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <ComputerDesktopIcon {...icon} />,
            name: "E-Government National Centre",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },


      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Prime Minister Finance and Economy",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },




      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry Of Defence",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Foreign Affairs",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Home Affairs",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Education",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },


      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Primary Resources and Tourism",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Development",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Culture, Youth and Sports",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },



      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Health",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },


      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Ministry of Religious Affairs",
        children: [
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
          {
            icon: <HomeIcon {...icon} />,
            name: "Not Yet",
            path: "govhome",
            element: <GovHome />,
          },
        ],
      },


      {
        icon: <i className="fas fa-gear" />,
        name: "Setting",
        path: "/govsetting",
        element: <GovSetting />,
      },
      {
        icon: <i className="fas fa-sign-out" />,
        name: "Logout",
        path: "/govlogout",
        element: <GovLogout />,
      },
    ],
  },



//Link Routes MTIC----------------------------------------------------
  {
    layout: "dashboardGov",
    pages: [
      //Weather For Kb ----------------------------------------------------
      {
        path: "/govweatherKBSensorsetupMenu",
        element: <GovWeatherKBSensorMenu />,
      },
      {
        path: "/govweatherKBGatewaySetup",
        element: <GovWeatherKBGatewaySetup />,
      },
      {
        path: "/govweatherKBGatewaySetupForm",
        element: <GovWeatherKBGatewwaySetupForm />,
      },
      {
        path: "/govweatherKBSensorSetup",
        element: <GovWeatherKBSensorSetup/>,
      },
      {
        path: "/govweatherKBSensorSetupForm",
        element: <GovWeatherKBSensorSetupForm />,
      },
      {
        path: "/govWeatherKBGatewayConnect",
        element: <GovWeatherKBGatewayConnect />,
      },
      {
        path: "/govWeatherKBSensorConnect",
        element: <GovWeatherKBSensorConnect />,
      },
      //Weather For Kb ----------------------------------------------------


      //Weather For Tutong ----------------------------------------------------
      {
        path: "/govweatherTutongSensorsetupMenu",
        element: <GovWeatherTutongSensorMenu />,
      },
      {
        path: "/govweatherTutongGatewaySetup",
        element: <GovWeatherTutongGatewaySetup />,
      },
      {
        path: "/govweatherTutongGatewaySetupForm",
        element: <GovWeatherTutongGatewwaySetupForm />,
      },
      {
        path: "/govweatherTutongSensorSetup",
        element: <GovWeatherTutongSensorSetup/>,
      },
      {
        path: "/govweatherTutongSensorSetupForm",
        element: <GovWeatherTutongSensorSetupForm />,
      },
      {
        path: "/govWeatherTutongGatewayConnect",
        element: <GovWeatherTutongGatewayConnect />,
      },
      {
        path: "/govWeatherTutongSensorConnect",
        element: <GovWeatherTutongSensorConnect />,
      },
      //Weather For Tutong ----------------------------------------------------


      //Weather For Temburong ----------------------------------------------------
      {
        path: "/govweatherTemburongSensorsetupMenu",
        element: <GovWeatherTemburongSensorMenu />,
      },
      {
        path: "/govweatherTemburongGatewaySetup",
        element: <GovWeatherTemburongGatewaySetup />,
      },
      {
        path: "/govweatherTemburongGatewaySetupForm",
        element: <GovWeatherTemburongGatewwaySetupForm />,
      },
      {
        path: "/govweatherTemburongSensorSetup",
        element: <GovWeatherTemburongSensorSetup/>,
      },
      {
        path: "/govweatherTemburongSensorSetupForm",
        element: <GovWeatherTemburongSensorSetupForm />,
      },
      {
        path: "/govWeatherTemburongGatewayConnect",
        element: <GovWeatherTemburongGatewayConnect />,
      },
      {
        path: "/govWeatherTemburongSensorConnect",
        element: <GovWeatherTemburongSensorConnect />,
      },
      
      //Weather For Temburong ----------------------------------------------------





      //Weather For BruneiMuara ----------------------------------------------------
      {
        path: "/govweatherBruneiMuaraSensorsetupMenu",
        element: <GovWeatherBruneiMuaraSensorMenu />,
      },
      {
        path: "/govweatherBruneiMuaraGatewaySetup",
        element: <GovWeatherBruneiMuaraGatewaySetup />,
      },
      {
        path: "/govweatherBruneiMuaraGatewaySetupForm",
        element: <GovWeatherBruneiMuaraGatewwaySetupForm />,
      },
      {
        path: "/govweatherBruneiMuaraSensorSetup",
        element: <GovWeatherBruneiMuaraSensorSetup/>,
      },
      {
        path: "/govweatherBruneiMuaraSensorSetupForm",
        element: <GovWeatherBruneiMuaraSensorSetupForm />,
      },
      {
        path: "/govWeatherBruneiMuaraGatewayConnect",
        element: <GovWeatherBruneiMuaraGatewayConnect />,
      },
      {
        path: "/govWeatherBruneiMuaraSensorConnect",
        element: <GovWeatherBruneiMuaraSensorConnect />,
      },
     //Weather For BruneiMuara ----------------------------------------------------

    ],
  },
 


];

        
export default routesGov;
