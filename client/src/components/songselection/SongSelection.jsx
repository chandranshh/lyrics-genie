import React from "react";
import "./SongSelection.css";

function SongSelection(data) {
  return (
    <div>
      <img className="song-cover" src={data.data.cover_art} alt="" />
      <div className="detail-wrapper">
        <span className="song-title">Song Name : {data.data.title}</span>
        <br />
        <span className="song-artist">
          Artist Name : {data.data.artist_names}
        </span>
      </div>
    </div>
  );
}

export default SongSelection;
