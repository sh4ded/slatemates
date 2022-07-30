import * as React from 'react';
import PropTypes from 'prop-types';
import ResponsiveAppBar from './ResponsiveAppBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from './assets/logo.svg';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const pages = ['Home', 'How it Works', 'About Us', 'Reviews', 'FAQs', 'Resources'];

export default function ElevateAppBar(props) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="sticky" style={{backgroundColor: 'white', color: 'grey'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow:1 ,display: {xs: 'flex', md: 'none'} }}>
          <img src={Logo} style={{ width: '160px'}} />
        </Box>
          <Box sx={{display: {xs: 'none', md: 'flex'} }} >
          <img src={Logo} style={{ width: '160px' }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: {xs: 'none', md: 'center'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#a6acb2', display: 'block', textTransform: 'capitalize', margin: '0px', height: '100%', fontSize: '1rem' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
          <Typography variant='h6' style={{
            color: 'darkblue',
            paddingRight: '10px'
          }} sx={{
            display: {
              xs : 'none',
              md : 'none',
              lg : 'inline-block'
            }
          }}>
          +91 964 371 9927
          </Typography>
          </Box>
          <Box>
          <Button variant='contained' style={{
            backgroundColor: 'darkblue',
            fontFamily: 'sans-serif'
          }}>
          Free Trial
          </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}