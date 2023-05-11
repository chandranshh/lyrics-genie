import React from "react";
import Lyrics from "../lyrics/Lyrics.jsx";
import SearchBar from "../searchbar/Searchbar.jsx";
import SongSelection from "../songselection/SongSelection.jsx";
import "./LyricsGenie.css";

function LyricsGenie() {
  return (
    <>
      <SearchBar />
      <SongSelection />
      <Lyrics />
    </>
  );
}

export default LyricsGenie;
