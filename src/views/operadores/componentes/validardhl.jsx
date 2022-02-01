import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SaveAccount from "../helpers/SaveCarrier";
import Swal from "sweetalert2";
import Center from "react-center";

const Validardhl = ({ dhl_express, setdhl_express, idcliente, oculto, setoculto, image }) => {
  SaveAccount(dhl_express, idcliente, image).then((response) => {
   
    if (response.statusCode < 300) {
        Swal.fire({
          icon: "success",
          title: "Felicitaciones...",
          text: "Su Cuenta ha sido conectada Exitosamente",
          footer: "¡Revise con Operador si tiene los permisos necesarios!",
          showConfirmButton: true,
        }).then(
          setoculto({
            hiddentable: true,
            hiddenform: false,
            activaups: false,
            activafedex: false,
            activadhl: false,
          })
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se ha podido concretar la Conexión!",
          footer: "Por favor revise la información de su Cuenta",
        }).then(
          setoculto({
            hiddentable: false,
            hiddenform: true,
            activaups: false,
            activafedex: false,
            activadhl: false,
          })
        );
      }
      
    
  });

  return (
    <>
      <Center  sx={{ p: 4}}>
        <CircularProgress></CircularProgress>
      </Center>
    </>
  );
};

export default Validardhl;