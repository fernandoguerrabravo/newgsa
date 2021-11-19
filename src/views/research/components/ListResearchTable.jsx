import React, { useState } from "react";
import Center from "react-center";
import useGetResearch from "../hooks/useGetResearch";
import ResearchReport from "./ResearchReport";
import PdfViewer from "./PdfViewer";
import DataTable from "react-data-table-component";


export default function ListResearchTable({ pdf, setpdf, setboton }) {

  const idcliente = "abcdef";
  const { data, loading } = useGetResearch(idcliente);


  const columnas = [
    {
      name: "SKU Code",
      selector: row => row.sku,
    },
    {
      name : "Keyword",
      selector: row => row.keyword
    },
	
    {
      name: "Min Price",
      selector: row =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(row.min),
    },
    {
      name: "Average Price",
      selector: row =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(row.average),
    },
    {
      name: "Max Price",
      selector: row =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(row.max),
    },
	
    {
      name: "Actions",
      selector: row => (
        <ResearchReport
          setboton={setboton}
          setpdf={setpdf}
          sku={row.sku}
          report={row.report}
          min={row.min}
          average={row.average}
          max={row.max}
	   /> 
      ),
    }, 
  ];

  return (
    <>
      {pdf.loading ? (
        <DataTable
          striped
          columns={columnas}
          data={data}
          pagination
        />
      ) : (
        <Center>
          <PdfViewer pdf={pdf} />
        </Center>
      )}
    </>
  );
}
