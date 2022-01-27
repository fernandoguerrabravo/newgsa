/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Divider, Grid, Box } from "@mui/material";
import { gridSpacing } from "store/constant";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import DataTable from "react-data-table-component";
import IconButton from "@mui/material/IconButton";
//import UpdateSeller from "../helpers/UpdateSeller";
import { useTheme } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { codes, byAlpha2, byAlpha3, byNumeric } from "iso-country-codes";
import CircularProgress from "@mui/material/CircularProgress";

const Shipperform = ({ shipper, from, setfrom, de, setde }) => {
  //const pais = shipper.country;
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

  /* const [value, setValue] = useState(null);
  // console.log("direccion", value)
  const [pick, setpick] = useState(null);

  const [direccion1, setdireccion1] = useState("");

  const [direccion, setdireccion] = useState("");

  const handlechange = (event) => {
    setdatosfinales({
      ...datosfinales,
      datosfinales.address_from.[event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (value != null) {
      geocodeByPlaceId(value.value.place_id).then((results) =>
        setdireccion(results[0].address_components)
      );
    }
  }, [value]);

  useEffect(() => {
    if (pick != null) {
      geocodeByPlaceId(pick.value.place_id).then((results) =>
        setdireccion1(results[0].address_components)
      );
    }
  }, [pick]);

  useEffect(() => {}, []);

  const agregar = () => {
    if (direccion1.length > 0) {
      setlista({
        pickup: [
          ...lista.pickup,
          {
            idpick: lista.pickup.length,
            numero: direccion1[0]["long_name"],
            calle: direccion1[1]["long_name"],
            barrio: direccion1[2]["long_name"],
            ciudad: direccion1[3]["long_name"],
            estado: direccion1[4]["long_name"],
            pais: direccion1[5]["long_name"],
            zip: direccion1[6]["long_name"],
          },
        ],
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Atención...",
        text: "Ingrese Dirección de Retiro!",
        footer: "Por favor Agregue Dirección de Retiro Válida",
      });
    }
  };

  const ActionComponent = ({ row, onClick }) => {
    const clickHandler = () => onClick(row);
    return (
      <IconButton onClick={clickHandler}>
        <img
          src="https://fotos-ecl.s3.amazonaws.com/icons8-eliminar-64.png"
          alt="edit"
          width="20"
          height="20"
        />
      </IconButton>
    );
  };

  const columns = [
    {
      name: "Dirección",
      selector: (row) => row.calle + "  # " + row.numero,
    },

    {
      name: "Barrio",
      selector: (row) => row.barrio,
    },

    {
      name: "Ciudad",
      selector: (row) => row.ciudad,
    },

    {
      name: "Estado",
      selector: (row) => row.estado,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zip,
    },
    {
      name: "Pais",
      selector: (row) => row.pais,
    },

    /* {
      name: "Qtys",
      selector: (row) => row.qtyout,
    },
    {
      name: "Rates",
      selector: (row) =>
        row.tipo ==== "Pallets"
          ? 7.48 * row.qtyout < 46
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(46 + 34.5)
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(7.48 * row.qtyout + 34.5)
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(2.9 * row.qtyout + 34.5),
    },*/
  /*  {
      name: "Actions",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: (row) => (
        <ActionComponent row={row.idpick} onClick={deleterow}></ActionComponent>
      ),
    },
  ];

  const deleterow = (e) => {
    const newstate = lista.pickup.filter((item) => item.idpick !== e);
    setlista({ pickup: newstate });
  };

  const guardar = async () => {
    if (
      profile.legalname === "" ||
      profile.dbaname === "" ||
      profile.tipocorporacionv === "" ||
      profile.tax_id === "" ||
      profile.contactname === "" ||
      profile.cargo === "" ||
      profile.email === "" ||
      profile.telefono === "" ||
      profile.ejecutivoamazon === "" ||
      profile.website === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Por favor complete toda la Información",
      });
    } else {
      UpdateSeller(profile).then(
        await Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        })
      );
      /*.then((result) => {
          setoculto({
            hiddenboton: true,
            hiddenperfilform: false,
            hiddentable: true,
          });
        }); */
  /*   }
  };

  useEffect(() => {
    setprofile({
      ...profile,
      pickupaddress: lista,
      legaladdress: lista1,
    });
  }, [lista, lista1]); */

  

 /* useEffect(() => {
    setfrom({
      object_purpose: "PURCHASE",
      name: shipper.name,
      company: shipper.company,
      street_no: shipper.street_no,
      street1: shipper.street1,
      street2: shipper.street2,
      street3: "",
      city: shipper.city,
      state: shipper.state,
      zip: shipper.zip,
      country: shipper.country,
      phone: shipper.phone,
      email: shipper.email,
      is_residential: null,
    });
  }, [shipper.name]); */

  const handleChange = (event) => {
    setfrom({
      ...from,
      [event.target.name]: event.target.value,
    });
  };

  const deChange = (event) => {
    setde({
      ...de,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={cardStyle}>
            <CardHeader
              title="1. From / De:"
              subheader="Shipper/Enviador"
            ></CardHeader>
            <CardContent>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <InputLabel id="Country">Country</InputLabel>
                  <Select
                    labelId="Country"
                    id="Country"
                    name="country"
                    value={from.country}
                    onChange={handleChange}
                    fullWidth
                    //autoWidth
                    label="Country"
                    color="secondary"
                    //defaultValue={pais}
                    size="small"
                  >
                    {codes.map((imgs) => {
                      return (
                        <MenuItem key={imgs.alpha2} value={imgs.alpha2}>
                          {imgs.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="company"
                  name="company"
                  label="Company"
                  variant="outlined"
                  color="secondary"
                  type="text"
                  value={from.company}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>{" "}
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Contact Name"
                  variant="outlined"
                  color="primary"
                  type="text"
                  size="small"
                  //defaultValue={shipper.name}
                  value={from.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={4} md={4} sm={4} xs={4}>
                <TextField
                  id="street_no"
                  name="street_no"
                  label="Number"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.street_no + " " + shipper.street1}
                  value={from.street_no}
                  onChange={handleChange}
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="street1"
                  name="street1"
                  label="Address"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.street_no + " " + shipper.street1}
                  value={from.street1}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="street2"
                  name="street2"
                  label="Address 2"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.street2}
                  value={from.street2}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="zip"
                  name="zip"
                  label="Zip Code"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.zip}
                  value={from.zip}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.city}
                  value={from.city}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="state"
                  name="state"
                  label="State"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.state}
                  value={from.state}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.phone}
                  value={from.phone}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  color="primary"
                  type="text"
                  //defaultValue={shipper.phone}
                  value={from.email}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={cardStyle}>
            <CardHeader
              title="2. To / Para:"
              subheader="Consignee/Destinatario"
            ></CardHeader>
            <CardContent>
             
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <InputLabel id="Country">Country</InputLabel>
                  <Select
                    labelId="Country"
                    id="Country"
                    name="country"
                    value={de.country}
                    onChange={deChange}
                    fullWidth
                    size="small"
                    //autoWidth
                    label="Country"
                    color="secondary"
                  >
                    {codes.map((imgs) => {
                      return (
                        <MenuItem key={imgs.alpha2} value={imgs.alpha2}>
                          {imgs.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="company"
                  name="company"
                  label="Company"
                  variant="outlined"
                  color="primary"
                  type="text"
                  value={de.company}
                  onChange={deChange}
                  fullWidth
                  size="small"
                />
              </Grid>{" "}
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Contact Name"
                  variant="outlined"
                  color="primary"
                  type="text"
                  value={de.name}
                  onChange={deChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={4} md={4} sm={4} xs={4}>
                <TextField
                  id="street_no"
                  name="street_no"
                  label="Number"
                  variant="outlined"
                  color="primary"
                  type="text"
                  value={de.street_no}
                  onChange={deChange}
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="street1"
                  name="street1"
                  label="Address"
                  variant="outlined"
                  color="primary"
                  type="text"
                  value={de.street1}
                  onChange={deChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="street2"
                  name="street2"
                  label="Address 2"
                  variant="outlined"
                  color="primary"
                  type="text"
                  value={de.street2}
                  onChange={deChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="zip"
                  name="zip"
                  label="Zip Code"
                  variant="outlined"
                  color="primary"
                  type="text"
                  onChange={deChange}
                  value={de.zip}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  color="primary"
                  type="text"
                  onChange={deChange}
                  value={de.city}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="state"
                  name="state"
                  label="State"
                  variant="outlined"
                  color="primary"
                  type="text"
                  onChange={deChange}
                  value={de.state}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  color="primary"
                  type="text"
                  size="small"
                  onChange={deChange}
                  value={de.phone}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  id="emaiL"
                  name="email"
                  label="Email"
                  variant="outlined"
                  color="primary"
                  type="text"
                  size="small"
                  onChange={deChange}
                  value={de.email}
                  fullWidth
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shipperform;
