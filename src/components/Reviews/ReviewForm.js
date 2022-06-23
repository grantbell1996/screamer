import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getMovies, getSingleMovie } from "../Movies/MovieManager";
import { createReview, getSingleReview, removeReview, updateReview } from "./ReviewManager";


export const ReviewForm = () => {
  const history = useHistory();
  const { movieId } = useParams()
  const { year } = useParams()
  const { reviewId } = useParams()
  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [movie, setMovie] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    getSingleMovie(movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  useEffect(() => {
    getSingleReview(reviewId).then((data) => {
      setReview(data);
    });
  }, [reviewId]);

  const saveReview = (evt) => {
    //newReview is the variable holding the new object
    const newReview = {
      movie: parseInt(movieId),
      body: review.body,
      rating: parseInt(movie.rating),
    };

    updateReview(newReview, reviewId).then(history.push(`/${year}/${movieId}`));
  };

  return (
    <>
    <div>leave a review</div>
      <div className="review_cont">
        <div className="reviewForm">
          <h2 className="reviewFormHeader">Leave a Review</h2>
          <div className="reviewFormField">
            <input
              onChange={(evt) => {
                const copy = { ...review };
                copy.body = evt.target.value;
                setReview(copy);
              }}
              required
              autoFocus
              value = {review.body}
              type="text"
              id="review"
              className="form-control"
              placeholder="..."
            ></input>
          </div>
          <button
            className="review_save_button"
            onClick={() => {
              saveReview(review);
            }}
          >
            saveReview
          </button>
        </div>
        <div className="review_cont">
          
        </div>
      </div>
    </>
  );
};
