import React from "react";
import { Grid, Typography } from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ExploreIcon from "@mui/icons-material/Explore";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SavingsIcon from "@mui/icons-material/Savings";
import { Link } from "react-router-dom";

const XperienceHome = () => {
  return (
    <PageContainer container direction="column" color="#000000">
      <BackgroundImage />
      <Grid item container direction="column" padding="0.5rem">
        <Grid item>
          <Link
            to="/xperience-details"
            style={{ textDecoration: "none", color: "#323E48" }}
          >
            <Grid
              container
              justifyContent="space-between"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                borderRadius: "0.5rem",
              }}
              padding="0.5rem 1rem 0.5rem 1rem"
            >
              <Grid item>
                <Typography fontSize="1.1rem" fontWeight="700">
                  Jorge Valdivia
                </Typography>
                <Typography fontSize="0.8rem" fontWeight="600">
                  Retos completados: 15
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item>
                    <WorkspacePremiumIcon sx={{ color: "#BA0101" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      color="#BA0101"
                      fontSize="1.2rem"
                      fontWeight="700"
                      lineHeight="0.6"
                    >
                      1250 XP
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <Grid item container alignItems="center" direction="column">
          <Grid item>
            <Typography
              fontSize="1.25rem"
              fontWeight="800"
              padding="0.5rem 0 0.5rem 0"
            >
              Categorías
            </Typography>
          </Grid>
          <Grid item container spacing={1}>
            <Grid item xs={3}>
              <Grid
                container
                justifyContent="center"
                padding="0.5rem"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <Grid item>
                  <Typography fontSize="1rem" fontWeight="700" color="#BA0101">
                    Explora
                  </Typography>
                </Grid>
                <Grid item>
                  <ExploreIcon
                    sx={{ color: "#BA0101", height: "3rem", width: "3rem" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                justifyContent="center"
                padding="0.5rem"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <Grid item>
                  <Typography fontSize="1rem" fontWeight="700" color="#BA0101">
                    Aprende
                  </Typography>
                </Grid>
                <Grid item>
                  <SchoolIcon
                    sx={{ color: "#BA0101", height: "3rem", width: "3rem" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                justifyContent="center"
                padding="0.5rem"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <Grid item>
                  <Typography fontSize="1rem" fontWeight="700" color="#BA0101">
                    Completa
                  </Typography>
                </Grid>
                <Grid item>
                  <AssignmentTurnedInIcon
                    sx={{ color: "#BA0101", height: "3rem", width: "3rem" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                justifyContent="center"
                padding="0.5rem"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <Grid item>
                  <Typography fontSize="1rem" fontWeight="700" color="#BA0101">
                    Ahorra
                  </Typography>
                </Grid>
                <Grid item>
                  <SavingsIcon
                    sx={{ color: "#BA0101", height: "3rem", width: "3rem" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" direction="column">
          <Grid item>
            <Typography
              fontSize="1.25rem"
              fontWeight="800"
              padding="1rem 0 0.5rem 0"
            >
              Progreso
            </Typography>
          </Grid>

          <Grid
            item
            container
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
            }}
            padding="0.5rem"
          >
            <Grid item container>
              <Grid item container>
                <Grid item xs={2}>
                  <AssignmentTurnedInIcon
                    sx={{ color: "#BA0101", height: "2.5rem", width: "2.5rem" }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography fontSize="1rem">
                    Realiza tres transacciones en el apartado “Pago de
                    Servicios”
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                padding="0.5rem 1rem 0.5rem 1rem"
              >
                <Grid item>
                  <Typography display="inline-block" paddingRight="0.5rem">
                    Gana:
                  </Typography>
                  <Typography
                    display="inline-block"
                    color="#BA0101"
                    fontWeight="700"
                    fontSize="1.2rem"
                  >
                    50XP
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontWeight="700"
                    fontSize="1.2rem"
                  >
                    1
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontWeight="400"
                    fontSize="0.9rem"
                  >
                    /3
                  </Typography>
                </Grid>
                <Grid item container>
                  <img src="/progreso1.png" alt="" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
            }}
            padding="0.5rem"
            marginTop="1rem"
          >
            <Grid item container>
              <Grid item container>
                <Grid item xs={2}>
                  <ExploreIcon
                    sx={{ color: "#BA0101", height: "2.5rem", width: "2.5rem" }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography fontSize="1rem">
                    Conoce el apartado de “Inversiones”
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                padding="0.5rem 1rem 0.5rem 1rem"
              >
                <Grid item>
                  <Typography display="inline-block" paddingRight="0.5rem">
                    Gana:
                  </Typography>
                  <Typography
                    display="inline-block"
                    color="#BA0101"
                    fontWeight="700"
                    fontSize="1.2rem"
                  >
                    20XP
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontWeight="700"
                    fontSize="1.2rem"
                  >
                    0
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontWeight="400"
                    fontSize="0.9rem"
                  >
                    /1
                  </Typography>
                </Grid>
                <Grid item container>
                  <img src="/progreso2.png" alt="" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
            }}
            padding="0.5rem"
            marginTop="1rem"
          >
            <Grid item container>
              <Grid item container>
                <Grid item xs={2}>
                  <SchoolIcon
                    sx={{ color: "#BA0101", height: "2.5rem", width: "2.5rem" }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography fontSize="1rem">
                    Únete a Banorte University y completa una lectura
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                padding="0.5rem 1rem 0.5rem 1rem"
              >
                <Grid item>
                  <Typography display="inline-block" paddingRight="0.5rem">
                    Gana:
                  </Typography>
                  <Typography
                    display="inline-block"
                    color="#BA0101"
                    fontWeight="700"
                    fontSize="1.2rem"
                  >
                    30XP
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontWeight="700"
                    fontSize="1.2rem"
                  >
                    0
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontWeight="400"
                    fontSize="0.9rem"
                  >
                    /1
                  </Typography>
                </Grid>
                <Grid item container>
                  <img src="/progreso2.png" alt="" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default XperienceHome;
