import { Link, NavLink, Outlet } from "react-router-dom";
import { useLoader } from "../contexts/LoaderContext";
import Loader from "../components/Loader";

export default function DefaultLayout() {
  const { isLoad } = useLoader();

  return (
    <div>
      {isLoad && <Loader />}
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
    </div>
  );
}
