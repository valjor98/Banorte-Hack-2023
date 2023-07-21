import AppBar from "./Components/AppBar";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./Utils/Theme";
import Home from "./Pages/Home/Home";
import Slide1 from "./Pages/SlidesGenerations/Generations1";
import Slide2 from "./Pages/SlidesGenerations/Generations2";
import Slide3 from "./Pages/SlidesGenerations/Generations3";
import Slide4 from "./Pages/SlidesGenerations/Generations4";
import Slide5 from "./Pages/SlidesGenerations/Generations5";
import HomeGenerations from "./Pages/HomeGenerations/HomeGenerations";
import SplitwiseHome from "./Pages/Splitwise/SplitwiseHome";
import CrearPago from "./Pages/Splitwise/CrearPago";
import CrearGrupo from "./Pages/Splitwise/CrearGrupo";
import Contactos from "./Pages/Splitwise/Contactos";
import FormaPago from "./Pages/Splitwise/FormaPago";
import FaceRecognition from "./Pages/Splitwise/FaceRecognition";
import HomeYouth from "./Pages/HomeYouth/HomeYouth";
import YouthDetails from "./Pages/HomeYouth/YouthDetails";
import LifetimeDetails from "./Pages/HomeGenerations/LifetimeDetails";
import XperienceHome from "./Pages/Xperience/XperienceHome";
import XperienceDesarrollo from "./Pages/Xperience/XperienceDesarrollo";
import Chat from "./Pages/Chat/Chat";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-generations" element={<HomeGenerations />} />
        <Route path="/lifetime-details" element={<LifetimeDetails />} />

        <Route path="/home-youth" element={<HomeYouth />} />
        <Route path="/youth-details" element={<YouthDetails />} />

        <Route path="/xperience" element={<XperienceHome />} />
        <Route path="/xperience-details" element={<XperienceDesarrollo />} />

        <Route path="/generations-1" element={<Slide1 />} />
        <Route path="/generations-2" element={<Slide2 />} />
        <Route path="/generations-3" element={<Slide3 />} />
        <Route path="/generations-4" element={<Slide4 />} />
        <Route path="/generations-5" element={<Slide5 />} />

        <Route path="/comparte" element={<SplitwiseHome />} />
        <Route path="/crear-pago" element={<CrearPago />} />
        <Route path="/crear-grupo" element={<CrearGrupo />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/forma-pago" element={<FormaPago />} />
        <Route path="/face-recognition" element={<FaceRecognition />} />

        <Route path="/chat" element={<Chat />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
