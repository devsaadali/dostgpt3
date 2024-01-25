import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { connect } from 'react-redux';
import { logout } from "../actions/auth";

// Icons 
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LogoutIcon from '@mui/icons-material/Logout';
import SubscriptionIcon from '@mui/icons-material/Payment';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';



const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const AppSidebar = ({ children, logout, state, user }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout_user = () => {
    logout();
  };

  const menuId = "primary-search-account-menu";
  const AllLinks = () => (
    <React.Fragment>
      <Link
        to={"/dashboard"}
        style={{ textDecoration: "none" }}
      >
        <MenuItem
          sx={{ color: "black", fontWeight: 500 }}
          onClick={handleMenuClose}
        >
          View my public page
        </MenuItem>
      </Link>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <MenuItem
          sx={{ color: "black", fontWeight: 500 }}
          onClick={handleMenuClose}
        >
          Dashboard
        </MenuItem>
      </Link>

      <Divider />
      {user ? user.is_superuser ?
        <Link
          onClick={() => window.open(`${process.env.REACT_APP_BACKEND_URL.split("/api")[0]}/theoffice/`, '_blank')}
          style={{ textDecoration: "none" }}
        >
          <MenuItem

            sx={{ color: "black", fontWeight: 500 }}
          >
            Admin panel
          </MenuItem>
        </Link> : "" : ""}
      <Divider />
      <Link
        to={"/dashboard"}
        style={{ textDecoration: "none" }}
      >
        <MenuItem
          sx={{ color: "black", fontWeight: 500 }}
          onClick={logout_user}
        >
          Logout
        </MenuItem>
      </Link>
    </React.Fragment>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: "48px", color: "#F9F9F9" }}
    >
      <allLinks />

      <Divider />
      <Box
        sx={{
          p: 2,
        }}
      >
        {state.auth.user ? (
          <Typography sx={{ color: "lightgrey" }}>
            {" "}
            {state.auth.user.email}{" "}
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </Menu>
  );

  React.useEffect(() => {
    if (window.localStorage.getItem("sidebar_opened") != null) {
      setOpen(JSON.parse(window.localStorage.getItem("sidebar_opened")))
    }

  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
    window.localStorage.setItem("sidebar_opened", true)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    window.localStorage.setItem("sidebar_opened", false)
  };


  const return_icon = (text) => {
    switch (text) {
      case "Dashboard":
        return <DashboardIcon sx={{ color: "#8c8c8c" }} />
        break;
      case "Subscription":
        return <SubscriptionIcon sx={{ color: "#8c8c8c" }} />
        break;
      case "Admin":
        return <AdminIcon sx={{ color: "#8c8c8c" }} />
        break;
      case "Logout":
        return <LogoutIcon sx={{ color: "#8c8c8c" }} />
        break;


      default:
        return <LogoutIcon sx={{ color: "#8c8c8c" }} />
        break;
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ boxShadow: "none", zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <Toolbar>
          <Box sx={{ width: 1, display: "flex", justifyContent: "space-between" }}>

            <Box sx={{ flex: 1, display: "flex", alignItems: 'center' }}>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 1,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton onClick={handleDrawerClose} color="inherit"
                aria-label="open drawer"

                edge="start"
                sx={{
                  marginRight: 1,
                  ...(!open && { display: 'none' }),
                }}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                DostGPT
              </Typography>
            </Box>

          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <List>

          {['Dashboard', "Subscription", 'Divider', 'Admin', 'Logout'].map((text, index) => (
            text == "Divider" ? <Divider /> :
              <ListItem key={text} disablePadding sx={{ display: 'block', }}>
                <Tooltip title={!open ? text : ""} placement='right'>
                  {user && (text == "Admin" && !user.is_superuser) ? "" :
                    <ListItemButton
                      size="small"
                      onClick={() => {
                        if (text == "Admin") {

                          window.open(process.env.REACT_APP_BACKEND_URL.split("/api")[0] + "/admin/", "_blank")
                        } else if (text == "Logout") {
                          logout_user()
                          navigate(`/login`);


                        }else if (text == "Dashboard") {
                          navigate(`/dashboard`);

                        } else {
                          navigate("/dashboard/" + text.toLowerCase().replaceAll(" ", "-"))
                        }
                      }}
                      sx={{
                        height: 40,
                        justifyContent: open ? 'initial' : 'center',
                        m: 1,
                        borderRadius: 1,
                        bgcolor: location.pathname.includes(text.toLowerCase().replaceAll(" ", "-")) ? "rgba(234, 36, 86,0.1)" : ""
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {return_icon(text)}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, }} />
                    </ListItemButton>}
                </Tooltip>

              </ListItem>
          ))}
          <Divider />
          <Box sx={{ m: 1, p: 1 }}>
            {open &&
              <Typography sx={{ color: "lightgrey" }} variant='subtitle2'>{user && user.username && user.username}</Typography>
            }
          </Box>
        </List>


      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}




const mapStateToProps = (state) => ({
  state: state,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(AppSidebar);