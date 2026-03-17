import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <h1>Movies Project</h1>
        <Outlet />
      </header>
    </>
  );
}
