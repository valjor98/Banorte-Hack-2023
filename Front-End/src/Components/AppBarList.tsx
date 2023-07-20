import React, { FC } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import { Drawer, Grid, IconButton } from "@mui/material";
// import { ImageContainer, LogoIconSmall } from "../Shared/Styles";

// TODO change icons to a re-used component
const NavigationList = [
  {
    title: "Mis Cuentas",
    icon: <HomeOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />,
    navigateTo: "/",
  },
  {
    title: "Lifetime",
    icon: (
      <FitnessCenterOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />
    ),
    navigateTo: "/home-generations",
  },
  {
    title: "Youth",
    icon: (
      <FitnessCenterOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />
    ),
    navigateTo: "/home-youth",
  },
  {
    title: "Xperience",
    icon: (
      <FitnessCenterOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />
    ),
    navigateTo: "/xperience",
  },
  {
    title: "Comparte",
    icon: (
      <FitnessCenterOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />
    ),
    navigateTo: "/comparte",
  },
  {
    title: "Chat",
    icon: (
      <FitnessCenterOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />
    ),
    navigateTo: "/chat",
  },
  {
    title: "Emociones",
    icon: (
      <FitnessCenterOutlinedIcon fontSize="small" sx={{ color: "#ffffff" }} />
    ),
    navigateTo: "/face-recognition",
  },
];

const DrawerList = () => {
  return (
    <List>
      {NavigationList.map((item) => (
        <ListItem key={item.title} sx={{ padding: 0 }}>
          <ListItemButton>
            <Link
              to={item.navigateTo}
              style={{
                textDecoration: "none",
                color: "white",
                width: "100%",
              }}
            >
              <Grid container flexDirection="column" alignItems="center">
                {/* <Grid item>{item.icon}</Grid> */}
                <Grid item lineHeight="1rem" fontSize="1rem">
                  {item.title}
                </Grid>
              </Grid>
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

// Drawer for mobile size
interface DrawerMobileProps {
  toggleDrawer: boolean;
  toggle: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const DrawerMobileSize: FC<DrawerMobileProps> = ({
  toggleDrawer,
  toggle,
}): JSX.Element => {
  return (
    <Grid>
      <IconButton
        size="large"
        edge="start"
        sx={{ color: "#ffffff" }}
        aria-label="menu"
        onClick={toggle(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={toggleDrawer} onClose={toggle(false)}>
        <Box
          sx={{ width: "auto", height: "100vh", backgroundColor: "#EB0029" }}
          role="presentation"
          onClick={toggle(false)}
          onKeyDown={toggle(false)}
        >
          {DrawerList()}
        </Box>
      </Drawer>
    </Grid>
  );
};
