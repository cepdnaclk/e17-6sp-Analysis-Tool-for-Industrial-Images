/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Badge,
  Card,
  CardContent,
  Grid,
  Chip,
  Table,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  BadgeMark,
} from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { useState } from "react";
import PropTypes from "prop-types";

export const Machine = (props) => {
  const [error, setError] = useState(false);
  const {
    machineId,
    moldId,
    monaNumber,
    status,
    moldShots,
    failedShots,
    prodRate,
    prod_startDate,
    prod_startTime,
    prod_endDate,
    prod_endTime,
    material,
    moldMaker,
    ...others
  } = props;

  if (status != "online") {
    setError(true);
  } else {
    setError(false);
  }
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 0,
        padding: 0,
        borderWidth: 3,
        maxWidth: 260,
        backgroundColor: "red",
      }}
      {...others}
    >
      <CardContent alignItems="center" justifyContent="center">
        <Grid>
          {/* machine id header*/}
          <Grid
            item
            xs={12}
            spacing={4}
            alignItems="space-between"
            justifyContent={"center"}
          >
            <Grid
              container
              alignItems="center"
              justifyContent={"space-around"}
              sx={{ backgroundColor: "primary" }}
            >
              <Grid item margin={2}>
                <Avatar
                  sx={{
                    height: 56,
                    width: 56,
                    backgroundColor: "success.main",
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
                <Typography color="textPrimary" variant="h6">
                  {monaNumber}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  textAlign="left"
                  color="black"
                >
                  {moldId}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* mold deltails */}
          <Grid item textAlign="center" xs={12} padding={1}>
            <Grid
              container
              alignItems="center"
              justifyContent={"end"}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  textAlign="left"
                  color="black"
                >
                  <Chip label={material} color="info" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  textAlign="left"
                  color="black"
                >
                  <Chip label={moldMaker} color="primary" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* statistics */}
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Grid
                item
                xs={6}
                padding={1}
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: "success.main" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  textAlign="center"
                  color="white"
                >
                  {moldShots}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                padding={1}
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: "error.main" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  textAlign="center"
                  color="white"
                >
                  {failedShots}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Machine.propTypes = {
  machineId: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  status: PropTypes.string,
};
