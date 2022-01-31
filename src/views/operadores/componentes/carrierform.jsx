/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  TextField,
  Tooltip,
  IconButton,
  Divider,
  FormControl,
  Box,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

// third-party
import { useFormik } from "formik";
import * as yup from "yup";
import { codes, byAlpha2, byAlpha3, byNumeric } from "iso-country-codes";
//import { UseValidarups } from "../hooks/useValidarups";

const validationSchema = yup.object({
  accountnumber: yup.string().required("Carrier Account Number is required"),
  carrieraccountid: yup.string().required("Your Account Id is required"),
  clave: yup.string().required("Password is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().required("Phone is required"),
  carrier: yup.string().required("Selected Carrier is required"),
  zip: yup.string().required("Zip Code is required"),
});

const Carrierform = ({ oculto, setoculto, idcliente }) => {
  const volver = () => {
    setoculto({
      ...oculto,
      hiddentable: true,
      hiddenform: false,
    });
  };

  /*const [activador, setactivador] = {
    activaups: false,
    activafedex: false,
    activadhl: false,
  }; */
  const [fedex, setfedex] = useState();
  const [ups, setups] = useState();

  const [dhl_express, setdhl_express] = useState({
    carrier: "",
    account_id: "",
    parameters: {
      site_id: "", // LOGIN MyDHLExpress
      password: "",
      payment_country: "",
    },
    active: true,
  });

  const formik = useFormik({
    initialValues: {
      carrier: "ups",
      accountnumber: "",
      carrieraccountid: "",
      clave: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      phone: "",
      zip: "",
      country: "US",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.carrier === "fedex") {
        setfedex({
          carrier: "fedex",
          account_id: values.accountnumber,
          parameters: {
            meter: "",
            first_name: values.firstname, //Your first name
            last_name: values.lastname, // Your last name
            phone_number: values.phone, // Your phone number
            from_address_st: values.address, // Shipping address must match what you have on file with FedEx (see fedex.com profile)
            from_address_city: values.city,
            from_address_state: values.state,
            from_address_zip: values.zip,
            from_address_country_iso2: values.country,
          },
          active: true,
        });

        // SaveAccount(fedex,idcliente)
      } else if (values.carrier === "ups") {
        setups({
          carrier: "ups",
          account_id: values.carrieraccountid, //LOGIN
          parameters: {
            account_number: values.accountnumber,
            password: values.clave,
          },
          active: true,
        });
       
      } else {
        setdhl_express({
          carrier: "dhl_express",
          account_id: values.accountnumber,
          parameters: {
            site_id: values.carrieraccountid, // LOGIN MyDHLExpress
            password: values.clave,
            payment_country: values.country,
          },
          active: true,
        });
      }
    },
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box dir="rtl">
              <Button
                color="secondary"
                variant="contained"
                aria-label="settings"
                onClick={volver}
              >
                Cancelar
              </Button>
              &nbsp;&nbsp;
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
            </Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="carrier">
                <strong>
                  Seleccione Carrier (UPS, FEDEX, DHL Express Disponibles)
                </strong>
              </InputLabel>
              <Select
                labelId="carrier"
                id="carrier"
                name="carrier"
                label="Seleccione Carrier"
                fullWidth
                value={formik.values.carrier ? formik.values.carrier : " "}
                //defaultValue={r ?? " "}
                onChange={formik.handleChange}
                error={formik.touched.carrier && Boolean(formik.errors.carrier)}
              >
                <MenuItem value="ups">
                  <img
                    weight="50"
                    height="50"
                    alt="ups"
                    src="https://apps.goshippo.com/b5972a22a3a03e8912341d862eee91bb.svg"
                  ></img>
                </MenuItem>
                <MenuItem value="fedex">
                  <img
                    weight="50"
                    height="50"
                    alt="fedex"
                    src="https://apps.goshippo.com/7749b163ab9db78e5ee20c137b269c88.svg"
                  ></img>
                </MenuItem>
                <MenuItem value="dhl_express">
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
                Global Selling Accelerator cobrará un Fee de Administración de 2
                USD por cada guia generada . El Flete lo pagará directamente a
                su operador de acuerdo a sus contrato privado.
              </strong>
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Typography variant="subtitle2" color="inherit">
              <Divider />
              <br></br>
              <strong>Complete la Información de su Cuenta</strong>
              <br></br>
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="accountnumber">
              Número de Cuenta asignado por el Operador
            </InputLabel>
            <TextField
              id="accountnumber"
              name="accountnumber"
              label="Your Carrier Account Number *"
              fullWidth
              defaultValue={formik.values.accountnumber}
              onChange={formik.handleChange}
              error={
                formik.touched.accountnumber &&
                Boolean(formik.errors.accountnumber)
              }
              helperText={
                formik.touched.accountnumber && formik.errors.accountnumber
              }
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="carrieraccountid">
              Usuario de su Cuenta (user login, email, etc.)
            </InputLabel>
            <TextField
              id="carrieraccountid"
              name="carrieraccountid"
              label="Carrier Account Id"
              fullWidth
              defaultValue={formik.values.carrieraccountid}
              onChange={formik.handleChange}
              error={
                formik.touched.carrieraccountid &&
                Boolean(formik.errors.carrieraccountid)
              }
              helperText={
                formik.touched.carrieraccountid &&
                formik.errors.carrieraccountid
              }
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="clave">
              Clave Acceso para acceder a su cuenta
            </InputLabel>
            <TextField
              id="clave"
              name="clave"
              label="Your Account Password"
              fullWidth
              defaultValue={formik.values.clave}
              onChange={formik.handleChange}
              error={formik.touched.clave && Boolean(formik.errors.clave)}
              helperText={formik.touched.clave && formik.errors.clave}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <Divider />
            <Typography variant="h6" color="primary">
              <br></br>
              <strong>
                * Disclaimer: Nuestro sistema no almacena información ni
                comparte contraseñas externas de su cuenta o contrato.
                Información dirigida directamente a los proveedores de conexión
                con los Operadores.
              </strong>
              <br></br>
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Typography variant="subtitle2" color="inherit">
              <Divider />
              <br></br>
              <strong>
                Ingrese la Información solicitada: Dirección y Pais Registrado
                de su Cuenta
              </strong>
              <br></br>
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="firstname">
              Primer Nombre del Contacto registrado en su Cuenta
            </InputLabel>
            <TextField
              id="firstname"
              name="firstname"
              label="First Name *"
              fullWidth
              defaultValue={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="lastname">
              Apellido del Contacto registrado en su Cuenta
            </InputLabel>
            <TextField
              id="lastname"
              name="lastname"
              label="Last Name *"
              fullWidth
              defaultValue={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Grid>

          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="address">
              Dirección registrada de su Cuenta
            </InputLabel>
            <TextField
              id="address"
              name="address"
              label="Address *"
              fullWidth
              defaultValue={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="city">Ciudad registrada en su Cuenta</InputLabel>
            <TextField
              id="city"
              name="city"
              label="City *"
              fullWidth
              defaultValue={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="state">
              Estado o Provincia registrado en su Cuenta
            </InputLabel>
            <TextField
              id="state"
              name="state"
              label="State/Province *"
              fullWidth
              defaultValue={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="zip">
              Codigo Postal registrado en su Cuenta
            </InputLabel>
            <TextField
              id="zip"
              name="zip"
              label="Zip Code *"
              fullWidth
              defaultValue={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={formik.touched.zip && formik.errors.zip}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="country">Pais registrado en su Cuenta</InputLabel>
            <Select
              labelId="country"
              id="country"
              name="country"
              label="Pais registrado en su Cuenta"
              fullWidth
              value={formik.values.country ? formik.values.country : " "}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
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
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <InputLabel id="phone">
              {" "}
              "Telefono de Contacto (Codigo) XXXXXXX
            </InputLabel>
            <TextField
              id="phone"
              name="phone"
              label="Phone *"
              fullWidth
              defaultValue={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Carrierform;
