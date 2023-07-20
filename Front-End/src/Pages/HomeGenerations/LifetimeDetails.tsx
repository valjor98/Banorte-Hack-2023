import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LifetimeDetails = () => {
  return (
    <PageContainer container direction="column" color="#000000">
      <BackgroundImage />
      <Grid container padding="0.5rem 1rem 0.5rem 1rem">
        <Grid
          item
          container
          direction="column"
          sx={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "1rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Typography
                fontSize="1.4rem"
                fontWeight="800"
                paddingTop="0.5rem"
              >
                Banorte Lifetime
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="./tarjetaBanorte.png"
                alt=""
                style={{ height: "13rem", marginBottom: "-1rem" }}
              />
            </Grid>

            <Grid item container justifyContent="space-around">
              <Grid item>
                <Typography fontSize="0.8rem" fontWeight="300">
                  **** 5839
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize="1.2rem" fontWeight="600">
                  $ 2,500.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          padding="0.5rem 1rem 0.4rem 1rem"
          sx={{
            marginTop: "1rem",
            backgroundColor: "#EDBDC6",
            borderRadius: "1rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            display: "flex",
          }}
        >
          <Grid item>
            <Typography fontSize="1.2rem" fontWeight="700">
              Detalle de la Tarjeta
            </Typography>
          </Grid>
          <Grid item>
            <KeyboardArrowDownIcon
              sx={{
                width: "2rem",
                height: "2rem",
                color: "#323E48",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          padding="0.5rem 1rem 0.4rem 1rem"
          sx={{
            marginTop: "0.5rem",
            backgroundColor: "#ffffff",
            borderRadius: "1rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            display: "flex",
          }}
        >
          <Grid item xs={11} padding="0.3rem 0.8rem 0.3rem 0.5rem">
            <Grid container justifyContent="space-between">
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography fontSize="0.85rem" fontWeight="400">
                      Saldo a Pagar
                    </Typography>
                  </Grid>
                  <Grid item textAlign="center">
                    <Typography fontSize="1.2rem" fontWeight="600">
                      $500
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography fontSize="0.85rem" fontWeight="400">
                      Saldo Restante
                    </Typography>
                  </Grid>
                  <Grid item textAlign="center">
                    <Typography fontSize="1.2rem" fontWeight="600">
                      $2,000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <img
                  src="/progreso.png"
                  style={{ width: "100%", paddingTop: "0.3rem" }}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <ArrowForwardIosIcon
              sx={{
                width: "1.2rem",
                height: "1.2rem",
                color: "#323E48",
              }}
            />
          </Grid>
        </Grid>

        <Grid item container alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <Grid
              container
              height="4rem"
              sx={{
                marginTop: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "1rem",
                boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                display: "flex",
              }}
              padding="0.5rem 0.5rem 0 0.5rem"
              alignItems="center"
            >
              <Grid item xs={5}>
                <img
                  src="/tarjetaBanorte.png"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "30%",
                  }}
                  alt=""
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  fontSize="0.7rem"
                  fontWeight="700"
                  marginTop="-0.5rem"
                >
                  Pagar desde tarjeta nómina
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              sx={{
                marginTop: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "1rem",
                boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                display: "flex",
              }}
              height="4rem"
            >
              <Grid item>
                <img src="/bill.png" alt=""></img>
              </Grid>
              <Grid item>
                <Typography
                  fontSize="0.6rem"
                  lineHeight="0.5rem"
                  textAlign="center"
                  fontWeight="600"
                >
                  Retiro
                </Typography>
                <Typography
                  fontSize="0.6rem"
                  textAlign="center"
                  fontWeight="600"
                >
                  sin tarjeta
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              height="4rem"
              direction="column"
              alignItems="center"
              sx={{
                marginTop: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "1rem",
                boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                display: "flex",
              }}
            >
              <Grid item>
                <img
                  src="/dots.png"
                  alt=""
                  style={{ marginBottom: "-0.5rem" }}
                ></img>
              </Grid>
              <Grid item>
                <Typography
                  fontSize="0.6rem"
                  lineHeight="0.5rem"
                  textAlign="center"
                  fontWeight="600"
                >
                  Más
                </Typography>
                <Typography
                  fontSize="0.6rem"
                  textAlign="center"
                  fontWeight="600"
                >
                  opciones
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          sx={{
            paddingLeft: "1rem",
            marginTop: "1rem",
            backgroundColor: "#EDBDC6",
            borderRadius: "1rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
          }}
        >
          <Typography fontSize="1.2rem" fontWeight="700">
            Transacciones
          </Typography>
        </Grid>

        <Grid
          item
          container
          direction="column"
          sx={{
            paddingLeft: "1rem",
            marginTop: "-1rem",
            paddingTop: "1rem",
            zIndex: "-1",
            backgroundColor: "#EBF0F2",
            borderRadius: "1rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
          }}
        >
          <Grid
            item
            container
            padding="0.5rem 0 0.5rem 0"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography fontSize="1rem" fontWeight="600">
                Amazon compra
              </Typography>
            </Grid>
            <Grid item paddingRight="1rem">
              <Typography fontSize="0.85rem" fontWeight="300" textAlign="end">
                24/09/2022
              </Typography>
              <Typography fontSize="1rem" fontWeight="700">
                - $400.00
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            item
            container
            padding="0.5rem 0 0.5rem 0"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography fontSize="1rem" fontWeight="600">
                Amazon compra
              </Typography>
            </Grid>
            <Grid item paddingRight="1rem">
              <Typography fontSize="0.85rem" fontWeight="300" textAlign="end">
                24/09/2022
              </Typography>
              <Typography fontSize="1rem" fontWeight="700">
                - $400.00
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            item
            container
            padding="0.5rem 0 0.5rem 0"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography fontSize="1rem" fontWeight="600">
                Amazon compra
              </Typography>
            </Grid>
            <Grid item paddingRight="1rem">
              <Typography fontSize="0.85rem" fontWeight="300" textAlign="end">
                24/09/2022
              </Typography>
              <Typography fontSize="1rem" fontWeight="700">
                - $400.00
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            item
            container
            padding="0.5rem 0 0.5rem 0"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography fontSize="1rem" fontWeight="600">
                Amazon compra
              </Typography>
            </Grid>
            <Grid item paddingRight="1rem">
              <Typography fontSize="0.85rem" fontWeight="300" textAlign="end">
                24/09/2022
              </Typography>
              <Typography fontSize="1rem" fontWeight="700">
                - $400.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default LifetimeDetails;
