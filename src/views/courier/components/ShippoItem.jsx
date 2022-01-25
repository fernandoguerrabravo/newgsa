/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Typography } from "@mui/material";
import DataTable from "react-data-table-component";
import UseGetRateIntegradores from "../hooks/UseGetRateIntegradores";
import {
	Checkbox,
	FormControlLabel,
	TextField,
	Box,
	Button
  } from "@mui/material";
const ShippoItem = ({ datosfinales }) => {
  const { data, circle } = UseGetRateIntegradores(datosfinales);

  const columnas = [
    {
      name: "Carrier",
      selector: (row) => row.provider,
    },
    {
      name: "Currency",
      selector: (row) => row.currency_local,
    },
    {
      name: "Rate",
      selector: (row) => row.amount_local,
    },
    {
      name: "Service Level",
      selector: (row) => row.servicelevel,
    },
    {
      name: "Transit Time",
      selector: (row) => row.estimated_days,
    },

    {
      name: "",
      selector: (row) => (
        <img src={row.provider_image_75} alt="carrier" width="60" height="60" />
      ),
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Paper>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Provider</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Service Level</TableCell>
                <TableCell>Transit Time</TableCell>
                <TableCell></TableCell>
				<TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {circle
                ? "LOADING ...."
                : data.map((home) => (
                    <TableRow key={home.object_id}>
                      <TableCell>{home.provider}</TableCell>
                      <TableCell>{home.currency_local}</TableCell>
                      <TableCell>{home.amount_local}</TableCell>
                      <TableCell>{home.servicelevel.name}</TableCell>
                      <TableCell>{home.estimated_days} &nbsp; Days</TableCell>
                      <TableCell>
                        <img
                          src={home.provider_image_75}
                          alt="carriers"
                        />
                      </TableCell>
					  <TableCell>
                        <Button
						color="secondary"
						variant="contained"
						//onClick={handleBack}
						sx={{ mt: 1, mr: 1 }}>
							Booking
						</Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <br />
    </>
  );
};

export default ShippoItem;
