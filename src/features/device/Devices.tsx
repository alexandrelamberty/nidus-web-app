import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExtendedWindow, getConfig } from "../../config";
import DeviceTable from "./DeviceTable";
import Headings from "../../components/Headings";
import { DeviceForm } from "./DeviceForm";

export const Devices = () => {
  // Update / Scan for new device then show config windof for the devoce
  return (
    <>
      <Headings />
      <div className="flex flex-row">
        <DeviceTable />
        <DeviceForm />
      </div>
    </>
  );
};