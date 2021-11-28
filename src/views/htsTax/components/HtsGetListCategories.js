/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const HtsGetListCategories = ({ event }) => {
  // <SimplePopover codigo = {id}/>
  // console.log("PERRO DEL PERRO");
  // console.log(event);

  return (
    <>
      <TableRow>
        <TableCell>
          <ul>
            <li>
              {" "}
              {event.L2}
            </li>
            <li>
              {" "}
              {event.L3}
            </li>
          </ul>
        </TableCell>
      </TableRow>
    </>
  );
};
