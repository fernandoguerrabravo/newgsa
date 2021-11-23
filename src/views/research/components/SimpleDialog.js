import PropTypes from "prop-types";
import { useState, Fragment } from "react";
import Center from 'react-center';
// material-ui
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

// assets
import AddIcon from "@mui/icons-material/Add";

const avatarImage = require.context("assets/images/profile", true);

// alert user data
const emails = [
  {
    email: "username@company.com",
    avatar: "user-1.png",
  },
  {
    email: "user02@company.com",
    avatar: "user-2.png",
  },
];

// ===============================|| DIALOG ||=============================== //

function SimpleDialog({ state, onClose, open }) {
  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Sold by: {state.manufacturer}
      </DialogTitle>
      <Card>
        <CardContent sx={{ pt: 0 }}>
          <Card>
            <CardHeader
              /* avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }  */
              /* action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } */
              title=""
              subheader={state.title}
            />
          
            <CardContent>
            <Center>
            <>
            <img height="200" widht="200" src={state.imagen} alt="imagen" />
            </>
            </Center>
            <h4>Price: USD$ {state.precio}</h4>
            <h4>Rank: {state.rank}</h4>
            <h4>Model: {state.model}</h4>
            <h4>{state.brand}</h4>
            <h4>Dimension/Weight: {state.dimensions}/{state.peso}</h4>
            <h4>From: {state.desde}</h4>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
              <Typography paragraph>Product Detail</Typography>
            </CardActions>
            <CardContent>
              <ol>{state.nota2}</ol>
              <ol>{state.feature_0}</ol>
              <ol>{state.feature_1}</ol>
              <ol>{state.feature_2}</ol>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,

};

// ===============================|| UI DIALOG - SIMPLE ||=============================== //

export default function SimpleDialogDemo(codigo) {
  const [open, setOpen] = useState(false);
  

  const [state, setstate] = useState({
    rank: "",
    title: "",
    imagen: "",
    cod: codigo.codigo,
    loading: false,
    dimensions: [],
  });

  // Funcion aque va a rescatar la informacion de la API
  const getDetails = async () => {
    setstate({
      ...state,
      loading: true,
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      asin: codigo.codigo,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const url = `https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/getdetails`;
    const resp = await fetch(url, requestOptions);
    const detail = await resp.json();
    setstate(detail);
    // console.log("perro:", detail)
  };

  const handleClickOpen = () => {
    setOpen(true);
    getDetails();
  };
  
  const handleClose = (value) => {
    setOpen(false);
    
  };

  return (
    <div>
      {state.loading ? (
        <CircularProgress color="primary" size={40} />
      ) : (
        <div>    
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickOpen}
          >
            Details
          </Button>

          <SimpleDialog state={state} open={open} onClose={handleClose} />
        </div>
      )}
    </div>
  );
}
