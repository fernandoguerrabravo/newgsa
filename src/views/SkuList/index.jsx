import SkuListTable from "./components/SkuListTable";
//import PreviewCard from './components/SkuListDetails';
import SkuStoreForm from "./components/SkuStoreForm";
//import SkuListTools from "./components/SkuListTools";

import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
} from "@mui/material";
import SubCard from "ui-component/cards/SubCard";

export const SkuListApp = () => {
  /* const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},

		paper: {
			padding: theme.spacing(3),
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
    borderColor: theme.palette.primary.main
    
  };

  // eslint-disable-next-line no-unused-vars
  const [skudetails, setskudetails] = useState({
    skunumber: "",
    idcliente: "abcdef",
    skudetalle: [],
  });

  const [oculto, setoculto] = useState({
    //hiddenlistools: false,
    //hiddenstoreform: false,
    hiddentable: true,
    //hiddendetails: false,
  });

  return (
    <>
      <SubCard  title="Productos">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            {oculto.hiddentable ? (
              <SkuListTable
                oculto={oculto}
                setoculto={setoculto}
                setskudetails={setskudetails}
              />
            ) : null}

         {oculto.hiddenstoreform ? (
              <SkuStoreForm setoculto={setoculto} /> 
			) : null }
          </CardContent>
        </Card>
      </SubCard>

      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
         {oculto.hiddenlistools
            ? 
               <SkuListTools setoculto={setoculto} />
              
			  : null}
        </Grid>
        <Grid item xs={12}>
          {oculto.hiddendetails
            ? 
                <PreviewCard skudetails={skudetails} /> 
              
            : null}
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
		  </Grid> */}
    </>
  );
};

export default SkuListApp;
