import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blinkit Clone
        </Typography>
        <InputBase
          placeholder="Search 'bread'"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ color: 'inherit', ml: 2 }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;