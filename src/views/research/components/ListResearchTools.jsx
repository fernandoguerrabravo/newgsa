import React, { useState, useEffect } from 'react';
import { useTheme } from "@mui/material/styles";
import {
  
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

import { gridSpacing } from "store/constant";
 
const ListResearchTools = ({ setpdf, volv, setboton, setescondidoinicial }) => {
	
	const theme = useTheme();
	
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
