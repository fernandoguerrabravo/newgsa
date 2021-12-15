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
          <SubCard title="Paso 3:  Presente su Aviso Previo de la FDA">
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              La Administración de Alimentos y Medicamentos de los Estados
              Unidos (FDA) exige legalmente la presentación de una Notificación
              Previa para todos los envíos de alimentos, bebidas y suplementos
              dietéticos que entren en los Estados Unidos. No notificar a la FDA
              7 días antes de que su envío llegue a los EE.UU. puede resultar en
              una detención del producto por parte de la FDA, costosas tasas de
              retención y posibles prohibiciones de importación. La Interfaz del
              Sistema de Notificación Previa (PNSI) de la FDA puede ser muy
              difícil de navegar y completar correctamente. Nuestros Agentes se
              asegurará de que su notificación previa sea fácil, rápida y se
              presente correctamente. Una vez presentada, su notificación previa
              será archivada inmediatamente por un profesional, asegurándose de
              que toda la información se introduce correctamente y sin errores.
              Reduciremos el tiempo de presentación de su notificación previa,
              disminuiremos los errores y guardaremos su información de forma
              segura para futuras presentaciones. Todas las solicitudes se
              completan y aprueban normalmente en las 24 horas siguientes a su
              presentación.
            </Typography>
            <Center></Center>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Servicios de Obtención de Prior Notice ">
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              <ul>
                <li>
                  Solicitud de Prior Notice para Ingreso a USA de Embarque ante el FDA
                </li>
                <li>Revisión de los Documentos de Embarque</li>
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
