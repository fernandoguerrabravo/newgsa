import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SaveAccount from "../helpers/SaveCarrier";
import Swal from "sweetalert2";

const Validarups = ({ ups, setups, idcliente, oculto, setoculto }) => {
  SaveAccount(ups, idcliente).then((response) => {
    
    console.log("PEOS", response)
    if (response.statusCode > 300) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se ha podido concretar la Conexión!",
        footer: 'Por favor revise la información de su Cuenta',
      }).then(
        setoculto({
          hiddentable: false,
          hiddenform: true,
          activaups: false,
          activafedex: false,
          activadhl: false,
        })
      );
    } else {

        Swal.fire({
            icon: "success",
            title: "Felicitaciones...",
            text: "Su Cuenta ha sido conectada Exitosamente",
            footer: '¡Revise con Operador si tiene los permisos necesarios!',
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
    }

  });

  return (
    <>
      <CircularProgress></CircularProgress>
    </>
  );
};

export default Validarups;
