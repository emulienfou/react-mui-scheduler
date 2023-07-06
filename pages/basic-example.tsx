import React, { FC, JSX } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const BasicExampleScheduler = dynamic(() => import("../src/BasicExample"), { ssr: false });

const BasicExample: NextPage = (): JSX.Element => <BasicExampleScheduler/>;

export default BasicExample;
