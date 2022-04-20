const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/favorite.html"))
    .post((req, res) => res.send("POST FAVORITE"));
module.exports = router;