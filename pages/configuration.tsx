import React, { FC, JSX } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Configuration: FC = (): JSX.Element => {
  return (
    <Grid container spacing={ 2 }>
      <Grid xs={ 12 } item>
        <Typography variant="h1">Configuration</Typography>
        <Divider sx={ { my: 2 } }/>
      </Grid>
    </Grid>
  );
};

export default Configuration;
