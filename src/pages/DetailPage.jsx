import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const initialForm = {
    name: "",
    text: "",
    vote: "",
  };

  const [newReviews, setNewReviews] = useState(initialForm);
  const updateRev = (e) => {
    const { name, value } = e.target;
    setNewReviews({ ...newReviews, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/movies/${id}/new`, newReviews)
      .then((res) => {
        fetchDetail();
        setNewReviews({ ...initialForm });
      });
  };

  const fetchDetail = () => {
    axios.get("http://localhost:3000/movies/" + id).then((res) => {
      setDetail(res.data.result);
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
        <div className="div-form">
          <fieldset>
            <legend>Add New Reviews</legend>
            <form onSubmit={submitForm}>
              <label htmlFor="name-user">Name</label>
              <input
                type="text"
                name="name"
                id="name-user"
                onChange={updateRev}
                value={newReviews.name}
              />
              <label htmlFor="textarea-form">Text</label>
              <textarea
                name="text"
                id="textarea-form"
                onChange={updateRev}
                value={newReviews.text}
              ></textarea>
              <label htmlFor="vote-form">Vote</label>
              <input
                type="number"
                name="vote"
                value={newReviews.vote}
                onChange={updateRev}
                min="1"
                max="5"
                id="vote-form"
              />
              <button>Send</button>
            </form>
          </fieldset>
        </div>
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
