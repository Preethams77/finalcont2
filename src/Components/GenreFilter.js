import React from "react";

const GenreFilter = ({ genres }) => {
  const handleClick = (genre) => {
    console.log(`Filtering by: ${genre}`);
  };

  return (
    <div>
      <h3>Filter by Genres</h3>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
