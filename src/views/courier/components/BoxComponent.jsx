/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import Select from "react-select";
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
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
const listabox = [];

const BoxComponent = ({ box, setbox, datosfinales }) => {
  
  console.log("LFATOS", datosfinales)
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
    });
    console.log("PICOOOO", box.weight);
  };

  const marks3 = [
    {
      value: 1,
      label: "1",
    },

    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];
  const marks2 = [
    {
      value: 1,
      label: "1usd",
    },

    {
      value: 200,
      label: "200usd",
    },
    {
      value: 400,
      label: "400usd",
    },
    {
      value: 600,
      label: "600usd",
    },
    {
      value: 800,
      label: "800usd",
    },
  ];

  const marks = [
    {
      value: 1,
      label: "1kg",
    },
    {
      value: 20,
      label: "20kg",
    },
    {
      value: 40,
      label: "40kg",
    },
    {
      value: 60,
      label: "60kg",
    },
    {
      value: 80,
      label: "80kg",
    },
  ];

  const [cajas, setcajas] = useState({
    qty: 1,
    fob: 1,
  });
  const handleInputChange2 = (event) => {
    setcajas({
      ...cajas,
      [event.target.name]: event.target.value,
    });
  };

  function valuetext(value) {
    return `${value}Kg`;
  }

  return (
    <>
      <Card sx={cardStyle}>
        <CardHeader
          title="Shipping Details"
          subheader="Parcel Information"
        ></CardHeader>
        <CardContent>
          <Grid container sx={{ p: 5 }} spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <br></br>
              <Slider
                aria-label="Always visible"
                //defaultValue={1}
                name="qty"
                marks={marks3}
                max={5}
                min={1}
                valueLabelDisplay="on"
                value={cajas.qty}
                onChange={handleInputChange2}
                color="secondary"
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <br></br>
              <br></br>
              <Slider
                aria-label="Always visible"
                //defaultValue={1}
                getAriaValueText={valuetext}
                //step={5}
                marks={marks}
                max={80}
                min={1}
                valueLabelDisplay="on"
                value={box.weight}
                onChange={handleInputChange}
              />
              <br></br>
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
              <br></br>
              <Slider
                aria-label="Always visible"
                //defaultValue={1}
                getAriaValueText={valuetext}
                name="fob"
                marks={marks2}
                max={800}
                min={1}
                valueLabelDisplay="on"
                value={cajas.fob}
                onChange={handleInputChange2}
                color="secondary"
              />
            </Grid>
          </Grid>
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
              <ListItemText primary="Max Shipping Weight 80 Kg" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default BoxComponent;
