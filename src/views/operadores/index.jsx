/* eslint-disable no-unused-vars */

//import PreviewCard from './components/SkuListDetails';

//import SkuListTools from "./components/SkuListTools";
import useAuth from "../../hooks/useAuth";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent } from "@mui/material";
import SubCard from "ui-component/cards/SubCard";
import SkuListTable from "./componentes/SkuListTable";
import Carrierform from "./componentes/carrierform";

export const SkuListApp = () => {
  const theme = useTheme();

  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  };
  const { logout, user } = useAuth();

  // eslint-disable-next-line no-unused-vars
  const [skudetails, setskudetails] = useState({
    skunumber: "",
    idcliente: user.id,
    skudetalle: [],
  });

  const [oculto, setoculto] = useState({
    //hiddenlistools: false,
    //hiddenstoreform: false,
    hiddentable: true,
    hiddenform: false,
    //hiddendetails: false,
  });

  return (
    <>
      <SubCard title="Operadores Conectados">
        <Card sx={cardStyle}>
          <CardContent
            sx={{ minHeight: 240, color: theme.palette.common.black }}
          >
            {oculto.hiddentable ? (
              <SkuListTable
                oculto={oculto}
                setoculto={setoculto}
                idcliente={user.id}
              />
            ) : null}
            {oculto.hiddenform ? (
              <Carrierform
                oculto={oculto}
                setoculto={setoculto}
                idcliente={user.id}
              ></Carrierform>
            ) : null}
          </CardContent>
        </Card>
      </SubCard>
    </>
  );
};

export default SkuListApp;
