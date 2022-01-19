import React from "react";
import ImprovedCard from "./ImprovedCard";

function DynamicMovieList() {
  const [movies, setMovies] = React.useState([
    { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola" },
    { id: "EXN9npPlo", title: "Star Wars", director: "Rian Johnson" },
    {
      id: "lecqGHnAb",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
    },
  ]);
  const deleteMovie = (id) => console.log("Delete this ID:" + id);
  return (
    <div>
      {movies.map((movie) => (
        <ImprovedCard key={movie.id}
        {...movie}
        clickTodeleteMovie={() => setMovies(console.log("Delete this ID:" + movie.id))} />
      ))}
    </div>
  );
}

export default DynamicMovieList;
