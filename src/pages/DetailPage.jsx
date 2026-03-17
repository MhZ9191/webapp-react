import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  const fetchDetail = () => {
    axios.get("http://localhost:3000/movies/" + id).then((res) => {
      setDetail(res.data.result);
    });
  };

  useEffect(fetchDetail, []);

  return (
    <>
      <h2>Detail movie {detail.title}</h2>
      <img src={detail.image} alt={detail.title} />
    </>
  );
}
