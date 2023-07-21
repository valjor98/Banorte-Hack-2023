import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { PageContainer } from "../../Shared/Styles";
import { Link } from "react-router-dom";

const Slide5 = () => {
  return (
    <PageContainer container direction="column" alignItems="center">
      <Grid item>
        <Typography
          fontWeight="700"
          color="#323E48"
          fontSize="2rem"
          textAlign="center"
          lineHeight="2.2rem"
        >
          Banorte
        </Typography>
        <Typography
          fontWeight="700"
          color="#323E48"
          fontSize="2rem"
          textAlign="center"
          lineHeight="2.2rem"
        >
          Generations
        </Typography>
      </Grid>
      <Grid item paddingTop="1.5rem">
        <Typography
          fontWeight="300"
          color="#323E48"
          fontSize="1.8rem"
          textAlign="center"
          lineHeight="2rem"
        >
          Banorte evoluciona
        </Typography>
        <Typography
          fontWeight="300"
          color="#323E48"
          fontSize="1.8rem"
          textAlign="center"
          lineHeight="2rem"
        >
          para estar contigo y{" "}
        </Typography>
        <Typography
          fontWeight="300"
          color="#323E48"
          fontSize="1.8rem"
          textAlign="center"
          lineHeight="2rem"
        >
          tu familia
        </Typography>
      </Grid>
      <Grid item paddingTop="1rem">
        <img src="./tarjetaBanorte.png" alt="" style={{ height: "14rem" }} />
      </Grid>
      <Grid item paddingTop="1.5rem">
        <Link
          to="/home-generations"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button variant="contained" sx={{ borderRadius: "0.5rem" }}>
            <Typography textTransform="none" fontSize="2rem">
              Solicítala ya
            </Typography>{" "}
          </Button>
        </Link>
      </Grid>
    </PageContainer>
  );
};

export default Slide5;
