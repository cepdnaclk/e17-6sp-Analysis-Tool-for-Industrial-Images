/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container, Grid, Card, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
import { MachineInfo } from "../machineinfo";
import moment from "moment";
import PropTypes from "prop-types";
import { Title } from "../title.js";

export const MachineInfoPage = ({ machineData }) => {
  const {
    failedShots,
    machineID,
    material,
    moldID,
    moldMaker,
    moldShots,
    monaNumber,
    prodRate,
    prod_end_date,
    prod_start_date,
    status,
  } = machineData[0];
  console.log(machineID);
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
            <Title title="Molding Info Page" />

            <MachineInfo
              machineId={machineID}
              monaNumber={monaNumber}
              status={status}
              moldShots={moldShots}
              failedShots={failedShots}
              prodRate={prodRate}
              prod_startDate={prod_start_date}
              prod_endDate={prod_end_date}
            />
          </React.Fragment>
        </Grid>
      </Container>
    </Box>
  );
};

MachineInfoPage.propTypes = {
  moldID: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  moldMaker: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  machineID: PropTypes.string.isRequired,
  monaNumber: PropTypes.string.isRequired,
  moldShots: PropTypes.number,
  failedShots: PropTypes.number,
  prodRate: PropTypes.number,
  prod_end_date: PropTypes.string,
  prod_start_date: PropTypes.string,
};

// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Box, Container, Grid, Card, Typography } from "@mui/material";
// // import { Link } from "react-router-dom";
// import { MachineInfo } from "../machineinfo";
// // import moment from "moment";
// import PropTypes from "prop-types";
// import { Title } from "../title.js";

// export const MachineInfoPage = (props) => {
//   const {
//     failedShots,
//     machineID,
//     material,
//     moldID,
//     moldMaker,
//     moldShots,
//     monaNumber,
//     prodRate,
//     prod_end_date,
//     prod_start_date,
//     status,
//   } = props.machineData;
//   console.log(props);
//   console.log(props.machineData);
//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         py: 8,
//         paddingTop: 3,
//       }}
//     >
//       <Container maxWidth={false}>
//         <Grid
//           container
//           spacing={3}
//           sx={{ alignItems: "center", justifyContents: "center" }}
//         >
//           <React.Fragment>
//             <Title title="Machine Info Page" />
//             <MachineInfo
//               machineId={machineID}
//               monaNumber={monaNumber}
//               status={status}
//               moldShots={moldShots}
//               failedShots={failedShots}
//               prodRate={prodRate}
//               prod_startDate={prod_start_date}
//               prod_endDate={prod_end_date}
//             />
//           </React.Fragment>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };
