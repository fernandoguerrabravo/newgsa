/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import TotalIncomeCard from "ui-component/cards/Skeleton/TotalIncomeCard";

// assets

import React, { useState } from "react";
import Select from "react-select";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import { UpdateSku } from "../helpers/UpdateSku";
import { Button } from "@mui/material";
import { useGetSku } from "views/SkuList/hooks/useGetSku";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const FinalSelected = ({
  isLoading,
  selected,
  average,
  max,
  min,
  setescondidoinicial,
  category,
}) => {
  const theme = useTheme();
  const idcliente = "abcdef";
  const sku = useGetSku(idcliente);
  const skufinal = sku.data;
  const newJson1 = [];
  skufinal.forEach((event) => {
    event.res !== true
      ? newJson1.push({
          value: event.sku,
          label: event.sku,
        })
      : null;
  });

  // Defino mi arreglo final para enviar a la base de datos

  const [final, setfinal] = useState({
    sku: "",
    average,
    max,
    min,
    keyword: category,
    data: selected,
  });

  const handleInputChange = (event) => {
    setfinal({
      ...final,
      sku: event.value,
    });
  };

  const updatesku = async () => {
    console.log("A grabar: ", final);

    UpdateSku(final)
      .then(
        await Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then((result) => {
        setescondidoinicial({ escondidoinicial: true });
      });
  };

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45,
                   
                  }}
                  primary={
                    
                      <Stack  spacing={10} direction="row">
                        <Select
                          style = {{zIndex:100}} 
                          options={newJson1}
                          onChange={handleInputChange}
                        />
                        <Button
                          onClick={updatesku}
                          variant="contained"
                          color="primary"
                        >
                          Finish an Save
                        </Button>
                      </Stack>
                  
                  }
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey[500],
                        mt: 0.5,
                      }}
                    >
                      Total Income
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

FinalSelected.propTypes = {
  isLoading: PropTypes.bool,
};

export default FinalSelected;
