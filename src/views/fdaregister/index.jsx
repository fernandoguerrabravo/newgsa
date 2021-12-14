/* eslint-disable no-unused-vars */
import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
// import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { gridSpacing } from "store/constant";

export default function FdaRegister() {
  return (
    <div>
      {" "}
      <Grid container spacing={gridSpacing}>
        <Grid item >
         
        </Grid>
        <Grid  item >
         
        </Grid>
		</Grid>

        {/*	<Grid alignItems="center" item xs={4}>
						<Paper>
							<Grid item xs={12} md={12}>
								<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
									Links de Apoyo
								</Typography>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="http://www.sice.oas.org/trade/nafta_s/CAP04_1.asp#Cap.IV"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Sice - Reglas de Origen - TLC USA
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="http://www.trade.gov/regional-value-content"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Trade.gov - Sobre Contenido Regional - TLC USA
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="http://www2.aladi.org/SitioALADI/Reuniones/OMC/2019/PRESENTACIONORIGENOMC.pdf"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Aladi.org - Sobre Reglas de Origen
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="https://www.trade.gov/fta-certificates-origin"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											Trade.gov - Sobre Reglas de Origen y Certificación de Origen
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										{' '}
										<Link
											href="https://www.cbp.gov/document/guidance/certification-origin-template"
											underline="none"
											target="_blank"
											rel="noreferrer"
										>
											cbp.gov - Modelo de Certificado de Origen
										</Link>
									</ListItemText>
								</ListItem>
							</Grid>
						</Paper>
	</Grid> */}
  
    </div>
  );
}
