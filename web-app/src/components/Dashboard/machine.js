import { Avatar, Box,Badge, Card, CardContent, Grid, Table, TableRow,TableCell, Typography, TableBody ,TableContainer,Paper, TableHead} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import PropTypes from 'prop-types';


export const Machine = (props) => {
  const { machineId, monaNumber, status, moldShots, failedShots, prodRate, prod_startDate, prod_startTime, prod_endDate,prod_endTime, ...others } = props;
  return (
    <Badge badgeContent={status} color={status === "Online" ? 'secondary' : "error"} >
    <Card variant="outlined"
      sx={{  borderWidth:3, maxWidth: 260, margin: 0, padding: 0 }}  {...others}>
      <CardContent
          alignItems="center"
        justifyContent="center"
        sx={{  margin: 0, padding: 2 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="left"
          sx = {{maxWidth:260}}
          >
            {/* machine id */}
          <Grid item position="relative">
            <Grid container alignItems="center" justifyContent={"space-around"}>
              <Grid item margin={2}>
                  <Avatar
                    sx={{
                      backgroundColor: 'success.main',
                      height: 56,
                      width: 56
                    }}
                  >
                  <PrecisionManufacturingIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  Machine {machineId}
              </Typography>
              </Grid>
            </Grid>            
          </Grid>
          
            {/* mona number */}
          <Grid item sx={{  margin: 0, paddingBottom: 2 }}>
              <Typography
                color="textPrimary"
                variant="h6"
              >
                Mona Plastic {monaNumber}
              </Typography>
            </Grid>
            {/* statics table */}
          <Grid item>
            <Grid
                container
                >
                <Grid item>
                  {/* statistics */}
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                      <TableBody>
                        <TableHead>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                              Molds
                            </TableCell>
                          </TableRow>
                        </TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                      <TableCell component="th" scope="row">
                        <Box sx={{ marginLeft: 1 }}> 
                            Mold Shots
                        </Box>
                      </TableCell>
                      <TableCell align="left">
                        {moldShots}
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          <Box sx={{ marginLeft: 1 }}> 
                              Failed Shots
                          </Box>
                      </TableCell>
                      <TableCell align="left">
                      {failedShots}
                      </TableCell>
                        </TableRow>
                        <TableHead>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                            Production
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                          <Box sx={{ marginLeft: 1 }}> 
                              Rate
                          </Box>
                      </TableCell>
                      <TableCell align="left">
                        {prodRate}  
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } ,}}>
                          <TableCell component="th" scope="row">
                          <Box sx={{ marginLeft: 1 }}> 
                              Start Date
                          </Box>
                      </TableCell>
                      <TableCell align="left">
                      {prod_startDate} 
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                          <Box sx={{ marginLeft: 1 }}> 
                              Start Time
                          </Box>
                      </TableCell>
                      <TableCell align="left">
                      {prod_startTime} 
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                          <Box sx={{ marginLeft: 1 }}> 
                            End Date 
                          </Box>
                      </TableCell>
                          <TableCell align="left"> 
                              {prod_endDate}
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                          <Box sx={{ marginLeft: 1 }}>
                              End Time
                          </Box>
                      </TableCell>
                      <TableCell align="left">
                      {prod_endTime} 
                      </TableCell>
                      </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
            </Grid>
          </Grid>  
          
        </Grid>
        
      </CardContent>
      </Card>
      </Badge>
  )
};

Machine.propTypes = {
  machineId: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  status: PropTypes.string
};

