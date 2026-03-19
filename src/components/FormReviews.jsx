import axios from "axios";
import { useState } from "react";

export default function FormReviews({ movie_id, fetch }) {
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
      .post(`http://localhost:3000/movies/${movie_id}/new`, newReviews)
      .then((res) => {
        fetch();
        setNewReviews({ ...initialForm });
      });
  };

  return (
    <div className="div-form">
      <fieldset>
        <legend>Add New Reviews</legend>
        <form onSubmit={submitForm} className="form-submit">
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
  );
}
