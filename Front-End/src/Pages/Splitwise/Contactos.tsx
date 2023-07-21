import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const listaContactos = ["Jorge Loredo", "Narhari Olalde", "Mauricio Portilla"];
const listaGrupos = [
  {
    nombre: "Los Motomamis",
    miembros: ["Jorge Loredo,", "Narhari Olalde,", "Mauricio Portilla"],
    dinero: "+$500",
  },
  {
    nombre: "Viaje Texcoco",
    miembros: ["Daniel Loredo,", "Narhari Olalde,", "Mauricio Portilla"],
    dinero: "-$1200",
  },
  {
    nombre: "Los bellacos",
    miembros: ["Jorge Loredo,", "Narhari Olalde,", "Mauricio Portilla"],
    dinero: "+$600",
  },
];

const Contactos = () => {
  const createContactos = () => {
    return listaContactos.map((contacto) => {
      return (
        <Grid
          item
          container
          alignItems="center"
          padding="0.5rem 1rem 0.5rem 1rem"
          borderBottom="0.1rem solid rgba(0,0,0,0.1)"
        >
          <Grid item xs={2}>
            <AccountCircleIcon
              sx={{ color: "#323E48", paddingTop: "0.2rem" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography fontSize="1.2rem">{contacto}</Typography>
          </Grid>
          <Grid item xs={2} paddingLeft="1rem"></Grid>
        </Grid>
      );
    });
  };

  const createGrupos = () => {
    return listaGrupos.map((grupo, index) => {
      const listaPersonas = grupo.miembros.map((persona) => {
        return (
          <Typography display="inline-block" fontSize="0.8rem" fontWeight="300">
            {persona}&nbsp;
          </Typography>
        );
      });

      return (
        <Grid
          item
          container
          alignItems="center"
          padding="0.5rem 1rem 0.5rem 1rem"
          borderBottom="0.1rem solid rgba(0,0,0,0.1)"
        >
          <Grid item xs={2}>
            <GroupIcon sx={{ color: "#323E48", paddingTop: "0.2rem" }} />
          </Grid>
          <Grid item xs={8}>
            <Typography fontSize="1.2rem">{grupo.nombre}</Typography>
            {listaPersonas}
          </Grid>
          <Grid item xs={2} alignSelf="flex-start">
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  color={`${index % 2 === 0 ? "#13B705" : "#EB0029"}`}
                >
                  {grupo.dinero}
                </Typography>
              </Grid>
              <Grid item paddingTop="1rem">
                <ArrowForwardIosIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <PageContainer container>
      <BackgroundImage />
      <Grid item container direction="column" padding="1rem">
        <Grid item>
          <Grid container justifyContent="space-between" paddingBottom="1rem">
            <Grid item>
              <Typography fontSize="1.5rem" fontWeight="700">
                Grupos
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained">
                <Typography textTransform="none">Agregar</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{
            backgroundColor: "rgba(255,255,255, 0.8)",
            borderRadius: "0.5rem",

            border: "0.1rem solid rgba(0, 0, 0, 0.4)",
          }}
        >
          {createGrupos()}
        </Grid>
        <Grid item alignSelf="flex-end">
          <Button>
            <Typography textTransform="none">Ver mas</Typography>
            <KeyboardArrowDownIcon />
          </Button>
        </Grid>
      </Grid>

      <Grid item container direction="column" padding="1rem">
        <Grid item>
          <Grid container justifyContent="space-between" paddingBottom="1rem">
            <Grid item>
              <Typography fontSize="1.5rem" fontWeight="700">
                Contactos
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained">
                <Typography textTransform="none">Agregar</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{
            backgroundColor: "rgba(255,255,255, 0.8)",
            borderRadius: "0.5rem",

            border: "0.1rem solid rgba(0, 0, 0, 0.4)",
          }}
        >
          {createContactos()}
        </Grid>
        <Grid item alignSelf="flex-end">
          <Button>
            <Typography textTransform="none">Ver mas</Typography>
            <KeyboardArrowDownIcon />
          </Button>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default Contactos;
