// import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, Container, Grid, Card, Typography } from "@mui/material";
import { DashboardLayout } from "./components/dashboard-layout";
import { Machine } from "./components/Dashboard/machine";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";

const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_SERVER_BASE_URL, {
  transports: ["websocket"],
});

export default function Dashboard(props) {
  const [machineData, setMachineData] = useState([]);

  useEffect(() => {
    document.title = "Dashboard";
  }, [props.title]);

  // useEffect(()=>{
  //     console.log(process.env.REACT_APP_SERVER_BASE_URL)
  // 	Axios.get(process.env.REACT_APP_SERVER_BASE_URL + '/api/machines').then((response)=>{
  // 		setMachineData(response.data);
  // 		console.log(response.data);
  // 	})
  //     console.log(process.env.REACT_APP_SERVER_BASE_URL + '/api/machines')
  // })
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

  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          paddingTop: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
            sx={{ alignItems: "center", justifyContents: "center" }}
          >
            <React.Fragment>
              <Grid item xs={12} sx={{ paddingBottom: 2, margin: 0 }}>
                <Card
                  sx={{
                    backgroundColor: "neutral.700",
                    paddingTop: 2,
                    paddingLeft: 2,
                    paddingBottom: 1,
                  }}
                >
                  <Typography variant="h5" component="div" color={"#10B981"}>
                    Molding Section Statistics
                  </Typography>
                </Card>
              </Grid>

              {machineData.map((machine, index) => {
                // if (machine.prodRate!= 0)
                machine.status = "Online";
                // else
                // machine.status = "Offline"

                if (machine.material === undefined) machine.material = "none";
                if (machine.moldMaker === undefined) machine.moldMaker = "none";

                console.log(machine.moldMaker);
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    key={index}
                    sx={{
                      alignItems: "center",
                      justifyContents: "center",
                      minWidth: 290,
                      marginBottom: 5,
                    }}
                  >
                    {/* pass parameters using link */}
                    <Link
                      to={{ pathname: `machines/:${machine.machineID}` }}
                      state={{ ...machine }}
                    >
                      <Machine
                        machineId={machine.machineID}
                        monaNumber={machine.moldID}
                        status={machine.status}
                        moldShots={machine.moldShots}
                        failedShots={machine.failedShots}
                        prodRate={machine.prodRate}
                        material={machine.material}
                        moldMaker={machine.moldMaker}
                        prod_startDate={moment(machine.prod_start_date).format(
                          "DD-MM-YYYY"
                        )}
                        prod_startTime={moment(machine.prod_start_date).format(
                          "kk:mm:ss"
                        )}
                        prod_endDate={moment(machine.prod_end_date).format(
                          "DD-MM-YYYY"
                        )}
                        prod_endTime={moment(machine.prod_end_date).format(
                          "kk:mm:ss"
                        )}
                      />
                    </Link>
                  </Grid>
                );
              })}
            </React.Fragment>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
}
