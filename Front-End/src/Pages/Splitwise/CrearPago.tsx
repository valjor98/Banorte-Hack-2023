import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  Input,
  InputAdornment,
  FormControl,
  FormHelperText,
  Dialog,
  MenuItem,
  Select,
} from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import GroupIcon from "@mui/icons-material/Group";

const listaPersonas = ["Jorge Loredo", "Narhari Olalde", "Mauricio Portilla"];
const listaGrupos = ["Los Motomamis", "Viaje Cancun", "Vacaciones"];
const grupoSeleccionado = "Los Motomamis";

const CrearPago = () => {
  const [term, setTerm] = useState("");
  const [paso, setPaso] = useState(1);
  const [showedPersonas, setShowedPersonas] = useState<string[]>(listaPersonas);
  const [showedGrupos, setShowedGrupos] = useState<string[]>(listaGrupos);

  const [cantidad, setCantidad] = useState(300);
  const [pagadoPor, setPagadoPor] = useState("");
  const [asunto, setAsunto] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const personas = listaPersonas.filter((persona) => {
      return persona.toLowerCase().includes(term.toLowerCase());
    });

    const grupos = listaGrupos.filter((grupo) => {
      return grupo.toLowerCase().includes(term.toLowerCase());
    });

    setShowedPersonas(personas);
    setShowedGrupos(grupos);
  }, [term]);

  const createGruposCheckboxes = () => {
    return showedGrupos.map((grupo) => {
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
            <Typography fontSize="1.2rem">{grupo}</Typography>
          </Grid>
          <Grid item xs={2} paddingLeft="1rem">
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ transform: "scale(1.4)" }} />}
              checkedIcon={<CircleIcon sx={{ transform: "scale(1.4)" }} />}
            />
          </Grid>
        </Grid>
      );
    });
  };

  const createCheckboxes = () => {
    return showedPersonas.map((persona) => {
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
            <Typography fontSize="1.2rem">{persona}</Typography>
          </Grid>
          <Grid item xs={2} paddingLeft="1rem">
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ transform: "scale(1.4)" }} />}
              checkedIcon={<CircleIcon sx={{ transform: "scale(1.4)" }} />}
            />
          </Grid>
        </Grid>
      );
    });
  };

  const paso1 = () => {
    return (
      <Grid item container xs={12} padding="0 0.5rem 0 0.5rem">
        <Grid item container direction="row">
          <Grid item xs={8}>
            <Grid container direction="column" justifyContent="space-between">
              <Grid item>
                <Typography
                  fontSize="1rem"
                  fontWeight="700"
                  padding="0.5rem 0 0 0.5rem"
                >
                  Paso 1:
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize="1.5rem"
                  fontWeight="300"
                  padding="0 0 0.5rem 0.5rem"
                >
                  Agrega contactos
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} paddingTop="0.5rem">
            <Button variant="contained" onClick={() => setPaso(paso + 1)}>
              <Typography textTransform="none">Continuar</Typography>
            </Button>
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: "rgba(255,255,255, 0.8)",
              borderRadius: "0.5rem",
              padding: "1rem",
              border: "0.1rem solid rgba(0, 0, 0, 0.4)",
            }}
            xs={12}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon
                sx={{ width: "2rem", height: "2rem", paddingRight: "1rem" }}
              />
              <TextField
                fullWidth
                onChange={(e) => setTerm(e.target.value)}
                id="input-with-sx"
                variant="standard"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item sx={{ marginTop: "1rem" }}>
          <Typography fontSize="1.2rem" fontWeight="600">
            Grupos
          </Typography>
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
          {createGruposCheckboxes()}
        </Grid>

        <Grid item sx={{ marginTop: "1rem" }}>
          <Typography fontSize="1.2rem" fontWeight="600">
            Personas
          </Typography>
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
          {createCheckboxes()}
        </Grid>
      </Grid>
    );
  };

  const paso2 = () => {
    return (
      <Grid item container xs={12} padding="0 0.5rem 0 0.5rem">
        <Grid item container direction="row">
          <Grid item xs={8}>
            <Grid container direction="column" justifyContent="space-between">
              <Grid item>
                <Typography
                  fontSize="1rem"
                  fontWeight="700"
                  padding="0.5rem 0 0 0.5rem"
                >
                  Paso 2:
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize="1.5rem"
                  fontWeight="300"
                  padding="0 0 0.5rem 0.5rem"
                >
                  Detalles
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} paddingTop="0.5rem">
            <Button variant="contained" onClick={() => setOpen(true)}>
              <Typography textTransform="none">Continuar</Typography>
            </Button>
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: "rgba(255,255,255, 0.8)",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem 0.5rem 1rem",
              border: "0.1rem solid rgba(0, 0, 0, 0.4)",
            }}
            xs={12}
          >
            <Typography display="inline-block" fontSize="0.8rem">
              Grupo seleccionado:&nbsp;
            </Typography>
            <Typography display="inline-block" fontWeight="600">
              {grupoSeleccionado}
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            paddingTop="1rem"
            justifyContent="center"
          >
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <AssignmentOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="1.5rem"
                    fontWeight="500"
                    lineHeight={0}
                  >
                    Asunto
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "rgba(255,255,255, 0.8)",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem 0.5rem 1rem",
                border: "0.1rem solid rgba(0, 0, 0, 0.4)",
              }}
              xs={12}
            >
              <TextField
                fullWidth
                onChange={(e) => setAsunto(e.target.value)}
                id="input-with-sx"
                variant="standard"
                placeholder="Escribe..."
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            paddingTop="1rem"
            justifyContent="center"
          >
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CurrencyExchangeOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="1.5rem"
                    fontWeight="500"
                    lineHeight={0}
                  >
                    Cantidad
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "rgba(255,255,255, 0.8)",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem 0.5rem 1rem",
                border: "0.1rem solid rgba(0, 0, 0, 0.4)",
              }}
              xs={12}
            >
              <FormControl fullWidth variant="standard">
                <Input
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
                <FormHelperText id="filled-weight-helper-text">
                  Cantidad en Pesos Mexicanos MXN
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            paddingTop="1rem"
            justifyContent="center"
          >
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <GroupIcon />
                </Grid>
                <Grid item>
                  <Typography
                    display="inline-block"
                    fontSize="1.5rem"
                    fontWeight="500"
                    lineHeight={0}
                  >
                    Distribucion
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "rgba(255,255,255, 0.8)",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem 0.5rem 1rem",
                border: "0.1rem solid rgba(0, 0, 0, 0.4)",
              }}
              xs={12}
            >
              <Grid container direction="column">
                <Grid item container>
                  <Typography fontWeight="600">Pagado por: </Typography>
                  <FormControl fullWidth>
                    <Select
                      value={pagadoPor}
                      onChange={(e) => setPagadoPor(e.target.value)}
                    >
                      {listaPersonas.map((persona) => {
                        return <MenuItem value={persona}>{persona}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item container paddingTop="1rem" direction="column">
                  <Grid item>
                    <Typography fontWeight="600">Dividido con: </Typography>
                  </Grid>

                  {listaPersonas.map((persona) => {
                    if (persona !== pagadoPor) {
                      return (
                        <Grid item container alignItems="center">
                          <Grid item xs={7}>
                            <Typography>{persona}</Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <FormControl fullWidth variant="standard">
                              <Input
                                id="standard-adornment-amount"
                                startAdornment={
                                  <InputAdornment position="start">
                                    $
                                  </InputAdornment>
                                }
                                placeholder={`${
                                  cantidad / listaPersonas.length
                                }`}
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      );
                    }
                    return <></>;
                  })}
                </Grid>
              </Grid>
              <Typography
                fontWeight="400"
                fontSize="0.6rem"
                color="rgba(0,0,0,0.5)"
                paddingTop="1rem"
              >
                Por defecto se divide en partes iguales. Puedes cambiar esto
                agregando una cantidad al nombre de la persona
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Dialog onClose={() => setOpen(false)} open={open}>
          <Grid container padding="1rem">
            <Grid item xs={12}>
              <Typography fontSize="1.3rem" fontWeight="300">
                Confima el pago:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="end" fontSize="1.5rem" fontWeight="700">
                {asunto}
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={12}
              paddingTop="1rem"
              justifyContent="flex-end"
            >
              <Link to="/comparte" style={{ textDecoration: "none" }}>
                <Button variant="contained" onClick={() => setOpen(false)}>
                  <Typography textTransform="none">Confirmar</Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
    );
  };

  const selectPaso = () => {
    switch (paso) {
      case 1:
        return paso1();
      case 2:
        return paso2();
      case 3:
        return paso2();
    }
  };

  return (
    <PageContainer container>
      <BackgroundImage />
      {selectPaso()}
    </PageContainer>
  );
};

export default CrearPago;
