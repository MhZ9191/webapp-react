import axios from "axios";
import { useState } from "react";
import { useLoader } from "../contexts/LoaderContext";
export default function FormReviews({ movie_id, fetch }) {
  const { startLoad, stopLoad } = useLoader();

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
    startLoad();
    e.preventDefault();
    const { name, text, vote } = newReviews;
    if (!name || !text || !vote) {
      alert("Compila tutti i campi");
      return;
    }
    axios
      .post(`http://localhost:3000/movies/${movie_id}/new`, newReviews)
      .then((res) => {
        fetch();
        setNewReviews({ ...initialForm });
      })
      .finally(() => {
        stopLoad();
      });
  };

  return (
    <div className="div-form">
      <fieldset>
        <legend>Add New Reviews</legend>
        <form onSubmit={submitForm} className="form-submit">
          <div>
            <label htmlFor="name-user">Name</label>
            <input
              type="text"
              name="name"
              id="name-user"
              onChange={updateRev}
              value={newReviews.name}
            />
          </div>
          <div>
            <label htmlFor="textarea-form">Text</label>
            <textarea
              name="text"
              id="textarea-form"
              onChange={updateRev}
              value={newReviews.text}
            ></textarea>
          </div>
          <div>
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
          </div>
          <button>Send</button>
        </form>
      </fieldset>
    </div>
  );
}
