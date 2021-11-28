/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { green, red, blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, Button, Divider } from "@mui/material";
import HtsDialogEnd from './HtsDialogEnd';

/* const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(3)
	},

	button: {
		margin: theme.spacing(1, 1, 0, 0),
		color: red[600]
	},

	color: {
		color: green[600]
	}
})); */

export default function HtsGetListHts({ htschino, eventos, categorias, encabezado }) {
	
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState('Choose wisely');
	const [descripcion, setDescription] = useState('');

	const handleRadioChange = event => {
		setValue(event.target.value);
		setHelperText(' ');
		setError(false);
		eventos.forEach(htsCode => {
			if (htsCode.htsno === event.target.value) {
				setDescription(htsCode);
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	// genero el arreglo con la info de todo lo que presentare

	// console.log("data 10 digitos :", eventos);

	return (
		<form onSubmit={handleSubmit}>
			<FormControl component="fieldset" error={error} >
				<Typography variant="h5" >
					Select Suggested US HTS{' '}
				</Typography>
				<br />
				<Divider></Divider>
				<RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
					{eventos.map(img => (
						<FormControlLabel key={img.htsno} value={img.htsno} control={<Radio />} label={img.htsno} />
					))}
				</RadioGroup>
				<br />
				<FormHelperText>{helperText}</FormHelperText> <br />
				{  value && (
					<HtsDialogEnd
						evento1={value}
						evento2={categorias}
						evento3={descripcion.description}
						evento4={encabezado}
						evento5={htschino}
					/>
				) }
				{/* value && <HtsDialogFix evento1={value} evento2={categorias} evento3={descripcion.description} evento4={encabezado} /> */}
			</FormControl>
		</form>
	);
}
