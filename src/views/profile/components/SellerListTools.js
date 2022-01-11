/* eslint-disable no-unused-vars */
import React from "react";
// import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const SellerListTools = ({ oculto, setoculto }) => {
  // const theme = useTheme();

  const nuevoseller = () => {
    setoculto({
      ...oculto,
      hiddentable: false,
      hiddenboton1: false,
      hiddenboton2: false,
      hiddenboton3: true,
      hiddenperfilform: true,
      hiddenupdate: false,
    });
  };

  const volver = () => {
    setoculto({
      ...oculto,
      hiddentable: true,
      hiddenboton1: true,
      hiddenboton2: true,
      hiddenboton3: false,
      hiddenperfilform: false,
      hiddenupdate: false,
    });
  };

  const editar = () => {
    setoculto({
      ...oculto,
      hiddentable: false,
      hiddenboton1: false,
      hiddenboton2: false,
      hiddenboton3: true,
      hiddenperfilform: false,
      hiddenupdate: true,
    });
  };

  return (
    <>
      {oculto.hiddenboton1 ? (
        <Button onClick={nuevoseller} variant="contained" color="secondary">
          + Configurar Perfil
        </Button>
      ) : null}
      {oculto.hiddenboton2 ? (
        <Button onClick={editar} variant="contained" color="secondary">
          + Editar Perfil
        </Button>
      ) : null}
      {oculto.hiddenboton3 ? (
        <Button onClick={volver} variant="contained" color="secondary">
          Volver
        </Button>
      ) : null}
      {oculto.hiddenboton4 ? (
        <Button onClick={volver} variant="contained" color="secondary">
          Volver
        </Button>
      ) : null}
    </>
  );
};

export default SellerListTools;
