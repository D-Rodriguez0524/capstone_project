import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "../Movie.css";

const Movie = ({ movieData }) => {
  const { id } = useParams();

  let movie = movieData.find((mId) => mId.name === id);

  return (
    <div className="Movie">
      <section className="Movie-container">
        <div className="Movie-crawl">
          <div className="Movie-title">
            <p>Eipsiode {movie.episode_id} </p>
            <h1> {movie.title} </h1>
          </div>

          <p> {movie.opening_crawl} </p>
        </div>
      </section>
    </div>
  );
};

export default Movie;
