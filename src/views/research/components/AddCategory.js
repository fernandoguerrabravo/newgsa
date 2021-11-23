import React, { useState } from "react";
import Swal from "sweetalert2";
import { Search, Storefront } from "@mui/icons-material";
// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Button } from "@mui/material";
import { IconButton, TextField } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import Stack from '@mui/material/Stack';
import { gridSpacing } from "store/constant";


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

export const AddCategory = ({ setCategories }) => {
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
  const [inputValue, setInputValue] = useState({
    // sku: '',
    keyword: "",
  });

  const handleInputChange = (event) => {
    // console.log(e.target.value)

    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.keyword.trim().length > 3) {
      setCategories({
        keyword: inputValue.keyword,
        hidden: true,
        hidden1: false,
        hidden2: true,
        selected: [],
      });

      setInputValue({
        // sku: '',
        keyword: "",
      });
    } else {
      Swal.fire({
        title: "oops!",
        text: "Please insert a valid Keyword and SKU Reference!",
        icon: "warning",
      });
    }
  };

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
