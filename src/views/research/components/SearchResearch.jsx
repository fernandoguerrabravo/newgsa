import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { GiftGrid2 } from "./GiftGrid2";
import SelectedResearch from './SelectedResearch';
import { AddCategory } from "./AddCategory";
import { gridSpacing } from "store/constant";
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

const SearchResearch = ({ setescondidoinicial }) => {
  /* const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	})); */

  const theme = useTheme();
  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  };

  const [categories, setCategories] = useState({
    selected: [],
    keyword: "",
    hidden: false,
    hidden1: false,
    hidden2: true,
  });
  
  const [seleccionado, setseleccionado] = React.useState([]);

  const botonseleccionar = () => {

       setCategories({
         ...categories,
         hidden: false,
         hidden1: true
       })

  }

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          {categories.hidden2 ? (
            <AddCategory setCategories={setCategories} />
          ) : null}
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={gridSpacing}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Button onClick={botonseleccionar} sx={{ backgroundColor: "#D84315" }} variant="contained">
            Seleccione Productos
          </Button>
        </Grid>
        {categories.hidden && (
          <GiftGrid2
            setseleccionado = {setseleccionado}
            setCategories={setCategories}
            category={categories.keyword}
          />
        )}
      </Grid>
      <Grid item xs={12}>
     { categories.hidden1 ? (
					<SelectedResearch
						setescondidoinicial={setescondidoinicial}
						selected={categories.selected}
						category={categories.keyword}
            seleccionado = {seleccionado}
					/>
				) : null }
      </Grid>
    </>
  );
};

export default SearchResearch;
