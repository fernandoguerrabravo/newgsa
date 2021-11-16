import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
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
import { red, blue } from "@mui/material/colors";
import SubCard from "ui-component/cards/SubCard";

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
		padding: theme.spacing(3),
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
const newJson1 = [
  {
    value: "2300",
    label: "CDMX C.P. 02300",
  },
  {
    value: "45679",
    label: "JALISCO C.P. 45679",
  },
  {
    value: "66628",
    label: "NUEVO LEON C.P. 66628",
  },
];

const MxExpoPalletFTL = ({ finales, setfinales }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const theme = useTheme();
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
  const [value, setvalue] = React.useState({
    tipo: "",
    bodega: "",
    flete: "",
    fob: "",
    garantizado: true,
    disponible: false,
  });

  const handlechangeoption = (e) => {
    if (e.target.value === "g") {
      setvalue({
        ...value,
        tipo: e.target.value,
        garantizado: true,
        disponible: false,
        flete: "",
      });
    } else {
      setvalue({
        ...value,
        tipo: e.target.value,
        garantizado: false,
        disponible: true,
        flete: "",
      });
    }
  };

  const handlefobChange = (e) => {
    setvalue({
      ...value,
      fob: parseInt(e.target.value),
    });
  };

  useEffect(() => {
    setfinales({
      ...finales,
      totalseguro: value.fob,
    });
  }, [value.fob]);

  const handleChangegarantizado = (e) => {
    switch (e.target.value) {
      case "2300":
        setvalue({
          ...value,
          flete: 2369.84 + 150 + 145,
          bodega: e.target.value,
        });
        setfinales({
          ...finales,
          total: 2369.84 + 150 + 145,
        });

        break;
      case "45679":
        setvalue({
          ...value,
          flete: 2342.84 + 150 + 145,
          bodega: e.target.value,
        });
        setfinales({
          ...finales,
          total: 2342.84 + 150 + 145,
        });
        break;
      case "66628":
        setvalue({
          ...value,
          flete: 1092.24 + 150 + 145,
          bodega: e.target.value,
        });
        setfinales({
          ...finales,
          total: 1092.24 + 150 + 145,
        });

        break;

      default:
        setvalue({
          ...value,
          flete: 0,
          bodega: "",
        });

        break;
    }
  };

  const handleChangedisponible = (e) => {
    switch (e.target.value) {
      case "2300":
        setvalue({
          ...value,
          flete: 1983.75 + 150 + 145,
          bodega: e.target.value,
        });

        break;
      case "45679":
        setvalue({
          ...value,
          flete: 1907.56 + 150 + 145,
          bodega: e.target.value,
        });
        break;
      case "66628":
        setvalue({
          ...value,
          flete: 0,
          bodega: "",
        });

        break;
      default:
        setvalue({
          ...value,
          flete: 0,
          bodega: "",
        });

        break;
    }
  };

  const FTL = {
    disponible: {
      2300: 1983.75,
      45679: 1907.56,
      66628: 0,
    },
    garantizado: {
      2300: 2369.84,
      45679: 2342.84,
      66628: 1092.24,
    },
  };

  return (
    <div>
      <SubCard title="Seleccione Bodega Origen en Mexico">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            <FormControl variant="outlined">
              <InputLabel id="mxwarehouse">Warehouse MX</InputLabel>
              <Select
                labelId="mxwarehouse"
                onChange={handleChangegarantizado}
                value={value.bodega}
                label="Fedex Warehouse MX"
                color="secondary"
                style={{ width: 200 }}
              >
                {newJson1.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <TextField
                id="fob"
                name="fob"
                variant="outlined"
                label="FOB Value (Optional)"
                color="secondary"
                type="number"
                value={value.fob || ""}
                onChange={handlefobChange}
              />
              <br />
            </FormControl><br />
			<Typography sx={{ typography: 'subtitle2' , fontWeight: 'bold' }}>
			Tarifa MX-Laredo TX
			</Typography>
            <Typography style={{ color: "#FF9900" }}>
              <strong>{formatter.format(value.flete)}</strong>
            </Typography><br />
			<Typography sx={{ typography: 'subtitle2' , fontWeight: 'bold' }}>
          Insurance (optional):
		  </Typography>
          <Typography style={{ color: "#FF9900" }}>
            <strong>
              {value.fob
                ? value.fob * 0.003 < 40
                  ? formatter.format(40)
                  : formatter.format(value.fob * 0.003)
                : "Not Request"}
            </strong>
          </Typography>
          </CardContent>
        </Card>
      </SubCard>

      {/*<Grid item xs={6}>
        <br />
        {value.garantizado ? (
          <>
            <Grid item xs={12}>
             
            </Grid>
            <br />
            <Grid item xs={12}>
              El servicio{" "}
              <Typography style={{ color: "#FF9900" }}>
                <strong>"Garantizado"</strong>
              </Typography>
              tiene un periodo maximo de 48 horas de salida desde el momento de
              la confirmacion de su booking, y esta basado en el
              reposicionamiento de camiones disponibles en otros lugares.
            </Grid>
          </>
        ) : null}

        <br />
      </Grid>
      <Grid item xs={6}>
       
        <br />
        <Grid item xs={12}>
          <h6>
            Recogida desde la bodega del Seller sin costo, si esta ubicada en el
            area metropolitana de alguna de las ciudades donde estan ubicadas
            las 3 bodegas de Fedex indicadas; Despacho Auanero Export-Import;
            transporte hasta Laredo; y recepcion & manejo en bodega de Laredo,
            TX para conectar con operador de utima milla seleccionado por el
            Seller. No incluye costos por aranceles que defina la Aduanas de USA
            y la fianza ante Aduanas de USA (que debe prepagarse
            independientemente)
          </h6>
        </Grid>
        <br />
			</Grid/> */}
    </div>
  );
};

export default MxExpoPalletFTL;
