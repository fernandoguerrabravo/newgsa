/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { green, red, blue } from "@mui/material/colors";
import UseFetchHts from "../hooks/UseFetchHts";
//import { HtsResultList } from './HtsResultList';
import { UseFetchHtsCategory } from "../hooks/UseFetchHtsCategory";
import { HtsGetListCategories } from "./HtsGetListCategories";
import HtsHeader from "./HtsHeader";
//import HtsGetListHts from './HtsGetListHts';
import UseFetchChina from "../hooks/USeFetchChina";

const HtsGrid = ({ encabezado, setencabezado }) => {
  const { data, loading, finales } = UseFetchHts(encabezado.hts);
  const { categorias } = UseFetchHtsCategory(encabezado.hts);
  const htschinos = UseFetchChina(encabezado.hts);

  return (
    // Aqui tengo las dos columnas que vamos a renderizar //
    // Primera Columna Resumen de la Solicitud y Muestra los TAXES
    <>
      <Grid item xs={4}>
        <Paper>
          <HtsHeader event={encabezado} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{<HtsGetListCategories event={categorias} />}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          {/* <HtsGetListHts
						htschino={htschinos}
						eventos={finales}
						categorias={categorias}
						encabezado={encabezado}
					/> */}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h4>Suggested HTS Code</h4>
                  </TableCell>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {/* data.map(img => (
									<HtsResultList key={img.htsno} {...img} />
								)) */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </>
  );
};

export default HtsGrid;

/*
{
    data.map(img => (
        <HtsResultList
            key={img.htsno}
            {...img}
        />
    ))
} */
/*
   <TableBody>

                        {
                            data.map(img => (
                                <HtsResultList
                                    key={img.hts}
                                    {...img}
                                />
                            ))
                        }
                    </TableBody> */

/*              <TableBody>

              {
                  data.map(img => (
                      <HtsResultList
                          key={img.htsno}
                          {...img}
                      />
                  ))
              }
          </TableBody> */
