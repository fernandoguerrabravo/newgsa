/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Center from 'react-center';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import { green, red, blue } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import Swal from "sweetalert2";
import Select from "react-select";
import { useGetSku } from "../../SkuList/hooks/useGetSku";
import SaveClasHts from "../helpers/SaveClasHts";
import useAuth from "../../../hooks/useAuth";
/* const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},

	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const useStyles = makeStyles(theme => ({
	margin: theme.spacing(3),
	minWidth: 500,
	color: {
		color: blue[700]
	},
	color1: {
		color: green[500]
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 30
	}
})); */

/* const DialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
}); */

/* const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions); */

export default function HtsDialogEnd({
  evento1,
  evento2,
  evento3,
  evento4,
  evento5,
}) {
  const { logout, user } = useAuth();
  const sku = useGetSku(user.id);
  const skufinal = sku.data;
  const newJson1 = [];
  skufinal.forEach((codigo) => {
    newJson1.push({
      value: codigo.sku,
      label: codigo.sku,
    });
  });

  //console.log("chinos de la gran puta", evento5.chinos.type);
  // para manejar los eventos de las dos cajas de texto
  const history = useNavigate();
  
  const [datos, setDatos] = useState({
    sku: "",
    shortdescription: "",
  });

  const fecha = new Date();
  const date = fecha.toLocaleDateString();

  const [saveclashts, setSaveclashts] = useState({
    categories: evento2,
    hts8: evento4.hts8,
    duties: evento4.general,
    special: evento4.special,
    country: evento4.country,
    destination: evento4.destination,
    description: evento3,
    hts: evento1,
    dutiesrate: evento4.duties,
    dutiespecific: evento4.dutiespecific,
    list301: evento5.chinos.type,
    duties301: evento5.chinos.rate,
    date,
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    skufinal.forEach((key) => {
      if (key.sku === event.value) {
        setDatos({
          sku: event.value,
          shortdescription: key.shortdescription,
        });
      }
    });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (datos.sku === "") {
      Swal.fire({
        title: "oops!",
        text: "Please select SKU!",
        icon: "warning",
      });
    } else {
      SaveClasHts(saveclashts, datos.sku, user.id);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    history("/htstaxlist");
  };

  const theme = useTheme();

  return (
    <>
      <Typography>Input Products References</Typography>
      <FormControl>
        <Select options={newJson1} onChange={handleInputChange} />
        <Typography style={{ color: red[400] }} variant="caption" gutterBottom>
          <strong>Search Your Saved SKU Code</strong>
        </Typography>
      </FormControl>
      <FormControl>
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          onClick={handleClickOpen}
        >
          Save Classification
        </Button>
      </FormControl>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
          <CardHeader
            sx={{
              bgcolor: theme.palette.info.main,
              color: theme.palette.background.paper,
              borderBottom: `1px solid ${theme.palette.info.main}`,
            }}
            title={
              <Typography variant="h5" color="inherit">
                HTS : {evento1}
              </Typography>
            }
          />
          <Divider />
          <CardContent
            sx={{
              bgcolor: theme.palette.info.main,
              color: theme.palette.background.paper,
            }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="subtitle2" color="inherit">
                  Disclaimer: La clasificación arancelaria del producto es
                  sugerida, condicionada a la correcta selección del SKU, su
                  naturaleza, origen, por parte del usuario. No es
                  responsablidad de Ecommerce Logistics LLC y su aplicación en
                  la incorrecta clasificación.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="inherit">
                  Referencia del Producto
                </Typography>
                <Typography gutterBottom>
                  <ListItem>
                    <span>SKU:</span>&nbsp;{datos.sku}
                  </ListItem>
                  <ListItem>
                    <span>Descripción Corta:</span>&nbsp;
                    {datos.shortdescription}
                  </ListItem>
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  Categoria
                </Typography>
                <Typography gutterBottom>
                  <ListItem>{evento2.L2}</ListItem>
                  <ListItem>{evento2.L3}</ListItem>
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  Descripción (Customs)
                </Typography>
                <Typography gutterBottom>
                  <ListItem>{evento3} </ListItem>
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  Tasa de Importacion General (Duties)
                </Typography>
                <Typography gutterBottom>
                  <ListItem>{evento4.general}</ListItem>
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  Tasa de Importacion General (Duties)
                </Typography>
                <Typography gutterBottom>
                  <ListItem>{evento4.general}</ListItem>
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  Sección 301 (Origen China)
                </Typography>
                <Typography gutterBottom>
                  <ListItem>List: {evento5.chinos.type}</ListItem>
                  <ListItem>Rate: {evento5.chinos.rate}</ListItem>
                </Typography>
				
              </Grid>
			  
            </Grid>
			<Center>
                <Button variant ="outlined" autoFocus onClick={handleClose} color="inherit">
                  Close Details
                </Button>
				</Center>
          </CardContent>
       
      </Dialog>
    </>
  );
}
