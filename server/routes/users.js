// routes/index.js and users.js
import express from "express";

var router = express.Router();

router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

export default router;
