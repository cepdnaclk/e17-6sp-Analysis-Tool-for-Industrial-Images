import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import PropTypes from 'prop-types';


export const MachineInfoPage = (props) => {
  const { machineId,
        monaNumber,
        status,
        moldShots,
        failedShots,
        prodRate,
        prod_startDate,
        prod_endDate,
        ...others } = props;
  return (
    <Card {...others}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              Machine {machineId}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              Mona Number = {monaNumber}
            </Typography>
          </Grid>
          <Grid item>
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
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          <Typography
            variant="body2"
            color={status === 'Online' ? 'green' : 'red'}
            sx={{
              mr: 1
            }}
          >
            { status }
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};

MachineInfoPage.propTypes = {
  machineId: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  status: PropTypes.string,
  moldShots: PropTypes.number,
  failedShots: PropTypes.number,
    prodRate: PropTypes.number,
    prod_startDate: PropTypes.string,
    prod_endDate: PropTypes.string
};

