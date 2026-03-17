import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function MovieslLisPage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data.results);
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
