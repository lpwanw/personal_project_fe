import { Outlet } from "react-router-dom";
import Sidebar from "./root/sidebar";
import "./RootPage.css"

export default function RootPage() {
  return(
    <div className="root-page">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
