import React from "react";
import UseGetMexico from "../hooks/UseGetMexico";
// import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

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
/*const newJson1 = [
	{
		value: '2300',
		label: 'CDMX C.P. 02300'
	},
	{
		value: '45679',
		label: 'JALISCO C.P. 45679'
	},
	{
		value: '66628',
		label: 'NUEVA LEON C.P. 66628'
	}
];

const newJson2 = [
	{
		value: 'p',
		label: 'Pallets'
	},
	{
		value: 'b',
		label: 'Boxes'
	}
]; */

const MxExpoPalletTotal = (valued) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  /* const theme = useTheme(); */
  /* const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  }; */

  const tarifa = UseGetMexico(valued);

  return (
    <>
      Tarifa MX-Laredo TX &nbsp;&nbsp;
      <Typography style={{ color: "#FF9900" }}>
        <strong>{formatter.format(tarifa.data)}</strong>{" "}
      </Typography>
    </>
  );
};

export default MxExpoPalletTotal;
