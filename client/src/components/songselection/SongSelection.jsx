import React from "react";
import "./SongSelection.css";

function SongSelection(data) {
  return (
    <div>
      <div className="song-title">Song Name : {data.data.title}</div>
      <div className="song-artist">Artist Name : {data.data.artist_names}</div>
      <img className="song-cover" src={data.data.cover_art} alt="" />
    </div>
  );
}

export default SongSelection;
