import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Machine } from '../components/Dashboard/machine';

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
          <Grid item lg={3} sm={6} xl={3} xs={12} xs={12}>
            <Machine />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12} xs={12}>
            <Machine />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12} xs={12}>
            <Machine />
          </Grid>
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
