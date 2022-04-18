// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from './components/dashboard-layout';
import { Machine } from './components/Dashboard/machine';
import React, { useState,useEffect } from 'react';
import Axios from 'axios';

//const machineData = [
  //{
      //machineId : '001',
      //monaNumber : '52078592',
      //status : 'Online',
      //moldShots : '10',
      //failedShots : '0',
      //prodRate : '100%',
      //prod_startDate : '01/01/2020',
      //prod_endDate : '01/01/2022',
  //},
  //{
      //machineId : '002',
      //monaNumber : '82525425',
      //status : 'Online',
      //moldShots : '10',
      //failedShots : '0',
      //prodRate : '100%',
      //prod_startDate : '01/01/2020',
      //prod_endDate : '01/01/2022',
  //},
  //{
      //machineId : '003',
      //monaNumber : '35636356',
      //status : 'Offline',
      //moldShots : '10',
      //failedShots : '0',
      //prodRate : '100%',
      //prod_startDate : '01/01/2020',
      //prod_endDate : '01/01/2022',
  //},
//]


export default function Dashboard(props){

	const [machineData, setMachineData] = useState([])

	//useEffect(() => {
		//document.title = 'Dashboard';
	//}, [props.title]);

	useEffect(()=>{
		Axios.get('http://localhost:3001/api/machines').then((response)=>{
			setMachineData(response.data);
			console.log(response.data);
		})
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
            >

            <React.Fragment>
                {machineData.map((machine,index) => (
                    
                        <Grid item xs={12} sm={6} md={4} key={index}>

                            {/* pass parameters using link */}
                            <Link to={{pathname : `/machines/${machine.machineId}`}} state= {{
                                    machineId: machine.machineID,
                                    monaNumber: machine.moldID,
                                    status: machine.status,
                                    moldShots: machine.moldShots,
                                    failedShots: machine.failedShots,
                                    prodRate: machine.prodRate,
                                    prod_startDate: machine.prod_start_date,
                                    prod_endDate: machine.prod_end_date,
                                }} >
                                <Machine
                                machineId={machine.machineID}
                                monaNumber={machine.moldID}
                                status="online"
                                moldShots={machine.moldShots}
                                failedShots={machine.failedShots}
                                prodRate={machine.prodRate}
                                prod_startDate={machine.prod_start_date}
                                prod_endDate={machine.prod_end_date}
                                />
                            </Link>
                        </Grid>
                ))}
            </React.Fragment>

            </Grid>
        </Container>
        </Box>
        </DashboardLayout>
        )
}
