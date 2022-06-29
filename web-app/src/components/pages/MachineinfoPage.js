/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container, Grid, Card, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
import { MachineInfo } from "../machineinfo";
import moment from "moment";
import PropTypes from "prop-types";

export const MachineInfoPage = (props) => {
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
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        paddingTop: 3,
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", justifyContents: "center" }}
        >
          <React.Fragment>
            <Grid item xs={12} sx={{ paddingBottom: 2, margin: 0 }}>
              <Card
                sx={{
                  backgroundColor: "neutral.700",
                  paddingTop: 2,
                  paddingLeft: 2,
                  paddingBottom: 1,
                }}
              >
                <Typography variant="h5" component="div" color={"#10B981"}>
                  Molding Section Statistics
                </Typography>
              </Card>
            </Grid>
            <MachineInfo
              machineId={machineId}
              monaNumber={monaNumber}
              status={status}
              moldShots={moldShots}
              failedShots={failedShots}
              prodRate={prodRate}
              prod_startDate={prod_startDate}
              prod_endDate={prod_endDate}
            />
          </React.Fragment>
        </Grid>
      </Container>
    </Box>
  );
};

MachineInfoPage.propTypes = {
  machineId: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  status: PropTypes.string,
  moldShots: PropTypes.number,
  failedShots: PropTypes.number,
  prodRate: PropTypes.number,
  prod_startDate: PropTypes.string,
  prod_endDate: PropTypes.string,
};
