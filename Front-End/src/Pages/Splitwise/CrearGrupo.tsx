import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { BackgroundImage, PageContainer } from "../../Shared/Styles";

import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const listaPersonas = [
  "Jorge Loredo",
  "Narhari Olalde",
  "Mauricio Portilla",
  "Daniel Loredo",
  "Jorge Loredo",
  "Narhari Olalde",
  "Mauricio Portilla",
  "Daniel Loredo",
];

const CrearGrupo = () => {
  const [term, setTerm] = useState("");
  const [showedPersonas, setShowedPersonas] = useState<string[]>(listaPersonas);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const personas = listaPersonas.filter((persona) => {
      return persona.toLowerCase().includes(term.toLowerCase());
    });
    setShowedPersonas(personas);
  }, [term]);

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

  return (
    <PageContainer container>
      <BackgroundImage />

      <Grid item container xs={12} padding="0 0.5rem 0 0.5rem">
        <Grid item container>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography
                  fontSize="1.4rem"
                  fontWeight="700"
                  padding="0.5rem 0 0.5rem 0.5rem"
                >
                  Añadir personas
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => setOpen(true)}>
                  <Typography textTransform="none">Continuar</Typography>
                </Button>
              </Grid>
            </Grid>
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

        <Grid
          item
          container
          sx={{
            backgroundColor: "rgba(255,255,255, 0.8)",
            borderRadius: "0.5rem",

            border: "0.1rem solid rgba(0, 0, 0, 0.4)",
            marginTop: "1rem",
          }}
        >
          {createCheckboxes()}
        </Grid>
      </Grid>

      <Dialog onClose={() => setOpen(false)} open={open}>
        <Grid container padding="1rem">
          <Grid item xs={12}>
            <Typography fontSize="1.5rem" fontWeight="700">
              Nombre del Grupo
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="input-with-sx" variant="standard" />
          </Grid>
          <Grid
            item
            container
            xs={12}
            paddingTop="1rem"
            justifyContent="flex-end"
          >
            <Link to="/comparte" style={{ textDecoration: "none" }}>
              <Button variant="contained" onClick={() => setOpen(true)}>
                <Typography textTransform="none">Guardar</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Dialog>
    </PageContainer>
  );
};

export default CrearGrupo;
