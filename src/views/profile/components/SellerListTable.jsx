/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import  useGetSeller  from "../hooks/UseGetSeller";
import {React, useEffect} from "react";
// import { useTheme } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import DataTable from "react-data-table-component";
import { SecurityUpdate } from "@mui/icons-material";

export default function SellerListTable({setupdate,idcliente}) {
  
  
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

  
  const { data } = useGetSeller(idcliente);
  
  setupdate(data[0])
  
  
  //setupdate({activo})

  const columnas = [
    {
      name: "Seller Name",
      selector: (row) => row.legalname,
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
