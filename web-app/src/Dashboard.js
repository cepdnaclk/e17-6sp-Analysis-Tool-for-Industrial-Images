// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from './components/dashboard-layout';
import { Machine } from './components/Dashboard/machine';
import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import moment from 'moment';

const { io } = require("socket.io-client");


export default function Dashboard(props){

	const [ machineData, setMachineData] = useState([])

	useEffect(() => {
		document.title = 'Dashboard';
	}, [props.title]);

	useEffect(()=>{
        console.log(process.env.REACT_APP_SERVER_BASE_URL)
		Axios.get(process.env.REACT_APP_SERVER_BASE_URL + '/api/machines').then((response)=>{
			setMachineData(response.data);
			console.log(response.data);
		})
        console.log(process.env.REACT_APP_SERVER_BASE_URL + '/api/machines')
	})

  
    return (
        <DashboardLayout>
        <Box
        component="main"
        sx={{
            flexGrow: 1,
            py: 8
        }}
        >
        <Container maxWidth={false}>
            <Grid
            container
            spacing={3}
            sx={{alignItems:'center',justifyContents:"center"}}
            >

            <React.Fragment>
                            {machineData.map((machine, index) => {
                                
                                if (machine.prodRate > 100 || machine.prodRate < 0)
                                    machine.prodRate = "error"
                                
                                if (machine.status != "Online" && machine.status != "Offline")
                                    machine.status = "error"
                                    

                                return (
                    
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index} sx={{ alignItems: 'center', justifyContents: "center", minWidth: 290, marginBottom: 5 }} >

                                        {/* pass parameters using link */}
                                        {/* <Link to={{pathname : `machines/:${machine.machineID}`}} state= {{
                                    machineID: machine.machineID,
                                    monaNumber: machine.moldID,
                                    status: machine.status,
                                    moldShots: machine.moldShots,
                                    failedShots: machine.failedShots,
                                    prodRate: machine.prodRate,
                                    prod_startDate: machine.prod_start_date,
                                    prod_endDate: machine.prod_end_date,
                                }} > */}
                                        <Machine
                                            machineId={machine.machineID}
                                            monaNumber={machine.moldID}
                                            status={machine.status}
                                            moldShots={machine.moldShots}
                                            failedShots={machine.failedShots}
                                            prodRate={machine.prodRate}
                                            prod_startDate={moment(machine.prod_start_date).format("DD-MM-YYYY")}
                                            prod_startTime={moment(machine.prod_start_date).format("kk:mm:ss")}
                                            prod_endDate={moment(machine.prod_end_date).format("DD-MM-YYYY")}
                                            prod_endTime={moment(machine.prod_end_date).format("kk:mm:ss")}
                                        />
                                        {/* </Link> */}
                                    </Grid>
                                )
                            })}
            </React.Fragment>

            </Grid>
        </Container>
        </Box>
        </DashboardLayout>
        )
}
