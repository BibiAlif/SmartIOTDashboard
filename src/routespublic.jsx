import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import { 
  HomePublicMenu,
  WeatherPublicKB,
  WeatherPublicTutong,
  WeatherPublicBruneiMuara,
  WeatherPublicTemburong,
  Setting, 
  PublicLogout,
         } from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};


export const routespublic = [
  {
    layout: "dashboardPublic",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Menu",
        path: "/homepublicmenu",
        element: <HomePublicMenu />,
      },
      {
        icon: <i className="fas fa-gear" />,
        name: "Profile Setting",
        path: "/setting",
        element: <Setting />,
      },
      {
        icon: <i className="fas fa-sign-out" />,
        name: "Logout",
        path: "/logout",
        element: <PublicLogout />,
      },
      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/weatherPublicKb",
        element: <WeatherPublicKB />,
      },
      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/weatherPublicTutong",
        element: <WeatherPublicTutong />,
      },
      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/weatherPublicBruneiMuara",
        element: <WeatherPublicBruneiMuara />,
      },
      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/weatherPublicTemburong",
        element: <WeatherPublicTemburong />,
      },

    ],
  },
]

        
export default routespublic;
