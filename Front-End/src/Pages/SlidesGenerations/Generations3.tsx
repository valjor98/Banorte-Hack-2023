import React from "react";
import { BackgroundImageSlide3, PageContainer } from "../../Shared/Styles";
import { Grid, Typography } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Slide3 = () => {
  return (
    <PageContainer container direction="column">
      <BackgroundImageSlide3 />
      <Grid item alignSelf="flex-end" paddingRight="0.5rem">
        <img src="./tarjetaBanorte.png" alt="" style={{ height: "7rem" }} />
      </Grid>

      <Grid item container justifyContent="center" paddingTop="1rem">
        <Grid item>
          <Grid container alignItems="center">
            <Grid item paddingRight="1rem">
              <Typography
                textAlign="center"
                fontSize="1.3rem"
                fontWeight="700"
                color="#323E48"
              >
                Banorte
              </Typography>
              <Typography
                textAlign="center"
                fontSize="1.3rem"
                fontWeight="700"
                color="#323E48"
              >
                Youth
              </Typography>
            </Grid>
            <Grid item paddingRight="1rem">
              <ArrowForwardIosIcon sx={{ width: "2.5rem", height: "2.5rem" }} />
            </Grid>
            <Grid item>
              <img
                src="./tarjetaBanorteRoja.png"
                alt=""
                style={{ height: "5rem" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item width="65%" paddingTop="0.5rem">
          <Typography textAlign="center" fontSize="1.2rem">
            Empieza a construir tu historial crediticio desde temprana edad
          </Typography>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" paddingTop="1rem">
        <Grid item>
          <Link
            to="/generations-4"
            style={{ textDecoration: "none", width: "100%" }}
          >
            {" "}
            <Grid container alignItems="center">
              <Grid item paddingRight="1rem">
                <Typography
                  textAlign="center"
                  fontSize="1.3rem"
                  fontWeight="700"
                  color="#323E48"
                >
                  Banorte
                </Typography>
                <Typography
                  textAlign="center"
                  fontSize="1.3rem"
                  fontWeight="700"
                  color="#323E48"
                >
                  Lifetime
                </Typography>
              </Grid>
              <Grid item paddingRight="1rem">
                <ArrowForwardIosIcon
                  sx={{ width: "2.5rem", height: "2.5rem", color: "#323E48" }}
                />
              </Grid>
              <Grid item>
                <img
                  src="./tarjetaBanorteRoja.png"
                  alt=""
                  style={{ height: "5rem" }}
                />
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <Grid item width="65%" paddingTop="0.5rem">
          <Link
            to="/generations-4"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Typography textAlign="center" fontSize="1.2rem" color="#323E48">
              Continúa construyendo tu futuro y el de lxs que más quieres
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Slide3;
