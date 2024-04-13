import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import Service from "../Service";
import { getSub10Data } from "../../../data/sub10";
