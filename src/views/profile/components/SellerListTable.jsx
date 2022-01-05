/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import  useGetSeller  from "../hooks/UseGetSeller";
import {React, useEffect} from "react";
// import { useTheme } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import DataTable from "react-data-table-component";
import { SecurityUpdate } from "@mui/icons-material";

export default function SellerListTable({idcliente, setupdate}) {
  
  const { data } = useGetSeller(idcliente);

  useEffect( () => {

    setupdate(data);

  }, [data, setupdate])
  

  const columnas = [
    {
      name: "Seller Name",
      selector: (row) => row.legalname
    },
    {
      name: "Dirección",
      selector: (row) => row.legaladdress.numero + ' ' + row.legaladdress.calle + ' ' + row.legaladdress.barrio
       
    },
    {
      name: "Ciudad, Estado",
      selector: (row) => row.legaladdress.ciudad + ' , ' + row.legaladdress.estado
    },
    {
      name: "Zip Code",
      selector: (row) => row.legaladdress.zip
    },
    {
      name: "Pais",
      selector: (row) => row.legaladdress.pais
    },

    {
      name: "Telefono",
      selector: (row) => '+52' + row.telefono,
    },
  ];

  return (
    <>
     <DataTable striped  columns={columnas} data={data} />
    </>
  );
}
