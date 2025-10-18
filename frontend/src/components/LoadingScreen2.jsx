import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

export default function LoadingScreen2() {
  const [open] = React.useState(true);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <Typography>Loading... Please wait.</Typography>
        {/* loading... */}
      </Backdrop>
    </div>
  );
}
