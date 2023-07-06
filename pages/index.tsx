import React, { JSX } from "react";
import { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CodeRenderer from "../src/CodeRenderer";
import Grid from "@mui/material/Grid";

const Index: NextPage = (): JSX.Element => {
  return (
    <Grid container spacing={ 2 }>
      <Grid xs={ 12 } item>
        <Typography variant="h1">Getting started</Typography>
        <Divider sx={ { my: 2 } }/>
        <Typography variant="h2">Installation</Typography>
        <CodeRenderer language="bash" code="npm i react-mui-scheduler"/>
      </Grid>
      <Grid xs={ 12 } item>
        <Typography variant="h1">Usage</Typography>
        <Divider sx={ { my: 2 } }/>
        <CodeRenderer language="typescript" code={
          `import Scheduler, { Mode, Option, StartWeek, TransitionMode } from "react-mui-scheduler";
import "react-mui-scheduler/dist/locales/i18n";

const events: Event[] = [
  {
    id: "event-1",
    label: "Medical consultation",
    groupLabel: "Dr Shaun Murphy",
    user: "Dr Shaun Murphy",
    color: "#f28f6a",
    startHour: "04:00 AM",
    endHour: "06:00 AM",
    date: "2023-01-01",
    createdAt: new Date(),
    createdBy: "Kristina Mayer",
  },
];

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

<Scheduler
  locale="en"
  events={ events }
  options={ options }
/>` }/>
      </Grid>
    </Grid>
  );
};

export default Index;
