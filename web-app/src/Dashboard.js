// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from './components/dashboard-layout';
import { Machine } from './components/Dashboard/machine';
import React, { useEffect } from 'react';

const machineData = [
  {
      machineId : '001',
      monaNumber : '52078592',
      status : 'Online',
      moldShots : '10',
      failedShots : '0',
      prodRate : '100%',
      prod_startDate : '01/01/2020',
      prod_endDate : '01/01/2022',
  },
  {
      machineId : '002',
      monaNumber : '82525425',
      status : 'Online',
      moldShots : '10',
      failedShots : '0',
      prodRate : '100%',
      prod_startDate : '01/01/2020',
      prod_endDate : '01/01/2022',
  },
  {
      machineId : '003',
      monaNumber : '35636356',
      status : 'Offline',
      moldShots : '10',
      failedShots : '0',
      prodRate : '100%',
      prod_startDate : '01/01/2020',
      prod_endDate : '01/01/2022',
  },
]

export default function Dashboard(props){
  useEffect(() => {
    document.title = 'Dashboard';
    }, [props.title]);
  
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
                {machineData.map((machine, index) => (
                    
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Link to={`/machines/${machine.machineId}`}>
                                <Machine
                                machineId={machine.machineId}
                                monaNumber={machine.monaNumber}
                                status={machine.status}
                                moldShots={machine.moldShots}
                                failedShots={machine.failedShots}
                                prodRate={machine.prodRate}
                                prod_startDate={machine.prod_startDate}
                                prod_endDate={machine.prod_endDate}
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