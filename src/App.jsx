import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MoviesListPage from "./pages/MoviesListPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/movies">
              <Route index element={<MoviesListPage />} />
              <Route path=":id" element={<DetailPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
