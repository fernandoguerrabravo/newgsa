import PropTypes from "prop-types";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  linearProgressClasses,
} from "@mui/material";

// assets

// styles
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.dark.light : "#fff",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
  },
}));

const CardStyle = styled(Card)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? theme.palette.dark.main
      : theme.palette.primary.light,
  marginBottom: "22px",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "157px",
    height: "157px",
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.dark
        : theme.palette.primary[200],
    borderRadius: "50%",
    top: "-105px",
    right: "-96px",
  },
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
  const theme = useTheme();

  return (
    <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.dark.light
                    : theme.palette.primary[800],
              }}
            >
              Progress
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="inherit">{`${Math.round(
              value
            )}%`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BorderLinearProgress variant="determinate" value={value} {...others} />
      </Grid>
    </Grid>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number,
};

// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
  const theme = useTheme();

  return (
    <CardStyle>
      <CardContent sx={{ p: 2 }}>
        <List sx={{ p: 0, m: 0 }}>
          <ListItemText
            sx={{ mt: 0 }}
            primary={
              <Typography
                variant="subtitle1"
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.dark.light
                      : theme.palette.primary[800],
                }}
              >
                Powered by
              </Typography>
            }
            secondary={<Typography variant="caption"></Typography>}
          />
          <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
            <img
              src="https://fotos-ecl.s3.amazonaws.com/ecl-logo-transparent-light.svg"
              width="190"
              alt="logo ecl"
            />
          </ListItem><br></br>
          <ListItemText
            sx={{ mt: 0 }}
            primary={
              <Typography
                variant="subtitle1"
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.dark.light
                      : theme.palette.primary[800],
                }}
              >
                Partner of
              </Typography>
            }
            secondary={<Typography variant="caption"></Typography>}
          />
          
          <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
            <img
              src="https://fotos-ecl.s3.amazonaws.com/amazon-spn.png"
              width="150"
              alt="logo ecl"
            />
          </ListItem>
        </List>

      </CardContent>
    </CardStyle>
  );
};

export default MenuCard;
