import React, { JSX } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const NextJsExample = dynamic(() => import("../src/NextJsExample"), { ssr: false });

const NextjsExample: NextPage = (): JSX.Element => <NextJsExample/>;

export default NextjsExample;
