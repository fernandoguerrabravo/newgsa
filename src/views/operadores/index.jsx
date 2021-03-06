/* eslint-disable no-unused-vars */

//import PreviewCard from './components/SkuListDetails';

//import SkuListTools from "./components/SkuListTools";

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent } from "@mui/material";
import SubCard from "ui-component/cards/SubCard";
import SkuListTable from "./componentes/SkuListTable";
import Carrierform from "./componentes/carrierform";
import Validarups from "./componentes/validarups";
import useAuth from "../../hooks/useAuth";
import Validarfedex from "./componentes/validarfedex";
import Validardhl from "./componentes/validardhl";

export const Operadores = () => {
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

  const [fedex, setfedex] = useState({
    carrier: "",
    account_id: "",
    parameters: {
      meter: "",
      first_name: "", //Your first name
      last_name: "", // Your last name
      phone_number: "", // Your phone number
      from_address_st: "", // Shipping address must match what you have on file with FedEx (see fedex.com profile)
      from_address_city: "",
      from_address_state: "",
      from_address_zip: "",
      from_address_country_iso2: "",
    },
    active: true,
  });

  const [ups, setups] = useState({
    carrier: "",
    account_id: "", //LOGIN
    parameters: {
      account_number: "",
      password: "",
    },
    active: true,
  });

  const [dhl_express, setdhl_express] = useState({
    carrier: "",
    account_id: "",
    parameters: {
      site_id: "", // LOGIN MyDHLExpress
      password: "",
      payment_country: "",
    },
    active: true,
  });

  const [oculto, setoculto] = useState({
    //hiddenlistools: false,
    //hiddenstoreform: false,
    hiddentable: true,
    hiddenform: false,
    activaups: false,
    activafedex: false,
    activadhl: false,
    //hiddendetails: false,
  });

  //Imagenes
  const ups_image = "https://apps.goshippo.com/b5972a22a3a03e8912341d862eee91bb.svg"
  const fedex_image = "https://apps.goshippo.com/7749b163ab9db78e5ee20c137b269c88.svg"
  const dhl_image = "https://apps.goshippo.com/cd3c5b6cd234fc54a568eb93f899eb04.svg"

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
                fedex={fedex}
                setfedex={setfedex}
                ups={ups}
                setups={setups}
                dhl_express={dhl_express}
                setdhl_express={setdhl_express}
              ></Carrierform>
            ) : null}
            {oculto.activaups ? (
              <Validarups
                ups={ups}
                setups={setups}
                idcliente={user.id}
                oculto={oculto}
                setoculto = {setoculto}
                image={ups_image}
              ></Validarups>
            ) : null}
              {oculto.activafedex ? (
              <Validarfedex
                fedex={fedex}
                setups={setfedex}
                idcliente={user.id}
                oculto={oculto}
                setoculto = {setoculto}
                image= {fedex_image}
              ></Validarfedex>
            ) : null}
             {oculto.activadhl ? (
               <Validardhl
                dhl_express={dhl_express}
                setdhl_express={setdhl_express}
                idcliente={user.id}
                oculto={oculto}
                setoculto = {setoculto}
                image={dhl_image}
              ></Validardhl>
            ) : null}
          </CardContent>
        </Card>
      </SubCard>
    </>
  );
};

export default Operadores;
