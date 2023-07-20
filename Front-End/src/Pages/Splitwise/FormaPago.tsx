import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography, Divider } from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";

const FormaPago = () => {
  return (
    <PageContainer container direction="column">
      <BackgroundImage />

      <Grid
        item
        padding="0.5rem 1rem 0.5rem 1rem"
        sx={{
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "0.5rem",
          boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
        }}
      >
        <Typography fontSize="1.5rem" fontWeight="700">
          Realizar pago
        </Typography>
        <Typography
          color="rgba(0,0,0,0.5)"
          display="inline-block"
          fontSize="1.2rem"
          fontWeight="500"
        >
          Asunto:&nbsp;
        </Typography>
        <Typography display="inline-block" fontSize="1.2rem" fontWeight="500">
          Viaje Cancún
        </Typography>
        <Divider />
        <Typography
          color="rgba(0,0,0,0.5)"
          display="inline-block"
          fontSize="1.2rem"
          fontWeight="500"
        >
          Cantidad:&nbsp;
        </Typography>
        <Typography
          color="#0C9400"
          display="inline-block"
          fontSize="1.2rem"
          fontWeight="500"
        >
          $800
        </Typography>
      </Grid>

      <Grid item padding="1rem 0 0.5rem 0">
        <Typography
          fontSize="1rem"
          fontWeight="700"
          padding="0 0 0.5rem 0.5rem"
        >
          Paga con Banorte
        </Typography>

        <Link to="/face-recognition" style={{ textDecoration: "none" }}>
          <Grid
            container
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
            }}
          >
            <Grid item container>
              <Grid item xs={4}>
                <img
                  src="./tarjetaBanorte.png"
                  style={{
                    padding: "0.4rem 0.5rem 0 0.5rem",
                    height: "4.5rem",
                  }}
                  alt=""
                />
              </Grid>
              <Grid
                item
                xs={8}
                padding="0.5rem"
                spacing={1}
                direction="column"
                justifyContent="space-between"
              >
                <Grid container>
                  <Grid item container justifyContent="space-between">
                    <Grid item>
                      <Typography fontWeight="900" color="#323E48">
                        Nómina Banorte
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="flex-end"
                  paddingTop="1rem"
                >
                  <Grid item>
                    <Typography fontSize="0.8rem" color="#000000">
                      **** 8709
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      fontSize="1.2rem"
                      fontWeight="600"
                      color="#323E48"
                    >
                      $ 2,871.21{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Link>

        <Grid
          container
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Grid item container>
            <Grid item xs={4}>
              <img
                src="./tarjetaBanorte.png"
                style={{
                  padding: "0.4rem 0.5rem 0 0.5rem",
                  height: "4.5rem",
                }}
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={8}
              padding="0.5rem"
              spacing={1}
              direction="column"
              justifyContent="space-between"
            >
              <Grid container>
                <Grid item container justifyContent="space-between">
                  <Grid item>
                    <Typography fontWeight="900" color="#323E48">
                      Banorte Generations
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                alignItems="flex-end"
                paddingTop="1rem"
              >
                <Grid item>
                  <Typography fontSize="0.8rem">**** 4826</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontSize="1.2rem"
                    fontWeight="600"
                    color="#323E48"
                  >
                    $ 1,653.53{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item padding="1rem 0 0.5rem 0">
        <Typography
          fontSize="1rem"
          fontWeight="700"
          padding="0 0 0.5rem 0.5rem"
        >
          Otras formas de Pago:
        </Typography>

        <Grid
          container
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
          }}
        >
          <Grid item container padding="1rem" spacing={1}>
            <Grid item>
              <AccountBalanceIcon />
            </Grid>
            <Grid item>
              <Typography display="inline-block">Ficha de Depósito</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Grid item container padding="1rem" spacing={1}>
            <Grid item>
              <AccountBalanceWalletIcon />
            </Grid>
            <Grid item>
              <Typography display="inline-block">Pago en OXXO</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FormaPago;
