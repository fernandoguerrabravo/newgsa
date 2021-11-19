import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTheme } from "@mui/material/styles";
import {
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import SubCard from "ui-component/cards/SubCard";
import DataTable from "react-data-table-component";

const ResearchReport = ({
  setboton,
  setpdf,
  sku,
  report,
  min,
  average,
  max,
}) => {
  const [state, setstate] = useState({
    reporte: report,
    circular: false,
  });

  // Funcion aque va a rescatar la informacion de la API

  const getDetails = async () => {
    setstate({
      reporte: false,
      circular: true,
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      idcliente: "abcdef",
      sku,
    });

    console.log("enviado a la api:", raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "no-cors",
    };

    const url =
      "https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/reportdetails";
    const resp = await fetch(url, requestOptions);

    setstate({
      reporte: true,
      circular: false,
    });
  };

  const informe = () => {
    setboton({
      volver: false,
    });

    setpdf({
      loading: false,
      sku,
      min,
      average,
      max,
    });
    console.log(sku);
    console.log(report);
  };

  return (
    <>
      {state.reporte ? (
        state.circular ? null : (
          <Button variant="outlined" color="primary" onClick={informe}>
            Show Report
          </Button>
        )
      ) : null}
      {state.reporte ? null : state.circular ? <CircularProgress /> : null}
      {state.reporte ? null : state.circular ? null : (
        <Button variant="outlined" color="primary" onClick={getDetails}>
          Generate Report{" "}
        </Button>
      )}

      {/* state.circular ? <CircularProgress></CircularProgress> :  <Button>Generar Informe</Button> */}
    </>
  );
};

export default ResearchReport;
