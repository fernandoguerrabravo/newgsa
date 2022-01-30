/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import { gridSpacing } from "store/constant";
import useAuth from "../../hooks/useAuth";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  FormControl,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { Checkbox, FormControlLabel, TextField, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Carrierform from "./components/carrierform";
import AccountList from "./components/accountlist";


const Carrier = () => {
  const theme = useTheme();
  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  };

  const { logout, user } = useAuth();
  const idcliente = user.id;
  

  //Envio de datos de la API

  return (
    <div>
      <Grid container spacing={3}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <AccountList idcliente={user.id}></AccountList>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
            <CardHeader
              title={
                <Typography variant="h3">
                  Conecte un operador con su propia Cuenta o Contrato
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container sx={{ p: 3 }} spacing={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                 {/* <Carrierform idcliente={idcliente}></Carrierform>*/}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Carrier;
