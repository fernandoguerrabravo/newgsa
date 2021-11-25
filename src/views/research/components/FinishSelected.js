/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Select from "react-select";
import Stack from "@mui/material/Stack";
import { green, red, blue } from "@mui/material/colors";
import Swal from "sweetalert2";
import { UpdateSku } from "../helpers/UpdateSku";
import {
  FormControl,
  Button,
  Grid,
  Typography,
  Paper,
  Avatar,
  Tooltip,
} from "@mui/material";
import { useGetSku } from "views/SkuList/hooks/useGetSku";

/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	table: {
		minWidth: 750,
		padding: theme.spacing(2)
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 450
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 340,
		padding: theme.spacing(1)
	},
	media: {
		width: '30%',
		height: 0,
		paddingTop: '56.25%' // 16:9
	}
})); */

const FinishSelected = ({
  selected,
  average,
  max,
  min,
  setescondidoinicial,
  category,
}) => {
  const idcliente = "abcdef";
  const sku = useGetSku(idcliente);
  const skufinal = sku.data;
  const newJson1 = [];
  skufinal.forEach((event) => {
    event.res !== true
      ? newJson1.push({
          value: event.sku,
          label: event.sku,
        })
      : null;
  });

  // Defino mi arreglo final para enviar a la base de datos

  const [final, setfinal] = useState({
    sku: "",
    average,
    max,
    min,
    keyword: category,
    data: selected,
  });

  const handleInputChange = (event) => {
    setfinal({
      ...final,
      sku: event.value,
    });
  };

  const updatesku = async () => {
    console.log("A grabar: ", final);

    UpdateSku(final)
      .then(
        await Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then((result) => {
        setescondidoinicial({ escondidoinicial: true });
      });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Select options={newJson1} onChange={handleInputChange} /><br />
		  <strong>Seleccione un SKU</strong>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Button onClick={updatesku} variant="contained" color="secondary">
            Terminar y Grabar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FinishSelected;
