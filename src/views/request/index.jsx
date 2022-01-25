/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import TipoServicio from "./components/TipoServicio";
import Fior from "./components/fior";
import ServicesListTable from "./components/ServicesListTable";

const Request = () => {
  const [finales, setfinales] = useState({
    total: 0,
    totalseguro: 0,
    totalhandlingout: 0,
    subtotaltotal: 0,
    primeramilla: 0,
    totaltotal: 0,
  });

  var [hidden, sethidden] = useState({
    lista: true,
    servicios: false,
  });

  

   
  return (
    <div>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={12} md={12}>
          {hidden.lista ? <ServicesListTable sethidden={sethidden} hidden={hidden}></ServicesListTable> : null}
        </Grid>
        <Grid item xs={12} lg={12} md={12}>
          {hidden.servicios ? <TipoServicio></TipoServicio> : null}
        </Grid>
        <br />
        <br />

        <Grid item xs={12} lg={8} md={8}></Grid>

        <br />

        <br />

        <Grid item xs={12} lg={3} md={3}></Grid>

        <br />

        <Grid item xs={12} lg={6} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default Request;
