/* eslint-disable no-unused-vars */
import ListResearchTools from "./components/ListResearchTools";
import ListResearchTable from "./components/ListResearchTable";
import SearchResearch from "./components/SearchResearch";
import React, { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import useAuth from "../../hooks/useAuth";

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
  // const theme = useTheme();

  /*  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  };*/
  const { logout, user } = useAuth();

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
            <>
              <ListResearchTable
                pdf={pdf}
                setpdf={setpdf}
                setboton={setboton}
                idcliente={user.id}
              />
              <br />
            </>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          {escondidoinicial.escondidoinicial ? null : (
            <SearchResearch
              setescondidoinicial={setescondidoinicial}
              idcliente={user.id}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default GifExpertApp;
