/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Select from "react-select";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { red } from "@mui/material/colors";

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
const listabox = [];

const BoxComponent = ({box, setbox}) => {
  
  const theme = useTheme();
  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[80],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  };

  const newJson = [];
  const handleInputChange = (event) => {

      setbox({
        ...box,
        weight: event.target.value,
      })
    }

   const handleInputChange2 = (event) => {

        setcajas({
          qty: event.target.value,
          fob: event.target.value
        })

  }

  const [cajas, setcajas] = useState({

      qty:'',
      fob: ''

  });
  
  // Aviso que debe seleccionar un FBA

  return (
    <>
      <Card sx={cardStyle}>
        <CardHeader
          title="Shipping Details"
          subheader="Parcel Information"
        ></CardHeader>
        <CardContent>
          <Stack spacing={2} direction="row">
            <TextField
              id="qty"
              name="qty"
              label="Qty Box"
              variant="outlined"
              color="secondary"
              type="number"
              value={cajas.qty}
              onChange={handleInputChange2}
              fullWidth
            />
            <TextField
              id="weight"
              name="weight"
              label="Shippping Weight"
              variant="outlined"
              color="secondary"
              type="number"
              fullWidth
              value={box.weight}
              onChange={handleInputChange}
            />
            <TextField
              id="fob"
              name="fob"
              label="Shipping Declared Value (USD)"
              variant="outlined"
              color="secondary"
              type="number"
              fullWidth
              value={cajas.fob}
              onChange={handleInputChange2}
            />
          </Stack>
          <br></br>
          <List dense>
            <ListItem>
              <ListItemText primary="Restrictions:" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoDisturbIcon sx={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText primary="Max 5 Box per Shipping" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoDisturbIcon sx={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText primary="Max Shipping Value 800 USD (Section 321 USA Customs)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoDisturbIcon sx={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText primary="Max Shipping Weight 70 Kg" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default BoxComponent;
