/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green, red, blue } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Select from "react-select";
import Swal from "sweetalert2";
import { Divider, Grid, Input, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { gridSpacing } from "store/constant";
import { Save } from "@mui/icons-material";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import DataTable from "react-data-table-component";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SaveSeller from "../helpers/SaveSeller";

export default function SkuStoreForm({ update, setoculto, idcliente }) {
  const [profile, setprofile] = useState({
    pickupaddress: "",
    legaladdress: "",
    id_cliente: idcliente,
    legalname: "",
    dbaname: "",
    tipocorporacion: "",
    tax_id: "",
    contactname: "",
    cargo: "",
    email: "",
    telefono: "",
    ejecutivoamazon: "",
    website: "",
  });

 

  const [value, setValue] = useState(null);
  // console.log("direccion", value)
  const [pick, setpick] = useState(null);

  const [direccion1, setdireccion1] = useState("");

  const [direccion, setdireccion] = useState("");

  const [lista, setlista] = useState({
    pickup: [],
  });

  const [lista1, setlista1] = useState({
    address: [],
  });

  const SellerChange = (event) => {
    setprofile({
      ...profile,
      [event.target.name]: event.target.value,
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

  useEffect(() => {
    if (direccion.length > 0) {
      setlista1({
        numero: direccion[0]["long_name"] ?? "",
        calle: direccion[1]["long_name"] ?? "",
        barrio: direccion[2]["long_name"] ?? "",
        ciudad: direccion[3]["long_name"] ?? "",
        estado: direccion[4]["long_name"] ?? "",
        pais: direccion[5]["long_name"] ?? "",
        zip: direccion[6]["long_name"] ?? "",
      });
    }
  }, [direccion]);

  //console.log("PERRO", direccion);
  //console.log("perro2", direccion1);

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
    {
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
      SaveSeller(profile)
        .then(
          await Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          })
        )
        .then((result) => {
          setoculto({
            hiddenboton: false,
            hiddenperfilform: false,
            hiddentable: true,
          });
        });
    }
  };

  useEffect(() => {
    setprofile({
      ...profile,
      pickupaddress: lista,
      legaladdress: lista1,
    });
  }, [lista, lista1]);

  return (
    <div>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          <strong>Perfil del Seller</strong>
        </Typography>
        <Typography style={{ textAlign: "center" }} gutterBottom>
          <Button
            startIcon={<Save />}
            size="small"
            variant="contained"
            color="secondary"
            onClick={guardar}
          >
            Grabar Información
          </Button>
        </Typography>
        <br />
        <Divider />
        <br />
        <Grid container spacing={gridSpacing}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="legalname"
              name="legalname"
              label="Legal Name"
              variant="outlined"
              color="primary"
              type="text"
              value={profile.legalname}
              onChange={SellerChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="dbaname"
              name="dbaname"
              label="DBA Name"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              value={profile.dbname}
              onChange={SellerChange}
            />{" "}
          </Grid>{" "}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <br />
            <Divider />
            <br />
            <Typography variant="caption">
              Ingrese su Dirección Legal
            </Typography>
            <GooglePlacesAutocomplete
              autocompletionRequest={{
                componentRestrictions: {
                  country: ["mx","us"],
                },
              }}
              selectProps={{
                value,
                onChange: setValue,
              }}
            />
            <br />

            <br />
            <br />
            <Divider />
            <br />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="tipocorporacion"
              name="tipocorporacion"
              label="Tipo de Corporación"
              color="primary"
              type="text"
              fullWidth
              value={profile.tipocorporacion}
              onChange={SellerChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="tax_id"
              name="tax_id"
              label="Nro. Identificación Fiscal"
              color="primary"
              type="text"
              fullWidth
              value={profile.tax_id}
              onChange={SellerChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="contactname"
              name="contactname"
              label="Contacto"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              value={profile.contactname}
              onChange={SellerChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="cargo"
              name="cargo"
              label="Cargo Corporativo"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              value={profile.cargo}
              onChange={SellerChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl sx={{ zIndex: 0 }} />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+52</InputAdornment>
                ),
              }}
              sx={{ zIndex: 0 }}
              id="telefono"
              name="telefono"
              label="Teléfono"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              value={profile.telefono}
              onChange={SellerChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="email"
              name="email"
              label="Correo Electrónico"
              variant="outlined"
              color="primary"
              type="email"
              fullWidth
              value={profile.email}
              onChange={SellerChange}
            />
          </Grid>{" "}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="website"
              name="website"
              label="Página Web"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              value={profile.website}
              onChange={SellerChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="ejecutivoamazon"
              name="ejecutivoamazon"
              label="Ejecutivo Amazon"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              value={profile.ejecutivoamazon}
              onChange={SellerChange}
            />
          </Grid>
        </Grid>
        <br />
        <Divider />
        {/* <FormControlLabel
          control={<Checkbox color="secondary" name="jason" />}
          label="Despachante Mexico"
        />
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label="Foreign Import of Record"
        />
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label="Servicios y Consultoria FDA"
       /> */}
        <Divider />
        <br />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="caption">
            Agregar Direcciónes Origen Carga
          </Typography>

          <GooglePlacesAutocomplete
            autocompletionRequest={{
              componentRestrictions: {
                country: ["mx"],
              },
            }}
            selectProps={{
              pick,
              onChange: setpick,
            }}
          />
        </Grid>
        <br></br>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Button
            onClick={agregar}
            size="small"
            variant="contained"
            color="secondary"
          >
            Agregar Recogida
          </Button>
        </Grid>
        <br />
        <DataTable columns={columns} data={lista.pickup} />
      </Paper>
      <br />
    </div>
  );
}
