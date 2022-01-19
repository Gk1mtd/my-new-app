import React from "react";
import Card from "./Card";

const numbers = [1, 2, 3, 4, 5, "Ben"];

// export const listItems = [
//   <li>1</li>,
//   <li>2</li>,
//   <li>3</li>,
//   <li>4</li>,
//   <li>5</li>,
// ];

export const listItems = numbers.map(element => <li key={element}>{element}</li>)

// components/ListDemo.js

const movies = [
    { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
    { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
    { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
  ];

function MovieList () {
    return (
        <ul>
            {movies.map(movie => 
                <li key={movie.id}>
                    <Card title={movie.title} director={movie.director} />
                </li>
            )}
        </ul>
    )
}

export default MovieList