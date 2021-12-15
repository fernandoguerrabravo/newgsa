/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Link, Redirect } from "react-router-dom";
// project imports
import { gridSpacing } from "store/constant";
import Stack from '@mui/material/Stack';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const theme = useTheme();
  const cardStyle = {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[100],
  };

  return (
    <Grid container spacing={gridSpacing}>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
      <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
  </Grid> */}
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader
            title="Perfil Usuarios"
            subheader="Crear/Editar Usuarios"
          />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/144748074_l.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography color="primary" variant="h5"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Herramienta para registrar los datos corporativos y de contacto
                del Seller. Esta información se utiliza para hacer el
                pre-registro del estatus de Foreign Importer of Record (FIOR)
                para el Seller
              </Typography>
              <Link role="button" to="/profile">
                <Button variant="outlined" color="secondary">
                  Acceder...
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader title="Productos" subheader="Agregar SKU" />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/38065222_xl.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h5" color="primary"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Herramienta para registrar la información de cada producto del
                Seller que se exportará a Amazon. Por favor subir archivos con
                fichas técnicas y descripción de detalle de cada producto
              </Typography>
              <Link role="button" to="/skulist">
                <Button variant="outlined" color="secondary">
                  Acceder...
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader title="Benchmarking" subheader="Estudio de Mercado" />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/165024815_l.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h5" color="primary"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Herramienta para obtener los precios de ventas en el Marketplace
                de Amazon de productos similares a los productos del Seller.
                Enntrega un benchmarking de precios de ventas al mercado de Usa.
              </Typography>
              <Link role="button" to="/research">
                <Button variant="outlined" color="secondary">
                  Acceder...
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader title="Clasificación" subheader="HTS y Aranceles" />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/47275211_l.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h5" color="primary"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Herramienta que sugiere la clasificación y códigos HTS que mas
                se ajustan a los productos. Una vez obtenida la clasificación de
                HTS puede conocer los aranceles y tarifas especiales que se
                aplican en USA.
              </Typography>
              <Link role="button" to="/htstaxlist">
                <Button variant="outlined" color="secondary">
                  Acceder...
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader title="Calculadora" subheader="Costos Logísticos" />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/110166333_l.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h5" color="primary"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Cálculo rápido del costo logístico desde México a los FBAs de
                USA en pallets. Entrega todos los costos logísticos hasta el hub
                de Laredo, TX. Para sensibilidad, a gruegue el costo de la
                última milla en USA.
              </Typography>
              <Link role="button" to="/mxcalculadorarapida">
                <Button variant="outlined" color="secondary">
                  Acceder...
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader title="Base Conocimiento" subheader="Normas de Origen" />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/141307057_l.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h5" color="primary"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Podrá encontrar la información sobre temas relacionados con el
                proceso importación a USA y entrega en FBAs de Amazon Tales
                como, regluaciones de origen, FDA, Packaging entre otros.
              </Typography>
              <Link role="button" to="/normasdeorigen">
                <Button variant="outlined" color="secondary">
                  Acceder...
                </Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Card sx={cardStyle}>
          <CardHeader title="FDA Tools" subheader="Registros y Programa FSVP" />
          <CardMedia
            component="img"
            height="100"
            image="https://fotos-ecl.s3.amazonaws.com/34655511_l.jpg"
            alt="Paella dish"
          />
          <CardContent
            sx={{ minHeight: 20, color: theme.palette.common.black }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h5" color="primary"></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography color="primary" variant="subtitle2" display="block" gutterBottom>
                Información y Servicios de Registro para Sellers con productos Alimenticios que requieren
                vender en Amazon.  Asesória y Desarrollo del Programa FSVP para Sellers de Amazon.  Contacte
                a nuestros agentes especializados.
              </Typography>
              <Stack spacing={2} direction="row">
              <Link role="button" to="/fdaregister">
                <Button variant="outlined" color="secondary">
                  Info Registros
                </Button>
              </Link>
              <Link role="button" to="/fsvp">
                <Button variant="outlined" color="secondary">
                  Info FSVP
                </Button>
              </Link>
              </Stack>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item xs={12} lg={3}>
        <SubCard>
          <Card sx={cardStyle}>
            <CardHeader title="Agregar Productos" subheader="" />
            <CardMedia
              component="img"
              height="180"
              image="https://fotos-ecl.s3.amazonaws.com/38065222_xl.jpg"
              alt="Paella dish"
            />
            <CardContent
              sx={{ minHeight: 100, color: theme.palette.common.black }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </SubCard>
</Grid> */}
    </Grid>
  );
};

export default Dashboard;
