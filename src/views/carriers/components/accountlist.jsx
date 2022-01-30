/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
//import useGetSeller from "../hooks/UseGetSeller";
import { React, useEffect, useState } from "react";
// import { useTheme } from "@mui/material/styles";
import { Button, Paper, Grid } from "@mui/material";
import DataTable from "react-data-table-component";
import { gridSpacing } from "store/constant";
import useGetCarrier from "../hooks/useGetCarrier";

import useAuth from "../../../hooks/useAuth";
import { GetCarrier } from "../helpers/GetAccount";

export default function AccountList({idcliente}) {
  
  const { logout, user } = useAuth();
  idcliente = user.id
  
   
   const { data } = GetCarrier(idcliente);
   //const datafinal = data[0];
   console.log("PICOOO del PERRO", user.id)
  //console.log("pico del data", datafinal)

  const [botoncito, setbotoncito] = useState({
    activo: true,
  });

  /* useEffect(() => {
    setbotoncito(datafinal);
  }, [botoncito, datafinal]);
*/
  //  console.log("botonncito", botoncito);

  const columnas = [
    {
      name: "Id Conexión",
      selector: (row) => row.idcliente,
    },
    
  ];

  //   const nuevoseller = () => {
  //     setoculto({
  //       ...oculto,
  //       hiddentable: false,
  //       hiddenboton: true,
  //       hiddenperfilform: true,
  //       hiddenupdate: false,
  //     });
  //   };

  //   const editar = () => {
  //     setoculto({
  //       ...oculto,
  //       hiddentable: false,
  //       hiddenboton: true,
  //       hiddenperfilform: false,
  //       hiddenupdate: true,
  //     });
  //   };

  const pico = [];
  
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {botoncito ? (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              // onClick={editar}
            >
              <strong>Conectar Nueva Cuenta</strong>
            </Button>
          ) : null}
          {botoncito ? null : (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              // onClick={nuevoseller}
            >
              Configurar Perfil
            </Button>
          )}
        </Grid>
      </Grid>
      <br></br>
      <DataTable striped columns={columnas} data={data} />
    </>
  );
}
