import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  "Paan Corner",
  "Dairy, Bread & Eggs",
  "Fruits & Vegetables",
  "Cold Drinks & Juices",
  // ... add all categories
];

function CategoryList() {
  return (
    <List>
      {categories.map((category, index) => (
        <ListItem button component={Link} to={`/category/${index + 1}`} key={index}>
          <ListItemText primary={category} />
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;