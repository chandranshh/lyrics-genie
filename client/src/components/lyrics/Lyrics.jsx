import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lyrics.css";

function Lyrics(props) {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://lyrics-genie-api.vercel.app/api/lyrics/${encodeURIComponent(
          props.song.title
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
      <pre className="lyrics-box">{lyrics}</pre>
    </div>
  );
}

export default Lyrics;
