/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SellerListTable from "./components/SellerListTable";
import { gridSpacing } from "store/constant";
import SellerListTools from "./components/SellerListTools";
import SkuStoreForm from "./components/SkuStoreForm";
import SellerStoreFiles from "./components/SellerStoreFiles";
import Lister from "./components/SellerListFiles";
/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(5),
		color: theme.palette.text.secondary,
		alignItems: 'center'
	}
})); */

export default function sellers() {
  /* const [encabezado, setencabezado] = useState([
		{
			country: '',
			hts: '',
			hidden: false,
			destination: ''
		}
	]); */

  const [oculto, setoculto] = useState({
    hiddenboton: true,
    hiddenperfilform: false,
    hiddentable: true,
    //hiddendetails: false,
  });

  // Creo el estado del detalles de la cotizacion que se eligira , para mostrarlo

  return (
    <div>
      {" "}
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <SellerListTools oculto={oculto} setoculto={setoculto} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          { oculto.hiddentable ? <SellerListTable /> : null}
        </Grid>
        { oculto.hiddenperfilform ?  (
          <>
            <Grid item xs={6}>
              <SkuStoreForm />
            </Grid>
            <Grid item xs={6}>
              <SellerStoreFiles skus="legales" idcliente="abcdef" />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Lister idcliente="abcdef" codigo="legales" />
            </Grid>
          </>) : null
        }
      </Grid>
    </div>
  );
}
