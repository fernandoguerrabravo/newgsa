import React, { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import MxSummary from "./components/MxSummary";
import MxExpoPallet from "./components/MxExpoPallet";
import MxTipoBulto from "./components/MxTipoBulto";
import MxExpoPalletFTL from "./components/MxExpoPalletFTL";
import MxExpoShipping from "./components/MxExpoShipping";
/*



import MxSummary from "./components/MxSummary";
*/
import { gridSpacing } from "store/constant";

/*
import MxTipoBulto from './components/MxTipoBulto';
import MxExpoPallet from './components/MxExpoPallet';
import MxExpoPalletFTL from './components/MxExpoPalletFTL';
import MxExpoShipping from './components/MxExpoShipping';

*/
/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	}
})); */

const MxCalculadoraApp = () => {
  // const theme = useTheme();

  /* const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  }; */

  /* const paper = {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }; */

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
          <MxTipoBulto hidden={hidden} sethidden={sethidden} />{" "}
        </Grid>
        <br />
        {hidden.summary ? (
          <Grid item xs={12} lg={8} md={8}>
            {" "}
            <MxSummary
              setfinales={setfinales}
              finales={finales}
              handout={handout}
            />{" "}
          </Grid>
        ) : null}
        <br />
        {hidden.ftl ? (
          <Grid item xs={12} lg={4} md={4}>
            {" "}
            <MxExpoPalletFTL finales={finales} setfinales={setfinales} />{" "}
          </Grid>
        ) : null}
        <br />
        {hidden.ltl ? (
          <Grid item xs={12} lg={3} md={3}>
            {" "}
            <MxExpoPallet finales={finales} setfinales={setfinales} />{" "}
          </Grid>
        ) : null}
        <br />

        {hidden.expo ? (
          <Grid item xs={12} lg={6} md={6}>
            <MxExpoShipping
              handout={handout}
              sethandout={sethandout}
              lista={outlista.lista}
              setoutlista={setoutlista}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default MxCalculadoraApp;
