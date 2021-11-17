import { makeStyles } from '@material-ui/core/styles';
// import ListResearchTools from './components/ListResearchTools';
// import ListResearchTable from './components/ListResearchTable';
// import SearchResearch from './components/SearchResearch';
import SkuStoreForm from "./components/SkuStoreForm";

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
import { gridSpacing } from "store/constant";




export const GifExpertApp = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(3),
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	}));

	const classes = useStyles();

	const [escondidoinicial, setescondidoinicial] = useState({
		escondidoinicial: true
	});

	const [boton, setboton] = useState({
		volver: true
	});

	const [pdf, setpdf] = useState({
		loading: true,
		sku: '',
		min: '',
		average: '',
		max: ''
	});

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<ListResearchTools
							setpdf={setpdf}
							volv={boton.volver}
							setboton={setboton}
							setescondidoinicial={setescondidoinicial}
						/>
					</Paper>
				</Grid>

				<Grid item xs={12}>
					{escondidoinicial.escondidoinicial ? (
						<Paper className={classes.paper}>
							<ListResearchTable pdf={pdf} setpdf={setpdf} setboton={setboton} />
						</Paper>
					) : null}
				</Grid>

				<Grid item xs={12}>
					{escondidoinicial.escondidoinicial ? null : (
						<SearchResearch setescondidoinicial={setescondidoinicial} />
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default GifExpertApp;
