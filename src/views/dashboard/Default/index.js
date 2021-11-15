import { useEffect, useState } from "react";

// material-ui
import { useTheme } from '@mui/material/styles';
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
import SubCard from 'ui-component/cards/SubCard';
import Card3 from 'assets/images/cards/card-3.jpg';
// project imports
import EarningCard from "./EarningCard";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "store/constant";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const theme = useTheme();
    const cardStyle = {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
    };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12} lg={3}>
        <SubCard title="Image Overlay">
          <Card sx={cardStyle}>
            <CardMedia image='https://fotos-ecl.s3.amazonaws.com/38065222_xl.jpg' title="Card 3">
              <CardContent
                sx={{ minHeight: 240, color: theme.palette.common.black }}
              >
                <Grid container spacing={1}>
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      Registra tu Producto
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" color="inherit">
                      Agrega la información de tus SKU, fichas técnicas para
                      ayudar en tu clasificación y procesos de Aduana en USA
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container>
                  <Grid item>
                    <Typography variant="caption">
                      Last updated 3 mins ago
                    </Typography>
                  </Grid>
                </Grid>
              </CardActions>
            </CardMedia>
          </Card>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
