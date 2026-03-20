import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useLoader } from "../contexts/LoaderContext";

export default function MovieslLisPage() {
  const { startLoad, stopLoad } = useLoader();
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    startLoad();
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data.results);
      })
      .finally(() => {
        stopLoad();
      });
  };

  useEffect(fetchMovies, []);

  return (
    <main>
      <section className="sec-main-list">
        <div className="div-main-list">
          {movies.map((el) => {
            return <Card key={el.id} element={el} />;
          })}
        </div>
      </section>
    </main>
  );
}
