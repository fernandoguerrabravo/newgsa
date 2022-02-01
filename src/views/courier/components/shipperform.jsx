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
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  shname: yup.string().required("Contacto es Requerido"),
  shcompany: yup.string().required("Compañia es Requerido"),
  shstreet_no: yup.string().required("Número de Calle es Requerido"),
  shstreet1: yup.string().required("Dirección es Requerida"),
  shcity: yup.string().required("Ciudad es Requerida"),
  shstate: yup.string().required("Estado/Provincia es Requerido"),
  shzip: yup.string().required("Código Postal es Requerido"),
  shcountry: yup.string().required("Paìs es Requerido"),
  shphone: yup.string().required("Teléfono es Requerido"),
  shemail: yup.string().required("email es Requerido"),
  cneename: yup.string().required("Contacto es Requerido"),
  cneecompany: yup.string().required("Compañia es Requerido"),
  cneestreet_no: yup.string().required("Número de Calle es Requerido"),
  cneestreet1: yup.string().required("Dirección es Requerida"),
  cneecity: yup.string().required("Ciudad es Requerida"),
  cneestate: yup.string().required("Estado/Provincia es Requerido"),
  cneezip: yup.string().required("Código Postal es Requerido"),
  cneecountry: yup.string().required("Paìs es Requerido"),
  cneephone: yup.string().required("Teléfono es Requerido"),
  cneeemail: yup.string().required("email es Requerido"),
});

const Shipperform = ({ shipper, from, setfrom, de, setde, setActiveStep, datosfinales, setdatosfinales }) => {
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

  const handleNext1 = () => {

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setdatosfinales({
      ...datosfinales,
      address_from: from,
      address_to: de
    })
  }

  const formik = useFormik({
    initialValues: {
      shname: from.name,
      shcompany: from.company,
      shstreet_no: from.street_no,
      shstreet1: from.street1,
      shstreet2: from.street2,
      shcity: from.city,
      shstate: from.state,
      shzip: from.zip,
      shcountry: "US",
      shphone: from.phone,
      shemail: from.email,
      cneename: de.name,
      cneecompany: de.company,
      cneestreet_no: de.street_no,
      cneestreet1: de.street1,
      cneestreet2: from.street2,
      cneecity: from.city,
      cneestate: from.state,
      cneezip: from.zip,
      cneecountry: "US",
      cneephone: from.phone,
      cneeemail: from.email,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("FORMIK PICO", values)
      setfrom({
        name: values.shname,
        company: values.shcompany,
        street_no: values.shstreet_no,
        street1: values.shstreet1,
        street2: values.shstreet2,
        city: values.shcity,
        state: values.shstate,
        zip: values.shzip,
        country: values.shcountry,
        phone: values.shphone,
        email: values.shemail,
      });
      setde({
        name: values.cneename,
        company: values.cneecompany,
        street_no: values.cneestreet_no,
        street1: values.cneestreet1,
        street2: values.cneestreet2,
        city: values.cneecity,
        state: values.cneestate,
        zip: values.cneezip,
        country: values.cneecountry,
        phone: values.cneephone,
        email: values.cneeemail,
      });
      
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      
    },
  });

  return (
    <div>
      <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card sx={cardStyle}>
              <CardHeader
                title="1. From / De:"
                subheader="Shipper/Enviador"
              ></CardHeader>
              <CardContent>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <InputLabel id="shcountry">Country</InputLabel>
                  <Select
                    labelId="shcountry"
                    id="shcountry"
                    name="shcountry"
                    fullWidth
                    //autoWidth
                    label="Country"
                    color="secondary"
                    //defaultValue={pais}
                    size="small"
                    value={
                      formik.values.shcountry ? formik.values.shcountry : " "
                    }
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shcountry &&
                      Boolean(formik.errors.shcountry)
                    }
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
                    id="shcompany"
                    name="shcompany"
                    label="Company"
                    variant="outlined"
                    color="secondary"
                    type="text"
                    fullWidth
                    size="small"
                    defaultValue={formik.values.shcompany}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shcompany &&
                      Boolean(formik.errors.shcompany)
                    }
                    helperText={
                      formik.touched.shcompany && formik.errors.shcompany
                    }
                  />
                </Grid>{" "}
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shname"
                    name="shname"
                    label="Contact Name"
                    variant="outlined"
                    color="primary"
                    type="text"
                    size="small"
                    //defaultValue={shipper.name}
                    defaultValue={formik.values.shname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shname && Boolean(formik.errors.shname)
                    }
                    helperText={formik.touched.shname && formik.errors.shname}
                    fullWidth
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    id="shstreet_no"
                    name="shstreet_no"
                    label="Number"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.street_no + " " + shipper.street1}
                    defaultValue={formik.values.shstreet_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shstreet_no &&
                      Boolean(formik.errors.shstreet_no)
                    }
                    helperText={
                      formik.touched.shstreet_no && formik.errors.shstreet_no
                    }
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shstreet1"
                    name="shstreet1"
                    label="Address"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.shstreet1}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shstreet1 &&
                      Boolean(formik.errors.shstreet1)
                    }
                    helperText={
                      formik.touched.shstreet1 && formik.errors.shstreet1
                    }
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shstreet2"
                    name="shstreet2"
                    label="Address 2"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.street2}
                    defaultValue={formik.values.shstreet2}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shstreet2 &&
                      Boolean(formik.errors.shstreet2)
                    }
                    helperText={
                      formik.touched.shstreet2 && formik.errors.shstreet2
                    }
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shzip"
                    name="shzip"
                    label="Zip Code"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.zip}
                    defaultValue={formik.values.shzip}
                    onChange={formik.handleChange}
                    error={formik.touched.shzip && Boolean(formik.errors.shzip)}
                    helperText={formik.touched.shzip && formik.errors.shzip}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shcity"
                    name="shcity"
                    label="City"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.city}
                    defaultValue={formik.values.shcity}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shcity && Boolean(formik.errors.shcity)
                    }
                    helperText={formik.touched.shcity && formik.errors.shcity}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shstate"
                    name="shstate"
                    label="State"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.state}
                    defaultValue={formik.values.shstate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shstate && Boolean(formik.errors.shstate)
                    }
                    helperText={formik.touched.shstate && formik.errors.shstate}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shphone"
                    name="shphone"
                    label="Phone"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.phone}
                    defaultValue={formik.values.shphone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shphone && Boolean(formik.errors.shphone)
                    }
                    helperText={formik.touched.shphone && formik.errors.shphone}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="shemail"
                    name="shemail"
                    label="Email"
                    variant="outlined"
                    color="primary"
                    type="text"
                    //defaultValue={shipper.phone}
                    defaultValue={formik.values.shemail}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shemail && Boolean(formik.errors.shemail)
                    }
                    helperText={formik.touched.shemail && formik.errors.shemail}
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
                  <InputLabel id="cneeountry">Country</InputLabel>
                  <Select
                    labelId="cneecountry"
                    id="cneecountry"
                    name="cneecountry"
                    fullWidth
                    size="small"
                    //autoWidth
                    label="Country"
                    color="secondary"
                    value={
                      formik.values.cneecountry
                        ? formik.values.cneecountry
                        : " "
                    }
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneecountry &&
                      Boolean(formik.errors.cneecountry)
                    }
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
                    id="cneecompany"
                    name="cneecompany"
                    label="Company"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneecompany}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneecompany &&
                      Boolean(formik.errors.cneecompany)
                    }
                    helperText={
                      formik.touched.cneecompany && formik.errors.cneecompany
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>{" "}
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneename"
                    name="cneename"
                    label="Contact Name"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneename}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneename && Boolean(formik.errors.cneename)
                    }
                    helperText={
                      formik.touched.cneename && formik.errors.cneename
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={4} md={4} sm={4} xs={4}>
                  <TextField
                    id="cneestreet_no"
                    name="cneestreet_no"
                    label="Number"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneestreet_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneestreet_no &&
                      Boolean(formik.errors.cneestreet_no)
                    }
                    helperText={
                      formik.touched.cneestreet_no &&
                      formik.errors.cneestreet_no
                    }
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneestreet1"
                    name="cneestreet1"
                    label="Address"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneestreet1}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneestreet1 &&
                      Boolean(formik.errors.cneestreet1)
                    }
                    helperText={
                      formik.touched.cneestreet1 && formik.errors.cneestreet1
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneestreet2"
                    name="cneestreet2"
                    label="Address 2"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneestreet2}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneestreet2 &&
                      Boolean(formik.errors.cneestreet2)
                    }
                    helperText={
                      formik.touched.cneestreet2 && formik.errors.cneestreet2
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneezip"
                    name="cneezip"
                    label="Zip Code"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneezip}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneezip && Boolean(formik.errors.cneezip)
                    }
                    helperText={formik.touched.cneezip && formik.errors.cneezip}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneecity"
                    name="cneecity"
                    label="City"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneecity}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneecity && Boolean(formik.errors.cneecity)
                    }
                    helperText={
                      formik.touched.cneecity && formik.errors.cneecity
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneestate"
                    name="cneestate"
                    label="State"
                    variant="outlined"
                    color="primary"
                    type="text"
                    defaultValue={formik.values.cneestate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneestate &&
                      Boolean(formik.errors.cneestate)
                    }
                    helperText={
                      formik.touched.cneestate && formik.errors.cneestate
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneephone"
                    name="cneephone"
                    label="Phone"
                    variant="outlined"
                    color="primary"
                    type="text"
                    size="small"
                    defaultValue={formik.values.cneephone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneephone &&
                      Boolean(formik.errors.cneephone)
                    }
                    helperText={
                      formik.touched.cneephone && formik.errors.cneephone
                    }
                    fullWidth
                  />
                </Grid>
                <Grid sx={{ p: 1 }} item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="cneeemaiL"
                    name="cneeemail"
                    label="Email"
                    variant="outlined"
                    color="primary"
                    type="text"
                    size="small"
                    defaultValue={formik.values.cneeemail}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cneeemail &&
                      Boolean(formik.errors.cneeemail)
                    }
                    helperText={
                      formik.touched.cneeemail && formik.errors.cneeemail
                    }
                    fullWidth
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button
              color="secondary"
              variant="contained"
              aria-label="settings"
              sx={{ my: 3, ml: 1 }}
              type="submit"
              //onClick={() => setErrorIndex(0)}
            >
              Conectar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Shipperform;
