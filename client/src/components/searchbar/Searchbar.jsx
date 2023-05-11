import React from "react";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="track-name"
        placeholder="Enter the track name"
      />
      <input
        type="text"
        className="artist-name"
        placeholder="Enter the artist name"
      />

      <button>Search</button>
    </div>
  );
}

export default Searchbar;
