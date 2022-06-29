/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, Container, Grid, Card, Typography } from "@mui/material";
import { DashboardLayout } from "../Dashboard/dashboard-layout";
import { MachinePage } from "./MachinePage.js";
import React, { useState, useEffect } from "react";
import { MachineInfoPage } from "./MachineinfoPage.js";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../404.js";

const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_SERVER_BASE_URL, {
  transports: ["websocket"],
});

export default function Dashboard(props) {
  const [machineData, setMachineData] = useState([]);

  // useEffect(() => {
  //   document.title = "Dashboard";
  // }, [props.title]);

  useEffect(() => {
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.on("machines", (data) => {
      data[0].status = "Online";
      // console.log();
      setMachineData(data);
    });
  });
  // i don't want these mesy structre

  return (
    <DashboardLayout title={"hi"} machineData={machineData}>
      <Routes>
        <Route
          exact
          path="/"
          element={<MachinePage machineData={machineData} />}
        />
        <Route
          path="/machines/:ID"
          element={<MachineInfoPage machineData={machineData} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </DashboardLayout>
  );
}
