import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./root/sidebar";

export default function RootPage() {
  return(
    <div className="flex bg-gray-800 text-slate-50">
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
