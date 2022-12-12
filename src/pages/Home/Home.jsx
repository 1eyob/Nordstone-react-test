import { Box, Grid } from "@mui/material";
import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  navLinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(15),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Nordstone
          </Typography>
          <div className={classes.navLinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/calculator" className={classes.link}>
              calculator
            </Link>
            <Link to="/gallery" className={classes.link}>
              Gallery
            </Link>
            <Link to="/notification" className={classes.link}>
              Notification
            </Link>
            <Link
              sx={{
                border: "3px solid",
                borderRadius: "2 px",
              }}
              to="/login"
              className={classes.link}
            >
              Login
            </Link>
            <Link to="/register" className={classes.link}>
              Register
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Typography>Welcome to Nordstone</Typography>
    </Box>
  );
};

export default Home;
