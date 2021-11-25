/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Box, Grid, Paper } from "@mui/material";
import ListHtsTools from "./components/ListHtsTools";
import ListHtsTable from "./components/ListHtsTable";

export default function FullWidthGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ListHtsTools />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ListHtsTable />
        </Grid>
      </Grid>
    </div>
  );
}
