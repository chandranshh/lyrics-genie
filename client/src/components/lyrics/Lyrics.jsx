import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lyrics.css";

function Lyrics(props) {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const title = props.song.title.split(" ");
    axios
      .get(
        `http://localhost:3001/api/lyrics/${encodeURIComponent(
          title[0]
        )}/${encodeURIComponent(props.song.artist_names)}`
      )
      .then((res) => {
        setLyrics(res.data.lyrics);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.song.title, props.song.artist_names]);

  return (
    <div className="lyrics-container">
      <div className="lyrics-box">{lyrics}</div>
    </div>
  );
}

export default Lyrics;
