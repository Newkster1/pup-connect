const express = require("express");
const router = express.Router();

//GET api/pups
//Test route
//public
router.get("/", (req, res) => res.send("Pups Route"));

module.exports = router;
