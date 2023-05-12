import React from "react";
import Lyrics from "../lyrics/Lyrics.jsx";
import Search from "../search/Search.jsx";
import SongSelection from "../songselection/SongSelection.jsx";
import "./LyricsGenie.css";

function LyricsGenie() {
  return (
    <>
      <Search />
      <Lyrics />
    </>
  );
}

export default LyricsGenie;
