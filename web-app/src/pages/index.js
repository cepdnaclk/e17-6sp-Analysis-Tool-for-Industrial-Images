import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Machine } from '../components/Dashboard/machine';

const machines = [
  {
    machineId : '001',
    monaNumber : '52078592',
    status : 'Online',
  },
  {
    machineId : '002',
    monaNumber : '82525425',
    status : 'Online',
  },
  {
    machineId : '003',
    monaNumber : '35636356',
    status : 'Offline',
  }
];

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
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
          {machines.map((machine) => (
            <Grid item lg={4} sm={6} xl={3} xs={12}>
              <Machine 
                key = {machine.machineId}
                machineId = {machine.machineId}
                monaNumber = {machine.monaNumber}
                status = {machine.status}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
