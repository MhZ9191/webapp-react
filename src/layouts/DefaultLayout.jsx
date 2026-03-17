import { Link, NavLink, Outlet } from "react-router-dom";
export default function DefaultLayout() {
  return (
    <>
      <header>
        <section className="sec-head">
          <div className="div-head">
            <div>
              <h1>Movies Project</h1>
            </div>
            <div className="nav-head">
              <NavLink to="/">
                <div>Home</div>
              </NavLink>
              <NavLink to="/movies">
                <div>Movies List</div>
              </NavLink>
            </div>
          </div>
        </section>
      </header>
      <Outlet />
    </>
  );
}
