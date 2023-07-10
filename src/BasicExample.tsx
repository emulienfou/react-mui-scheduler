import React, { FC, Fragment, JSX } from "react";
import Scheduler, { Mode, Option, StartWeek, TransitionMode } from "react-mui-scheduler";
import "react-mui-scheduler/dist/locales/i18n";
import events from "../config/events";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const options: Option = {
  transitionMode: TransitionMode.ZOOM,
  startWeekOn: StartWeek.SUN,
  defaultMode: Mode.MONTH,
  minWidth: 540,
  maxWidth: 540,
  minHeight: 540,
  maxHeight: 540,
  reverseTimelineOrder: false,
};

const BasicExample: FC = (): JSX.Element => (
  <Fragment>
    <Typography variant="h1">Basic example</Typography>
    <Divider sx={ { my: 2 } }/>
    <Scheduler
      locale="en"
      events={ events }
      options={ options }
    />
  </Fragment>
);

export default BasicExample;
