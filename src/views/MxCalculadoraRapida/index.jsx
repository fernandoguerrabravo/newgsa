/* eslint-disable no-var */
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
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
/*
import MxTipoBulto from "./components/MxTipoBulto";
import MxExpoPallet from "./components/MxExpoPallet";
import MxExpoPalletFTL from "./components/MxExpoPalletFTL";
import MxExpoShipping from "./components/MxExpoShipping";
import MxSummary from "./components/MxSummary";
*/
import { gridSpacing } from 'store/constant';

/*
import MxTipoBulto from './components/MxTipoBulto';
import MxExpoPallet from './components/MxExpoPallet';
import MxExpoPalletFTL from './components/MxExpoPalletFTL';
import MxExpoShipping from './components/MxExpoShipping';
import MxSummary from './components/MxSummary';
*/
/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	}
})); */



const MxCalculadoraApp = () => {


    const theme = useTheme();

    const cardStyle = {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
    };


    
     const paper =  {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary
        };
    

	const [finales, setfinales] = useState({
		total: 0,
		totalseguro: 0,
		totalhandlingout: 0,
		subtotaltotal: 0,
		primeramilla: 0,
		totaltotal: 0
	});

	var [handout, sethandout] = useState({
		out: 0
	});
	const [outlista, setoutlista] = useState({
		lista: []
	});

	var [hidden, sethidden] = useState({
		ltl: false,
		ftl: false,
		expo: false,
		summary: false
	});
	return (
		<div> 
			<Grid container spacing={gridSpacing}>
				<Grid item xs={6}>
					<Paper className={paper}>
						{/* <MxTipoBulto hidden={hidden} sethidden={sethidden} /> */}
					</Paper>{' '}
				</Grid>
				<br />

				{hidden.summary ? (
					<Grid item xs={6}>
						<Paper >
							{' '}
						{/*	<MxSummary setfinales={setfinales} finales={finales} handout={handout} />*/}{' '}
						</Paper>
					</Grid>
				) : null}
				<br />
				{hidden.ftl ? (
					<Grid item xs={6}>
						<Paper>
							{' '}
							{/*<MxExpoPalletFTL finales={finales} setfinales={setfinales} />*/}{' '}
						</Paper>
					</Grid>
				) : null}
				<br />
				{hidden.ltl ? (
					<Grid item xs={6}>
						<Paper>
							{' '}
							{/*<MxExpoPallet finales={finales} setfinales={setfinales} />*/}{' '}
						</Paper>
					</Grid>
				) : null}
				<br />
				{hidden.expo ? (
					<Grid item xs={6}>
						<Paper>
							{/*<MxExpoShipping
								handout={handout}
								sethandout={sethandout}
								lista={outlista.lista}
								setoutlista={setoutlista}
							/>*/}
						</Paper>
					</Grid>
				) : null}

				<Grid item xs={12} />
			</Grid>
		</div>
	);
};

export default MxCalculadoraApp;

// {encabezado.hidden && <HtsGrid encabezado = {encabezado}/>}