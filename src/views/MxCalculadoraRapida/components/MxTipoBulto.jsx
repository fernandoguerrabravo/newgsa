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
} from "@mui/material";
import { gridSpacing } from "store/constant";
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
		margin: theme.spacing(1),
		minWidth: 400
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 300,
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
		color: theme.palette.text.secondary,
		padding: theme.spacing(3),
		flexGrow: 1
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
const MxTipoBulto = ({ hidden, sethidden }) => {
  const theme = useTheme();
  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.primary.main
      
  };

  const [value, setvalue] = React.useState({
    tipo: "",
  });

  const handleChange = (e) => {
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

  return (
    <div>
      <SubCard title="Seleccione Tipo de Embarque">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value.tipo}
              onChange={handleChange}
            >
              <Grid container spacing={gridSpacing}>
                <Grid item>
                  <Avatar>
                    <img
                      src="https://fotos-ecl.s3.amazonaws.com/icons8-plataforma-500.png"
                      height="20"
                      width="20"
                      alt=""
                    />
                  </Avatar>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    value="p"
                    control={<Radio />}
                    label="Pallets Consolidated"
                  /> <p />
                  <Typography
                    style={{ color: "#FF9900", alignItems: "center" }}
                    variant="caption"
                    gutterBottom
                  >
                    <strong>LTL Services Max 12 Pallets</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar>
                    <img
                      src="https://fotos-ecl.s3.amazonaws.com/icons8-camio%CC%81n-interestatal.svg"
                      height="20"
                      width="20"
                      alt=""
                    />
                  </Avatar>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    value="f"
                    control={<Radio />}
                    label="FTL Truck"
                  />
                  <p />
                  <Typography
                    style={{ color: "#FF9900", alignItems: "center" }}
                    variant="caption"
                    gutterBottom
                  >
                    <strong>Full Truck Services 13 to 22 Pallets</strong>
                  </Typography>
                </Grid>
              </Grid>
            </RadioGroup>
          </CardContent>
        </Card>
      </SubCard>
    </div>
  );
};

export default MxTipoBulto;
