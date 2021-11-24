/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CircularProgress, Grid, Button } from "@mui/material";
import DataTable from "react-data-table-component";
import { star } from "../hooks/star";
//import CustomizedDialogs from '../hooks/dialogo';
import { useFetchGifs } from "../hooks/useFetchGifs";
import Center from "react-center";
import SimpleDialogDemo from "./SimpleDialog";
import Swal from 'sweetalert2'

/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	table: {
		minWidth: 750,
		padding: '2px 4px'
	},

	centrar: {]]
		textAlign: 'center',
		direction: 'row',
		justify: 'center',
		alignItems: 'center',
		padding: theme.spacing(6)
	}
}));
*/
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
  const link = `https://www.amazon.com/dp/${asin}`;
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        {asin}
      </a>
    </>
  );
};

export const GiftGrid2 = ({ setseleccionado, setCategories, category, categories }) => {
  const { data, loading } = useFetchGifs(category);
  // {loading && <p>Loading Results...</p>}

  // console.log(category)

  const columnas = [
    {
      name: "Imagen",
      selector: (rowData) => (
        <img src={rowData.url} style={{ width: 60 }} alt="imagen" />
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
      name: "Details",

      selector: (rowData) => <SimpleDialogDemo codigo={rowData.id} />,
    },
    {
      name: "Rank",

      selector: (rowData) => reviews(rowData.reviews, rowData.total_reviews),
    },
  ];

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [datos, setDatos] = React.useState(data);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
    setseleccionado(state.selectedRows);
  }, []);

  console.log("Seleccionadas", selectedRows);

  const botonseleccionar = () => {

    if(selectedRows.length < 1) {
      
      Swal.fire(
        'Opps!',
        'Por favor realice su selección!',
        'warning'
      )

    } else {
    setCategories({
      ...categories,
      hidden: false,
      hidden1: true,
      hidden2: false
    })
  }
}

  return (
    <>
      <br />
      <br />
      <br />
      {loading ? (
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Center>
            <CircularProgress color="primary" size={60} />
          </Center>
        </Grid>
      ) : (
        <>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button onClick={botonseleccionar} sx={{ backgroundColor: "#D84315" }} variant="contained">
              Grabar Selección
            </Button>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <DataTable
              striped
              pagination
              columns={columnas}
              data={data}
              selectableRows
              onSelectedRowsChange={handleRowSelected}
              clearSelectedRows={toggleCleared}
            />
          </Grid>
        </>
      )}
    </>
  );
};
