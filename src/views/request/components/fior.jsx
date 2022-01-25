/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useTheme } from "@mui/material/styles";
import SubCard from "ui-component/cards/SubCard";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Avatar,
  Box,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import { gridSpacing } from "store/constant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import PolicyIcon from "@mui/icons-material/Policy";
import { green, pink, orange } from "@mui/material/colors";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Sellerdocuments from "./sellerdocuments";

const Fior = ({ hidden, sethidden }) => {
  const theme = useTheme();
  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  };

  const [value, setvalue] = React.useState({
    tipo: "",
  });

  /* const handleChange = (e) => {
    if (e.target.value === "p") {
      sethidden({
        ...hidden,
        ltl: true,
        ftl: false,
        expo: true,
        summary: true,
      });
      setvalue({
        tipo: e.target.value,
      });
    } else {
      sethidden({
        ...hidden,
        ltl: false,
        ftl: true,
        expo: true,
        summary: true,
      });
      setvalue({
        tipo: e.target.value,
      });
    }
  };
*/
const { logout, user } = useAuth();

  return (
    <div>
      <Box
        sx={{
          border: "1px solid",
          borderColor: theme.palette.primary.main,
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: '0%'
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Foreign Import of Record and Customs Bond Services include: " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <PolicyIcon color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="Número de Registro de Aduanas en USA como Importador Extranjero" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PolicyIcon color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="Continuos Bond - For 1 Year" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PolicyIcon color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="Power Attorney Despachante Aduanas Amazon (USA) - For 1 Year - (Clareo de Aduanas se cotizan independiente)" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem>
           <Sellerdocuments skus="legales" idcliente={user.id}></Sellerdocuments>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Enviar Requerimiento" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default Fior;
