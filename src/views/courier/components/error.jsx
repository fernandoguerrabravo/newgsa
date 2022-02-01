/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Err = ({setActiveStep}) => {

    Swal.fire({
        icon: "info",
        title: "No se ha Podido Obtener Tarifas",
        text: "Ingrese y revise con anteción la información",
        showConfirmButton: true,
        
      })
    
     setActiveStep(0);
      
return ''

    };

export default Err;