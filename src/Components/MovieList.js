import React from "react";

const MovieList = ({ movies }) => {
  return (
      <table>
        <thead>
          <tr>
            <th className="th">Title</th>
            <th className="th">Genre</th>
            <th className="th">Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default MovieList;
            