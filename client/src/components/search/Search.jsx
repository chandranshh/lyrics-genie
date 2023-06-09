import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import SongSelection from "../songselection/SongSelection.jsx";
import Lyrics from "../lyrics/Lyrics.jsx";

function Search() {
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [songData, setSongData] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);

  const makeRequest = () => {
    if (trackName && artistName) {
      setSelectedSong("");
      const data = `${trackName} ${artistName}`;
      axios
        .get(
          `https://lyrics-genie-api.vercel.app/api/songs/${encodeURIComponent(
            data
          )}`
        )
        .then((res) => {
          setSongData(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // Reset the input values
          setTrackName("");
          setArtistName("");
        });
    }
  };

  const setTrackNameHandler = (e) => {
    setTrackName(e.target.value);
  };

  const setArtistNameHandler = (e) => {
    setArtistName(e.target.value);
  };

  const onSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="searchbar-container">
      <div className="logo">
        <span className="logo-name">Lyrics Genie</span>
      </div>
      <div className="input-container">
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
        <button className="search-button" onClick={makeRequest}>
          Search
        </button>
      </div>
      {!selectedSong &&
        songData &&
        songData.length > 0 &&
        songData.map((data, index) => (
          <SongSelection
            data={data}
            key={`song-${index}`}
            onSelect={onSelectSong}
          />
        ))}
      {selectedSong && <Lyrics song={selectedSong} />}
    </div>
  );
}

export default Search;
