const router = require("express").Router();
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const access_token = process.env.ACCESS_TOKEN;

router.get("/:q", async (req, res) => {
  try {
    const query = req.params.q;
    const response = await axios.get(
      `https://api.genius.com/search?access_token=${access_token}&q=${encodeURIComponent(
        query
      )}`
    );

    const songData = response.data.response.hits
      .filter((hit) => hit.result.title != null)
      .map((hit) => ({
        id: hit.result.id,
        title: hit.result.full_title,
        artist_names: hit.result.artist_names,
        cover_art: hit.result.song_art_image_url,
      }));

    res.status(200).json(songData);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

module.exports = router;
