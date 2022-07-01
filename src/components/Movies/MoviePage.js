import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchSingleMovieFromAPI, getSingleMovie } from "./MovieManager";
import { getCurrentUser, getSingleUser } from "../Users/UserManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  createReview,
  getReviews,
  getSingleReview,
  removeReview,
} from "../Reviews/ReviewManager";
import "./MoviePage.css";

export const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const { year } = useParams();
  const [user, setUser] = useState({});
  const [reviewObject, setReviewObject] = useState({});
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    user: 0,
    movie: 0,
    body: "",
    rating: 0,
  });
  const { movieId } = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   fetchSingleMovieFromAPI(movieId).then((data) => {
  //     getSingleMovie(movieId).then((localData) => {
  //       setMovie([data, localData]);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    fetchSingleMovieFromAPI(movieId).then((APIdata) => {
      getSingleMovie(movieId).then((data) => {
        setMovie(data);
      });
      setMovie(APIdata)
    });
  }, [movieId]);

  useEffect(() => {
    getCurrentUser().then((data) => {
      setUser(data);
    });
  }, []);

  useEffect(() => {
    getReviews().then((data) => {
      console.log(data);
      setReviews(data);
    });
  }, []);

  const saveReview = (evt) => {
    //newReview is the variable holding the new object
    const newReview = {
      movie: parseInt(movieId),
      body: review.body,
      rating: parseInt(movie.rating),
    };

    createReview(newReview);
    getReviews().then((data) => {
      setReviews(data);
    });
  };

  const deleteReview = (id) => {
    removeReview(id);
    getReviews().then((data) => {
      setReviews(data);
    });
  };

  return (
    <>
      <div className="movie_details_cont">
        <div className="movie_details_split">
          <img
            className="movie_poster_cont"
            width="200"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `${movie.poster}`
            }
          />
          <div className="movieName">{movie.name}</div>
          <div className="movieDirector">
            Directed by {movie.director?.first_name} {movie.director?.last_name}
          </div>
          <div className="movieReleaseYear">{movie.release_date}</div>
          <div className="castHeader">Cast:</div>
          <div className="movie_actor">
            {movie.actor?.map((actorObject) => {
              return `${actorObject.first_name} ${actorObject.last_name}`;
            })}
          </div>
        </div>
        <div className="movie_overview">
          {movie.overview ? movie.overview : movie.synopsis}
        </div>
      </div>
      {movie?.user?.id === user.id ? (
        <button
          className="edit_button"
          onClick={() => history.push(`/edit/${movie.id}`)}
        >
          Edit Movie
        </button>
      ) : (
        ""
      )}
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
              type="text"
              id="review"
              className="form-control"
              placeholder="..."
            ></input>
          </div>
          <button
            className="review_save_button"
            onClick={() => {
              saveReview(reviews);
            }}
          >
            saveReview
          </button>
        </div>
        <div className="review_cont">
          {reviews.map((reviewObject) => {
            if (reviewObject?.movie.id === movie.id) {
              return (
                <div>
                  "{reviewObject.body}" by {reviewObject.user?.username}
                  <div className="review_buttons">
                  {reviewObject?.user.id === user.id ? (

                      <button
                        className="deleteReviewButton"
                        onClick={() => deleteReview(reviewObject.id)}
                      >
                        delete review
                      </button>

                  ) : (
                    ""
                  )}
                  {reviewObject?.user.id === user.id ? (
                    
                      <button
                        className="editReviewButton"
                        onClick={() =>
                          history.push(
                            `/${year}/${movieId}/review/${reviewObject.id}`
                          )
                        }
                      >
                        edit review
                      </button>
                  ) : (
                    ""
                  )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
