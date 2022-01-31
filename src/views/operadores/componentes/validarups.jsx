import React, { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import SaveAccount from "../helpers/SaveCarrier"


const Validarups = ({ups,setups,idcliente}) => {

  
   SaveAccount(ups,idcliente).then(response => console.log("PICO UPS", response))

return(
    <>
    <CircularProgress></CircularProgress>
    </>
)
}

export default Validarups;