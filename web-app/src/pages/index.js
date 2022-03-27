import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Machine } from '../components/Dashboard/machine';
import Link from 'next/link';

const machineData = [
  {
      machineId : '001',
      monaNumber : '52078592',
      status : 'Online',
      moldDShots : '10',
      failedShots : '0',
      prodRate : '100%',
      prod_startDate : '01/01/2020',
      prod_endDate : '01/01/2022',
  },
  {
      machineId : '002',
      monaNumber : '82525425',
      status : 'Online',
      moldDShots : '10',
      failedShots : '0',
      prodRate : '100%',
      prod_startDate : '01/01/2020',
      prod_endDate : '01/01/2022',
  },
  {
      machineId : '003',
      monaNumber : '35636356',
      status : 'Offline',
      moldDShots : '10',
      failedShots : '0',
      prodRate : '100%',
      prod_startDate : '01/01/2020',
      prod_endDate : '01/01/2022',
  },
]

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

          {machineData.map((machine) => (
              <Link href={'machines/'+machine.machineId}>
                {/* Hover gird item */}
                <Grid item lg={4} sm={6} xl={3} xs={12}>
                  <Machine 
                    key = {machine.machineId}
                    machineId = {machine.machineId}
                    monaNumber = {machine.monaNumber}
                    status = {machine.status}
                  />
                </Grid>
              </Link>
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
