/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, red, blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { Divider, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

import { Save } from "@mui/icons-material";



export default function SkuStoreForm({ setoculto }) {
	
	/* const [guardarsku, setguardarsku] = useState({
		id_cliente: 'abcdef',
		sku: '',
		shortdescription: '',
		fob: '',
		country_origin: '',
		upc_number: ''
	}); */

/*	const handlingChange = event => {
		setguardarsku({
			...guardarsku,
			[event.target.name]: event.target.value
		});
		console.log(guardarsku);
	}; */

/*	const SelectChange = event => {
		setguardarsku({
			...guardarsku,
			country_origin: event.value
		});
		console.log(guardarsku);
	}; */

	/*	const Save = async () => {
		if (guardarsku.sku !== '' && guardarsku.shortdescription !== '' && guardarsku.country_origin !== '') {
			SaveSku(guardarsku)
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
					setoculto({
						hiddenlistools: false,
						hiddenstoreform: false,
						hiddentable: true,
						hiddendetails: false
					});
				});
		} else {
			Swal.fire({
				title: 'oops!',
				text: 'Please complete all fields!!',
				icon: 'warning'
			});
		}
	}; */

	// const country = UseGetCountry();
	// const countryfinal = country.data;

	/*	const newJson1 = [];
	countryfinal.forEach(pais => {
		newJson1.push({
			value: pais.Name,
			label: pais.Name
		});
	}); */
/*
	const [hidden, sethidden] = useState({
		escondido: false
	});
	const [clas, useclas] = useState({
		datos: ''
	});
	const buscarhts = () => {
		sethidden({ escondido: true });
		useclas({ datos: guardarsku.shortdescription });
	}; */

	return (
		<div>
			<Paper sx={{padding: 3}}>
				<Typography variant="h5" gutterBottom >
					<strong>Perfil del Seller</strong>
				</Typography>
				<Typography style={{ textAlign: 'center' }}  gutterBottom>
					<Button startIcon={<Save />} size="small" variant="contained" color="secondary">
						Grabar Información
					</Button>
				</Typography>
				<br />
				<Divider />
				<br />
				<FormControl  variant="outlined">
					<TextField
						id="legalname"
						name="legalname"
						label="Legal Name"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.sku}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Seller`s Legal Name
					</Typography>

					<TextField
						id="dbaname"
						name="dbaname"
						label="DBA Name"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.upc_number}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input DBA Name (Optional)
					</Typography>
					<TextField
						id="contacto"
						name="contacto"
						label="Contact Name"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.upc_number}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Contact Name
					</Typography>
					<TextField
						id="email"
						name="email"
						label="email"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.upc_number}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Contact Email
					</Typography>

					<TextField
						id="address"
						name="adress"
						label="Legal Address"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.fob}
						// onChange={handlingChange}
						/* InputProps={{
							startAdornment: <InputAdornment position="start">US$</InputAdornment>
						}} */
					/>
					<Typography variant="caption" gutterBottom>
						Legal Address (Number, Street, City)
					</Typography>

					<TextField
						id="estado"
						name="estado"
						label="State"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.shortdescription}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Country's State
					</Typography>
					<TextField
						id="zipcode"
						name="zipcode"
						label="Zip Code"
						variant="outlined"
						color="primary"
						type="text"
						// value={guardarsku.shortdescription}
						// onChange={handlingChange}
					/>
					<Typography variant="caption" gutterBottom>
						Input Zip Code
					</Typography>

					<Select id="country_origin" name="country_origin"  />
					<Typography variant="caption" gutterBottom>
						Select Country
					</Typography>
				</FormControl>
			</Paper>

			<br />
		</div>
	);
}
