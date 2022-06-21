import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"

export const HomePage = () => {

  return (
    <>

    <h1>Home Page</h1>

      <div className="editor_pick_box">
        <div className="movie_title">Movie Title</div>
        <div className="movie_synopsis">Synopsis</div>
        <div className="movie_title"></div>
      </div>
    </>
  )
}
