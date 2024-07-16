import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const products = [
  { name: "Britannia Milk Bread", price: 50, delivery: "8 MINS", image: "path_to_image" },
  { name: "Milky Mist Paneer", price: 118, delivery: "8 MINS", image: "path_to_image" },
  // ... add more products
];

function ProductList() {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;