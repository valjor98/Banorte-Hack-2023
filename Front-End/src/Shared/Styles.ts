import styled from "@emotion/styled";
import { Grid, Button } from "@mui/material";

export const ImageContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
}));

export const LogoIcon = styled("img")(({ theme }) => ({
  height: "4rem",
  width: "auto",
  padding: "1rem",
}));

export const LogoIconSmall = styled("img")(({ theme }) => ({
  height: "3rem",
  width: "auto",
}));

export const ButtonWithRadius = styled(Button)(({ theme }) => ({
  borderRadius: "1rem",
}));

export const BackgroundImage = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./Home.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const BackgroundImageSlide1 = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./slideTipo1ConTarjetas.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const BackgroundImageSlide2 = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./slideTipo2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const BackgroundImageSlide3 = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./slideTipo1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const PageContainer = styled(Grid)(({ theme }) => ({
  padding: "4rem 0.5rem 0 0.5rem",
}));
