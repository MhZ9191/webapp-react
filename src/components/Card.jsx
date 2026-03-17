export default function Card({ element }) {
  const { title, genre, abstract, image } = element;
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{genre}</p>
      <p>{abstract}</p>
      <img src={image} alt={title} />
    </div>
  );
}
