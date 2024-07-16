import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Typography } from '@mui/material';

function Category() {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h4" sx={{ my: 2 }}>Category {id}</Typography>
      <ProductList />
    </div>
  );
}

export default Category;