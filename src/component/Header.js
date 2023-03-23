import { AppBar, Avatar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useTheme } from "@emotion/react";
import { colorModeContext } from "./ModeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import avi from "../images/avi.jpg"

function Header() {
    const theme = useTheme()
    const colorMode =useContext(colorModeContext)

  return (
    <AppBar position='relative'>
      <Toolbar>
        <Container maxWidth='lg'>
          <Stack direction='row' alignItems='center' justifyContent='space-between' flexGrow={1}>
            <FitnessCenterIcon sx={{ width: 32, height: 32 }} />
            <Typography sx={{fontSize: "25px"}} color={theme.palette.mode === 'dark' ? 'primary' : 'white' }>TEAM FIT: WORKOUT GENERATOR</Typography>
            <Stack direction='row' alignItems='center'>
              <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
                {theme.palette.mode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <Avatar alt="My Profile" src={avi}/>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
