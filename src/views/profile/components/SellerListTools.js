/* eslint-disable no-unused-vars */
import React, {  } from 'react';
// import { useTheme } from "@mui/material/styles";
import {
  
  Button,
} from "@mui/material";

 
const SellerListTools = ({ oculto, setoculto }) => {
	
	// const theme = useTheme();
	
	const nuevoseller = () => {
		setoculto({
			...oculto,
			hiddentable: false,
			hiddenboton: false,
			hiddenperfilform: true
		});
	};

	const volver = () => {
		setoculto({
			...oculto,
			hiddentable: true,
			hiddenboton: true,
			hiddenperfilform: false
		});

	};

	return (
		<>
			{oculto.hiddenboton ? (
				<Button  onClick={nuevoseller} variant="contained" color="secondary">
					+ Agregar Seller
				</Button>
			) : null}
			{oculto.hiddenboton ? null : (
				<Button  onClick={volver} variant="contained" color="secondary">
					Volver
				</Button>
			)}
		</>
	);
};

export default SellerListTools;