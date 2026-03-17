import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  return (
    <>
      <h2>Detail movie {id}</h2>
    </>
  );
}
