// routes/index.js and users.js
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (_, res) =>
  res.send(
    "Dockerize and deploy Node.js applications using GitHub Actions and Packages"
  )
);

export default router;
