import { Link } from "react-router-dom";

export default function Card({ element }) {
  const { title, genre, abstract, image } = element;
  return (
    <Link to={`/movies/${element.id}`} className="div-main-card">
      <div className="card">
        <div className="sub-card">
          <h2>{title}</h2>
          <p>{genre}</p>
          <p>{abstract}</p>
        </div>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </Link>
  );
}
