import React, { useEffect, useState } from "react";
import { GetSeller } from "../helpers/GetSeller";
import SellerUpdateForm2 from "./SellerUpdateForm2";

const SellerUpdateForm = ({idcliente}) => {
  
    const [profile, setprofile] = useState({
    pickupaddress: "",
    legaladdress: "",
    id_cliente: idcliente,
    legalname: "",
    dbaname: "",
    tipocorporacion: "",
    tax_id: "",
    contactname: "",
    cargo: "",
    email: "",
    telefono: "",
    ejecutivoamazon: "",
    website: "",
  });

  const [lista, setlista] = useState('')
  const [lista1, setlista1] = useState('')
  
  useEffect(() => {
    GetSeller(idcliente).then((response) => {
      setprofile(response[0]);
      setlista1(response[0].legaladdress)
      setlista(response[0].pickupaddress)
    });
  
  }, [idcliente]);


  return (

   <div>
     <SellerUpdateForm2 profile={profile} setprofile={setprofile} idcliente ={idcliente} lista={lista} setlista={setlista} lista1={lista1} setlista1={setlista1}></SellerUpdateForm2>
   </div>
  )

};

export default SellerUpdateForm;
