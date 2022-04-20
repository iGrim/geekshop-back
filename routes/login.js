const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/login.html"))
    .post((req, res) => res.send("POST LOGIN"));
module.exports = router;