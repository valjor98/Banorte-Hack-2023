import React, { useState } from "react";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";
import { Button, Grid, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const listaPagos = [
  {
    titulo: "Vacaciones Cancun",
    valor: 40,
    descripcion: "Falta pagar:",
    dinero: "$800",
    persona: "Jorge Loredo",
    color: "",
  },
  {
    titulo: "Viaje CDMX",
    valor: 65,
    descripcion: "Falta pagar: ",
    dinero: "$450",
    persona: "Mauricio Portilla",
    color: "",
  },
];

const listaPagosAFavor = [
  {
    titulo: "Comida Jueves",
    valor: 40,
    descripcion: "te debe:",
    dinero: "$340",
    persona: "Marhari Olalde",
    color: "",
  },
  {
    titulo: "Renta AirBnb",
    valor: 65,
    descripcion: "te debe:",
    dinero: "$750",
    persona: "Jorge Valdivia",
    color: "",
  },
];

const SplitwiseHome = () => {
  const [showButtons, setShowButtons] = useState(false);

  const createListaPagos = () => {
    const lista = listaPagos.map((pago) => {
      return (
        <Link
          to="/forma-pago"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <Grid container direction="column" paddingBottom="0.5rem">
            <Grid item>
              <Typography>{pago.titulo}</Typography>
            </Grid>
            <Grid item sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                color="warning"
                variant="determinate"
                value={pago.valor}
              />
            </Grid>
            <Grid item sx={{ minWidth: 35 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                display="inline-block"
              >
                {pago.descripcion}&nbsp;
              </Typography>
              <Typography
                variant="body2"
                fontWeight="500"
                display="inline-block"
              >
                {pago.dinero} MXN &nbsp;a&nbsp;
              </Typography>
              <Typography
                variant="body2"
                fontWeight="700"
                display="inline-block"
              >
                {pago.persona}
              </Typography>
            </Grid>
          </Grid>
        </Link>
      );
    });

    return lista;
  };

  const ceateListaAFavor = () => {
    const lista = listaPagosAFavor.map((pago) => {
      return (
        <Grid container direction="column" paddingBottom="0.5rem">
          <Grid item>
            <Typography>{pago.titulo}</Typography>
          </Grid>
          <Grid item sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              color="info"
              variant="determinate"
              value={pago.valor}
            />
          </Grid>
          <Grid item sx={{ minWidth: 35 }}>
            <Typography variant="body2" fontWeight="700" display="inline-block">
              {pago.persona}&nbsp;
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              display="inline-block"
            >
              {pago.descripcion}&nbsp;
            </Typography>
            <Typography variant="body2" fontWeight="500" display="inline-block">
              {pago.dinero} MXN
            </Typography>
          </Grid>
        </Grid>
      );
    });

    return lista;
  };

  return (
    <PageContainer container direction="column" position="relative">
      <BackgroundImage />

      <Grid item padding="0.5rem">
        <Typography fontSize="1.4rem" fontWeight="700" paddingLeft="0.5rem">
          Mi Saldo
        </Typography>
        <Grid
          container
          direction="row"
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
          }}
        >
          <Grid item padding="0.5rem 1rem 0 1rem" xs={3}>
            <img src="./circleChart.png" alt="" style={{ height: "5rem" }} />
          </Grid>
          <Grid item padding="0.5rem 1rem 0 1rem" xs={9}>
            <Typography
              padding="0.2rem 0 0 1rem"
              lineHeight="1.2rem"
              fontWeight="600"
            >
              Tu saldo es
            </Typography>
            <Typography
              fontSize="2rem"
              color="#13B705"
              textAlign="center"
              fontWeight="600"
            >
              + $1,362
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container padding="0.5rem">
        <Typography fontSize="1.2rem" fontWeight="700" paddingLeft="0.5rem">
          Pagos Faltantes
        </Typography>
        <Grid
          container
          direction="column"
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
          }}
          padding="0.5rem 1rem 0rem 1rem"
        >
          <Grid item>{createListaPagos()}</Grid>
          <Grid item alignSelf="flex-end">
            <Button>
              <Typography textTransform="none">Ver mas</Typography>
              <KeyboardArrowDownIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container padding="0.5rem">
        <Typography fontSize="1.2rem" fontWeight="700" paddingLeft="0.5rem">
          Pagos a Favor
        </Typography>
        <Grid
          container
          direction="column"
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
          }}
          padding="0.5rem 1rem 0rem 1rem"
        >
          <Grid item>{ceateListaAFavor()}</Grid>
          <Grid item alignSelf="flex-end">
            <Button>
              <Typography textTransform="none">Ver mas</Typography>
              <KeyboardArrowDownIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
        <Grid container direction="column" spacing={1}>
          {showButtons ? (
            <>
              <Grid item alignSelf="flex-end">
                <Link to="/contactos" style={{ textDecoration: "none" }}>
                  <Grid
                    container
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                      borderRadius: "2rem",
                    }}
                  >
                    <Grid item alignSelf="center">
                      <Typography
                        padding="0 0.5rem 0.2rem 1rem"
                        fontSize="1.4rem"
                        lineHeight="0"
                        fontWeight="700"
                        color="#EB0029"
                      >
                        Contactos
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "50%",
                          width: "4rem",
                          height: "4rem",
                          boxShadow:
                            "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                        }}
                      >
                        <PersonIcon sx={{ transform: "scale(1.6)" }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>

              <Grid item alignSelf="flex-end">
                <Link to="/crear-pago" style={{ textDecoration: "none" }}>
                  <Grid
                    container
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                      borderRadius: "2rem",
                    }}
                  >
                    <Grid item alignSelf="center">
                      <Typography
                        padding="0 0.5rem 0.2rem 1rem"
                        fontSize="1.4rem"
                        lineHeight="0"
                        fontWeight="700"
                        color="#EB0029"
                      >
                        Crear Pago
                      </Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "50%",
                          width: "4rem",
                          height: "4rem",
                          boxShadow:
                            "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                        }}
                      >
                        <CurrencyExchangeIcon
                          sx={{ transform: "scale(1.6)" }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>

              <Grid item alignSelf="flex-end">
                <Link to="/crear-grupo" style={{ textDecoration: "none" }}>
                  <Grid
                    container
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                      borderRadius: "2rem",
                    }}
                  >
                    <Grid item alignSelf="center">
                      <Typography
                        padding="0 0.5rem 0.2rem 1rem"
                        fontSize="1.4rem"
                        lineHeight="0"
                        fontWeight="700"
                        color="#EB0029"
                      >
                        Crear Grupo
                      </Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "50%",
                          width: "4rem",
                          height: "4rem",
                          boxShadow:
                            "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                        }}
                      >
                        <GroupsIcon sx={{ transform: "scale(1.6)" }} />
                      </Button>{" "}
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            </>
          ) : (
            <></>
          )}

          <Grid item alignSelf="flex-end">
            <Button
              onClick={() => setShowButtons(!showButtons)}
              variant="contained"
              sx={{
                borderRadius: "50%",
                width: "4rem",
                height: "4rem",
                boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
              }}
            >
              {showButtons ? (
                <CloseIcon sx={{ transform: "scale(2)" }} />
              ) : (
                <AddIcon sx={{ transform: "scale(2)" }} />
              )}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SplitwiseHome;
