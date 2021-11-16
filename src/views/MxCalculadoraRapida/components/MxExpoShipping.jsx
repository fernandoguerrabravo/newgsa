import React, { useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";

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
import DataTable from "react-data-table-component";
import IconButton from "@mui/material/IconButton";
/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex-grow",
    alignItems: "center",
    width: "100%",
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  },

  formControl: {
    margin: theme.spacing(1),
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 100,
    padding: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  titles: {
    alignItems: "left",
    flexGrow: 1,
    display: "flex-grow",
    textAlign: "left",
    padding: theme.spacing(1),
  },

  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },

  icons: {
    fontSize: "small",
    backgroundColor: red[500],
    color: red[500],
  },

  table: {
    minWidth: 200,
  },
  paper1: {
    float: "center",
    display: "flex-grow",
    padding: theme.spacing(2),
    alignItems: "center",
    flexGrow: 1,
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    color: blue[50],
  },
}));
*/
const newJson2 = [
  {
    value: "Pallets",
    label: "Pallets",
  },
  {
    value: "Boxes",
    label: "Boxes",
  },
];

const MxExpoShipping = ({ handout, sethandout, lista, setoutlista }) => {
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
  const [value, setValue] = React.useState("");

  const [paquetes, setpaquetes] = useState({
    tipo: "",
    qtyout: "",
    totalout: "",
  });

  const getTotals = (data) => {
    let total = 0;
    data.forEach((item) => {
      let costo = 0;
      if (item.tipo === "Pallets") {
        costo = 7.48 * item.qtyout;
        if (costo < 46) {
          costo = 46 + 34.5;
        } else {
          costo = 7.48 * item.qtyout + 34.5;
        }
      } else {
        costo = 2.9 * item.qtyout + 34.5;
      }
      total += costo;
    });

    return total;
  };

  const handleChange1 = (e) => {
    setpaquetes({
      ...paquetes,
      tipo: e.target.value,
    });
  };

  const handleqtyChange1 = (e) => {
    const id = lista.length;
    setpaquetes({
      ...paquetes,
      qtyout: parseFloat(e.target.value),
      idpaquete: id,
    });
  };

  useEffect(() => {
    sethandout({ out: getTotals(lista) });
  }, [lista, sethandout]);

  const ActionComponent = ({ row, onClick }) => {
    const clickHandler = () => onClick(row);
    return <IconButton onClick={clickHandler}><img
    src="https://fotos-ecl.s3.amazonaws.com/icons8-eliminar-64.png"
    alt="edit"
    width="20"
    height="20"
  /></IconButton>;
  };

  const submitout = () => {
    if (paquetes.qtyout !== "" && paquetes.tipo !== "") {
      setoutlista({ lista: [...lista, paquetes] });
      let totalporembarque = 0;
      let totalporembarque1 = 0;
      let totalout = 0;
      lista.forEach((total) => {
        if (total.tipo === "Pallets") {
          totalporembarque1 = 7.48 * total.qtyout;
          if (totalporembarque1 < 46) {
            totalporembarque = 46 + 34.5;
          } else totalporembarque = 7.48 * total.qtyout + 34.5;
        } else {
          totalporembarque = 2.9 * total.qtyout + 34.5;
        }

        totalout += totalporembarque;
      });

      setpaquetes({
        ...paquetes,
        tipo: "",
        qtyout: "",
        idpaquete: "",
      });
    } else {
      Swal.fire({
        title: "Opss!",
        text: "Add Packaging and Quantities",
        icon: "warning",
      });
    }
  };

  const columns = [
    {
      name: "Packaging",
      selector: (row) => row.tipo,
    },
    {
      name: "Qtys",
      selector: (row) => row.qtyout,
    },
    {
      name: "Rates",
      selector: (row) =>
        row.tipo === "Pallets"
          ? 7.48 * row.qtyout < 46
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(46 + 34.5)
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(7.48 * row.qtyout + 34.5)
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(2.9 * row.qtyout + 34.5),
    },
    {
      name: "Actions",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: (row) => (
        <ActionComponent row={row.idpaquete} onClick={deleterow}>
          
        </ActionComponent>
      )
    }
  ];

  const deleterow = (e) => {
    const newstate = lista.filter(item => item.idpaquete !== e);
    setoutlista({ lista: newstate });
    
  };

  return (
    <div>
      <SubCard title="Costos Handling Cost">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            <FormControl variant="outlined">
              <InputLabel id="outtipo">Packaging to Out</InputLabel>
              <Select
                labelId="outtipo"
                id="tipo"
                onChange={handleChange1}
                value={paquetes.tipo}
                color="secondary"
                style={{ width: 200 }}
                label="Packaging to Out"
              >
                {newJson2.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <TextField
                id="qty"
                name="qty"
                label="Quantities"
                variant="outlined"
                color="secondary"
                type="number"
                value={paquetes.qtyout || ""}
                onChange={handleqtyChange1}
              />
              <br />
              <Button onClick={submitout} variant="contained" color="secondary">
                + Add Item to List
              </Button>
            </FormControl>
            <br />
            <br />
            <Typography sx={{ typography: "subtitle2", fontWeight: "bold" }}>
              Total Handling Out:{" "}
            </Typography>
            <Typography style={{ color: "#FF9900" }}>
              <strong>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getTotals(lista))}
              </strong>
            </Typography><p /><p />
            <DataTable columns={columns} data={lista} />
          </CardContent>
        </Card>
      </SubCard>
    </div>
  );
};

export default MxExpoShipping;
