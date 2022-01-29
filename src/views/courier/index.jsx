/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
//import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { GetSeller } from "./helpers/GetSeller";
import useAuth from "../../hooks/useAuth";
import UseGetSellers from "./hooks/usegetsellers";
import Shipperform from "./components/shipperform";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
  Box,
  Button
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import BoxComponent from "./components/BoxComponent";
import ShippoItem from "./components/ShippoItem";

const Courier = () => {
  const { logout, user } = useAuth();
  const idcliente = user.id;

  // Configuracion del Step
  const [activeStep, setActiveStep] = React.useState(0);

  // Boton de Paso Siguiente
  const handleNext = () => {};

  // Arreglo que se irá a la API de

  const [datosfinales, setdatosfinales] = useState({
    object_purpose: "PURCHASE",
    address_from: '',
    address_to: '',
    parcels: {
      weight: "",
      length: "",
      width: "",
      height: "",
      distance_unit: "cm",
      mass_unit: "kg",
    },
    custom_declaration: "",
    async: false,
  });

  const [from, setfrom] = useState({
    object_purpose: "PURCHASE",
    name: "",
    company: "",
    street_no: "",
    street1: "",
    street2: "",
    street3: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    email: "",
    is_residential: null,
  });

  const [de, setde] = useState({
    object_purpose: "PURCHASE",
    name: "",
    company: "",
    street_no: "",
    street1: "",
    street2: "",
    street3: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    email: "",
    is_residential: null,
  });

  const [box, setbox] = useState({
      weight: 1,
      length: "60",
      width: "60",
      height: "60",
      distance_unit: "cm",
      mass_unit: "kg",
  });

  // Estados para rellenar los campos del Shipper
  const [shipper, setshipper] = useState(null);

  //const {data} = UseGetSellers(idcliente)
  //const finaldata = data[0]

  /* useEffect(() => {
    GetSeller(idcliente).then((data) =>
      setshipper({
        name: data[0].contactname,
        company: data[0].legalname,
        street_no: data[0].legaladdress.numero,
        street1: data[0].legaladdress.calle,
        street2: data[0].legaladdress.barrio,
        street3: "",
        city: data[0].legaladdress.ciudad,
        state: data[0].legaladdress.estado,
        zip: data[0].legaladdress.zip,
        country: data[0].iso,
        phone: data[0].telefono,
        email: data[0].email,
        is_residential: null,
      })
    );
  }, []); */

  console.log("shipper2", shipper);

  const handleNext1 = () => {

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setdatosfinales({
      ...datosfinales,
      address_from: from,
      address_to: de
    })
  }

  const handleNext2 = () => {

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setdatosfinales({
      ...datosfinales,
      parcels: box
      
    })
  }


	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};
  
  console.log("PICHO CALUGA", datosfinales)

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Shipper and Consignne Information</StepLabel>
          <StepContent>
             <Box sx={{ mb: 2 }}>
              <Shipperform shipper={shipper} from={from} setfrom={setfrom} de={de} setde={setde}></Shipperform>              
              <br></br>
              <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleNext1}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
              </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Parcel Details</StepLabel>
          <StepContent>
          <Box sx={{ mb: 2 }}>
            <BoxComponent box={box} setbox={setbox}></BoxComponent>
            <br></br>
              <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleNext2}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
          </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>International Carriers Rate</StepLabel>
          <StepContent>
           {datosfinales ? <ShippoItem datosfinales={datosfinales}></ShippoItem> : null}
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

export default Courier;
