import * as React from "react";
import Head from "next/head";
import { AppProps as MuiAppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import themeOptions from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { FC, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { PaletteMode } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import navigation from "../config/navigation.json";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface AppProps extends MuiAppProps {
  emotionCache?: EmotionCache;
}

const App: FC<AppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [paletteMode, setPaletteMode] = useLocalStorage<PaletteMode>("paletteMode", "light");

  const theme = useMemo(() => createTheme(themeOptions(paletteMode)), [paletteMode]);

  return (
    <CacheProvider value={ emotionCache }>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <title>React-Mui-Scheduler</title>
      </Head>
      <ThemeProvider theme={ theme }>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */ }
        <CssBaseline enableColorScheme/>
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
          <AppBar position="relative" sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }>
            <Container maxWidth="xl">
              <Toolbar>
                <CalendarViewDayIcon/>
                <Typography variant="h6" component="div" sx={ { flexGrow: 1, ml: 2 } }>
                  React-Mui-Scheduler
                </Typography>
                <IconButton href="https://github.com/emulienfou/react-mui-scheduler" target="_blank" color="inherit">
                  <GitHubIcon/>
                </IconButton>
                <IconButton
                  onClick={ () => setPaletteMode(paletteMode === "light" ? "dark" : "light") }
                  color="inherit">
                  { paletteMode === "light" ? <DarkModeOutlined/> : <LightModeOutlinedIcon/> }
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="xl" sx={ { pt: 4 } }>
            <Grid container columnSpacing={ 4 } rowSpacing={ 0 }>
              <Grid item sm={ 1.5 } sx={ { borderRight: (theme) => `thin solid ${ theme.palette.divider }` } }>
                { navigation.map(({ label, children }) => (
                  <List
                    key={ label }
                    component="nav"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">{ label }</ListSubheader>
                    }>
                    { children.map(({ label, href }) => (
                      <ListItemButton href={ href } component={ Link } key={ label }>
                        <ListItemText primary={ label } primaryTypographyProps={ { variant: "body2" } }/>
                      </ListItemButton>
                    )) }
                  </List>
                )) }
              </Grid>
              <Grid item sm={ 10 }>
                <Component { ...pageProps } />
              </Grid>
            </Grid>
          </Container>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
