const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

const fetchSongs = require("./routes/songs.js");
const fetchlyrics = require("./routes/lyrics.js");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/songs", fetchSongs);
app.use("/api/lyrics", fetchlyrics);

app.listen(3001, (req, res) => {
  console.log("Backend server is running");
});
