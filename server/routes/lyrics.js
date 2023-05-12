const router = require("express").Router();
const dotenv = require("dotenv");
const genius = require("genius-lyrics-api");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

dotenv.config();
const access_token = process.env.ACCESS_TOKEN;

router.get("/:title/:artist", async (req, res) => {
  try {
    const options = {
      apiKey: `${access_token}`,
      title: req.params.title,
      artist: req.params.artist,
      optimizeQuery: true,
    };

    const lyrics = await genius.getLyrics(options);
    const song = await genius.getSong(options);

    res.status(200).json({
      id: song.id,
      title: song.title,
      url: song.url,
      albumArt: song.albumArt,
      lyrics: lyrics,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

module.exports = router;
