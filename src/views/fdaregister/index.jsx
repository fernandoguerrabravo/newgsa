import React from "react";

// import List from '@mui/material/List';
import { gridSpacing } from "store/constant";

import { Grid, Typography, Button } from "@mui/material";

// project imports
import SubCard from "ui-component/cards/SubCard";

// assets
import Center from "react-center";
import Swal from "sweetalert2";

const request = () => {
  Swal.fire({
    icon: "success",
    title: "Gracias",
    text: "Tu requerimiento ha sido Recibido!",
    footer: "Un Agente se pondrá en contacto a la brevedad",
  });
};

export default function FdaRegister() {
  return (
    <div>
      {" "}
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          <SubCard title="Paso 1: ¿Por qué necesita estar registrado en la FDA?">
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              Tanto las instalaciones estadounidenses como las extranjeras que
              procesan, envasan o transportan alimentos humanos o animales para
              su consumo en los Estados Unidos deben registrarse en la FDA como
              Instalación Alimentaria Extranjera, según la normativa de la FDA.
              Si una instalación alimentaria extranjera no tiene un consumidor o
              importador estadounidense dispuesto, el proveedor extranjero
              también debe designar a un agente en los Estados Unidos para que
              actúe como punto de contacto para la FDA. Nuestra empresa apoyará
              y actuará como su punto de contacto con la FDA, y podremos
              registrarlo y comunicarnos con ellos en su nombre.
            </Typography>
            <Center></Center>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Servicios de Obtención de Registro de Instalaciones (FFRN) ">
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              <ul>
                <li>
                  US Agent: representación y comunicaciones con FDA en temas
                  relacionados con el producto exportado tales como envíos,
                  detenciones, import alerts, warning letters, recalls, entre
                  otros.
                </li>
                <li>
                  Obtención de Registo FFRN (USD FDA Register Number)
                </li>
                <li>
                  Apoyo en la Obtención de DUNS Number (Facility Register)
                </li>
               
              </ul>
            </Typography>
            <Center>
              <Button onClick={request} variant="contained">
                Solicitar Servicio
              </Button>
            </Center>
          </SubCard>
        </Grid>
      </Grid>
    </div>
  );
}
