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
import {GetOperadores} from "./helpers/GetOperadores"
import { useGetOperadores } from "./hooks/useGetOperadores";


const Operadores = () => {
  
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
  var data = useGetOperadores(idcliente)
 
  console.log("PICO DEL DATa" , data)
  //Envio de datos de la API

  return <div>
      {idcliente}
  </div>
     
}
export default Operadores;
