/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CircularProgress, Box, Grid, Paper, Button } from "@mui/material";
import DataTable from "react-data-table-component";
import UseFetchClas from "../hooks/UseFetchClas";
import Center from "react-center";
/*const useStyles = makeStyles({
	table: {
		minWidth: 750
	},
	centrar: {
		textAlign: 'center',
		direction: 'row',
		justify: 'center',
		alignItems: 'center'
	}
}); */

const HtsGrid2 = ({ encabezado, setencabezado }) => {
  // const { data, loading, finales } = UseFetchHts(encabezado.hts)

  const { data, loading, finales } = UseFetchClas(encabezado.hts);

  // const { categorias } = UseFetchHtsCategory(encabezado.hts);
  // {loading && <p>Loading Results...</p>}

  const detailhts = (e, f, g, h, i) => {
    setencabezado({
      ...encabezado,
      hidden1: true,
      hidden: false,
      hts: e,
      hts8: e,
      general: f,
      special: g,
      duties: h,
      dutiespecific: i,
    });
  };

  const columnas = [
    {
      name: "HTS Number",
      selector: (row) => row.htsno,
    },
    {
      name: "Brief Description",
      selector: (row) => row.description,
    },
  ];

  /* const actions = [
		{
			icon: () => <SaveOutlinedIcon color="primary" fontSize="large" />,
			tooltip: 'Select HTS Number',
			onClick: (event, rowData) =>
				detailhts(rowData.htsno, rowData.general, rowData.special, rowData.duties, rowData.dutiespecific)
		}
	]; */

  return (
      <>
      {loading ? (
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Center>
            <CircularProgress color="primary" size={60} />
          </Center>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <DataTable columns={columnas} data={data} striped />
        </Grid>
      )}
    </>
  );
};

export default HtsGrid2;
