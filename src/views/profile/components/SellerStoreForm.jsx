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
import { Divider, Grid, Input } from "@mui/material";
import Paper from "@mui/material/Paper";
import { gridSpacing } from "store/constant";
import { Save } from "@mui/icons-material";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export default function SkuStoreForm(idcliente) {
  const [guardarseller, setguardarsku] = useState({
    id_cliente: "idcliente",
    legalname: "",
    dbaname: "",
    tipocorporacion: "",
    contactname: "",
    email: "",
    telefono: "",
    legaladress: "",
    estado: "",
    zipcode: "",
    country: "",
    ejecutivoamazon: "",
    website: "",
  });

  /*	const handlingChange = event => {
		setguardarsku({
			...guardarsku,
			[event.target.name]: event.target.value
		});  
		console.log(guardarsku);
	}; */

  /*	const SelectChange = event => {
		setguardarsku({
			...guardarsku,
			country_origin: event.value
		});
		console.log(guardarsku);
	}; */

  /*	const Save = async () => {
		if (guardarsku.sku !== '' && guardarsku.shortdescription !== '' && guardarsku.country_origin !== '') {
			SaveSku(guardarsku)
				.then(
					await Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been saved',
						showConfirmButton: false,
						timer: 1500
					})
				)
				.then(result => {
					setoculto({
						hiddenlistools: false,
						hiddenstoreform: false,
						hiddentable: true,
						hiddendetails: false
					});
				});
		} else {
			Swal.fire({
				title: 'oops!',
				text: 'Please complete all fields!!',
				icon: 'warning'
			});
		}
	}; */

  // const country = UseGetCountry();
  // const countryfinal = country.data;

  /*	const newJson1 = [];
	countryfinal.forEach(pais => {
		newJson1.push({
			value: pais.Name,
			label: pais.Name
		});
	}); */
  /*
	const [hidden, sethidden] = useState({
		escondido: false
	});
	const [clas, useclas] = useState({
		datos: ''
	});
	const buscarhts = () => {
		sethidden({ escondido: true });
		useclas({ datos: guardarsku.shortdescription });
	}; */

  const [value, setValue] = useState(null);
  // console.log("direccion", value)
  const [pick, setPick] = useState(null);
  const [direccion, setdireccion] = useState(null);

  useEffect(() => {
    if (value != null) {
      geocodeByPlaceId(value.value.place_id).then((results) =>
        setdireccion(results[0].address_components)
      );
    }
  }, [value]);

  //console.log("PERRO", direccion)

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
              // value={guardarsku.sku}
              // onChange={handlingChange}
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
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />{" "}
          </Grid>{" "}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="caption">
              Ingrese su Dirección Legal
            </Typography>
            <GooglePlacesAutocomplete
              autocompletionRequest={{
                componentRestrictions: {
                  country: ["mx"],
                },
              }}
              selectProps={{
                value,
                onChange: setValue,
              }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="corporacion"
              name="corporacion"
              label="Tipo de Corporación"
              color="primary"
              type="text"
              fullWidth
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="taxid"
              name="taxid"
              label="Nro. Identificación Fiscal"
              color="primary"
              type="text"
              fullWidth
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="contacto"
              name="contacto"
              label="Contacto"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
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

              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl
              textPrimary="Mr"
              placeholder="demo@company.com"
              sx={{ zIndex: 0 }}
            />
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

              // value={guardarsku.upc_number}
              // onChange={handlingChange}
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
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />
          </Grid>{" "}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="webpage"
              name="webpage"
              label="Página Web"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              sx={{ zIndex: 0 }}
              id="ejecutivo"
              name="ejecutivo"
              label="Ejecutivo Amazon"
              variant="outlined"
              color="primary"
              type="text"
              fullWidth
              // value={guardarsku.upc_number}
              // onChange={handlingChange}
            />
          </Grid>
        </Grid>
        <br />
        <Divider />
        <FormControlLabel
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
        />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="caption">
            Ingrese Dirección Retiro Carga
          </Typography>
          <GooglePlacesAutocomplete
            autocompletionRequest={{
              componentRestrictions: {
                country: ["mx"],
              },
            }}
            selectProps={{
              pick,
              onChange: setPick,
            }}
          />
        </Grid>
        <br />
      </Paper>
      <br />
    </div>
  );
}
