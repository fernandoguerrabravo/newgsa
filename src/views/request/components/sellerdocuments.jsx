/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/material/styles";
import {
  Paper,
  Button,
  Grid,
  Divider,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { green, red, blue } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import FormControl from "@mui/material/FormControl";
import { Save, Attachment, Info, Publish } from "@mui/icons-material";
import FileProvider from "../providers/file.provider";
import {
  checkFileMIMEType,
  checkFileSize,
  getFormattedSize,
} from "../helpers/files.helper";

const blobToBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/* const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
}); */

/* const styles2 = makeStyles((theme) => ({
  icons: {
    fontSize: "small",
    backgroundColor: red[500],
    color: red[500],
  },

  formControl2: {
    minWidth: 300,
    padding: theme.spacing(1),
  },

  input: {
    display: "none",
  },

  formControl1: {
    minWidth: 100,
    padding: theme.spacing(1),
  },
})); */

const Sellerdocuments = ({ skus, idcliente }) => {
  

  const MAXIMUM_FILES_LIMIT = 5;
  /**
   * Size in MB
   */
  const MAXIMUM_FILE_SIZE = 2;
  const ALLOWED_FORMATS = ".pdf, .doc, .docx, .odt, image/*";

  const [files, setFiles] = useState([]);
  // const [refId, setRefId] = useState(idcliente);
  // const [skur, setSku] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const getCurrentFiles = async (event) => {
    const rawFiles = event.target.files;
    const fileList = []; // WIll contain an array of type File[]
    if (!rawFiles) {
      return;
    }
    if (rawFiles instanceof Array) {
      rawFiles.forEach((file) => fileList.push(file));
    } else {
      const rawFilesArray = Array.from(rawFiles);
      rawFilesArray.forEach((file) => fileList.push(file));
    }
    const finalFileList = [];
    for (const file of fileList) {
      const extensionSeparatorIndex = file.name.lastIndexOf(".");
      const formattedName = file.name.substring(0, extensionSeparatorIndex);
      const extension = file.name.substr(extensionSeparatorIndex);
      const encodedData = await blobToBase64(file);
      const formattedFile = {
        name: formattedName,
        extension,
        file: encodedData?.toString() ?? "",
        type: "append",
        size: file.size,
      };
      if (
        files.find((appendedFile) => appendedFile.name === formattedFile.name)
      ) {
        Swal.fire({
          icon: "info",
          title: `The file ${
            formattedFile.name + formattedFile.extension
          } is already added`,
        });
        break;
      }
      if (!checkFileMIMEType(file.type, ALLOWED_FORMATS)) {
        Swal.fire({
          icon: "warning",
          title:
            "Please select another file (Supported formats: images and PDF)",
          html: `<small class="text-muted">The file ${file.name} is not supported</small>`,
        });
        break;
      }
      if (!checkFileSize(file.size, MAXIMUM_FILE_SIZE)) {
        Swal.fire({
          icon: "warning",
          title: `The maximum file size is ${MAXIMUM_FILE_SIZE}MB`,
          html: `<small class="text-muted">The file ${
            file.name
          } have a size of ${getFormattedSize(file.size, 2)}</small>`,
        });
        break;
      }
      if (files.length < MAXIMUM_FILES_LIMIT) {
        finalFileList.push(formattedFile);
      } else {
        Swal.fire({
          icon: "info",
          title: `The maximum file quantity to upload is ${MAXIMUM_FILES_LIMIT}`,
        });
        break;
      }
    }
    if (finalFileList.length > 0) {
      setFiles([...files, ...finalFileList]);
    }
    event.target.value = event.target.defaultValue; // Reset input cached value
  };

  /* const handleRefIdChange = (event) => {
		 if (event.isTrusted) {
			 setRefId(event.target.value)
		 }
	 } 
 
	 const handleSkuChange = (event) => {
		 if (event.isTrusted) {
			 setSku(event.target.value);
		 }
	 }v */

  const handleFilesSubmit = async (event) => {
    event.preventDefault();
    if (event.isTrusted && skus !== "") {
      const proceed = await Swal.fire({
        title: "The files will be uploaded. Proceed?",
        icon: "question",
        confirmButtonText: "Yes",
        cancelButtonText: "No. Abort action",
        showCancelButton: true,
      });
      if (!proceed?.isConfirmed) {
        return;
      }
      setSubmitting(true);
      try {
        const response = (
          await new FileProvider().submitFiles(files, idcliente, skus)
        ).data;
        if (response?.value?.fileUpload) {
          await Swal.fire({
            title: `${
              files.length > 1 ? "Files" : "File"
            } uploaded successfully`,
            icon: "success",
          });
          setFiles([]);
        } else {
          await Swal.fire({
            title: response.error.message ?? "Unexpected error",
            icon: "error",
          });
        }
      } catch (reason) {
        Swal.fire({
          title: "Unexpected error",
          text: "Please try again later",
          icon: "error",
        });
      }
      setSubmitting(false);
      event.target.reset();
    } else {
      Swal.fire({
        title: "Opps!!",
        text: "Please enter a valid SKU",
        icon: "Warning",
      });
    }
  };

  const removeFile = (event, index) => {
    if (event.isTrusted) {
      const currentFiles = files;
      currentFiles.splice(index, 1);
      setFiles([...currentFiles]);
    }
  };


  return (
    <form onSubmit={handleFilesSubmit}>
     <Paper sx={{padding: 3}}>
      <Typography variant="h6" gutterBottom>
        Adjunte Documentos de Negocios, Fichas Técnicas y Lista de Productos
        <Tooltip title="En caso que no haya realizado la carga en su Perfil">
          <Info fontSize="small" color="info" />
        </Tooltip>
        <a href = 'https://fotos-ecl.s3.amazonaws.com/product_list.xlsx'>
        <img src={'https://fotos-ecl.s3.amazonaws.com/icons8-microsoft-excel-2019.svg'} width="100" height="50" alt ="hola2"/>
        Descargar Plantilla de Productos
        </a>
      </Typography>
      <FormControl >
        <TextField
          id="file1"
          name="file1"
          type="file"
          onChange={getCurrentFiles}
          variant="outlined"
          style = {{display:'none'}}
          multiple
        />
        <label htmlFor="file1">
          <Button
            startIcon={<Attachment />}
            size="large"
            variant="outlined"
            component="span"
            color="secondary"
          >
            Select File ...
          </Button>
        </label>
      </FormControl>

      {files.length > 0 ? (
        <FormControl>
          <Button
            startIcon={<Publish />}
            size="large"
            variant="outlined"
            color="primary"
            type="submit"
          >
            Upload List
          </Button>
        </FormControl>
      ) : null}

      <Typography gutterBottom>
        {files.length > 0
          ? `Files in queue (${files.length}):`
          : "No files in queue yet"}
      </Typography>
      {files.length > 0 ? (
        <TableContainer>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>File Name</TableCell>
                <TableCell>File Extension</TableCell>
                <TableCell>File Size</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{file.name}</TableCell>
                    <TableCell>{file.extension}</TableCell>
                    <TableCell>{getFormattedSize(file.size, 2)}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        type="button"
                        onClick={(event) => removeFile(event, index)}
                        disabled={submitting}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
      </Paper>
    </form>
  );
};

export default Sellerdocuments;
