import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormReviews from "../components/FormReviews";
import { useLoader } from "../contexts/LoaderContext";
export default function DetailPage() {
  const { startLoad, stopLoad } = useLoader();

  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const fetchDetail = () => {
    startLoad();
    axios
      .get("http://localhost:3000/movies/" + id)
      .then((res) => {
        setDetail(res.data.result);
      })
      .finally(() => {
        stopLoad();
      });
  };

  useEffect(fetchDetail, []);

  let avgVote = 0;
  if (detail.reviews) {
    avgVote =
      detail.reviews.reduce((ac, ce) => ac + Number(ce.vote), 0) /
      detail.reviews.length;
  }

  return (
    <main>
      <section className="main-sec-detail">
        <div className="main-div-detail">
          <div className="div-image-detail">
            <img src={detail.image} alt={detail.title} />
          </div>
          <div className="detail-info">
            <div>
              <h2>Title</h2>
              <span>{detail.title}</span>
            </div>
            <div>
              <h2>Genre</h2>
              <span>{detail.genre}</span>
            </div>
            <div>
              <h2>Abstract</h2>
              <span>{detail.abstract}</span>
            </div>
            <div>
              <h2>Release Year</h2>
              <span>{detail.release}</span>
            </div>
            <div>
              <h2>Average</h2>
              <span className="avg-average">{createStar(avgVote, 5)}</span>
            </div>
          </div>
        </div>
        <div className="div-rev">
          {detail.reviews &&
            detail.reviews.map((el) => {
              return (
                <div key={el.rid} className="div-reviews">
                  <div>{el.name}</div>
                  <div>{el.text}</div>
                  <div>{createStar(el.vote, 5)}</div>
                </div>
              );
            })}
        </div>
        <FormReviews fetch={fetchDetail} movie_id={id} />
      </section>
    </main>
  );
}

function createStar(vote, maxVote) {
  const test = [];
  for (let i = 1; i <= maxVote; i++) {
    test[i - 1] =
      i <= vote ? <span key={i}>&#x2605;</span> : <span key={i}>&#x2606;</span>;
  }
  return test;
}
