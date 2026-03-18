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

  let avgVote = 0;
  if (detail.reviews) {
    avgVote =
      detail.reviews.reduce((ac, ce) => ac + ce.vote, 0) /
      detail.reviews.length;
  }

  return (
    <main>
      <section className="main-sec-detail">
        <div className="main-div-detail">
          <div className="div-image-detail">
            <img src={detail.image} alt={detail.title} />
          </div>
          <div>
            <h2>Title</h2>
            <span>{detail.title}</span>
            <h2>Genre</h2>
            <span>{detail.genre}</span>
            <h2>Abstract</h2>
            <span>{detail.abstract}</span>
            <h2>Release Year</h2>
            <span>{detail.release}</span>
            <h2>Average</h2>
            <span>{createStar(avgVote, 5)}</span>
          </div>
        </div>
        <div className="div-rev">
          {detail.reviews &&
            detail.reviews.map((el) => {
              return (
                <div key={el.id} className="div-reviews">
                  <div>{el.name}</div>
                  <div>{el.text}</div>
                  <div>{createStar(el.vote, 5)}</div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}

function createStar(vote, maxVote) {
  const test = [];
  for (let i = 1; i <= maxVote; i++) {
    test[i - 1] = i <= vote ? <span>&#x2605;</span> : <span>&#x2606;</span>;
  }
  return test;
}
