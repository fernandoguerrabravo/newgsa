/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Box, Grid, Paper, Button } from "@mui/material";


const ListHtsTools = () => {
	const search = () => {};

	// <SimplePopover codigo = {id}/>
	return (
		<>
			 <Link role="button" to="/htstax"> 
				<Button onClick={search} variant="contained" color="secondary">
					+ New HTS Classification
				</Button>
			 </Link> 
		</>
	);
};

export default ListHtsTools;
