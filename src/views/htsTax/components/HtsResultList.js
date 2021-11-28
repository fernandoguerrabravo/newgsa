/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/material/styles";
import { green, red, blue } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";

export const HtsResultList = ({ htsno, description, general, special }) => {
  // <SimplePopover codigo = {id}/>

  return (
    <>
      <TableRow>
        <TableCell><Typography variant="h4">{htsno}</Typography></TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{general}</TableCell>
        <TableCell>{special}</TableCell>
      </TableRow>
    </>
  );
};
