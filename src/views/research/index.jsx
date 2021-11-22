import ListResearchTools from "./components/ListResearchTools";
import ListResearchTable from './components/ListResearchTable';
 import SearchResearch from './components/SearchResearch';

import React, { useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";

import { useTheme } from "@mui/material/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
import { red, blue } from "@mui/material/colors";
import SubCard from "ui-component/cards/SubCard";
import { gridSpacing } from "store/constant";

export const GifExpertApp = () => {
  /* const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(3),
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	}));
    */
  const theme = useTheme();

  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  };

  const [escondidoinicial, setescondidoinicial] = useState({
    escondidoinicial: true,
  });

  const [boton, setboton] = useState({
    volver: true,
  });

  const [pdf, setpdf] = useState({
    loading: true,
    sku: "",
    min: "",
    average: "",
    max: "",
  });

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ListResearchTools
            setpdf={setpdf}
            volv={boton.volver}
            setboton={setboton}
            setescondidoinicial={setescondidoinicial}
          />
        </Grid>

        <Grid item xs={12}>
          {escondidoinicial.escondidoinicial ? (
           
              <><ListResearchTable pdf={pdf} setpdf={setpdf} setboton={setboton} /><br /></>
           
          ) : null}
        </Grid> <br /><br />

        <Grid item xs={12}>
          {escondidoinicial.escondidoinicial
            ? null
            : 
                 <SearchResearch setescondidoinicial={setescondidoinicial} /> 
              }
        </Grid>
      </Grid>
    </>
  );
};

export default GifExpertApp;
