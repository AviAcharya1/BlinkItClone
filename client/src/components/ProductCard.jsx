import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function ProductCard({ name, price, image, delivery }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Delivery in {delivery}
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;