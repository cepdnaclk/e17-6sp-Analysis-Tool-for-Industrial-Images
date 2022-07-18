import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Machine } from "../machine";
import moment from "moment";
import { Title } from "../title.js";

export const MachinePage = ({ machineData }) => {
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
            <Title title="Molding Section Statistics" />

            {machineData.map((machine, index) => {
              // if (machine.prodRate!= 0)
              machine.status = "Online";
              // else
              // machine.status = "Offline"

              if (machine.material === undefined) machine.material = "none";
              if (machine.moldMaker === undefined) machine.moldMaker = "none";

              console.log(machine.moldMaker);
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  key={index}
                  sx={{
                    alignItems: "center",
                    justifyContents: "center",
                    minWidth: 290,
                    marginBottom: 5,
                  }}
                >
                  <Link
                    to={{ pathname: `machines/:${machine.machineID}` }}
                    state={{ ...machine }}
                  >
                    <Machine
                      machineId={machine.machineID}
                      monaNumber={machine.monaNumber}
                      moldId={machine.moldID}
                      status={machine.status}
                      moldShots={machine.moldShots}
                      failedShots={machine.failedShots}
                      prodRate={machine.prodRate}
                      material={machine.material}
                      moldMaker={machine.moldMaker}
                      prod_startDate={moment(machine.prod_start_date).format(
                        "DD-MM-YYYY"
                      )}
                      prod_startTime={moment(machine.prod_start_date).format(
                        "kk:mm:ss"
                      )}
                      prod_endDate={moment(machine.prod_end_date).format(
                        "DD-MM-YYYY"
                      )}
                      prod_endTime={moment(machine.prod_end_date).format(
                        "kk:mm:ss"
                      )}
                    />
                  </Link>
                </Grid>
              );
            })}
          </React.Fragment>
        </Grid>
      </Container>
    </Box>
  );
};
