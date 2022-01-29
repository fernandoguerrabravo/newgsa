/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
//import { Grid } from "@mui/material";
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
import { Checkbox, FormControlLabel, TextField, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

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

  const [fedex, setfedex] = useState({
    carrier: "",
    account_id: "",
    parameters: { meter: "" },
    active: true,
  });

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
            <CardHeader
              sx={{
                borderBottom: `1px solid ${theme.palette.primary.main}`,
              }}
              title={
                <Typography
                  variant="h4"
                  color = "secondary"
                >
                  Conecte un operador con su propia cuenta o contrato
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label">
                      Seleccione Carrier
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //value={age}
                      label="Seleccione Carrier"
                      //onChange={handleChange}
                      fullWidth
                    >
                      <MenuItem value={10}>
                        <img
                          weight="50"
                          height="50"
                          alt="ups"
                          src="https://apps.goshippo.com/b5972a22a3a03e8912341d862eee91bb.svg"
                        ></img>
                      </MenuItem>
                      <MenuItem value={20}>
                        <img
                          weight="50"
                          height="50"
                          alt="fedex"
                          src="https://apps.goshippo.com/7749b163ab9db78e5ee20c137b269c88.svg"
                        ></img>
                      </MenuItem>
                      <MenuItem value={30}>
                        <img
                          weight="50"
                          height="50"
                          alt="dhl"
                          src="https://apps.goshippo.com/cd3c5b6cd234fc54a568eb93f899eb04.svg"
                        ></img>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="subtitle2" color="inherit">
                    <strong>
                      Global Selling Accelerator cobrará 2 USD por cada guia
                      generada por gastos de Administración. El Flete será
                      pagado directo con el operador según su contrato comercial
                    </strong>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
            <CardHeader
              // sx={{
              //    borderBottom: `1px solid ${theme.palette.dark.main}`,
              //  }}
              title={
                <Typography
                  variant="h6"
                  color = "secondary"
                >
                  Complete la Información de su Cuenta
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label">
                      Seleccione Carrier
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //value={age}
                      label="Seleccione Carrier"
                      //onChange={handleChange}
                      fullWidth
                    >
                      <MenuItem value={10}>
                        <img
                          weight="50"
                          height="50"
                          alt="ups"
                          src="https://apps.goshippo.com/b5972a22a3a03e8912341d862eee91bb.svg"
                        ></img>
                      </MenuItem>
                      <MenuItem value={20}>
                        <img
                          weight="50"
                          height="50"
                          alt="fedex"
                          src="https://apps.goshippo.com/7749b163ab9db78e5ee20c137b269c88.svg"
                        ></img>
                      </MenuItem>
                      <MenuItem value={30}>
                        <img
                          weight="50"
                          height="50"
                          alt="dhl"
                          src="https://apps.goshippo.com/cd3c5b6cd234fc54a568eb93f899eb04.svg"
                        ></img>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="subtitle2" color="inherit">
                    <strong>
                      Global Selling Accelerator cobrará 1.5 USD por cada guia
                      generada por gastos de Administración. El Flete será
                      pagado directo con el operador según su contrato comercial
                    </strong>
                  </Typography>
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
