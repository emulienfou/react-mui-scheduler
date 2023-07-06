import React, { FC, JSX } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const AdvancedExampleScheduler = dynamic(() => import("../src/AdvancedExample"), { ssr: false });

const AdvancedExample: NextPage = (): JSX.Element => <AdvancedExampleScheduler/>;

export default AdvancedExample;
