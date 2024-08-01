import {
  HomeIcon,
  TableCellsIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import { Home, 
         Category,
         AlertKitchen, 
         AlertHall, 
         AlertToilet, 
         AlertOutdoor, 
         LPGGasDashboard, 
         Kitchen,
         Hall,
         Toilet,
         Outdoor,
         SetupLPGGasTank,
         Addnewsensor,
         GatewaySetup,
         AddnewGateway,
         HomePublicMenu,
         } from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};


export const routesHouse = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
    ],
  },

{
    layout: "dashboardPublic",
    pages: [
      {
        icon: <ListBulletIcon {...icon} />,
        name: "Menu",
        path: "/homepublicmenu",
        element: <HomePublicMenu />,
      },
    ],
  },


  {
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Control",
        children: [
          {
            icon: <i className="fas fa-exclamation-triangle" />,
            name: "Kitchen",
            path: "alertKitchen",
            element: <AlertKitchen />,
          },
          {
            icon: <i className="fas fa-exclamation-triangle" />,
            name: "Hall",
            path: "alertHall",
            element: <AlertHall />,
          },
          {
            icon: <i className="fas fa-exclamation-triangle" />,
            name: "Toilet",
            path: "alertToilet",
            element: <AlertToilet />,
          },
          {
            icon: <i className="fas fa-exclamation-triangle" />,
            name: "Outdoor",
            path: "alertOutdoor",
            element: <AlertOutdoor />,
          },
        ],
      },


     {
        icon: <i className="fas fa-rss" />,
        name: "Sensor Setup",
        path: "/setup",
        element: <Category />,
      },

      {
        icon: <i className="fas fa-satellite-dish" />,
        name: "Gateway Sensor Setup",
        path: "/GatewaySetup",
        element: <GatewaySetup />,
      },



    ]
  },




  
  // Add Alerttest route outside the pages array to keep it hidden from the menu
  {
    layout: "dashboard",
    pages: [
      {
        path: "/LPGGasDashboard",
        element: <LPGGasDashboard />,
      },
      {
        path: "/Kitchen",
        element: <Kitchen />,
      },
      {
        path: "/hall",
        element: <Hall />,
      },
      {
        path: "/toilet",
        element: <Toilet />,
      },
      {
        path: "/outdoor",
        element: <Outdoor />,
      },
      {
        path: "/SetupGasLPGTank",
        element: <SetupLPGGasTank />,
      },
      {
        path: "/AddNewSensor",
        element: <Addnewsensor />,
      },
      {
        path: "/AddNewGateway",
        element: <AddnewGateway />,
      },
    ],


  },
]

       





export default routesHouse;
