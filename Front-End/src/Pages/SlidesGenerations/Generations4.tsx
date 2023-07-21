import React from "react";
import { BackgroundImageSlide2, PageContainer } from "../../Shared/Styles";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slide4 = () => {
  return (
    <PageContainer
      container
      direction="column"
      width="100%"
      minHeight="100vh"
      justifyContent="space-between"
    >
      <BackgroundImageSlide2 />

      <Grid item container>
        <Link
          to="/generations-5"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Grid
            container
            direction="row"
            padding="0 0 0 1rem"
            justifyContent="space-between"
          >
            <Grid item container direction="column" xs={10}>
              <Grid item>
                <Typography
                  fontSize="2.5rem"
                  fontWeight="700"
                  color="#323E48"
                  lineHeight="2.6rem"
                >
                  Banorte
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize="2.5rem"
                  fontWeight="700"
                  color="#323E48"
                  lineHeight="2.6rem"
                >
                  Generations
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2} alignSelf="flex-end">
              <ArrowForwardIosIcon
                sx={{ width: "3rem", height: "3rem", color: "#323E48" }}
              />
            </Grid>
          </Grid>
        </Link>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        paddingBottom="1rem"
      >
        <Grid item>
          <img src="./tarjetaBanorte.png" alt="" style={{ height: "8rem" }} />
        </Grid>
        <Grid item alignSelf="flex-start">
          <Typography
            fontWeight="700"
            fontSize="1.3rem"
            padding="1rem 0 0 1.2rem "
            lineHeight="1rem"
            marginBottom="-0.6rem"
          >
            Beneficios
          </Typography>
          <Typography lineHeight="1.2rem" fontSize="1.2rem">
            <ul>
              <li style={{ paddingBottom: "0.3rem" }}>
                Descuentos en todo tipo de eventos y experiencias en familia
              </li>
              <li style={{ paddingBottom: "0.3rem" }}>
                Haz transferencias a familiares con en segundos y con pruebas?
              </li>
              <li style={{ paddingBottom: "0.3rem" }}>
                Administra los gastos de tus dependientes desde la aplicación
              </li>
              <li style={{ paddingBottom: "0.3rem" }}>
                Gana puntos en conjunto
              </li>
              <li style={{ paddingBottom: "0.3rem" }}>
                Planfica y crea tu futuro en tu banco de confianza
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid container direction="column" padding="0 0 1rem 1rem">
          <Grid item>
            <Typography
              color="#ffffff"
              textAlign="start"
              fontSize="1.3rem"
              lineHeight="1.5rem"
              fontWeight="600"
            >
              Hecha para
            </Typography>
            <Typography
              color="#ffffff"
              textAlign="start"
              fontSize="1.3rem"
              lineHeight="1.5rem"
              fontWeight="600"
            >
              compartir experiencias
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Slide4;
