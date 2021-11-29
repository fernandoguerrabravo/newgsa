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
import SubCard from "ui-component/cards/SubCard";
// project imports
import { gridSpacing } from "store/constant";

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
      <Grid item xs={12} lg={2}>
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
              <Button variant="outlined" color="secondary">
                Acceder...
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
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
              <Button variant="outlined" color="secondary">
                Acceder...
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
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
              <Button variant="outlined" color="secondary">
                Acceder...
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
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
              <Button variant="outlined" color="secondary">
                Acceder...
              </Button>
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
