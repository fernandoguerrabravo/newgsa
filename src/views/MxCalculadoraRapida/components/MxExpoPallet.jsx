import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import MxExpoPalletTotal from "./MxExpoPalletTotal";
import GetMexico from "../helpers/GetMexico";
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

/* const useStyles = makeStyles(theme => ({
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
		margin: theme.spacing(1),
		minWidth: 100,
		padding: theme.spacing(1)
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

const newJson2 = [
  {
    value: "p",
    label: "Pallets",
  },
  {
    value: "b",
    label: "Boxes",
  },
];

const MxExpoPallet = ({ finales, setfinales }) => {
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

  const [valued, setvalued] = useState({
    codigo_fba: "PHX5",
    fedexwarehouse: "",
    qty_pallet: "",
    totalout: "",
    arreglodelpack: [],
    fob: "",
  });

  const [fletetotal, setfletetotal] = useState({
    total: 0,
  });

  const [aparecidos, setaparecidos] = useState({
    totalaparecido: false,
  });

  const handleChange = (e) => {
    setvalued({
      ...valued,
      fedexwarehouse: e.target.value,
    });
    setaparecidos({
      totalaparecido: false,
    });
  };

  const handleqtyChange = (e) => {
    setvalued({
      ...valued,
      qty_pallet: parseInt(e.target.value),
      totalaparecido: false,
    });
    setaparecidos({
      totalaparecido: false,
    });
  };

  const handlefobChange = (e) => {
    setvalued({
      ...valued,
      fob: parseInt(e.target.value),
      totalaparecido: false,
    });
    setaparecidos({
      totalaparecido: false,
    });
  };

  useEffect(() => {
    setfinales({
      ...finales,
      totalseguro: valued.fob,
    });
  }, [valued.fob]);

  const calcular = () => {
    if (
      valued.qty_pallet === "" ||
      valued.fedexwarehouse === "" ||
      valued.qty_pallet > 12
    ) {
      Swal.fire({
        title: "oops!",
        text: "Input Correct Information (Max 12 Pallets)!!",
        icon: "warning",
      });
    } else {
      setaparecidos({
        totalaparecido: true,
      });
      GetMexico({ valued }).then((result) =>
        setfinales({ ...finales, total: result })
      );
    }
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
                onChange={handleChange}
                value={valued.fedexwarehouse}
                label="Fedex Warehouse MX"
                color="secondary"
              >
                {newJson1.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <TextField
                id="qty_pallet"
                name="qty_pallet"
                variant="outlined"
                label="Pallets to Export"
                color="secondary"
                type="number"
                value={valued.qty_pallet || ""}
                onChange={handleqtyChange}
              />
              <br />
              <TextField
                id="qty_pallet"
                name="qty_pallet"
                variant="outlined"
                label="FOB Value (Optional)"
                color="secondary"
                type="number"
                value={valued.fob || ""}
                onChange={handlefobChange}
              />
              <br />
              <Button color="secondary" variant="contained" onClick={calcular}>
                Search Rates
              </Button>
            </FormControl>
            

            {aparecidos.totalaparecido ? (
              <Grid><br />
                <MxExpoPalletTotal
                  setfletetotal={setfletetotal}
                  valued={valued}
                />
                <br />
                Insurance (optional):
                <Typography style={{ color: "#FF9900" }}>
                  <strong>
                    {valued.fob
                      ? valued.fob * 0.003 < 40
                        ? formatter.format(40)
                        : formatter.format(valued.fob * 0.003)
                      : "Not Request"}
                  </strong>
                </Typography>
              </Grid>
            ) : null}
          </CardContent>
        </Card>
      </SubCard>
    </div>
  );
};

export default MxExpoPallet;
