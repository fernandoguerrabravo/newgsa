import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
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


const SkuListTools = ({ setoculto }) => {
	

	const back = () => {
		setoculto({
			hiddenlistools: false,
			hiddenstoreform: false,
			hiddentable: true,
			hiddendetails: false
		});
	};

	return (
		<>
			<Paper>
				<Button onClick={back} variant="contained" color="primary">
					Back to List
				</Button>
			</Paper>
		</>
	);
};

export default SkuListTools;
