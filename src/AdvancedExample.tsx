import React, { FC, Fragment, JSX, useState } from "react";
import Scheduler, { Event, Mode, Option, StartWeek, ToolbarProps, TransitionMode } from "react-mui-scheduler";
import "react-mui-scheduler/dist/locales/i18n";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArchiveIcon from "@mui/icons-material/Archive";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { AlertProps } from "react-mui-scheduler/src/types";
import { useLocalStorage } from "usehooks-ts";
import defaultEvents from "../config/events";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import festival from "../config/festival";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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

const AdvancedExample: FC = (): JSX.Element => {
  const [mode, setMode] = useLocalStorage<Mode>("mode", Mode.TIMELINE);
  const [weekStart, setWeekStart] = useLocalStorage<StartWeek>("weekStart", StartWeek.MON);
  const [legacyStyle, setLegacyStyle] = useLocalStorage<boolean>("legacyStyle", false);
  const [locale, setLocale] = useState<string>(
    localStorage.getItem("i18nextLng") || "en",
  );
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [state, setState] = useState({
    options: {
      transitionMode: TransitionMode.ZOOM,
      startWeekOn: weekStart,
      defaultMode: mode,
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
      reverseTimelineOrder: false,
      displayTimelineByGroupLabel: true,
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
        message: "",
        open: false,
      },
    });
  };

  const handleDateChange = (day: number, date: number | Date | null) => {
    console.log("Click on DatePicker date");
    console.log(day, date);
  };

  return (
    <Fragment>
      <Typography variant="h1">Advanced example</Typography>
      <Divider sx={ { my: 2 } }/>
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
                setWeekStart(event.target.value as StartWeek);
                state.options.startWeekOn = event.target.value as StartWeek;
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
                setMode(event.target.value as Mode);
                state.options.defaultMode = event.target.value as Mode;
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
      </Grid>
      <Scheduler
        locale={ locale }
        events={ festival }
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
    </Fragment>
  );
};

export default AdvancedExample;
