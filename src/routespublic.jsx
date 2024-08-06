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

  PublicSmartParkingRipas,
  PublicSmartParkingRipasCCTV,
  PublicSmartParkingRipasBook,

  PublicSmartParkingAirportMall,
  PublicSmartParkingAirportMallCCTV,
  PublicSmartParkingAirportMallBook,

  PublicSmartParkingJayaSetia,
  PublicSmartParkingJayaSetiaCCTV,
  PublicSmartParkingJayaSetiaBook,

  
  
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


      // Smart Parking --------------------------------------------------------------------
      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingRipas",
        element: <PublicSmartParkingRipas />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingRipasCCTV",
        element: <PublicSmartParkingRipasCCTV />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingRipasBook",
        element: <PublicSmartParkingRipasBook />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingAirportMall",
        element: <PublicSmartParkingAirportMall />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingAirportMallCCTV",
        element: <PublicSmartParkingAirportMallCCTV />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingAirportMallBook",
        element: <PublicSmartParkingAirportMallBook />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingJayaSetia",
        element: <PublicSmartParkingJayaSetia />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingAirportMallCCTV",
        element: <PublicSmartParkingJayaSetiaCCTV />,
      },

      {
        //icon: <HomeIcon {...icon} />,
        // name: "",
        path: "/publicSmartParkingAirportMallBook",
        element: <PublicSmartParkingJayaSetiaBook />,
      },

      // Smart Parking --------------------------------------------------------------------
    ],
  },
]

        
export default routespublic;
