/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, CardContent, Grid, Typography } from "@mui/material";

import PropTypes from "prop-types";

export const MachineInfo = (props) => {
  const {
    machineId,
    monaNumber,
    status,
    moldShots,
    failedShots,
    prodRate,
    prod_startDate,
    prod_startTime,
    prod_endDate,
    prod_endTime,
    ...others
  } = props;
  return (
    <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
      <Grid item>
        <Typography
          color="textPrimary"
          variant="h6"
          style={{
            "font-size": "1.5rem",
            "font-weight": "bold",
            padding: "1rem",
          }}
        >
          Machine {machineId}
        </Typography>
        <Card>
          <CardContent>
            <Grid>
              <Grid item>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Mona Number = {monaNumber}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Mold Shots = {moldShots}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Failed Shots = {failedShots}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Production Rate = {prodRate}
                </Typography>
                <Typography
                  color={status === "Online" ? "green" : "red"}
                  variant="body2"
                >
                  {status}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Production Start Date = {prod_startDate}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Production End Date = {prod_endDate}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

MachineInfo.propTypes = {
  machineId: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  status: PropTypes.string,
  moldShots: PropTypes.number,
  failedShots: PropTypes.number,
  prodRate: PropTypes.number,
  prod_startDate: PropTypes.string,
  prod_endDate: PropTypes.string,
};
