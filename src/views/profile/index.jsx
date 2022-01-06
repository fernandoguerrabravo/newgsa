/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import SellerListTable from "./components/SellerListTable";
import { gridSpacing } from "store/constant";
import SellerListTools from "./components/SellerListTools";
import SellerStoreForm from "./components/SellerStoreForm";
import SellerStoreFiles from "./components/SellerStoreFiles";
import useAuth from "../../hooks/useAuth";
import Lister from "./components/SellerListFiles";
import useGetSeller from "./hooks/UseGetSeller";
import { constant } from "lodash";

export default function sellers() {
  
  
  const { logout, user } = useAuth();

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
    hiddenupdate: false
    //hiddendetails: false,
  });

  const [update, setupdate] = useState('')

  ///console.log("PICOOO", update)

  return (
    <div>
      {" "}
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <SellerListTools oculto={oculto} setoculto={setoculto} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {oculto.hiddentable ? <SellerListTable  idcliente={user.id} setupdate={setupdate} /> : null}
        </Grid>
       

        {oculto.hiddenperfilform ? (
          <>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <SellerStoreForm  setoculto={setoculto} idcliente={user.id} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <SellerStoreFiles skus="legales" idcliente={user.id} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Lister idcliente={user.id} codigo="legales" />
            </Grid>
          </>
        ) : null}
      </Grid>
    </div>
  );
}
