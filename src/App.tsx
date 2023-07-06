import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Scheduler, { Event, Mode, Option, StartWeek, ToolbarProps, TransitionMode } from "react-mui-scheduler";
import { AlertProps } from "react-mui-scheduler/src/types";
import Container from "@mui/material/Container";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocalStorage } from "usehooks-ts";
import defaultEvents from "./events";
import defaultTheme from "./theme";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArchiveIcon from "@mui/icons-material/Archive";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const toolbarProps: ToolbarProps = {
  showSearchBar: true,
  showSwitchModeButtons: {
    showMonthButton: true,
    showWeekButton: true,
    showDayButton: true,
    showTimelineButton: true,
  },
  showDatePicker: true,
  showOptions: true,
  optionMenus: [
    {
      label: "Read events",
      icon: <PlayCircleOutlineIcon fontSize="small"/>,
    },
    {
      label: "Refresh",
      icon: <AutorenewIcon fontSize="small"/>,
    },
    {
      label: "Export",
      icon: <ArchiveIcon fontSize="small"/>,
    },
    {
      label: "Print",
      icon: <LocalPrintshopIcon fontSize="small"/>,
    },
  ],
};

const alertProps: AlertProps = {
  open: true,
  color: "info",
  severity: "info",
  message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥",
  showActionButton: true,
  showNotification: false,
  delay: 1500,
};

const App = () => {
  const [paletteMode, setPaletteMode] = useLocalStorage<PaletteMode>("paletteMode", "light");
  const [mode, setMode] = useLocalStorage<Mode>("mode", Mode.MONTH);
  const [weekStart, setWeekStart] = useLocalStorage<StartWeek>("weekStart", StartWeek.MON);
  const [legacyStyle, setLegacyStyle] = useLocalStorage<boolean>("legacyStyle", false);
  const [locale, setLocale] = useState<string>(
    localStorage.getItem("i18nextLng") || "en",
  );
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [state, setState] = useState({
    options: {
      transitionMode: TransitionMode.ZOOM,
      startWeekOn: weekStart || StartWeek.SUN,
      defaultMode: mode || Mode.MONTH,
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    } as Option,
    alertProps,
  });

  const handleCellClick = (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, row: any, day: any) => {
    console.log("Cell clicked");
    if (day?.data?.length === 0) {
    }
  };

  const handleEventClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, task: Event): void => {
    console.log("Event clicked");
    alert(JSON.stringify(task, null, 2));
  };

  const handleEventsChange = (item: Event) => {
    console.log("Event change");
    let eventIndex = events.findIndex(e => e.id === item?.id);
    if (eventIndex !== -1) {
      events[eventIndex] = item;
      setEvents(Array.from(events));
    }
  };

  const handleAlertCloseButtonClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Alert close button clicked!");
    setState({
      ...state,
      alertProps: {
        ...state.alertProps,
        message: null,
        open: false,
      },
    });
  };

  const handleDateChange = (day: number, date: number | Date | null) => {
    console.log("Click on DatePicker date");
    console.log(day, date);
  };

  return (
    <ThemeProvider theme={ createTheme(defaultTheme(paletteMode)) }>
      <CssBaseline/>
      <LocalizationProvider dateAdapter={ AdapterDateFns }>
        <Container maxWidth={ false } sx={ { pt: 2 } }>
          <Grid
            container
            spacing={ 2 }
            alignItems="stretch"
            justifyContent="center"
          >
            <Grid item xs={ 12 } sm={ 10 } md={ 10 }>
              <Grid container spacing={ 2 } sx={ { mb: 2 } }>
                <Grid item sm>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="legacyStyle-select">Legacy style</InputLabel>
                    <Select
                      value={ legacyStyle }
                      label="legacyStyle"
                      id="legacyStyle-select"
                      labelId="legacyStyle-select"
                      onChange={ (event) => setLegacyStyle(event.target.value === "true") }
                    >
                      { ["true", "false"].map(l => <MenuItem key={ l } value={ l }>{ l }</MenuItem>) }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="week-start-select">Week start</InputLabel>
                    <Select
                      value={ weekStart }
                      label="weekStart"
                      id="week-start-select"
                      labelId="week-start-select"
                      onChange={ (event) => {
                        setWeekStart(StartWeek[event.target.value.toUpperCase()]);
                        state.options.startWeekOn = StartWeek[event.target.value.toUpperCase()];
                        setState({ ...state });
                      } }
                    >
                      { ["mon", "sun"].map(l => <MenuItem key={ l } value={ l }>{ l }</MenuItem>) }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="mode-select">Mode</InputLabel>
                    <Select
                      value={ mode }
                      label="Mode"
                      id="mode-select"
                      labelId="mode-select"
                      onChange={ (event) => {
                        setMode(Mode[event.target.value.toUpperCase()]);
                        state.options.defaultMode = Mode[event.target.value.toUpperCase()];
                        setState({ ...state });
                      } }
                    >
                      { [
                        "day", "week", "month", "timeline",
                      ].map(l => <MenuItem key={ l } value={ l }>{ l }</MenuItem>) }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="locale-select">Locale</InputLabel>
                    <Select
                      value={ locale }
                      label="Locale"
                      id="locale-select"
                      labelId="locale-select"
                      onChange={ (event) => {
                        setLocale(event.target.value);
                      } }
                    >
                      { [
                        "ar", "br", "de", "en", "es", "fr", "ja", "ko", "zh",
                      ].map(l => <MenuItem key={ l } value={ l }>{ l }</MenuItem>) }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="palette-mode-select">Palette mode</InputLabel>
                    <Select
                      value={ paletteMode }
                      label="Palette mode"
                      id="palette-mode-select"
                      labelId="palette-mode-select"
                      onChange={ (event) => {
                        setPaletteMode(event.target.value as PaletteMode);
                      } }
                    >
                      { ["light", "dark"].map(l => <MenuItem key={ l } value={ l }>{ l }</MenuItem>) }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Scheduler
                locale={ locale }
                events={ events }
                legacyStyle={ legacyStyle }
                options={ state?.options }
                alertProps={ state?.alertProps }
                toolbarProps={ toolbarProps }
                onEventsChange={ handleEventsChange }
                onCellClick={ handleCellClick }
                onTaskClick={ handleEventClick }
                onAlertCloseButtonClicked={ handleAlertCloseButtonClicked }
                onDateChange={ handleDateChange }
              />
            </Grid>
          </Grid>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
