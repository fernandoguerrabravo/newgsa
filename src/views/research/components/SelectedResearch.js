import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

import FinishSelected from "./FinishSelected";
import DataTable from "react-data-table-component";
import { green } from "@mui/material/colors";
import { star } from "../hooks/star";
import {
  FormControl,
  Button,
  Grid,
  Typography,
  Paper,
  Avatar,
  Tooltip,
} from "@mui/material";

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
		// textAlign: 'center',
		color: theme.palette.text.primary
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
		padding: theme.spacing(1)
	},

	formControl2: {
		margin: theme.spacing(1),
		minWidth: 300,
		padding: theme.spacing(1)
	},

	media: {
		width: '30%',
		height: 0,
		paddingTop: '56.25%' // 16:9
	}
})); */

const reviews = (info, info2) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Total Reviews: {info2} <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {info}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {star(info)}
      </div>
    </>
  );
};

const link = (asin) => {
  const linkin = `https://www.amazon.com/dp/${asin}`;
  return (
    <>
      <a href={linkin} target="_blank" rel="noreferrer">
        {asin}
      </a>
    </>
  );
};

const SelectedResearch = ({
  seleccionado,
  setescondidoinicial,
  selected,
  category,
}) => {
  const [escondido, setescondido] = useState({
    escondido: true,
  });

  const crearsku = () => {
    setescondido({
      escondido: false,
    });
  };

  const precios = [];
  let suma = 0;
  seleccionado.forEach((datitos) => {
    suma += parseFloat(datitos.price);
    precios.push(parseFloat(datitos.price));
  });

  const average = suma / seleccionado.length;
  const max = Math.max.apply(Math.max, precios);
  const min = Math.min.apply(Math.min, precios);
  // console.log("PRECIOS SELECTED", min);

  const columnas = [
    {
      name: "Imagen",
      selector: (rowData) => (
        <img src={rowData.url} style={{ width: 60 }} alt="producto" />
      ),
    },

    {
      name: "ASIN",
      selector: (rowData) => link(rowData.id),
    },

    {
      name: "Description",
      selector: (rowData) => rowData.title,
    },
    {
      name: "Price",
      selector: (rowData) => rowData.price,
    },

    {
      name: "",
      selector: (rowData) => rowData.id,
    },
    {
      name: "",

      selector: (rowData) => reviews(rowData.reviews, rowData.total_reviews),
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper>
            <Avatar src="https://fotos-ecl.s3.amazonaws.com/icons8-precio-bajo-48.png" />
            <Typography color="primary" variant="h6">
              Min Price
            </Typography>
            <br />
            <Typography color="secondary" variant="h5">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(min)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Avatar src="https://fotos-ecl.s3.amazonaws.com/icons8-flujo-de-fondos-48.png" />
            <Typography color="primary" variant="h6">
              Average Price
            </Typography>
            <br />
            <Typography color="secondary" variant="h5">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(average)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Avatar src="https://fotos-ecl.s3.amazonaws.com/icons8-etiqueta-de-precio-usd-48.png" />
            <Typography color="primary" variant="h6">
              Max Price
            </Typography>
            <br />
            <Typography color="secondary" variant="h5">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(max)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <FormControl variant="outlined">
              {escondido.escondido ? (
                <FinishSelected
                  setescondidoinicial={setescondidoinicial}
                  selected={selected}
                  average={average}
                  max={max}
                  min={min}
                  category={category}
                />
              ) : null}
              <b />
            </FormControl>
          </Paper>
        </Grid>
        <br />
        <Grid item xs={12}>
          <Paper>
            <DataTable
              style={{ zIndex: 0 }}
              columns={columnas}
              data={seleccionado}
              striped
              pagination
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SelectedResearch;
