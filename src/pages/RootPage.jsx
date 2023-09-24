import { Outlet } from "react-router-dom";

export default function RootPage() {
  return(
    <>
      <h1>Root</h1>
      <p>edit me at <code>./src/pages/RootPage.jsx</code></p>
      <div>
        <Outlet />
      </div>
    </>
  )
}
