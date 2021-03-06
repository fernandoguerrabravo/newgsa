import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import SubCard from "ui-component/cards/SubCard";
import GetZipMx from "../helpers/GetZipMx";
import Swal from "sweetalert2";


/*
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex-grow',
		alignItems: 'center',
		width: '100%',
		margin: theme.spacing(0),
		padding: theme.spacing(1),
		input: {
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: 10
		},
		divider: {
			height: 28,
			margin: 4
		}
	},

	formControl: {
		margin: theme.spacing(1)
	},
	formControl2: {
		margin: theme.spacing(1)
	},
	selectEmpty: {
		marginTop: theme.spacing(1)
	},
	titles: {
		alignItems: 'left',
		flexGrow: 1,
		display: 'flex-grow',
		textAlign: 'left',
		padding: theme.spacing(1)
	},

	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	},

	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	table: {
		minWidth: 200
	},
	paper1: {
		float: 'center',
		display: 'flex-grow',
		padding: theme.spacing(2),
		alignItems: 'center',
		flexGrow: 1,
		textAlign: 'center'
	},
	button: {
		margin: theme.spacing(1),
		color: blue[50]
	}
}));
*/

const MxSummary = ({ finales, handout }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const theme = useTheme();

  const [lastmile, setlastmile] = useState({
    valor: "",
  });

  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  };

  const handlingChange = (event) => {
    let valores = 0;
    if (event.target.value === 0 || event.target.value === "") {
      valores = 0;
    } else {
      valores = event.target.value;
    }

    setlastmile({
      valor: parseInt(valores),
    });
  };

  const [zip, setzip] = useState({ origin: "" });

  const ZipChange = (event) => {
    setzip({
      origin: event.target.value,
    });
  };

  const verificar = () => {
    GetZipMx(zip.origin).then((result) => {
      if (result === 1) {
        Swal.fire({
          icon: "success",
          title: "Felicitaciones",
          text: "C??digo Postal Incluye Retiro en Origen",
          footer: "Considera dentro de ??rea Metropolitana de Bodega Seleccionada",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            "Lo Sentimos, el C??digo Postal Ingresado no Incluye Retiro en Origen!",
          footer: "Contactar para Cotizaci??n y Consultas a jaime@wtcfl.com",
        });
      }
    });
  };

  return (
    <div>
      <SubCard title="Resumen de Costos">
        <Card sx={cardStyle}>
          <br />
          <Typography style={{ textAlign: "right" }}>
            Powered by
            <img
              src="https://fotos-ecl.s3.amazonaws.com/fedex.png"
              alt="fedex"
              width="70"
              height="30"
              align="right"
            />
          </Typography>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead />
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Tarifa MX to Laredo TX
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: "#FF9900" }}
                    >
                      <strong>{formatter.format(finales.total)}</strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Handling Out Cost
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: "#FF9900" }}
                    >
                      <strong>{formatter.format(handout.out)}</strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6">Total Shipping Cost:</Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" style={{ color: "#FF9900" }}>
                        <strong>
                          {formatter.format(handout.out + finales.total)}
                        </strong>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Insurance (* optional):
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography style={{ color: "#FF9900" }}>
                        <strong>
                          {finales.totalseguro
                            ? finales.totalseguro * 0.003 < 40
                              ? formatter.format(40)
                              : formatter.format(finales.totalseguro * 0.003)
                            : formatter.format(0)}
                        </strong>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Insert Last Mile (Amazon's Suppliers)
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography>
                        <TextField
                          id="lastmile"
                          name="lastmile"
                          label="Lastmile Value"
                          variant="outlined"
                          color="primary"
                          type="number"
                          value={lastmile.valor}
                          onChange={handlingChange}
                        />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Total Logistics Cost (MX - FBA's Amazon):
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography>
                        <strong>
                          {finales.totalseguro
                            ? finales.totalseguro * 0.003 < 40
                              ? formatter.format(
                                  40 +
                                    handout.out +
                                    finales.total +
                                    lastmile.valor
                                )
                              : formatter.format(
                                  finales.totalseguro * 0.003 +
                                    handout.out +
                                    finales.total +
                                    lastmile.valor
                                )
                            : formatter.format(
                                0 + handout.out + finales.total + lastmile.valor
                              )}
                        </strong>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <strong>Verique Servicio Incluye Pick-Up</strong>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography>
                        <Box
                          sx={{
                            display: "inline",
                            p: 0,
                            m: 1,
                            bgcolor: "background.paper",
                          }}
                        >
                          <TextField
                            id="zipcodemx"
                            name="zipxcodemx"
                            label="Ingrese ZipCode Origen"
                            variant="outlined"
                            color="primary"
                            type="text"
                            value={zip.origin}
                            onChange={ZipChange}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "inline",
                            p: 0,
                            m: 1,
                            bgcolor: "background.paper",
                          }}
                        >
                          <Button onClick={verificar} variant="contained">
                            Verificar
                          </Button>
                        </Box>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </SubCard>
    </div>
  );
};

export default MxSummary;
