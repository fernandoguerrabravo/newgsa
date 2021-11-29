/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import FileProvider from '../providers/file.provider';
import { getFormattedSize } from '../helpers/files.helper';



const Lister = ({ idcliente, codigo }) => {
	
	const [files, setFiles] = useState([]);
	const [refId, setRefId] = useState(idcliente);
	const [sku, setSku] = useState(codigo);
	const [submitting, setSubmitting] = useState(false);

	/*const handleRefIdChange = event => {
		if (event.isTrusted) {
			setRefId(event.target.value);
		}
	};

	const handleSkuChange = event => {
		if (event.isTrusted) {
			setSku(event.target.value);
		}
	}; */

	const getFiles = async event => {
		event.preventDefault();
		setSubmitting(true);
		try {
			const files = (await new FileProvider().getFiles(refId, sku)).data.value;
			setFiles(files);
		} catch (reason) {
			console.warn(reason);
		}
		setSubmitting(false);
	};

	return (
		<>
			<Grid item lg={12} md={12} sm={12} xs={12}>
			<Paper sx={{padding: 3}}>
			
				<Button color="secondary" variant="contained" onClick={getFiles}>
					{submitting ? 'Buscando...' : 'Actualiza Lista de Archivos'}
				</Button>
				<p />
				<Typography>{files.length > 0 ? 'Archivos Recuperados' : 'No hay Archivos para Mostrar'}</Typography>
				{files.length > 0 ? (
					<Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow>
								<TableCell>File Name</TableCell>
								<TableCell>File Size</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{files.map((file, index) => {
								return (
									<TableRow key={index}>
										<TableCell>{file.name + file.extension}</TableCell>
										<TableCell>{getFormattedSize(file.size, 2)}</TableCell>
										<TableCell>
											<Button href={file.file} download variant="outlined">
												Download
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
		 				</TableBody>
					</Table>
				) : null}
			
			</Paper>
			</Grid>
		</>
	);
};

export default Lister;
