import React, { useState } from "react";

import FinishSelected from "./FinishSelected";
import DataTable from "react-data-table-component";
import { star } from "../hooks/star";
import { FormControl, Grid, Paper } from "@mui/material";
import MinCard from "./MinCard";

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

  /*const crearsku = () => {
    setescondido({
      escondido: false,
    });
  };*/

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
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <MinCard min={min} tag={"Precio Minimo"}></MinCard>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <MinCard min={average} tag={"Precio Medio"}></MinCard>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <MinCard min={max} tag={"Precio Máximo"}></MinCard>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          {escondido.escondido ? (
            <FinishSelected
              setescondidoinicial={setescondidoinicial}
              selected={seleccionado}
              average={average}
              max={max}
              min={min}
              category={category}
            />
          ) : null}
        </Grid>

        <Grid item xs={12}>
         
            <DataTable
              style={{ zIndex: 0 }}
              columns={columnas}
              data={seleccionado}
              striped
              pagination
            />
      
        </Grid>
      </Grid>
    </>
  );
};

export default SelectedResearch;
