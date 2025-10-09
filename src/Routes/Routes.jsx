import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Apps from '../pages/Apps/Apps';
import ErrorApps from '../pages/ErrorApps/ErrorApps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            Component: Home,
        },
        {
            path: '/apps',
            Component: Apps,
            
        },
        {
            path: '/installation',
            Component: Installation,
        },
        {
          path:'/app/:id',
          Component: AppDetails,
          errorElement: <ErrorApps></ErrorApps>
        }
    ]
  },
]);

