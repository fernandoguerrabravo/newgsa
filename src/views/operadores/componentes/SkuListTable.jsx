import { useGetSku } from "../hooks/useGetSku";
import React, {  } from "react";
// import { useTheme } from "@mui/material/styles";
import {
  Button,
  Paper,
} from "@mui/material";
import DataTable from "react-data-table-component";

export default function SkuListTable({ oculto, setoculto, idcliente }) {
  const crearsku = () => {
    setoculto({
      ...oculto,
      hiddentable: false,
    hiddenform: true,
    });
  };
  
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

  const { data } = useGetSku(idcliente);

  console.log("datos para tabla:", data);
  ;
  const columnas = [
    {
      name: "Id",
      selector: (row) => row.body['object_id'],
    },
    
    {
      name: "Operador",
      selector: (row) => row.body['carrier'],

     }, 
    {
      name: "Nro. Cuenta ",
      selector: (row) => row.body['account_id'],
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
      <Button onClick={crearsku} variant="contained" color="secondary">
        Conecte Nueva Cuenta
      </Button>
      <br />
      <br />
      <Paper>
        <DataTable striped pagination columns={columnas} data={data} />
      </Paper>
    </>
  );
}
