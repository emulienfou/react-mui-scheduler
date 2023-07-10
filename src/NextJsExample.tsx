import React, { FC, JSX } from "react";
import CodeRenderer from "../src/CodeRenderer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const NextJsExample: FC = (): JSX.Element => (
  <div>
    <Typography variant="h1">Next.js example</Typography>
    <Typography variant="caption">
      To be able to call this component from Next.js you will need to load it dynamically.<br/>Here is a simple example
      on how to achieve this.
    </Typography>
    <Divider sx={ { my: 2 } }/>
    <Typography variant="h2">Component</Typography>
    <Typography variant="caption">First step is to create a new component holding the Scheduler:</Typography>
    <CodeRenderer language="typescript" code={
      `import React, { FC, JSX } from "react";
import Scheduler, { Mode, Option, StartWeek, TransitionMode } from "react-mui-scheduler";
import "react-mui-scheduler/dist/locales/i18n";
import events from "./events";

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

export default BasicExample;`
    }/>

    <Typography variant="h2">Next page</Typography>
    <Typography variant="caption">Now create a new Next.js page and call your component dynamically</Typography>
    <CodeRenderer language="typescript" code={
      `import React, { JSX } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const BasicExampleScheduler = dynamic(() => import("../src/BasicExample"), { ssr: false });

const BasicExample: NextPage = (): JSX.Element => <BasicExampleScheduler/>;

export default BasicExample;`
    }/>
  </div>
);

export default NextJsExample;
