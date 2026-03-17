import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function MovieslLisPage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h2>List</h2>
      <div>
        {movies.map((el) => {
          return <Card key={el.id} element={el} />;
        })}
      </div>
    </>
  );
}
