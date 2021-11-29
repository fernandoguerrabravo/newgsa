/* eslint-disable no-unused-vars */
// import { useGetSku } from "../hooks/useGetSku";
import React from "react";
// import { useTheme } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import DataTable from "react-data-table-component";

export default function SellerListTable({ oculto, setoculto, setskudetails }) {
  /* const crearsku = () => {
    setoculto({
      ...oculto,
      hiddenstoreform: true,
      hiddentable: false,
      hiddenlistools: true,
    });
  }; */

  /*	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.secondary
		}
	})); */

  // const theme = useTheme();
  /* const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  };  */

  const idcliente = "abcdef";
  // const { data, loading } = useGetResearch(idcliente)

  /*  const details = (event) => {
    setskudetails({
      idcliente: "abcdef",
      skunumber: event,
      skudetail: data,
    }); 

    setoculto({
      hiddenlistools: true,
      hiddenstoreform: false,
      hiddentable: false,
      hiddendetails: true,
    });
  }; */

  //const { data } = useGetSku(idcliente);
  const data = [];
  //console.log("datos para tabla:", data);

  const columnas = [
    {
      name: "Id",
      selector: (row) => row.sku,
    },
    {
      name: "Seller",
      selector: (row) => row.shortdescription,
    },
    {
      name: "Country",
      selector: (row) => row.country_origin,
    },

    {
      name: "Date Creation",
      selector: (row) => row.fecha_creacion,
    },
  ];

  /*const actions = [
    {
      icon: () => (
        <RemoveRedEyeIcon style={{ color: "#e39d3b" }} fontSize="large" />
      ),
      tooltip: "View Details",
      onClick: (event, rowData) => details(rowData.sku),
    },
  ]; */

  return (
    <>
      <DataTable striped pagination columns={columnas} data={data} />
    </>
  );
}