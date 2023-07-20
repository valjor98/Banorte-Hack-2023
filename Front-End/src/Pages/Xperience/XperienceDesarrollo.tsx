import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const XperienceDesarrollo = () => {
  return (
    <PageContainer container direction="column" color="#000000">
      <BackgroundImage />
      <Grid item container direction="column" padding="0.5rem">
        <Grid item>
          <Typography fontSize="1.3rem" fontWeight="700">
            Mi Desarrollo
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
          }}
          padding="0.5rem"
        >
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography fontSize="1.2rem" fontWeight="700">
                Jorge Valdivia
              </Typography>
            </Grid>
            <Grid item>
              <WorkspacePremiumIcon sx={{ color: "#BA0101" }} />
              <WorkspacePremiumIcon sx={{ color: "#BA0101" }} />
              <WorkspacePremiumIcon sx={{ color: "#BA0101" }} />
            </Grid>
          </Grid>
          <Grid item container>
            <img src="/progreso3.png" alt="" style={{ width: "100%" }} />
          </Grid>
          <Grid item container paddingLeft="0.5rem">
            <Grid item xs={9}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    paddingRight="0.3rem"
                    fontWeight="700"
                    lineHeight="0.3rem"
                  >
                    Número de Transacciones:
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    lineHeight="0.3rem"
                  >
                    142
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    paddingRight="0.3rem"
                    fontWeight="700"
                    lineHeight="0.3rem"
                  >
                    Retos completados:
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    lineHeight="0.3rem"
                  >
                    15
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    paddingRight="0.3rem"
                    fontWeight="700"
                    lineHeight="0.3rem"
                  >
                    Lecciones adquiridas
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    lineHeight="0.3rem"
                  >
                    12
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    paddingRight="0.3rem"
                    fontWeight="700"
                    lineHeight="0.3rem"
                  >
                    XP total recolectada:
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    lineHeight="0.3rem"
                  >
                    2200 XP
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    paddingRight="0.3rem"
                    fontWeight="700"
                    lineHeight="0.3rem"
                  >
                    Se unió en:
                  </Typography>
                  <Typography
                    display="inline-block"
                    fontSize="0.9rem"
                    lineHeight="0.3rem"
                  >
                    22/09/2022
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} alignSelf="flex-end">
              <Typography
                color="#BA0101"
                fontSize="1.3rem"
                fontWeight="700"
                paddingRight="0.5rem"
              >
                1250xp
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" paddingTop="1rem">
          <Typography fontSize="1.3rem" fontWeight="700" paddingBottom="0.5rem">
            Recompensas
          </Typography>
        </Grid>
        <Grid item container>
          <img src="/premioCompletos.png" alt="" style={{ width: "100%" }} />
        </Grid>

        <Grid item alignSelf="center">
          <Button
            sx={{ marginTop: "0.5rem", borderBottom: "1px solid #BA0101" }}
          >
            <Typography textTransform="none" color="#BA0101">
              Ver mas
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "#BA0101" }} />
          </Button>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default XperienceDesarrollo;
