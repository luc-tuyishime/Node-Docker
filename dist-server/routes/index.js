"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// routes/index.js and users.js
var router = _express["default"].Router();
/* GET home page. */


router.get("/", function (_, res) {
  return res.send("Dockerize and deploy Node.js applications using GitHub Actions and Packages");
});
var _default = router;
exports["default"] = _default;