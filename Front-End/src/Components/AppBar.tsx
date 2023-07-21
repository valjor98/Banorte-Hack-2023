import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { DrawerMobileSize } from "./AppBarList";

import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

const ButtonAppBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const toggle =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setToggleDrawer(open);
    };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <DrawerMobileSize toggleDrawer={toggleDrawer} toggle={toggle} />
            </Grid>
            <Grid item flexDirection="row" alignSelf="flex-start">
              <Typography
                color="white"
                fontWeight={600}
                fontSize="1.2rem"
                paddingTop="0.2rem"
              >
                Hola Jorge
              </Typography>
            </Grid>

            <Grid item>
              <Grid container gap={1}>
                <Grid
                  item
                  container
                  sx={{
                    backgroundColor: "#DADADA",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    borderRadius: "50%",
                    width: "2rem",
                    height: "2rem",
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
                    <PersonIcon sx={{ color: "#000000" }} />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  sx={{
                    backgroundColor: "#323E48",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    borderRadius: "50%",
                    width: "2rem",
                    height: "2rem",
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
                    <NotificationsIcon sx={{ color: "#ffffff" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default React.memo(ButtonAppBar);
