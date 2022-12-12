import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Nurse<span style={{ color: "red" }}>Mgmt</span>
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
