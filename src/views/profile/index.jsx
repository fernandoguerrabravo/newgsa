/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import SellerListTable from "./components/SellerListTable";
import { gridSpacing } from "store/constant";
import SellerStoreForm from "./components/SellerStoreForm";
import SellerStoreFiles from "./components/SellerStoreFiles";
import useAuth from "../../hooks/useAuth";
import Lister from "./components/SellerListFiles";
import useGetSeller from "./hooks/UseGetSeller";
import SellerUpdateForm from "./components/SellerUpdateForm";
import { Button, Paper } from "@mui/material";

export default function sellers() {
  const { logout, user } = useAuth();

  const [oculto, setoculto] = useState({
    hiddenperfilform: false,
    hiddentable: true,
    hiddenupdate: false,
    hiddenboton: false,
  });

  const volver = () => {
    setoculto({
      ...oculto,
      hiddentable: true,
      hiddenboton: false,
      hiddenperfilform: false,
      hiddenupdate: false,
    });
  };

  return (
    <div>
      {" "}
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {oculto.hiddenboton ? (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={volver}
            >
              Regresar
            </Button>
          ) : null}
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {oculto.hiddentable ? (
            <SellerListTable
              idcliente={user.id}
              oculto={oculto}
              setoculto={setoculto}
            />
          ) : null}
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {oculto.hiddenupdate ? (
            <SellerUpdateForm idcliente={user.id}></SellerUpdateForm>
          ) : null}
        </Grid>
        {oculto.hiddenperfilform ? (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SellerStoreForm setoculto={setoculto} idcliente={user.id} />
          </Grid>
        ) : null}

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <SellerStoreFiles skus="legales" idcliente={user.id} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Lister idcliente={user.id} codigo="legales" />
        </Grid>
      </Grid>
    </div>
  );
}
