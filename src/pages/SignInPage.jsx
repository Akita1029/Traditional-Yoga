import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logo from '../assets/logo-white.png';
import logo_primary from '../assets/logo-primary.png';
import '../assets/css/signin.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    signin: {
      light: '#FF7B26',
      main: '#F96302',
      dark: '#C84F00',
      contrastText: "#fff" //button text white instead of black
    },
    google: {
      light: '#F6513D',
      main: '#F63C25',
      dark: '#D7331E',
      contrastText: "#fff" //button text white instead of black
    },
    twitter: {
      light: '#2FA9F4',
      main: '#1DA1F2',
      dark: '#1B86C8',
      contrastText: "#fff" //button text white instead of black
    },
    facebook: {
      light: '#3085F3',
      main: '#1877F2',
      dark: '#1A66C8',
      contrastText: "#fff" //button text white instead of black
    },
    apple: {
      light: '#292D34',
      main: '#15171B',
      dark: '#0A0A0B',
      contrastText: "#fff" //button text white instead of black
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontSize: 20,
      textTransform: "none",
    },
  },
});

const SignInPage = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isDesktop = useMediaQuery({query : '(min-width:992px)'})
  const isTable = useMediaQuery({
    query: '(max-width: 992px)'
  });

  const isTiny = useMediaQuery({
    query: '(max-width: 500px)'
  });

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return (
    
    <ThemeProvider theme={theme}>
      <div className="w-100 h-100">
        <div className="row">
          { isDesktop && (
            <div className="col-6 left-bar">
              <img className="logo logo-white" src={logo}></img>
            </div>)
          }
          <div className="col-md-12 col-lg-6 singin-info-container">
            <div className="text-center">
              <img className="logo" onClick={()=>handleRoute('')} src={logo_primary} style={{cursor:'pointer'}} ></img>
              <h1 className="text-primary mt-2">Visit Site</h1>
            </div>
            <div className="form-group mt-5">
              <label>Email address</label>
              <input type="email" className="form-control mt-2" id="email" placeholder="Enter email"/>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control mt-2" id="password" placeholder="Enter password"/>
            </div>
            <div className="d-flex justify-content-between bd-highlight mb-5 mt-3">
              <label><input type="checkbox"/> Remember me</label>
              <div className="d-flex jsutify-center-end">
                <a href="/forget" className="pull-right">Forget password?</a>
              </div>
            </div>
            
            <div className="d-flex flex-column mt-5 mb-5">
              <Button variant="contained" color="signin">
                SIGN IN
              </Button>
              <p className="text-center mt-4">or Sign In with</p>
              <Grid container columnSpacing={5} rowSpacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button color="google" fullWidth variant="contained" startIcon={<GoogleIcon />}>
                    Google
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button color="facebook" fullWidth variant="contained" startIcon={<FacebookIcon />}>
                    Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button color="twitter" fullWidth variant="contained" startIcon={<TwitterIcon />} >
                    Twitter
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button color="apple" fullWidth variant="contained" startIcon={<AppleIcon />}>
                    Apple
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
    
  );
}

export default SignInPage;