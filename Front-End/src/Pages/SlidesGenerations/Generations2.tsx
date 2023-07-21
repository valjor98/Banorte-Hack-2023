import React from "react";
import { BackgroundImageSlide2, PageContainer } from "../../Shared/Styles";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";

const Slide2 = () => {
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
          to="/generations-3"
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
                  Lifetime
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
      <Grid item container direction="column" paddingBottom="3rem">
        <Grid item container direction="column" alignItems="center">
          <Grid item sx={{ position: "relative" }}>
            <Typography fontSize="1.2rem" fontWeight="700" color="#323E48">
              Tu cuenta te da más
            </Typography>
          </Grid>
          <Grid item height="auto">
            <img src="./tarjetaBanorte.png" alt="" style={{ height: "9rem" }} />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={5}>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <AddIcon
                  sx={{
                    paddingLeft: "2rem",
                    width: "2.2rem",
                    height: "2.2rem",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src="./tarjetaBanorteRoja.png"
                  alt=""
                  style={{ height: "6rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontWeight="700"
                  fontSize="1.1rem"
                  textAlign="center"
                >
                  Banorte
                </Typography>
                <Typography
                  fontWeight="700"
                  fontSize="1.1rem"
                  textAlign="center"
                >
                  Youth
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <AddIcon
                  sx={{
                    paddingRight: "2rem",
                    width: "2.2rem",
                    height: "2.2rem",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src="./tarjetaBanorteRoja.png"
                  alt=""
                  style={{ height: "6rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontWeight="700"
                  fontSize="1.1rem"
                  textAlign="center"
                >
                  Banorte
                </Typography>
                <Typography
                  fontWeight="700"
                  fontSize="1.1rem"
                  textAlign="center"
                >
                  Generations
                </Typography>
              </Grid>
            </Grid>
          </Grid>
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
export default Slide2;
