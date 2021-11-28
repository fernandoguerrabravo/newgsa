/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, TextField, FormControl } from "@mui/material";
import { Search, Storefront } from "@mui/icons-material";
// material-ui
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { IconButton } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import Stack from "@mui/material/Stack";
import { grey } from '@mui/material/colors';
/* const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex-grow',
		alignItems: 'center',
		width: '100%',
		margin: theme.spacing(0),
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
		margin: theme.spacing(3),
		minWidth: 500
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
})); */

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.dark.dark
      : theme.palette.secondary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
        : theme.palette.secondary[800],
    borderRadius: "50%",
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
        : theme.palette.secondary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

export default function Htsbegin({ setencabezado }) {
  //const classes = useStyles();

  const [datos, setDatos] = useState({
    country: "",
    hts: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  // console.log(datos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.hts.trim().length > 3) {
      setencabezado({
        ...datos,
        destination: "United States",
        hidden: true,
        hidden3: false,
      });

      setDatos({
        country: "",
        hts: "",
        destination: "United States",
      });
    } else {
      Swal.fire({
        title: "oops!",
        text: "Insert Information to Search HTS!!",
        icon: "warning",
      });
    }
  };

  return (

    <CardWrapper border={false} content={false}>
      <Box sx={{ p: 2.00 }}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={2} direction="row">
                <TextField
                  id="hts"
                  name="hts"
                  label="HTS Code (6 Digits) or Keyword"
                  variant="outlined"
                  color="secondary"
                  type="text"
                  size="small"
                  value={datos.hts}
                  onChange={handleInputChange}
                  fullWidth = "50px"
                />
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx = {{backgroundColor : grey[500], zIndex: 1}}
              >
                Buscar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </CardWrapper>
  );
}

/*


  // ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

  return (
    <form
      onKeyDown={onKeyDown}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <CardWrapper border={false} content={false}>
        <Box sx={{ p: 2.25 }}>
          <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
              <IconButton aria-label="menu">
                <Storefront sx={{ fontSize: 30, color: "#ffff" }} />
              </IconButton>
              <TextField
                id="keyword"
                name="keyword"
                sx={{ width: "70%" }}
                placeholder="Ingrese Palabra Clave"
                value={inputValue.keyword}
                color="secondary"
                variant="outlined"
                onChange={handleInputChange}
              />
              <IconButton
                sx={{ color: "#ffff" }}
                type="submit"
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </CardWrapper>
    </form>
  );
};



*/
