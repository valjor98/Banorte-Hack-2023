import { Grid, Typography } from "@mui/material";
import React from "react";
import { BackgroundImageSlide1, PageContainer } from "../../Shared/Styles";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Slide1 = () => {
  return (
    <PageContainer
      container
      direction="column"
      width="100%"
      minHeight="100vh"
      justifyContent="space-between"
    >
      <BackgroundImageSlide1 />

      <Grid item alignSelf="flex-end">
        <Grid container direction="column" padding="0 1rem 0 0">
          <Grid item>
            <Typography
              color="#ffffff"
              fontSize="2rem"
              fontWeight="700"
              textAlign="end"
              lineHeight="1.8rem"
              paddingBottom="0.5rem"
              marginTop="-0.4rem"
            >
              Banorte
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#ffffff"
              textAlign="end"
              fontSize="1.3rem"
              lineHeight="1.3rem"
              fontWeight="600"
            >
              Hecho para crecer
            </Typography>
            <Typography
              color="#ffffff"
              textAlign="end"
              fontSize="1.3rem"
              lineHeight="1.3rem"
              fontWeight="600"
            >
              contigo
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Link to="/generations-2" style={{ textDecoration: "none" }}>
          <Grid container direction="row" padding="0 0 2rem 1rem">
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
    </PageContainer>
  );
};

export default Slide1;
