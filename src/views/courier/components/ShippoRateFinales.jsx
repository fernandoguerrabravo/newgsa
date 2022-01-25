/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';



const ShippoRateFinales = ({
	shipment,
	currency_local,
	amount_local,
	provider,
	provider_image_75,
	servicelevel,
	estimated_days
}) => {
	

	return (
		<>
			<TableRow>
				<TableCell component="th" scope="row">
					{provider}
				</TableCell>
				<TableCell align="right">{currency_local}</TableCell>
				<TableCell align="right">{(amount_local * 1).toFixed(2)}</TableCell>
				<TableCell align="right">{servicelevel}</TableCell>
				<TableCell align="right">{estimated_days} &nbsp; Days</TableCell>
				<TableCell align="right">
					<img src={provider_image_75} alt="Girl in a jacket" width="60" height="60" />
				</TableCell>
			</TableRow>
		</>
	);
};

export default ShippoRateFinales;
