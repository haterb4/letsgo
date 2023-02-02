import React from "react";
import Sidebar from "@/componnents/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planner from "./planner";
import Trips from "./trips";
import Drivers from "./drivers";
import Cars from "./cars";


const mainPlannerDashBoard = () => {

    return (

        <div>
            <Sidebar>
                <Sidebar/>
            </Sidebar>
            
        </div>
    );
};

export default mainPlannerDashBoard;