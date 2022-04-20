const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/index.html"))
    .post((req, res) => res.send("POST INDEX"));
module.exports = router;

