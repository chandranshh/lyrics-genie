import React, { useState } from "react";
import "./SongSelection.css";

function SongSelection(props) {
  const onClickHandler = () => {
    props.onSelect(props.data);
  };

  return (
    <div>
      <img className="song-cover" src={props.data.cover_art} alt="" />
      <div className="detail-wrapper">
        <span className="song-title">Song Name : {props.data.title}</span>
        <br />
        <span className="song-artist">
          Artist Name : {props.data.artist_names}
        </span>
      </div>
      <button className={props.id} onClick={onClickHandler}>
        Select
      </button>
    </div>
  );
}

export default SongSelection;
