require("../../config");

const { Router } = require("express");
const express = require("express");

Router.get("/", (req, res) => {
  res.send("Route");
});

module.exports = router;
