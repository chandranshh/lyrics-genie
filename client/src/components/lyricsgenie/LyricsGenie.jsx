import React from "react";
import Lyrics from "../lyrics/Lyrics.jsx";
import SearchBar from "../searchbar/Searchbar.jsx";
import SongSelection from "../songselection/SongSelection.jsx";
import "./LyricsGenie.css";
import dummyData from "../../dummyData.json";

function LyricsGenie() {
  const data = dummyData;

  return (
    <>
      <SearchBar />

      {data.map((e) => (
        <SongSelection key={e.id} data={e} />
      ))}

      <Lyrics />
    </>
  );
}

export default LyricsGenie;
