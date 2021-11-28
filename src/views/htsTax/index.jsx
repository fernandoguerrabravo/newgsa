/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Box, Grid, Paper, Button } from "@mui/material";
import HtsGrid from './components/HtsGrid';
//import HtsGrid2 from './components/HtsGrid2';
import Htsbegin from "./components/htsbegin";
import ListHtsTools from "./components/ListHtsTools";
import HtsGrid2 from "./components/HtsGrid2";

/*const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
})); */

export default function HtsTax() {
  const [encabezado, setencabezado] = useState([
    {
      country: "",
      hts: "",
      hidden: false,
      hidden1: false,
      destination: "",
      hts8: "",
      general: "",
      special: "",
      duties: "",
      dutiespecific: "",
      list301: "",
      duties301: "",
    },
  ]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ListHtsTools setencabezado={setencabezado} />
        </Grid>
        <Grid item xs={12}>
        <Htsbegin setencabezado={setencabezado} /> 
        </Grid>
        <Grid item xs={12}>
          {encabezado.hidden && (
            <HtsGrid2 encabezado={encabezado} setencabezado={setencabezado} /> 
          )}
        </Grid>

        {  encabezado.hidden1 && <HtsGrid encabezado={encabezado} setencabezado={setencabezado} /> }
      </Grid>
    </div>
  );
}
