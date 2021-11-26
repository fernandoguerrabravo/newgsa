import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

const ListHtsTools = ({ setencabezado }) => {
	const search = () => {
		setencabezado({
			...setencabezado,
			hidden3: false,
			hidden2: true
		});
	};
	return (
		<>
			{/* <Grid container direction="row" justify="flex-end" alignItems="right" spacing={2}> */}
			<Link role="button" to="/htsTax">
				<Button onClick={search} variant="contained" color="secondary">
					+ Nueva Búsqueda
				</Button>
			</Link>
			&nbsp; &nbsp; &nbsp;
			<Link role="button" to="/htstaxlist">
				<Button onClick={search} variant="contained" color="secondary">
					+ Volver a Lista
				</Button>
			</Link>
			{/* </Grid> */}
		</>
	);
};

export default ListHtsTools;
