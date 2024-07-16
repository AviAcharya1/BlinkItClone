import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import { Grid } from '@mui/material';

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <CategoryList />
      </Grid>
      <Grid item xs={12} md={9}>
        <ProductList />
      </Grid>
    </Grid>
  );
}

export default Home;