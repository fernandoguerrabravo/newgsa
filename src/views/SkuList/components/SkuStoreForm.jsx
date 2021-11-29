import Select from 'react-select';
import Swal from 'sweetalert2';
import SaveIcon from '@mui/icons-material/Save';
import UseGetCountry from '../hooks/useGetCountry';
import SaveSku from '../helpers/SaveSku';
import SkuStoreFiles from './SkuStoreFiles';
import React, { useState } from "react";
import {
	InputAdornment,
	TextField,
	FormControl,
	Button,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import { gridSpacing } from "store/constant";

/* const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
});*/

/*const styles2 = makeStyles(theme => ({
	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	formControl2: {
		minWidth: 100,
		padding: theme.spacing(1)
	},

	formControl1: {
		minWidth: 100,
		padding: theme.spacing(1)
	},
	button: {
		leftmargin: 200,
		padding: theme.spacing(1),
		textAlign: 'right'
	},

	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary
	}
}));
*/
export default function SkuStoreForm({ setoculto }) {
	

	const [guardarsku, setguardarsku] = useState({
		id_cliente: 'abcdef',
		sku: '',
		shortdescription: '',
		fob: '',
		country_origin: '',
		upc_number: ''
	});

	const handlingChange = event => {
		setguardarsku({
			...guardarsku,
			[event.target.name]: event.target.value
		});
		console.log(guardarsku);
	};

	const SelectChange = event => {
		setguardarsku({
			...guardarsku,
			country_origin: event.value
		});
		console.log(guardarsku);
	};

	const Save = async () => {
		if (guardarsku.sku !== '' && guardarsku.shortdescription !== '' && guardarsku.country_origin !== '') {
			SaveSku(guardarsku)
				.then(
					await Swal.fire({
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
	};

	const country = UseGetCountry();
	const countryfinal = country.data;

	const newJson1 = [];
	countryfinal.forEach(pais => {
		newJson1.push({
			value: pais.Name,
			label: pais.Name
		});
	});

	// eslint-disable-next-line no-unused-vars
	const [hidden, sethidden] = useState({
		escondido: false
	});
	// eslint-disable-next-line no-unused-vars
	const [clas, useclas] = useState({
		datos: ''
	});
	/* const buscarhts = () => {
		sethidden({ escondido: true });
		useclas({ datos: guardarsku.shortdescription });
	}; */

	return (
		<div>
			<Grid container spacing={gridSpacing}>
				<Grid item xs={3}>
						<Typography variant="h5" gutterBottom >
							<strong>Basic Information</strong>
						</Typography>
						<Typography style={{ textAlign: 'center' }}  gutterBottom>
							<Button
								onClick={Save}
								startIcon={<SaveIcon />}
								size="small"
								variant="contained"
								color="secondary"
							>
								Save Product
							</Button>
						</Typography>
						<br />
						<Divider />
						<br />
						<FormControl  variant="outlined">
							<TextField
								id="sku"
								name="sku"
								label="Product Code (SKU)"
								variant="outlined"
								color="secondary"
								type="text"
								value={guardarsku.sku}
								onChange={handlingChange}
							/>
							<Typography variant="caption" gutterBottom>
								Input Your SKU Code
							</Typography>

							<TextField
								id="upc_number"
								name="upc_number"
								label="UPC Number"
								variant="outlined"
								color="secondary"
								type="number"
								value={guardarsku.upc_number}
								onChange={handlingChange}
							/>
							<Typography variant="caption" gutterBottom>
								Input UPC Code (Optional)
							</Typography>

							<TextField
								id="fob"
								name="fob"
								label="FOB Value"
								variant="outlined"
								color="secondary"
								type="number"
								value={guardarsku.fob}
								onChange={handlingChange}
								InputProps={{
									startAdornment: <InputAdornment position="start">US$</InputAdornment>
								}}
							/>
							<Typography variant="caption" gutterBottom>
								Unit FOB Value
							</Typography>

							<TextField
								id="shortdescription"
								name="shortdescription"
								label="Short Description"
								variant="outlined"
								color="secondary"
								type="text"
								value={guardarsku.shortdescription}
								onChange={handlingChange}
							/>
							<Typography variant="caption" gutterBottom>
								Input the Best Description
							</Typography>

							<Select
								color="secondary"
								id="country_origin"
								name="country_origin"
								options={newJson1}
								onChange={SelectChange}
								sx = {{zIndex: 1}}
							/>
							<Typography variant="caption" gutterBottom>
								Select Country Origin
							</Typography>
						</FormControl>
				</Grid>
				<br />
				<Grid item xs={6}>
					<Divider />
					<br />
					<SkuStoreFiles skus={guardarsku.sku} idcliente={guardarsku.id_cliente} />
				</Grid>
			</Grid>
		</div>
	);
}
