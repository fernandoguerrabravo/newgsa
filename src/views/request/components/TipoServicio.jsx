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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { green, pink, orange, white } from "@mui/material/colors";

const TipoServicio = ({ hidden, sethidden }) => {
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
      <SubCard title="Seleccione Requerimiento a Solicitar">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            <RadioGroup
              aria-label="servicios"
              name="servicios"
              //value={value.tipo}
              //onChange={handleChange}
            >
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: orange[500] }}>
                      <AdminPanelSettingsIcon sx={{ color: "#ffffff" }} />
                    </Avatar>

                    <FormControlLabel
                      value="a"
                      control={<Radio />}
                      label="Foreing Import of Record and Import Bond"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: orange[500] }}>
                      <LocalShippingIcon sx={{ color: "#ffffff" }} />
                    </Avatar>

                    <FormControlLabel
                      value="b"
                      control={<Radio />}
                      label="International Shipping"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: orange[500] }}>
                      <LocalCafeIcon sx={{ color: "#ffffff" }} />
                    </Avatar>
                    <FormControlLabel
                      value="c"
                      control={<Radio />}
                      label="FDA Preparation"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: orange[500] }}>
                      <PolicyIcon sx={{ color: "#ffffff" }} />
                    </Avatar>
                    <FormControlLabel
                      value="d"
                      control={<Radio />}
                      label="Trade Compliance"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: orange[500] }}>
                      <PolicyIcon sx={{ color: "#ffffff" }} />
                    </Avatar>

                    <FormControlLabel
                      value="e"
                      control={<Radio />}
                      label="International Returns"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: orange[500] }}>
                      <PolicyIcon sx={{ color: "#ffffff" }} />
                    </Avatar>
                    <FormControlLabel
                      value="f"
                      control={<Radio />}
                      label="Storage and Warehouse"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </RadioGroup>
          </CardContent>
        </Card>
      </SubCard>
    </div>
  );
};

export default TipoServicio;
