/* eslint-disable no-alert */
import React from "react";
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
} from "@mui/material";
import { gridSpacing } from "store/constant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import PolicyIcon from "@mui/icons-material/Policy";
import { green, pink, orange } from "@mui/material/colors";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


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
  return (
    <div>
      <SubCard title="FOREIGN IMPORT OF RECORD REQUEST">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} lg={12} md={12}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: orange[500] }}>
                    <AdminPanelSettingsIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: orange[500] }}>
                    <LocalShippingIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: orange[500] }}>
                    <LocalCafeIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: orange[500] }}>
                    <PolicyIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: orange[500] }}>
                    <PolicyIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: orange[500] }}>
                    <PolicyIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </SubCard>
    </div>
  );
};

export default Fior;
