import React, { FC, JSX } from "react";
import Scheduler, { Mode, Option, StartWeek, TransitionMode } from "react-mui-scheduler";
import "react-mui-scheduler/dist/locales/i18n";
import events from "../config/events";

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
  <Scheduler
    locale="en"
    events={ events }
    options={ options }
  />
);

export default BasicExample;
