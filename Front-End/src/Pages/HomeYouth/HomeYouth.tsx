import React from "react";
import { Grid, Typography } from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const HomeYouth = () => {
  return (
    <PageContainer container direction="column" color="#000000">
      <BackgroundImage />
      <Grid item container>
        <Grid item xs={3} padding="0.5rem">
          <Grid
            sx={{
              backgroundColor: "#323E48",
              borderRadius: "1rem",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <img src="./cuentas.png" alt="" />
          </Grid>
        </Grid>
        <Grid item xs={3} padding="0.5rem">
          <Grid
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "1rem",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <img src="./inversiones.png" />
          </Grid>
        </Grid>
        <Grid item xs={3} padding="0.5rem">
          <Grid
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "1rem",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <img src="./pagoServicios.png" alt="" />
          </Grid>
        </Grid>
        <Grid item xs={3} padding="0.5rem">
          <Grid
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "1rem",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <img src="./transferir.png" alt="" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        padding="2rem 0.5rem 1rem 0.5rem"
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Typography fontSize="1.5rem" marginBottom="-1rem" fontWeight="600">
            Mis Cuentas
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
              <Grid item xs={8} padding="0.5rem" spacing={1}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Grid item container justifyContent="space-between">
                    <Grid item>
                      <Typography fontWeight="900" color="#323E48">
                        Nómina Banorte
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ArrowForwardIosIcon
                        sx={{
                          width: "1.2rem",
                          height: "1.2rem",
                          color: "#323E48",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <Grid item>
                      <Typography fontSize="0.8rem">**** 8709</Typography>
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
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Link
            to="/youth-details"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
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
                    src="./tarjetaBanorteRoja.png"
                    style={{
                      padding: "0.4rem 0.5rem 0.4rem 0.5rem",
                      height: "4.6rem",
                    }}
                    alt=""
                  />
                </Grid>
                <Grid item xs={8} padding="0.5rem" spacing={1}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    height="100%"
                  >
                    <Grid item container justifyContent="space-between">
                      <Grid item>
                        <Typography fontWeight="900" color="#323E48">
                          Banorte Youth
                        </Typography>
                      </Grid>
                      <Grid item>
                        <ArrowForwardIosIcon
                          sx={{
                            width: "1.2rem",
                            height: "1.2rem",
                            color: "#323E48",
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justifyContent="space-between"
                      alignItems="flex-end"
                    >
                      <Grid item>
                        <Typography fontSize="0.8rem">**** 8719</Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          fontSize="1.2rem"
                          fontWeight="600"
                          color="#323E48"
                        >
                          $ 1,806.64{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            sx={{
              backgroundColor: "rgba(91, 102, 112, 0.80)",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <Grid item container>
              <Grid item xs={3}>
                <img
                  src="./phoneFlip.png"
                  style={{ padding: "0.4rem 0.5rem 0 0.5rem" }}
                  alt=""
                />
              </Grid>
              <Grid item xs={9}>
                <Grid
                  container
                  direction="column"
                  width="100%"
                  height="100%"
                  justifyContent="center"
                >
                  <Grid item>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography fontWeight="600" color="#ffffff">
                          Contrata Aquí
                        </Typography>
                      </Grid>
                      <Grid item>
                        <ArrowForwardIosIcon
                          sx={{
                            width: "1.2rem",
                            height: "1.2rem",
                            color: "#ffffff",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item paddingTop="0.5rem">
                    <Typography fontSize="0.8rem" color="#ffffff">
                      Tarjeta de Crédito, Pagarés y más
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default HomeYouth;
