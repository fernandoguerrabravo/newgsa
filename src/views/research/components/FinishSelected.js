/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Select from 'react-select';

import { green, red, blue } from '@mui/material/colors';
import Swal from 'sweetalert2';
import { UpdateSku } from '../helpers/UpdateSku';
import {
	FormControl,
	Button,
	Grid,
	Typography,
	Paper,
	Avatar,
	Tooltip
  } from "@mui/material";
import { useGetSku } from 'views/SkuList/hooks/useGetSku';

/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	table: {
		minWidth: 750,
		padding: theme.spacing(2)
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 450
	},
	formControl2: {
		margin: theme.spacing(1),
		minWidth: 340,
		padding: theme.spacing(1)
	},
	media: {
		width: '30%',
		height: 0,
		paddingTop: '56.25%' // 16:9
	}
})); */

const FinishSelected = ({ selected, average, max, min, setescondidoinicial, category }) => {
	
	const idcliente = 'abcdef';
	const sku = useGetSku(idcliente);
	const skufinal = sku.data;
	const newJson1 = [];
	skufinal.forEach(event => {
		event.res !== true
			? newJson1.push({
					value: event.sku,
					label: event.sku
			  })
			: null;
	});

	// Defino mi arreglo final para enviar a la base de datos

	const [final, setfinal] = useState({
		sku: '',
		average,
		max,
		min,
		keyword: category,
		data: selected
	});

	const handleInputChange = event => {
		setfinal({
			...final,
			sku: event.value
		});
	};

	const updatesku = async () => {
		console.log('A grabar: ', final);

		UpdateSku(final)
			.then(
				await Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your work has been saved',
					showConfirmButton: false,
					timer: 1500
				})
			)
			.then(result => {
				setescondidoinicial({ escondidoinicial: true });
			});
	};

	return (
		<>
			<Select options={newJson1} onChange={handleInputChange} />
			<Typography  style={{ color: red[400] }} variant="caption" gutterBottom>
				<strong>Search Your Saved SKU Code</strong>
			</Typography>
			<Button onClick={updatesku} variant="contained" color="primary">
				Finish an Save
			</Button>
		</>
	);
};

export default FinishSelected;
