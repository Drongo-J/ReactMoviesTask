import React from "react";
import "./Movie.css";

export default function Movie({ movie, index }) {
  return (
    <div key={index} className="movie-card">
      <iframe
        className="movie-trailer"
        src={
          movie.trailer.includes("watch?v=")
            ? movie.trailer.replace("watch?v=", "embed/")
            : movie.trailer
        }
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <div className="info-container">
        <h1 className="movie-name">{movie.name}</h1>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
}
