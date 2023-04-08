import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
//   console.log(AppBar);
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
