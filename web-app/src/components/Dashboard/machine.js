import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PropTypes from 'prop-types';


export const Machine = (props) => {
  const { machineId, monaNumber, status, ...others } = props;
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

Machine.propTypes = {
  machineId: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  status: PropTypes.string
};