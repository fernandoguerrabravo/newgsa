import React, { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import TipoServicio from "./components/TipoServicio";
import Fior from "./components/fior";

const Request = () => {
  const [finales, setfinales] = useState({
    total: 0,
    totalseguro: 0,
    totalhandlingout: 0,
    subtotaltotal: 0,
    primeramilla: 0,
    totaltotal: 0,
  });

  var [handout, sethandout] = useState({
    out: 0,
  });
  const [outlista, setoutlista] = useState({
    lista: [],
  });

  var [hidden, sethidden] = useState({
    ltl: false,
    ftl: false,
    expo: false,
    summary: false,
  });
  return (
    <div>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={4} md={4}>
          <TipoServicio></TipoServicio>
        </Grid>
        <br />

        <Grid item xs={12} lg={8} md={8}>
       <Fior></Fior>
        </Grid>

        <br />

        <Grid item xs={12} lg={4} md={4}>
          {" "}
        </Grid>

        <br />

        <Grid item xs={12} lg={3} md={3}></Grid>

        <br />

        <Grid item xs={12} lg={6} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default Request;
