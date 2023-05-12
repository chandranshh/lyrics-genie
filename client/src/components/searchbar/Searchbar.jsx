import React, { useState } from "react";
import axios from "axios";
import "./Searchbar.css";

function Searchbar() {
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [songData, setSongData] = useState({ message: "" });

  const makeRequest = () => {
    if (trackName && artistName) {
      const data = `${trackName} ${artistName}`;
      axios
        .get(`http://localhost:3001/api/songs/${encodeURIComponent(data)}`)
        .then((res) => {
          setSongData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const setTrackNameHandler = (e) => {
    setTrackName(e.target.value);
  };

  const setArtistNameHandler = (e) => {
    setArtistName(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="track-name"
        placeholder="Enter the track name"
        value={trackName}
        onChange={setTrackNameHandler}
      />
      <input
        type="text"
        className="artist-name"
        placeholder="Enter the artist name"
        value={artistName}
        onChange={setArtistNameHandler}
      />
      <button onClick={makeRequest}>Search</button>
      {songData.message && <p>{songData.message}</p>}
    </div>
  );
}

export default Searchbar;
