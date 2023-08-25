import React, { useContext } from "react";
import "./Movies.css";
import { MovieContext } from "../../App";
import Movie from "../Movie/Movie";

export default function Movies() {
  const movieData = useContext(MovieContext);

  // Check if movieData is an array before mapping
  if (!Array.isArray(movieData)) {
    return null; // or return an error message
  }

  return (
    <section className="movies">
      {movieData && movieData.map((movie, index) => (
        <Movie key={index} movie={movie} index={index}></Movie>
      ))}
    </section>
  );
}
