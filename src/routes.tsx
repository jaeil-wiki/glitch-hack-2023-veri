import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Crowding from "./pages/Crowding";
import Dashboard from "./pages/Dashboard";
import Room from "./pages/Room";

export const RootRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/rooms/:roomHash",
        element: <Room/>
    },
    {
        path: "/crowdings",
        element: <Crowding/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
]);
