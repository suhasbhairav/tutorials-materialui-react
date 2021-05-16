import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";



const useStyles = makeStyles({
  root: {
    background: "orange",
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "white",
    padding: "0 20px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[600],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                  MUI Theme
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <ButtonStyled />
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} md={6} lg={3}>
                <Paper style={{height: 75, width: '100%'}} />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper style={{height: 75, width: '100%'}} />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper style={{height: 75, width: '100%'}} />
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />} size="large" href="#">
                Hello World
              </Button>
              <Button startIcon={<DeleteIcon />} size="large" href="#">
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
