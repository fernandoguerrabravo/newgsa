import React, {  } from 'react';
// import { useTheme } from "@mui/material/styles";
import {
  
  Button,
} from "@mui/material";

 
const ListResearchTools = ({ setpdf, volv, setboton, setescondidoinicial }) => {
	
	// const theme = useTheme();
	
	const research = () => {
		setescondidoinicial({
			escondidoinicial: false
		});

		setboton({
			volver: false
		});
	};

	const volver = () => {
		setescondidoinicial({
			escondidoinicial: true
		});

		setboton({
			volver: true
		});

		setpdf({
			loading: true
		});
	};

	return (
		<>
			{volv ? (
				<Button onClick={research} variant="contained" color="secondary">
					+ New Search
				</Button>
			) : null}
			{volv ? null : (
				<Button onClick={volver} variant="contained" color="secondary">
					Back to List
				</Button>
			)}
		</>
	);
};

export default ListResearchTools;
